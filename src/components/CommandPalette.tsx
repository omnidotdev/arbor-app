import { CommandPalette as CommandPaletteShell } from "@omnidotdev/thornberry/command-palette";
import {
  GLOBAL_HOTKEYS,
  hotkeyLabel,
  useHotkeys,
} from "@omnidotdev/thornberry/use-hotkeys";
import { useNavigate } from "@tanstack/react-router";
import {
  Bot,
  Boxes,
  CreditCard,
  GitBranch,
  HomeIcon,
  KeyRound,
  LayoutDashboard,
  MoonStar,
  Network,
} from "lucide-react";

import { useTheme } from "@/providers/ThemeProvider";

import type { CommandAction } from "@omnidotdev/thornberry/command-palette";

/**
 * Global command palette (⌘/Ctrl+K). Mounted once at the app root so it works on
 * every route. Exposes top-level navigation and the theme toggle. Built on the
 * shared Thornberry palette so every Omni app shares the same behavior; this
 * wrapper only supplies Arbor's own actions. The shell owns the open state and
 * the mod+k hotkey, so no local open state is needed here.
 */
const CommandPalette = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // App-wide theme shortcut. react-hotkeys-hook ignores form fields by default,
  // so this never fires while typing in the palette input or any other field
  useHotkeys(GLOBAL_HOTKEYS.toggleTheme, toggleTheme);

  const commands: CommandAction[] = [
    {
      id: "home",
      label: "Home",
      group: "Navigation",
      icon: HomeIcon,
      onSelect: () => navigate({ to: "/" }),
    },
    {
      id: "pricing",
      label: "Pricing",
      group: "Navigation",
      icon: CreditCard,
      onSelect: () => navigate({ to: "/pricing" }),
    },
    {
      id: "repositories",
      label: "Repositories",
      group: "Navigation",
      icon: GitBranch,
      onSelect: () => navigate({ to: "/repositories" }),
    },
    {
      id: "projects",
      label: "Projects",
      group: "Navigation",
      icon: Boxes,
      onSelect: () => navigate({ to: "/projects" }),
    },
    {
      id: "graph",
      label: "Graph",
      group: "Navigation",
      icon: Network,
      keywords: ["dependencies"],
      onSelect: () => navigate({ to: "/graph" }),
    },
    {
      id: "workspaces",
      label: "Workspaces",
      group: "Navigation",
      icon: LayoutDashboard,
      onSelect: () => navigate({ to: "/workspaces" }),
    },
    {
      id: "settings-tokens",
      label: "API Tokens",
      group: "Navigation",
      icon: KeyRound,
      keywords: ["settings", "keys"],
      onSelect: () => navigate({ to: "/settings/tokens" }),
    },
    {
      id: "settings-agents",
      label: "Agents",
      group: "Navigation",
      icon: Bot,
      keywords: ["settings"],
      onSelect: () => navigate({ to: "/settings/agents" }),
    },
    {
      id: "toggle-theme",
      label:
        theme === "light" ? "Switch to dark theme" : "Switch to light theme",
      group: "Preferences",
      icon: MoonStar,
      keywords: ["theme", "dark", "light", "appearance"],
      shortcut: hotkeyLabel(GLOBAL_HOTKEYS.toggleTheme),
      onSelect: toggleTheme,
    },
  ];

  return (
    <CommandPaletteShell commands={commands} placeholder="Search actions..." />
  );
};

export default CommandPalette;
