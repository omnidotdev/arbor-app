import { accountUrl } from "@omnidotdev/providers/react";
import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from "@omnidotdev/thornberry/avatar";
import { LogoLockup } from "@omnidotdev/thornberry/logo-lockup";
import {
  MenuContent,
  MenuItem,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from "@omnidotdev/thornberry/menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from "@omnidotdev/thornberry/sidebar";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Bot,
  Boxes,
  ChevronsUpDown,
  ExternalLink,
  GitBranch,
  KeyRound,
  LogOut,
  Moon,
  Network,
  Sun,
} from "lucide-react";
import { useEffect } from "react";

import WorkspaceSwitcher from "@/components/layout/WorkspaceSwitcher";
import signOut from "@/lib/auth/signOut";
import app from "@/lib/config/app.config";
import { ACCOUNT_URL } from "@/lib/config/env.config";
import { useTheme } from "@/providers/ThemeProvider";

import type { ComponentProps } from "react";

const primaryNav = [
  { to: "/repositories", label: "Repositories", icon: GitBranch },
  { to: "/projects", label: "Projects", icon: Boxes },
  { to: "/graph", label: "Graph", icon: Network },
] as const;

interface Props extends ComponentProps<typeof Sidebar> {
  user?: {
    name?: string;
    email: string;
    image?: string;
  };
}

const AppSidebar = ({ user, ...rest }: Props) => {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const displayName = user?.name || user?.email || "Account";
  const initial = displayName.trim().charAt(0).toUpperCase() || "?";

  // On mobile the sheet trigger sits at the top right, so open the sidebar from
  // the right to match; keep it on the left on desktop
  const { isMobile, setOpenMobile } = useSidebar();
  const { theme, setTheme } = useTheme();

  // Close the mobile sidebar on any route change, however it was triggered (a
  // nav link, the workspace switcher, a breadcrumb, or a programmatic navigate),
  // not only the links that call closeOnMobileNav below. `pathname` is the
  // trigger, deliberately not read in the body.
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname is a route-change trigger, not a value the effect reads
  useEffect(() => {
    if (isMobile) setOpenMobile(false);
  }, [pathname, isMobile, setOpenMobile]);

  const closeOnMobileNav = () => {
    if (isMobile) setOpenMobile(false);
  };

  return (
    <Sidebar collapsible="icon" side={isMobile ? "right" : "left"} {...rest}>
      <SidebarHeader className="gap-2">
        <div className="flex items-center gap-2 px-1 py-1">
          <LogoLockup
            logo={<img src="/logo.png" alt="" className="size-5 shrink-0" />}
            name={app.name}
            nameClassName="font-bold tracking-tight group-data-[collapsible=icon]:hidden"
          />

          {/* Closed-beta surface marker (access-gated-features rule) */}
          <span className="rounded-full bg-muted px-2 py-0.5 font-medium text-muted-foreground text-xs group-data-[collapsible=icon]:hidden">
            Beta
          </span>
        </div>

        <div className="group-data-[collapsible=icon]:hidden">
          <WorkspaceSwitcher />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {primaryNav.map((item) => {
              const isActive = pathname.startsWith(item.to);
              const Icon = item.icon;

              return (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    tooltip={item.label}
                  >
                    <Link to={item.to} onClick={closeOnMobileNav}>
                      <Icon className="size-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="gap-2">
        <SidebarSeparator className="group-data-[collapsible=icon]:hidden" />

        {/* Account menu: the user row opens a dropdown that nests settings,
            manage-account, theme, and sign out, matching the other Omni apps */}
        <SidebarMenu>
          <SidebarMenuItem>
            <MenuRoot positioning={{ placement: "top-start" }}>
              <MenuTrigger asChild>
                <SidebarMenuButton
                  tooltip={displayName}
                  className="data-[state=open]:bg-sidebar-accent"
                >
                  <AvatarRoot size="sm" className="shrink-0 rounded-lg">
                    {user?.image ? (
                      <AvatarImage src={user.image} alt="" />
                    ) : null}
                    <AvatarFallback className="rounded-lg bg-sidebar-accent font-semibold text-sidebar-accent-foreground text-xs">
                      {initial}
                    </AvatarFallback>
                  </AvatarRoot>
                  <span className="min-w-0 flex-1 truncate text-left text-sm">
                    {displayName}
                  </span>
                  <ChevronsUpDown className="ml-auto size-4 shrink-0 text-muted-foreground" />
                </SidebarMenuButton>
              </MenuTrigger>

              <MenuPositioner>
                <MenuContent className="w-56 rounded-lg">
                  <MenuItem asChild value="agents" onClick={closeOnMobileNav}>
                    <Link to="/settings/agents">
                      <Bot className="size-4" />
                      <span>Agents</span>
                    </Link>
                  </MenuItem>
                  <MenuItem asChild value="tokens" onClick={closeOnMobileNav}>
                    <Link to="/settings/tokens">
                      <KeyRound className="size-4" />
                      <span>Personal access tokens</span>
                    </Link>
                  </MenuItem>

                  {ACCOUNT_URL && (
                    <MenuItem asChild value="manage-account">
                      <a
                        href={accountUrl(ACCOUNT_URL)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="size-4" />
                        <span>Manage account</span>
                      </a>
                    </MenuItem>
                  )}

                  <MenuSeparator />

                  <MenuItem
                    value="theme"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    {theme === "dark" ? (
                      <Sun className="size-4" />
                    ) : (
                      <Moon className="size-4" />
                    )}
                    <span>Toggle theme</span>
                  </MenuItem>

                  <MenuItem
                    value="signout"
                    variant="destructive"
                    onClick={() => signOut()}
                  >
                    <LogOut className="size-4" />
                    <span>Sign out</span>
                  </MenuItem>
                </MenuContent>
              </MenuPositioner>
            </MenuRoot>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
