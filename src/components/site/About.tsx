import aboutImg from "@/assets/about-home.jpg";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Working alongside guardians, families, and support coordinators",
  "Coordinating with medical providers and DSPD teams",
  "Following Utah DSPD/DHHS requirements",
  "Person-centered planning at the core of every decision",
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 bg-brand/20 rounded-[2rem] blur-2xl" />
          <img
            src={aboutImg}
            alt="Caregiver sharing a joyful moment with a young man in a wheelchair outdoors"
            width={1000}
            height={667}
            loading="lazy"
            className="relative rounded-[2rem] shadow-card w-full h-[28rem] lg:h-[32rem] object-cover object-left lg:-ml-8"
          />
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-soft text-brand-deep text-sm font-semibold mb-4">
            About A Happy Home
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-ink mb-5 leading-tight">
            A Utah provider focused on dignity and belonging.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            A Happy Home was created to help adults with disabilities feel safe,
            respected, and truly included in their community. We do that by
            listening first — to each resident, their family, and their team.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We follow applicable Utah DSPD/DHHS requirements and person-centered
            planning expectations, so families can feel confident every step of
            the way.
          </p>

          <ul className="space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-deep shrink-0 mt-0.5" />
                <span className="text-brand-ink/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
