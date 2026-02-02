

## Change Mould Treatment Icon

### What will change
The mould treatment service icon in the Services Accordion will be updated from the `Bug` icon to `ShieldCheck`, which better represents protection and treatment.

### Technical details
1. **Update import** - Replace `Bug` with `ShieldCheck` in the lucide-react imports
2. **Update service** - Change the icon reference for mould treatment from `Bug` to `ShieldCheck`

### File to modify
- `src/components/ServicesAccordion.tsx` - Lines 5 and 26

