import { Button } from "@/components/ui/button";


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

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-110" />
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/30 shadow-glow bg-white/10 backdrop-blur-sm">
                  <img
                    src="/placeholder.svg"
                    alt="Join our team"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
