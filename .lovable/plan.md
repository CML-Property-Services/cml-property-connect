

## Update Customer Reviews

### What will change
Replace the existing placeholder reviews with the two real customer testimonials you've provided:

1. **Rebecca Marshall** from Milton Keynes - Internal doors replacement review
2. **Aaron Gallagher** from Dunstable - Drain unblocking and toilet repair review

Both will display with 5-star ratings in the house-shaped cards, with Rebecca's review on the left and Aaron's on the right.

### Technical details
**File:** `src/components/Reviews.tsx`

Replace the `reviews` array (lines 3-32) with:
```javascript
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
```

