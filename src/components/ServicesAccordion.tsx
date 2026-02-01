import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Hammer, Droplets, Paintbrush, Grid2X2, Bug, Wrench } from "lucide-react";

const services = [
  {
    id: "carpentry",
    icon: Hammer,
    title: "Carpentry",
    price: "From £150",
    description: "All aspects of carpentry, including kitchens, doors, floors, sheds and more. Our skilled carpenters deliver bespoke solutions tailored to your needs with precision and care.",
  },
  {
    id: "plumbing",
    icon: Droplets,
    title: "Plumbing",
    price: "From £75",
    description: "All aspects of plumbing, excluding gas works. Bathroom installs, tap replacement (indoor and outdoor), unblocking toilets and baths. 24/7 callout on all drainage issues with no callout fee.",
  },
  {
    id: "painting",
    icon: Paintbrush,
    title: "Painting & Decorating",
    price: "From £200",
    description: "All aspects of painting and decorating. Transform your space with professional finishes, from feature walls to complete room makeovers. Quality paints and materials used.",
  },
  {
    id: "flooring",
    icon: Grid2X2,
    title: "Flooring",
    price: "From £250",
    description: "Expert installation of vinyl, laminate, and herringbone flooring. We ensure precision fitting and beautiful results every time. Free estimates available.",
  },
  {
    id: "mould",
    icon: Bug,
    title: "Mould Treatment",
    price: "From £100",
    description: "Professional mould washes and treatment services. Protect your property and health with our thorough mould remediation solutions. Preventative advice included.",
  },
  {
    id: "handyman",
    icon: Wrench,
    title: "Handyman",
    price: "From £50",
    description: "All minor works covered. From hanging pictures to assembling furniture, no job is too small for our versatile handyman service. Hourly rates available.",
  },
];

const ServicesAccordion = () => {
  return (
    <section id="pricing" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-4">
            Service Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transparent pricing with no hidden costs. Click each service for full details.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <AccordionItem
                  key={service.id}
                  value={service.id}
                  className="card-brand border-none px-4 sm:px-6"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="p-3 rounded-xl bg-primary/50">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-lg sm:text-2xl md:text-3xl font-bold text-foreground">
                          {service.title}
                        </h3>
                        <span className="text-secondary font-semibold text-sm sm:text-base md:text-lg">
                          {service.price}
                        </span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <p className="text-muted-foreground leading-relaxed pl-16">
                      {service.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServicesAccordion;
