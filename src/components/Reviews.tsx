import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Manchester",
    review: "Excellent carpentry work on our new kitchen. The team was professional, tidy, and the finish is outstanding. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "James T.",
    location: "Stockport",
    review: "Called for an emergency plumbing issue and they were here within the hour. Fair pricing and great communication throughout.",
    rating: 5,
  },
  {
    id: 3,
    name: "Linda K.",
    location: "Salford",
    review: "Beautiful flooring installation. They took care of everything and left our home spotless. Will definitely use again.",
    rating: 5,
  },
  {
    id: 4,
    name: "David R.",
    location: "Bolton",
    review: "Fantastic painting and decorating service. Attention to detail was impressive and the rooms look brand new.",
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
