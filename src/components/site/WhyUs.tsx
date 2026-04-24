import { Sparkles, Clock, UserCheck, Sparkle, ShieldCheck, MessageSquareHeart } from "lucide-react";

const points = [
  { icon: Sparkles, title: "Warm home environment", desc: "Comfortable spaces that feel like home, not a facility." },
  { icon: Clock, title: "Consistent routines", desc: "Predictable days that bring comfort and confidence." },
  { icon: UserCheck, title: "Individualized plans", desc: "Goals and supports built around each person." },
  { icon: MessageSquareHeart, title: "Respectful staff", desc: "A team that listens, celebrates, and shows up." },
  { icon: Sparkle, title: "Clean, comfortable homes", desc: "Tidy, well-kept spaces residents are proud of." },
  { icon: ShieldCheck, title: "Safety & compliance", desc: "Care that meets DSPD/DHHS expectations." },
];

const WhyUs = () => {
  return (
    <section id="why" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-soft text-brand-deep text-sm font-semibold mb-4">
              Why A Happy Home
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-ink mb-5 leading-tight">
              Care that feels personal, not institutional.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We believe a great home isn't measured in checklists. It's measured in
              comfort, trust, and the everyday moments that make someone feel truly
              at home.
            </p>
            <div className="bg-gradient-hero rounded-3xl p-6 text-white shadow-card">
              <p className="font-display text-lg leading-snug">
                "Our goal is simple — every resident should feel safe, respected, and genuinely happy where they live."
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {points.map((p) => (
              <div
                key={p.title}
                className="bg-gradient-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-soft flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-brand-deep" />
                </div>
                <h3 className="font-display font-bold text-brand-ink mb-1.5">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
