import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Users } from "lucide-react";

const Careers = () => {
  return (
    <section id="careers" className="py-20 lg:py-24 bg-gradient-soft">
      <div className="container">
        <div className="bg-gradient-hero rounded-[2rem] p-8 sm:p-12 lg:p-16 text-white shadow-card overflow-hidden relative">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-sm font-semibold mb-4">
                Careers
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4 leading-tight">
                Caring people make happy homes.
              </h2>
              <p className="text-lg text-white/90 leading-relaxed mb-6 max-w-lg">
                If you're warm, dependable, and love supporting others — we want to meet you.
                Join a team that values respect, growth, and showing up for the people we serve.
              </p>
              <Button asChild variant="onBrand" size="xl">
                <a href="#contact">Ask About Open Positions</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Heart, label: "Meaningful work" },
                { icon: Users, label: "Supportive team" },
                { icon: Sparkles, label: "Room to grow" },
              ].map((p) => (
                <div key={p.label} className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl p-5 text-center">
                  <p.icon className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm font-semibold">{p.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
