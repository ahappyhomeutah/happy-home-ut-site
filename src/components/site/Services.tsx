import { Home, Sun, Pill, Users, Wallet, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Habilitation",
    desc: "Group home support that helps each person live as independently as possible in a warm, safe home environment.",
  },
  {
    icon: Sun,
    title: "Day Program ",
    desc: "Outings, hobbies, friendships, and skill-building so each person stays connected to the wider community.",
  },
  {
    icon: Pill,
    title: "Medication & Health Support",
    desc: "Medication assistance and coordination of health appointments alongside families, doctors, and care teams.",
  },
  {
    icon: Users,
    title: "Community Access & Skills",
    desc: "Consistent morning and evening routines, meals, hygiene, household tasks, and the small things that make a day feel good.",
  },
  {
    icon: Wallet,
    title: "Budget Coordination",
    desc: "Support with budgeting and coordination when authorized — always transparent and aligned with the team.",
  },
  {
    icon: MessageCircle,
    title: "Family & Guardian Updates",
    desc: "Open, respectful communication with guardians, support coordinators, and everyone on the care team.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-soft text-brand-deep text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-ink mb-4">
            Supportive services, delivered with heart
          </h2>
          <p className="text-lg text-muted-foreground">
            Every service is shaped around the person — their preferences, their goals, and their pace.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group bg-gradient-card rounded-3xl p-7 shadow-soft hover:shadow-card border border-border hover:border-brand/40 transition-smooth"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-soft flex items-center justify-center mb-5 group-hover:bg-brand group-hover:scale-110 transition-smooth">
                <s.icon className="w-7 h-7 text-brand-deep group-hover:text-white transition-smooth" />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-ink mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
