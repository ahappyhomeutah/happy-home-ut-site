import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth",
        scrolled
          ? "bg-white shadow-soft border-b border-border"
          : "bg-white border-b border-border/50"
      )}
    >
      <div className="container flex h-16 sm:h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img
            src={logo}
            alt="A Happy Home logo"
            width={96}
            height={96}
            loading="eager"
            decoding="async"
            className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 object-contain shrink-0"
          />
          <span className="font-display font-bold text-base sm:text-lg lg:text-xl text-brand-ink truncate">
            A Happy Home
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-brand-ink/80 hover:text-brand-deep hover:bg-brand-soft transition-smooth"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="ghost" size="sm" className="text-brand-deep hover:bg-brand-soft">
            <a href="tel:+18016997228"><Phone className="w-4 h-4 mr-1.5" /> Call Now</a>
          </Button>
          <Button asChild variant="brand" size="sm">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg text-brand-ink hover:bg-brand-soft transition-smooth"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border shadow-card">
          <nav className="container py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl font-medium text-brand-ink hover:bg-brand-soft transition-smooth"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 mt-3 pt-3 border-t border-border">
              <Button asChild variant="outline" className="flex-1">
                <a href="tel:+18016997228"><Phone className="w-4 h-4 mr-1.5" /> Call</a>
              </Button>
              <Button asChild variant="brand" className="flex-1">
                <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
