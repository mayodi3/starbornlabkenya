import type React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Heart } from "lucide-react";

interface InvolvementOption {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  buttonText: string;
  gradient: string;
  bgGradient: string;
  delay: string;
}

export function GetInvolvedSection() {
  const options: InvolvementOption[] = [
    {
      icon: Users,
      title: "Partner with Us",
      description:
        "Work with county governments, NGOs, TVET institutions, and financial institutions to create sustainable employment pathways.",
      buttonText: "Become a Partner",
      gradient: "bg-primary-blue",
      bgGradient: "bg-primary-blue/5",
      delay: "0",
    },
    {
      icon: TrendingUp,
      title: "Join Our Network",
      description:
        "Are you a vocational graduate? Register with us to be listed on Handiey.com or participate in our programs.",
      buttonText: "Join Network",
      gradient: "bg-accent-gold",
      bgGradient: "bg-accent-gold/5",
      delay: "200",
    },
    {
      icon: Heart,
      title: "Support Our Work",
      description:
        "Support our mission through donations, sponsorship, or volunteering your professional services.",
      buttonText: "Support Us",
      gradient: "bg-secondary-teal",
      bgGradient: "bg-secondary-teal/5",
      delay: "400",
    },
  ];

  return (
    <section className="py-24 bg-neutral-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-primary-blue rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-accent-gold rounded-full animate-spin-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border-4 border-secondary-teal rounded-full animate-spin-slow delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-fade-in-up">
          <Badge className="bg-accent-gold/10 text-accent-gold hover:bg-accent-gold/20 px-6 py-3 text-sm font-medium mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <Users className="w-4 h-4 mr-2" />
            Get Involved
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-bold text-neutral-dark mb-8">
            Join Our
            <span className="text-primary-blue animate-none">Mission</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {options.map((item, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-700 border-0 ${item.bgGradient} hover:scale-105 transform animate-fade-in-up`}
              style={{ animationDelay: `${item.delay}ms` }}
            >
              <CardContent className="p-10 text-center relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10">
                  <div
                    className={`w-20 h-20 ${item.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}
                  >
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-neutral-dark mb-6">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    {item.description}
                  </p>
                  <Button
                    className={`${item.gradient} hover:shadow-lg text-white px-8 py-3 transform hover:scale-105 transition-all duration-300`}
                  >
                    {item.buttonText}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
