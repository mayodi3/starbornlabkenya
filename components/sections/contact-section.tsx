import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Inbox,
} from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Vihiga County, Kenya",
      gradient: "bg-accent-gold",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@starbornlabkenya.co.ke",
      gradient: "bg-primary-blue",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+254 0472 8385",
      gradient: "bg-secondary-teal",
    },
  ];

  const socialLinks = [
    { icon: Facebook, color: "primary-blue", hoverColor: "primary-blue/90" },
    { icon: Instagram, color: "accent-gold", hoverColor: "accent-gold/90" },
    { icon: Linkedin, color: "primary-blue", hoverColor: "primary-blue/90" },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-primary-blue text-white relative overflow-hidden"
    >
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="absolute inset-0 bg-primary-blue/10 animate-none"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-fade-in-up">
          <Badge className="bg-white/20 text-white hover:bg-white/30 px-6 py-3 text-sm font-medium mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <Mail className="w-4 h-4 mr-2" />
            Contact Us
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-bold mb-8">
            Let's
            <span className="text-accent-gold animate-none">Connect</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-fade-in-left">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="flex items-center space-x-6 group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-16 h-16 ${contact.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                >
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-xl mb-1">
                    {contact.title}
                  </div>
                  <div className="text-gray-300 text-lg">{contact.content}</div>
                </div>
              </div>
            ))}

            <div className="flex space-x-6 pt-6 animate-fade-in-up delay-600">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  size="icon"
                  className={`bg-${social.color} hover:bg-${social.hoverColor} w-14 h-14 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 transition-all duration-300`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="h-6 w-6" />
                </Button>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 animate-fade-in-right">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Send us a message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all duration-300 hover:bg-white/25"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all duration-300 hover:bg-white/25"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-all duration-300 hover:bg-white/25"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-transparent resize-none transition-all duration-300 hover:bg-white/25"
              ></textarea>
              <Button className="w-full bg-primary-blue hover:bg-primary-blue/90 text-white py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Inbox className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
