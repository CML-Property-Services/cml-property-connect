
# Reviews Section Implementation Plan

## Overview
Create a new "Reviews" section below Service Pricing featuring customer testimonials displayed inside house-shaped cards that alternate left-to-right across the screen.

## Design Approach

### Visual Layout
```text
    [House Review]                    
                          [House Review]
    [House Review]
                          [House Review]
```

### House Shape Design
Each review will be contained within a house silhouette created using CSS:
- A triangular roof (using CSS borders or clip-path)
- A rectangular body containing the review content
- Consistent with the brand's warm cream/peach color palette

## Technical Implementation

### 1. Create New Component
**File:** `src/components/Reviews.tsx`

**Structure:**
- Section header matching Service Pricing style:
  - Title: "Customer Reviews" with `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black`
  - Subtitle in `text-muted-foreground text-lg`
- Container with max-width for review cards
- Map through reviews array with alternating `justify-start` / `justify-end` based on index

**House Card Design:**
- CSS clip-path or pseudo-elements to create house shape
- Background using `bg-card` or `bg-primary/30`
- Border matching existing `card-brand` styling
- Review content: customer name, review text, optional star rating

### 2. Sample Reviews Data
```javascript
const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Manchester",
    review: "Excellent carpentry work on our new kitchen...",
    rating: 5
  },
  // ... more reviews
]
```

### 3. Update Index.tsx
Import and add `<Reviews />` component after `<ServicesAccordion />`

### 4. Styling Details
- House roof: CSS triangle using `clip-path: polygon(50% 0%, 0% 100%, 100% 100%)`
- House body: Rounded bottom corners matching brand (`rounded-b-2xl`)
- Responsive: Stack centered on mobile, alternating on tablet/desktop
- Colors: `bg-primary/20` for roof, `bg-card` for body
- Text: `font-serif` for names, `text-muted-foreground` for review text

## Files to Create/Modify
1. **Create:** `src/components/Reviews.tsx` - New reviews component
2. **Modify:** `src/pages/Index.tsx` - Import and add Reviews component

## Mobile Optimization
- Reviews stack vertically and center on small screens
- Alternating layout only applies on `md:` breakpoint and above
- Text sizes scale responsively like Service Pricing section
