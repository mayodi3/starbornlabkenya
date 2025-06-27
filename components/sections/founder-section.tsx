import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

export function FounderSection() {
  const badges = [
    { text: "Mandela Washington Fellow", color: "primary-blue" },
    { text: "Digital Strategist", color: "accent-gold" },
    { text: "Community Leader", color: "secondary-teal" },
  ];

  const founderInfo = [
    "Esalako Hillary is a Mandela Washington Fellowship alumnus and visionary changemaker who has trained over 30,000 youth across East Africa through the Google Digital Skills Program.",
    "A licensed insurance professional, digital strategist, and community leader, Hillary brings together experience from banking, digital innovation, and grassroots community development.",
    "He is the founder of multiple impact-driven ventures and a champion for inclusive economic growth through vocational skills. Hillary believes that by creating systems that support artisans, Kenya can reduce unemployment and build an economy of skilled doers.",
  ];

  return (
    <section
      id="founder"
      className="py-24 bg-neutral-light relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-blue/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary-teal/10 rounded-full animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-gold/10 rounded-full animate-float delay-2000"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge className="bg-accent-gold/10 text-accent-gold hover:bg-accent-gold/20 px-6 py-3 text-sm font-medium mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
              <Award className="w-4 h-4 mr-2" />
              Leadership
            </Badge>
            <h2 className="text-5xl lg:text-7xl font-bold text-neutral-dark mb-8">
              Meet the
              <span className="text-primary-blue animate-none">Founder</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-fade-in-left">
              <div className="absolute -top-8 -left-8 bg-primary-blue text-white p-4 rounded-2xl shadow-xl animate-bounce delay-500 z-10">
                <div className="text-sm font-bold">Mandela Fellow</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent-gold text-white p-3 rounded-xl shadow-lg animate-pulse delay-1000 z-10">
                <div className="text-xs font-bold">30K+ Trained</div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-accent-gold/10 rounded-3xl transform -rotate-6 group-hover:-rotate-3 transition-transform duration-700 blur-xl"></div>
                <div className="absolute inset-0 bg-primary-blue/10 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform duration-700 blur-lg"></div>

                <div className="relative bg-white rounded-3xl p-3 shadow-2xl transform group-hover:scale-105 transition-all duration-700 border border-white/50">
                  <Image
                    src="/founder.JPG?height=600&width=500"
                    alt="Esalako Hillary - Founder & CEO"
                    width={500}
                    height={600}
                    className="rounded-2xl object-cover w-full shadow-lg"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-fade-in-right">
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold text-neutral-dark mb-3">
                  Esalako Hillary
                </h3>
                <p className="text-2xl text-accent-gold font-semibold mb-6">
                  Founder
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {badges.map((badge, index) => (
                    <Badge
                      key={index}
                      className={`bg-${badge.color}/10 text-${badge.color} hover:bg-${badge.color}/20 px-4 py-2 text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      {badge.text}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                {founderInfo.map((text, index) => (
                  <p
                    key={index}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${(index + 1) * 300}ms` }}
                  >
                    {text}
                  </p>
                ))}
              </div>

              <div className="bg-neutral-light p-8 rounded-3xl shadow-lg border border-white/50 animate-fade-in-up delay-1000">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-blue animate-none">
                      30,000+
                    </div>
                    <div className="text-gray-600 font-medium">
                      Youth Trained
                    </div>
                  </div>
                  <div className="w-px h-12 bg-primary-blue"></div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent-gold animate-none">
                      {" "}
                    </div>
                    <div className="text-gray-600 font-medium">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
