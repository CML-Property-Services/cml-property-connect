import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cml-cookie-consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cml-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cml-cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-in">
      <div className="container mx-auto">
        <div className="bg-secondary text-secondary-foreground rounded-2xl p-4 sm:p-6 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="w-6 h-6 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">We Value Your Privacy</h3>
                <p className="text-sm opacity-90">
                  We use cookies to enhance your browsing experience and analyse our traffic. 
                  By clicking "Accept", you consent to our use of cookies.
                </p>
              </div>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={declineCookies}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-full border-2 border-secondary-foreground/30 text-sm font-medium hover:bg-secondary-foreground/10 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={acceptCookies}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Accept
              </button>
            </div>
            <button
              onClick={declineCookies}
              className="absolute top-4 right-4 sm:static p-1 hover:opacity-70 transition-opacity"
              aria-label="Close cookie banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
