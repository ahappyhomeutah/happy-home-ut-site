import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, MapPin, Heart } from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-hero">
      {/* decorative blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-20 w-[28rem] h-[28rem] bg-brand-deep/20 rounded-full blur-3xl" />

      <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-white animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-sm font-medium mb-6">
            <Heart className="w-4 h-4 fill-white" />
            Utah DSPD Residential Provider
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
            A safe, happy home for adults with disabilities.
          </h1>

          <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-xl mb-8">
            Person-centered residential support in Utah, built around dignity,
            comfort, daily routines, community access, and real relationships.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Button asChild variant="onBrand" size="xl">
              <a href="#contact">Contact Us <ArrowRight className="w-5 h-5 ml-1" /></a>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <a href="#contact">Make a Referral</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/90">
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> DSPD Residential Support</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Utah-Based Provider</span>
            <span className="flex items-center gap-2"><Heart className="w-4 h-4" /> Person-Centered Care</span>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: '150ms' }}>
          <div className="absolute inset-0 bg-white/20 rounded-[2rem] blur-2xl" />
          <img
            src={heroImg}
            alt="Warm and welcoming living room of A Happy Home"
            width={1280}
            height={960}
            className="relative rounded-[2rem] shadow-glow w-full h-auto object-cover border-4 border-white/40"
          />
          <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl shadow-card p-4 flex items-center gap-3 max-w-[240px] hidden sm:flex">
            <div className="w-12 h-12 rounded-full bg-brand-soft flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6 text-brand-deep fill-brand-deep" />
            </div>
            <div>
              <div className="font-display font-bold text-brand-ink text-sm">Care that feels like home</div>
              <div className="text-xs text-muted-foreground">Not an institution</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
