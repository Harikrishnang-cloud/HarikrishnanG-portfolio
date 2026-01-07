import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Code,
  Twitter,
  Instagram
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

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
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-6">

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
                className="flex items-center gap-4 p-4 rounded-xl bg-card border"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">
                    harikrishnangmonkuttan@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+917907389098"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 7907389098</p>
                </div>
              </motion.a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Kollam, Kerala, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[ 
                { icon: Github, link: "https://github.com/Harikrishnang-cloud" },
                { icon: Linkedin, link: "https://www.linkedin.com/in/harikrishnan-g-1315721b7/" },
                { icon: Code, link: "https://leetcode.com/u/HK_INTERNATIONAL/" },
                { icon: Twitter, link: "https://x.com/HKINTERNATION22" },
                { icon: Instagram, link: "https://www.instagram.com/_harikrishnan_01/" },
              ].map(({ icon: Icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-card border hover:bg-primary/5"
                >
                  <Icon className="w-5 h-5" />
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
            className="p-8 rounded-2xl bg-card border"
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
