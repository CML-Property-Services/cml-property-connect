import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import carpentryImg from "@/assets/carpentry.jpg";
import plumbingImg from "@/assets/plumbing.jpg";
import paintingImg from "@/assets/painting.jpg";
import flooringImg from "@/assets/flooring.jpg";
import mouldImg from "@/assets/mould.jpg";
import handymanImg from "@/assets/handyman.jpg";

const services = [
  {
    id: 1,
    title: "Carpentry",
    description: "All aspects of carpentry, including kitchens, doors, floors, sheds and more. Our skilled carpenters deliver bespoke solutions tailored to your needs.",
    price: "From £150",
    image: carpentryImg,
  },
  {
    id: 2,
    title: "Plumbing",
    description: "All aspects of plumbing, excluding gas works. Bathroom installs, tap replacement (indoor and outdoor), unblocking toilets and baths. 24/7 callout on all drainage issues with no callout fee.",
    price: "From £75",
    image: plumbingImg,
  },
  {
    id: 3,
    title: "Painting & Decorating",
    description: "All aspects of painting and decorating. Transform your space with professional finishes, from feature walls to complete room makeovers.",
    price: "From £200",
    image: paintingImg,
  },
  {
    id: 4,
    title: "Flooring",
    description: "Expert installation of vinyl, laminate, and herringbone flooring. We ensure precision fitting and beautiful results every time.",
    price: "From £250",
    image: flooringImg,
  },
  {
    id: 5,
    title: "Mould Treatment",
    description: "Professional mould washes and treatment services. Protect your property and health with our thorough mould remediation solutions.",
    price: "From £100",
    image: mouldImg,
  },
  {
    id: 6,
    title: "Handyman",
    description: "All minor works covered. From hanging pictures to assembling furniture, no job is too small for our versatile handyman service.",
    price: "From £50",
    image: handymanImg,
  },
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const currentService = services[currentIndex];
  const isEven = currentIndex % 2 === 0;

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quality workmanship across all trades. Browse our services below.
          </p>
        </div>

        <div className="card-brand overflow-hidden">
          <div className={`grid md:grid-cols-2 gap-0 ${isEven ? "" : "md:[direction:rtl]"}`}>
            {/* Image */}
            <div className="relative h-64 md:h-96 overflow-hidden md:[direction:ltr]">
              <img
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center md:[direction:ltr]">
              <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                {currentService.price}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                {currentService.title}
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {currentService.description}
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={goToPrevious}
            className="p-3 rounded-full bg-secondary text-secondary-foreground hover:opacity-90 transition-all"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-secondary w-8"
                    : "bg-muted hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="p-3 rounded-full bg-secondary text-secondary-foreground hover:opacity-90 transition-all"
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
