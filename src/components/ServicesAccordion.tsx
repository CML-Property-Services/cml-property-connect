import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Hammer, Droplets, Paintbrush, Grid2X2, Bug, Wrench, Phone, Mail } from "lucide-react";

const services = [
  {
    id: "carpentry",
    icon: Hammer,
    title: "Carpentry",
    description: "All aspects of carpentry, including kitchens, doors, floors, sheds and more. Our skilled carpenters deliver bespoke solutions tailored to your needs with precision and care.",
  },
  {
    id: "plumbing",
    icon: Droplets,
    title: "Plumbing",
    description: "All aspects of plumbing, excluding gas works. Bathroom installs, tap replacement (indoor and outdoor), unblocking toilets and baths. 24/7 callout on all drainage issues with no callout fee.",
  },
  {
    id: "painting",
    icon: Paintbrush,
    title: "Painting & Decorating",
    description: "All aspects of painting and decorating. Transform your space with professional finishes, from feature walls to complete room makeovers. Quality paints and materials used.",
  },
  {
    id: "flooring",
    icon: Grid2X2,
    title: "Flooring",
    description: "Expert installation of vinyl, laminate, and herringbone flooring. We ensure precision fitting and beautiful results every time. Free estimates available.",
  },
  {
    id: "mould",
    icon: Bug,
    title: "Mould Treatment",
    description: "Professional mould washes and treatment services. Protect your property and health with our thorough mould remediation solutions. Preventative advice included.",
  },
  {
    id: "handyman",
    icon: Wrench,
    title: "Handyman",
    description: "All minor works covered. From hanging pictures to assembling furniture, no job is too small for our versatile handyman service. Hourly rates available.",
  },
];

const ServicesAccordion = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section id="pricing" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional property services for all your needs. Click each service for full details.
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
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <p className="text-muted-foreground leading-relaxed pl-16 mb-4">
                      {service.description}
                    </p>
                    <div className="pl-16">
                      <button
                        onClick={() => setDialogOpen(true)}
                        className="btn-brand inline-flex items-center gap-2"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-center">Get in Touch</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <a
              href="tel:+447521406071"
              className="flex items-center gap-4 p-4 rounded-xl bg-primary/20 hover:bg-primary/30 transition-colors"
            >
              <div className="p-3 rounded-full bg-primary/50">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Call Us</p>
                <p className="text-muted-foreground">07521 406071</p>
              </div>
            </a>
            <a
              href="mailto:Kieran.bangs@outlook.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-primary/20 hover:bg-primary/30 transition-colors"
            >
              <div className="p-3 rounded-full bg-primary/50">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Email Us</p>
                <p className="text-muted-foreground">Kieran.bangs@outlook.com</p>
              </div>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesAccordion;
