import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
import Footer from "@/components/site/Footer";

const Accessibility = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Accessibility Statement | A Happy Home";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <a href="#statement" className="skip-link">Skip to main content</a>

      <header className="border-b border-border bg-white">
        <div className="container flex h-16 sm:h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
            <img
              src={logo}
              alt="A Happy Home logo"
              width={96}
              height={96}
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain shrink-0"
            />
            <span className="font-display font-bold text-base sm:text-lg text-brand-ink truncate">
              A Happy Home
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-deep hover:underline"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to home
          </Link>
        </div>
      </header>

      <main id="statement" className="flex-1">
        <div className="container max-w-3xl py-14 lg:py-20">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-ink mb-4">
            Accessibility Statement
          </h1>
          <p className="text-sm text-muted-foreground mb-10">Last reviewed: October 27, 2026</p>

          <div className="space-y-8 text-foreground leading-relaxed">
            <section>
              <h2 className="font-display font-bold text-xl text-brand-ink mb-2">Our commitment</h2>
              <p>
                A Happy Home is committed to making our website usable for everyone,
                including people with disabilities. Accessibility is part of who we are:
                we support adults with disabilities every day, and we want our website to
                reflect that same care.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-brand-ink mb-2">Conformance standard</h2>
              <p>
                We aim to conform to the{" "}
                <a
                  href="https://www.w3.org/TR/WCAG21/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-deep underline hover:no-underline"
                >
                  Web Content Accessibility Guidelines (WCAG) 2.1, Level AA
                </a>
                . These guidelines explain how to make web content more accessible to
                people with a wide range of disabilities, including visual, auditory,
                physical, speech, cognitive, and neurological disabilities.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-brand-ink mb-2">What we have done</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Ensured text and interactive elements meet WCAG AA color-contrast ratios.</li>
                <li>Added a "skip to main content" link and clear, visible keyboard focus.</li>
                <li>Labeled every form field and show clear, in-line error messages.</li>
                <li>Provided descriptive alternative text for meaningful images.</li>
                <li>Used proper headings and landmark regions so the page is easy to navigate with a screen reader.</li>
                <li>Honored the operating-system "reduce motion" setting for people sensitive to animation.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-brand-ink mb-2">Known limitations</h2>
              <p>
                Despite our efforts, some content may not yet be fully accessible. We review
                the site periodically and fix issues as we find them. If you encounter a
                barrier that is not listed here, please tell us so we can address it.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-brand-ink mb-2">Tell us about a problem</h2>
              <p className="mb-4">
                If you have trouble using any part of this website, or you need information
                in a different format, we want to help. Contact us and we will work with you
                directly:
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="tel:+18016997228" className="inline-flex items-center gap-2 text-brand-deep underline hover:no-underline">
                    <Phone className="w-4 h-4" aria-hidden="true" /> Call or text 801-699-7228
                  </a>
                </li>
                <li>
                  <a href="mailto:Jack@ahappyhomeutah.com" className="inline-flex items-center gap-2 text-brand-deep underline hover:no-underline">
                    <Mail className="w-4 h-4" aria-hidden="true" /> Jack@ahappyhomeutah.com
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                We aim to respond within one business day.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Accessibility;
