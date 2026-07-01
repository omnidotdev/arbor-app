import app from "@/lib/config/app.config";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-muted-foreground text-sm sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {app.organization.name}
        </p>
        <nav className="flex items-center gap-4">
          <a
            href={app.legal.privacy}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Privacy
          </a>
          <a
            href={app.legal.terms}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Terms
          </a>
          <a
            href={app.legal.cookies}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Cookies
          </a>
        </nav>
      </div>
    </footer>
  );
}
