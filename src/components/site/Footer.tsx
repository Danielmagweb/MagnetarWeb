import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <Logo />
        <a
          href="mailto:daniel@magnetarweb.com"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          daniel@magnetarweb.com
        </a>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} MagnetarWeb. All rights reserved.
        </p>
      </div>
    </footer>
  );
}