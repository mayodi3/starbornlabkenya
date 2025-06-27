import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Heart } from "lucide-react";

export function AboutSection() {
  const aboutItems = [
    {
      icon: Target,
      title: "Our Mission",
      content:
        "To unlock the potential of vocational skills graduates by connecting them with opportunities for employment, entrepreneurship, and digital transformation.",
      gradient: "bg-primary-blue",
      bgGradient: "bg-primary-blue/5",
      delay: "0",
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      content:
        "To develop an ecosystem where skills meet opportunity through technology, mentorship, and partnerships.",
      gradient: "bg-accent-gold",
      bgGradient: "bg-accent-gold/5",
      delay: "200",
    },
    {
      icon: Heart,
      title: "Core Values",
      content: null,
      gradient: "bg-secondary-teal",
      bgGradient: "bg-secondary-teal/5",
      delay: "400",
      values: ["Empowerment", "Innovation", "Collaboration", "Integrity"],
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-neutral-light relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 40%, #1A3B5F 50%, transparent 60%)`, // Updated hex code for primary-blue
            backgroundSize: "100px 100px",
            animation: "slide 15s linear infinite",
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-fade-in-up">
          <Badge className="bg-primary-blue/10 text-primary-blue hover:bg-primary-blue/20 border border-primary-blue/10 px-6 py-3 text-sm font-medium mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <Target className="w-4 h-4 mr-2" />
            Who We Are
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-bold text-neutral-dark mb-8">
            Transforming{" "}
            <span className="relative inline-block">
              <span className="text-accent-gold animate-none">
                Vocational Talent
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent-gold rounded-full transform scale-x-0 animate-scale-x delay-1000"></div>
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            We harness the power of digital tools, community-driven initiatives,
            and partnerships to empower skilled graduates from Vocational
            Training Centers across rural and peri-urban Kenya.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {aboutItems.map((item, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-700 border-0 ${item.bgGradient} hover:scale-105 transform animate-fade-in-up`} // Used bgGradient prop
              style={{ animationDelay: `${item.delay}ms` }}
            >
              <CardContent className="p-10">
                <div
                  className={`w-20 h-20 ${item.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}
                >
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-neutral-dark mb-6">
                  {item.title}
                </h3>
                {item.content ? (
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {item.content}
                  </p>
                ) : (
                  <div className="space-y-4">
                    {item.values?.map((value, i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-3 group/item"
                      >
                        <div className="w-3 h-3 bg-secondary-teal rounded-full group-hover/item:scale-125 transition-transform duration-300"></div>
                        <span className="text-gray-700 font-medium text-lg group-hover/item:text-secondary-teal transition-colors duration-300">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
