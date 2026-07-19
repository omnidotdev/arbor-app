import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from "@omnidotdev/thornberry/avatar";
import { LogoLockup } from "@omnidotdev/thornberry/logo-lockup";
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
  ExternalLink,
  GitBranch,
  KeyRound,
  LogOut,
  Network,
} from "lucide-react";

import { ModeToggle } from "@/components/layout/ModeToggle";
import WorkspaceSwitcher from "@/components/layout/WorkspaceSwitcher";
import signOut from "@/lib/auth/signOut";
import app from "@/lib/config/app.config";
import { CONSOLE_URL } from "@/lib/config/env.config";
import { cn } from "@/lib/utils";

import type { ComponentProps } from "react";

const primaryNav = [
  { to: "/repositories", label: "Repositories", icon: GitBranch },
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

  const closeOnMobileNav = () => {
    if (isMobile) setOpenMobile(false);
  };

  return (
    <Sidebar collapsible="icon" side={isMobile ? "right" : "left"} {...rest}>
      <SidebarHeader className="gap-2">
        <div className="px-1 py-1">
          <LogoLockup
            logo={<img src="/logo.png" alt="" className="size-5 shrink-0" />}
            name={app.name}
            nameClassName="font-bold tracking-tight group-data-[collapsible=icon]:hidden"
          />
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

        <div className="flex items-center gap-2 px-1">
          <AvatarRoot size="sm" className="shrink-0 rounded-lg">
            {user?.image ? <AvatarImage src={user.image} alt="" /> : null}
            <AvatarFallback className="rounded-lg bg-sidebar-accent font-semibold text-sidebar-accent-foreground text-xs">
              {initial}
            </AvatarFallback>
          </AvatarRoot>

          <span className="min-w-0 flex-1 truncate text-sm group-data-[collapsible=icon]:hidden">
            {displayName}
          </span>

          <div className="flex items-center group-data-[collapsible=icon]:hidden">
            <ModeToggle />
          </div>
        </div>

        <SidebarMenu className="group-data-[collapsible=icon]:hidden">
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Personal access tokens">
              <Link to="/settings/tokens" onClick={closeOnMobileNav}>
                <KeyRound className="size-4" />
                <span>Personal access tokens</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {CONSOLE_URL && (
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Manage account">
                <a href={CONSOLE_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="size-4" />
                  <span>Manage account</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}

          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Sign out"
              onClick={() => signOut()}
              className={cn("text-muted-foreground hover:text-foreground")}
            >
              <LogOut className="size-4" />
              <span>Sign out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
