import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import ownerImg from "@/assets/owner.jpg";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  role: z.string().min(1, "Please select your role"),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email").max(255),
  about: z.string().trim().max(200).optional().or(z.literal("")),
  services: z.string().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Please add a short message").max(1000),
});

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [form, setForm] = useState({
    name: "", role: "", phone: "", email: "", about: "", services: "", message: "",
  });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Please check your form",
        description: result.error.issues[0]?.message ?? "Some fields need attention.",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c7751474-3444-4025-ae9b-5624aa6ebb6e",
          subject: `New website inquiry from ${form.name}`,
          from_name: "A Happy Home Website",
          name: form.name,
          role: form.role,
          phone: form.phone,
          email: form.email,
          "who the inquiry is about": form.about,
          "services interested in": form.services,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", role: "", phone: "", email: "", about: "", services: "", message: "" });
        toast({ title: "Message received", description: "Thanks! We'll be in touch soon." });
      } else {
        toast({
          title: "Something went wrong",
          description: "Something went wrong - please call or text 801-699-7228",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Something went wrong - please call or text 801-699-7228",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-soft text-brand-deep text-sm font-semibold mb-4">
            Get in Touch
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-ink mb-4">
            Have a question or referral? We would love to talk.
          </h2>
          <p className="text-lg text-muted-foreground">
            Reach out and a real person will get back to you with care and clarity.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col items-center py-2">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-deep/20 rounded-full blur-2xl scale-110" />
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-background shadow-glow bg-brand-soft">
                  <img
                    src={ownerImg}
                    alt="Jack Johnson, Director of A Happy Home"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 75%" }}
                  />
                </div>
              </div>
              <div className="mt-3 text-center">
                <div className="font-display font-bold text-brand-ink">Jack Johnson</div>
                <div className="text-sm text-muted-foreground">Director</div>
              </div>
            </div>
            <a href="tel:+18016997228" className="block bg-gradient-hero rounded-3xl p-7 text-white shadow-card hover:shadow-glow transition-smooth">
              <Phone className="w-7 h-7 mb-3" />
              <div className="font-display font-bold text-xl mb-1">Call/Text</div>
              <div className="text-white/90">801-699-7228</div>
              <div className="text-sm text-white/75 mt-2">Mon–Fri, 9am – 5pm MT</div>
            </a>
            <a href="mailto:Jack@ahappyhomeutah.com" className="block bg-gradient-card border border-border rounded-3xl p-7 shadow-soft hover:shadow-card transition-smooth">
              <Mail className="w-7 h-7 mb-3 text-brand-deep" />
              <div className="font-display font-bold text-xl text-brand-ink mb-1">Email</div>
              <div className="text-muted-foreground break-all">Jack@ahappyhomeutah.com</div>
              <div className="text-sm text-muted-foreground mt-2">We reply within one business day</div>
            </a>
            <div className="bg-brand-soft rounded-3xl p-7">
              <div className="font-display font-bold text-brand-ink mb-2">Service Area</div>
              <p className="text-sm text-brand-ink/80">Serving individuals and families across Utah through DSPD-supported residential care.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-gradient-card border border-border rounded-3xl p-10 shadow-card text-center min-h-[480px] flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand-soft flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8 text-brand-deep" />
                </div>
                <h3 className="font-display font-bold text-2xl text-brand-ink mb-2">Thank you!</h3>
                <p className="text-muted-foreground max-w-sm">
                  Your message is in our hands. Someone from A Happy Home will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="bg-gradient-card border border-border rounded-3xl p-6 sm:p-8 shadow-card space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Your name *</Label>
                    <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Jane Doe" />
                  </div>
                  <div>
                    <Label htmlFor="role">I am a... *</Label>
                    <Select value={form.role} onValueChange={(v) => update("role", v)}>
                      <SelectTrigger id="role"><SelectValue placeholder="Select role" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="guardian">Guardian / Family member</SelectItem>
                        <SelectItem value="coordinator">Support Coordinator</SelectItem>
                        <SelectItem value="case-manager">Case Manager</SelectItem>
                        <SelectItem value="dspd">DSPD / DHHS Partner</SelectItem>
                        <SelectItem value="job-seeker">Potential Employee</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="about">Who are you contacting us about?</Label>
                  <Input id="about" value={form.about} onChange={(e) => update("about", e.target.value)} placeholder="A loved one's name or initials" />
                </div>

                <div>
                  <Label htmlFor="services">Services you're interested in</Label>
                  <Select value={form.services} onValueChange={(v) => update("services", v)}>
                    <SelectTrigger id="services"><SelectValue placeholder="Select an option" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Habilitation</SelectItem>
                      <SelectItem value="daily-living">Daily Living Support</SelectItem>
                      <SelectItem value="community">Community Access</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="employment">Employment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us a bit about what you're looking for..." />
                </div>

                <Button type="submit" variant="brand" size="lg" className="w-full" disabled={isSending}>
                  {isSending ? "Sending..." : "Send Message"} <Send className="w-4 h-4 ml-1" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
