import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rebecca Marshall",
    location: "Milton Keynes",
    review: "Had CML Property Services in to replace all the internal doors at my home. Done a fantastic job, highly recommended.",
    rating: 5,
  },
  {
    id: 2,
    name: "Aaron Gallagher",
    location: "Dunstable",
    review: "CML unblocked our drains and got our toilet back up and running. Here within the hour, very good service and friendly, price was very fair.",
    rating: 5,
  },
];

const HouseCard = ({ review, isRight }: { review: typeof reviews[0]; isRight: boolean }) => {
  return (
    <div className={`flex w-full ${isRight ? "md:justify-end" : "md:justify-start"} justify-center`}>
      <div className="w-full max-w-md">
        {/* Roof */}
        <div 
          className="w-full h-16 sm:h-20 bg-primary/40"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
        {/* House Body */}
        <div className="bg-card border border-border/50 rounded-b-2xl p-5 sm:p-6 -mt-1 shadow-lg">
          {/* Stars */}
          <div className="flex gap-1 mb-3">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
            ))}
          </div>
          
          {/* Review Text */}
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
            "{review.review}"
          </p>
          
          {/* Customer Info */}
          <div className="border-t border-border/50 pt-3">
            <p className="font-serif font-semibold text-foreground">{review.name}</p>
            <p className="text-muted-foreground text-sm">{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-4">
            Customer Reviews
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10">
          {reviews.map((review, index) => (
            <HouseCard key={review.id} review={review} isRight={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
