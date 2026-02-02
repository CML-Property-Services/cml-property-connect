import { useState } from "react";
import { Phone, CheckCircle } from "lucide-react";
import ContactDialog from "@/components/ContactDialog";

const features = [
  "Fully insured and certified tradesmen",
  "24/7 callout for drainage issues – no hidden fees",
  "No job too small",
  "Covering Herts, Beds, Bucks and surrounding counties",
];

const About = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <section id="about" className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Us
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                CML Property Services is your one-stop solution for all property maintenance 
                and improvement needs. With years of experience across multiple trades, 
                we deliver exceptional quality and reliability on every project.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                From small repairs to complete renovations, our skilled team handles 
                carpentry, plumbing, painting, flooring, mould treatment and general 
                handyman tasks with professionalism and care. There's no job too small.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We also offer 24/7 callout for drainage issues, such as blocked toilets, 
                drains, and gullies. No hidden callout fees. Based in Dunstable, Bedfordshire, 
                we cover Herts, Beds, Bucks, and surrounding counties.
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-12">
              <div className="bg-background/90 backdrop-blur rounded-2xl p-6 md:p-8 text-center">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contact us today for a free, no-obligation quote on your project.
                </p>
                <button
                  onClick={() => setContactOpen(true)}
                  className="btn-brand w-full flex items-center justify-center gap-2 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

export default About;
