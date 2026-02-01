import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/30 via-background to-accent/20 pt-28 pb-16">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-up">
          <img
            src={logo}
            alt="CML Property Services"
            className="mx-auto w-64 sm:w-80 md:w-96 lg:w-[450px] h-auto mb-8 mix-blend-multiply"
          />
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Professional Property Services
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Your trusted partner for all property maintenance needs. 
            Quality workmanship, reliable service, competitive prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="btn-brand text-lg">
              View Our Services
            </a>
            <a href="tel:+441234567890" className="btn-brand-outline text-lg">
              Call Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
