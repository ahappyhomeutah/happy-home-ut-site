import logo from "@/assets/logo.png";
import { Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-2xl p-1.5">
                <img src={logo} alt="A Happy Home" width={40} height={40} className="h-10 w-10" />
              </div>
              <span className="font-display font-bold text-xl">A Happy Home</span>
            </div>
            <p className="text-white/75 max-w-md leading-relaxed">
              Person-centered residential support for adults with disabilities across Utah.
              A safe, warm, dignified place to call home.
            </p>
          </div>

          <div>
            <div className="font-display font-semibold mb-3">Quick Links</div>
            <ul className="space-y-2 text-white/75 text-sm">
              <li><a href="#services" className="hover:text-white transition-smooth">Services</a></li>
              <li><a href="#why" className="hover:text-white transition-smooth">Why Us</a></li>
              <li><a href="#about" className="hover:text-white transition-smooth">About</a></li>
              <li><a href="#careers" className="hover:text-white transition-smooth">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-smooth">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="font-display font-semibold mb-3">Get in Touch</div>
            <ul className="space-y-2 text-white/75 text-sm">
              <li><a href="tel:+18015550123" className="flex items-center gap-2 hover:text-white"><Phone className="w-4 h-4" /> (801) 555-0123</a></li>
              <li><a href="mailto:hello@ahappyhome.example" className="flex items-center gap-2 hover:text-white"><Mail className="w-4 h-4" /> Email us</a></li>
              <li><a href="https://instagram.com/ahappyhome.ut" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><Instagram className="w-4 h-4" /> @ahappyhome.ut</a></li>
              <li className="pt-2 text-white/60">Service area: Utah</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 grid md:grid-cols-2 gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} A Happy Home. All rights reserved.</p>
          <p className="md:text-right max-w-xl md:ml-auto leading-relaxed">
            Information on this website is general and not a guarantee of eligibility,
            placement, or services. Services depend on individual needs, authorizations,
            and applicable program requirements.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
