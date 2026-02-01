import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const terms = [
  {
    id: "quotes",
    title: "Quotations & Estimates",
    content: "All quotations are valid for 30 days from the date of issue. Estimates are provided based on the information available at the time and may be subject to change upon full inspection. Final pricing will be confirmed before any work commences.",
  },
  {
    id: "payment",
    title: "Payment Terms",
    content: "Payment is due upon completion of work unless otherwise agreed in writing. For larger projects, a deposit of up to 25% may be required before work begins. We accept bank transfer, cash, and card payments.",
  },
  {
    id: "cancellation",
    title: "Cancellation Policy",
    content: "Cancellations must be made at least 48 hours before the scheduled appointment. Late cancellations or no-shows may incur a cancellation fee of up to £50. Emergency callouts are non-refundable once a tradesperson has been dispatched.",
  },
  {
    id: "warranty",
    title: "Workmanship Guarantee",
    content: "All work carried out by CML Property Services is guaranteed for 12 months from the date of completion. This guarantee covers defects in workmanship but does not cover damage caused by misuse, wear and tear, or third-party interference.",
  },
  {
    id: "liability",
    title: "Liability & Insurance",
    content: "CML Property Services holds comprehensive public liability insurance. We are not liable for pre-existing damage, hidden defects, or issues arising from customer-supplied materials. Any claims must be reported within 7 days of completion.",
  },
  {
    id: "access",
    title: "Site Access & Preparation",
    content: "The customer is responsible for providing clear access to the work area. If access is restricted or the work area is not prepared as agreed, additional charges may apply. We will advise if any preparation is required before our visit.",
  },
  {
    id: "materials",
    title: "Materials & Suppliers",
    content: "Unless otherwise agreed, CML Property Services will source all materials. Customer-supplied materials must be fit for purpose; we cannot guarantee work completed with unsuitable materials. Any unused materials remain the property of CML Property Services.",
  },
  {
    id: "emergencies",
    title: "Emergency Callouts",
    content: "Our 24/7 drainage emergency service operates with no callout fee. For other emergency services outside standard hours (Mon-Fri 8am-6pm), an out-of-hours rate may apply. Emergency availability is subject to tradesperson capacity.",
  },
];

const Terms = () => {
  return (
    <section id="terms" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms & Conditions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Please review our terms of service. Contact us if you have any questions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {terms.map((term) => (
              <AccordionItem
                key={term.id}
                value={term.id}
                className="border border-border rounded-xl px-4 sm:px-6 bg-card"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <span className="font-semibold text-foreground text-left">
                    {term.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {term.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Terms;
