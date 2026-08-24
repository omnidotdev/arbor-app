import { NotFoundPage } from "@omnidotdev/thornberry/not-found";
import { TreePine } from "lucide-react";

import app from "@/lib/config/app.config";

/**
 * 404 not found. Renders the shared Omni `<NotFoundPage>` (in-shell,
 * theme-aware, prominent "404"), branded with Arbor's wordmark and header
 * logomark. Home points at the app root.
 */
const NotFound = () => (
  <NotFoundPage appName={app.name} appLogo={<TreePine className="h-6 w-6" />} />
);

export default NotFound;
