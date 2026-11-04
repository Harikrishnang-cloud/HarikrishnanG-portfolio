import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#25D366"
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.42 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2Z"
    />
    <path
      fill="#FFFFFF"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.47 14.38C17.17 14.23 15.69 13.5 15.42 13.4C15.14 13.3 14.94 13.25 14.74 13.55C14.54 13.85 13.97 14.53 13.79 14.73C13.62 14.93 13.44 14.95 13.14 14.8C12.84 14.65 11.87 14.33 10.73 13.31C9.84 12.51 9.24 11.53 9.06 11.23C8.89 10.93 9.04 10.77 9.19 10.62C9.33 10.49 9.49 10.27 9.64 10.1C9.79 9.92 9.84 9.8 9.94 9.6C10.04 9.4 9.99 9.22 9.91 9.07C9.84 8.92 9.24 7.44 8.99 6.84C8.75 6.26 8.5 6.34 8.31 6.33C8.14 6.32 7.94 6.32 7.74 6.32C7.54 6.32 7.21 6.39 6.94 6.69C6.66 6.99 5.89 7.72 5.89 9.2C5.89 10.67 6.96 12.1 7.11 12.3C7.26 12.5 9.23 15.53 12.24 16.83C12.95 17.14 13.51 17.32 13.95 17.46C14.67 17.69 15.32 17.66 15.84 17.58C16.42 17.5 17.62 16.86 17.87 16.16C18.12 15.45 18.12 14.85 18.04 14.73C17.97 14.6 17.77 14.53 17.47 14.38Z"
    />
  </svg>
);

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

      .then(() => {
        toast.success("Message sent successfully");
        formRef.current?.reset();
      })
      .catch(() => {
        toast.error("Failed to send message");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  console.log("ENV CHECK:", {
    service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  });


  return (
    <section className="py-20 bg-transparent relative" id="contact">
      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you have a question or just want to say hi, I’ll get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Left Side – Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <motion.a
                href="mailto:harikrishnangmonkuttan@gmail.com"
                whileHover={{ x: 5 }}
                className="group relative overflow-hidden flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-sm z-10 transition-all duration-300 hover:border-black"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out pointer-events-none"
                />
                <div className="relative z-10 p-3 rounded-lg bg-primary/10 group-hover:bg-white/20 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="relative z-10">
                  <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300">Email</p>
                  <p className="font-medium group-hover:text-white transition-colors duration-300">
                    harikrishnangmonkuttan@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+917907389098"
                whileHover={{ x: 5 }}
                className="group relative overflow-hidden flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-sm z-10 transition-all duration-300 hover:border-black"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out pointer-events-none"
                />
                <div className="relative z-10 p-3 rounded-lg bg-primary/10 group-hover:bg-white/20 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="relative z-10">
                  <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300">Phone</p>
                  <p className="font-medium group-hover:text-white transition-colors duration-300">+91 7907389098</p>
                </div>
              </motion.a>

              <div className="group relative overflow-hidden flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-sm z-10 transition-all duration-300 hover:border-black cursor-default">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out pointer-events-none"
                />
                <div className="relative z-10 p-3 rounded-lg bg-primary/10 group-hover:bg-white/20 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="relative z-10">
                  <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300">Location</p>
                  <p className="font-medium group-hover:text-white transition-colors duration-300">Kollam, Kerala, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Github, link: "https://github.com/Harikrishnang-cloud", brandBg: "bg-foreground", brandText: "group-hover:text-background", borderHover: "hover:border-foreground", label: "GitHub" },
                { icon: Linkedin, link: "https://www.linkedin.com/in/harikrishnan-g-1315721b7/", brandBg: "bg-[#0A66C2]", brandText: "group-hover:text-white", borderHover: "hover:border-[#0A66C2]", label: "LinkedIn" },
                { icon: Code, link: "https://leetcode.com/u/HK_INTERNATIONAL/", brandBg: "bg-[#FFA116]", brandText: "group-hover:text-white", borderHover: "hover:border-[#FFA116]", label: "LeetCode" },
                { icon: Twitter, link: "https://x.com/HKINTERNATION22", brandBg: "bg-[#1DA1F2]", brandText: "group-hover:text-white", borderHover: "hover:border-[#1DA1F2]", label: "Twitter" },
                { icon: Instagram, link: "https://www.instagram.com/_harikrishnan_01/", brandBg: "bg-[#E4405F]", brandText: "group-hover:text-white", borderHover: "hover:border-[#E4405F]", label: "Instagram" },
                { icon: Youtube, link: "https://www.youtube.com/@learn_with_har1", brandBg: "bg-[#FF0000]", brandText: "group-hover:text-white", borderHover: "hover:border-[#FF0000]", label: "YouTube" },
                { icon: WhatsAppIcon, link: "https://wa.me/919745860278", brandBg: "bg-[#25D366]", brandText: "group-hover:text-white", borderHover: "hover:border-[#25D366]", label: "WhatsApp" },
              ].map(({ icon: Icon, link, brandBg, brandText, borderHover, label }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative overflow-hidden p-3 rounded-xl bg-card border border-border text-muted-foreground transition-all duration-300 shadow-sm z-10 ${borderHover}`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-0 ${brandBg} -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out pointer-events-none`}
                  />
                  <span className={`relative z-10 block transition-colors duration-300 ${brandText}`}>
                    <Icon className="w-5 h-5" />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side – Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-card border border-border shadow-sm relative z-10"
          >
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input name="name" placeholder="Your name" required />
                <Input name="email" type="email" placeholder="Your email" required />
              </div>

              <Input name="subject" placeholder="Subject" required />

              <Textarea
                name="message"
                placeholder="Your message..."
                className="min-h-[150px]"
                required
              />

              <Button type="submit" className="w-full" disabled={loading}>
                <Send className="w-4 h-4 mr-2" />
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
