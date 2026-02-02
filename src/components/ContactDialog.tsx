import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Phone, Mail } from "lucide-react";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
            href="mailto:Enquiries@cmlpropertyservices.co.uk"
            className="flex items-center gap-4 p-4 rounded-xl bg-primary/20 hover:bg-primary/30 transition-colors"
          >
            <div className="p-3 rounded-full bg-primary/50">
              <Mail className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Email Us</p>
              <p className="text-muted-foreground">Enquiries@cmlpropertyservices.co.uk</p>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
