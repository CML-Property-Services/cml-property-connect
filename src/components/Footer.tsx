import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="CML Property Services" className="h-16 w-auto mb-4 brightness-110" />
            <p className="text-sm opacity-80 leading-relaxed">
              Your trusted partner for professional property maintenance services across all trades.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Services", "Pricing", "T&Cs"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace("&", "").replace(" ", "")}`}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Carpentry", "Plumbing", "Painting", "Flooring", "Mould Treatment", "Handyman"].map((service) => (
                <li key={service}>
                  <a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+447521406071" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                  <Phone className="w-4 h-4" />
                  07521 406071
                </a>
              </li>
              <li>
                <a href="mailto:Kieran.bangs@outlook.com" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                  <Mail className="w-4 h-4" />
                  Kieran.bangs@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-2 opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Serving all areas across the UK</span>
              </li>
            </ul>
          </div>

          {/* Opening Times */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Opening Times</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between gap-6 opacity-80"><span>Mon</span><span>9:00 - 17:00</span></li>
              <li className="flex justify-between gap-6 opacity-80"><span>Tue</span><span>9:00 - 17:00</span></li>
              <li className="flex justify-between gap-6 opacity-80"><span>Wed</span><span>9:00 - 17:00</span></li>
              <li className="flex justify-between gap-6 opacity-80"><span>Thu</span><span>9:00 - 17:00</span></li>
              <li className="flex justify-between gap-6 opacity-80"><span>Fri</span><span>9:00 - 17:00</span></li>
              <li className="flex justify-between gap-6 opacity-80"><span>Sat</span><span>Closed</span></li>
              <li className="flex justify-between gap-6 opacity-80"><span>Sun</span><span>Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-10 pt-8 text-center text-sm opacity-70">
          <p>© {currentYear} CML Property Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
