import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Social = () => {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-soft text-brand-deep text-sm font-semibold mb-4">
            On Instagram
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-ink mb-3">
            Follow life at A Happy Home
          </h2>
          <p className="text-muted-foreground text-lg">
            See little moments from our home — shared with care and consent.
          </p>
        </div>

        <div className="text-center">
          <Button asChild variant="brand" size="lg">
            <a href="https://instagram.com/ahappyhome.ut" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 mr-1" /> @ahappyhome.ut
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Social;
