import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Wrench,
  BikeIcon as Bicycle,
  Globe,
  CheckCircle,
  Heart,
  Palette,
  Monitor,
  Search,
  Settings,
  Bot,
  MapPin,
  Trophy,
  Leaf,
  Share2,
} from "lucide-react";
import React from "react";

export function InitiativesSection() {
  const services = [
    { name: "System Design", icon: Settings },
    { name: "Social Media", icon: Share2 },
    { name: "Branding", icon: Palette },
    { name: "Web Design", icon: Monitor },
    { name: "SEO & Content", icon: Search },
    { name: "AI Integration", icon: Bot },
  ];

  const valveCycleServices = [
    { name: "Fitness and wellness cycling", icon: Heart },
    { name: "Tourism and cultural exploration rides", icon: MapPin },
    { name: "Eco-friendly commuting options", icon: Leaf },
    { name: "Competitive and challenging adventure circuits", icon: Trophy },
  ];

  const digitalMarketingServices = [
    { name: "Social Media Campaigns", icon: Share2 },
    { name: "Branding and Graphics", icon: Palette },
    { name: "Website Design", icon: Monitor },
    { name: "SEO & Content Writing", icon: Search },
  ];

  return (
    <section
      id="initiatives"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(26, 59, 95, 0.1) 90deg, transparent 180deg, rgba(74, 140, 140, 0.1) 270deg, transparent 360deg)`, // Updated primary-blue and secondary-teal hex codes
            backgroundSize: "200px 200px",
            animation: "spin 30s linear infinite",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-fade-in-up">
          <Badge className="bg-secondary-teal/10 text-secondary-teal hover:bg-secondary-teal/20 px-6 py-3 text-sm font-medium mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <Sparkles className="w-4 h-4 mr-2" />
            What We Do
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-bold text-neutral-dark mb-8">
            Our{" "}
            <span className="text-secondary-teal animate-none">
              Initiatives
            </span>
          </h2>
        </div>

        <div className="space-y-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary-blue rounded-2xl flex items-center justify-center shadow-xl transform hover:rotate-12 hover:scale-110 transition-all duration-500">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-neutral-dark">
                    Handiey.com
                  </h3>
                  <div className="w-24 h-1 bg-primary-blue rounded-full mt-2"></div>
                </div>
              </div>

              <p className="text-2xl text-primary-blue font-semibold">
                Hire Skilled Artisans with Confidence
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Handiey.com is a digital marketplace that connects skilled
                graduates from VTCs with real-time job opportunities in
                plumbing, welding, carpentry, construction, electrical works,
                motor vehicle mechanics and other trades. We're building trust
                between clients and professionals while ensuring that artisans
                grow their careers through verified work. <br /> <br /> We also
                work with landlords and property managers to provide reliable
                maintenance and repair services for rental houses, offering a
                dependable workforce for tenant-related fixes.
              </p>

              <div className="bg-neutral-light p-8 rounded-3xl border border-primary-blue/10 shadow-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-blue mt-1 flex-shrink-0" />{" "}
                  <p className="text-neutral-dark font-medium text-lg">
                    <strong>Impact:</strong> Empowering artisans to grow their
                    businesses while ensuring clients access quality, vetted
                    professionals.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-primary-blue/10 rounded-3xl transform rotate-3 animate-pulse"></div>
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl transform hover:scale-105 transition-all duration-700">
                <Image
                  src="/skilled artisan.jpg?height=400&width=500"
                  alt="Handiey.com platform"
                  width={500}
                  height={400}
                  className="rounded-2xl object-cover w-full"
                />
                <div className="absolute -top-4 -right-4 bg-primary-blue text-white p-3 rounded-xl shadow-lg animate-bounce">
                  <div className="text-sm font-bold">150+ Artisans</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up delay-300">
            <div className="relative lg:order-1 animate-fade-in-left">
              <div className="absolute inset-0 bg-secondary-teal/10 rounded-3xl transform -rotate-3 animate-pulse delay-500"></div>
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl transform hover:scale-105 transition-all duration-700">
                <Image
                  src="/valve.png?height=400&width=500"
                  alt="ValveCycle bicycle rental"
                  width={500}
                  height={400}
                  className="rounded-2xl object-cover w-full"
                />
                <div className="absolute -bottom-4 -left-4 bg-secondary-teal text-white p-3 rounded-xl shadow-lg animate-bounce delay-1000">
                  <div className="text-sm font-bold">5+ Counties</div>
                </div>
              </div>
            </div>
            <div className="space-y-8 lg:order-2">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-secondary-teal rounded-2xl flex items-center justify-center shadow-xl transform hover:rotate-12 hover:scale-110 transition-all duration-500">
                  <Bicycle className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-neutral-dark">
                    ValveCycle
                  </h3>
                  <div className="w-24 h-1 bg-secondary-teal rounded-full mt-2"></div>
                </div>
              </div>
              <p className="text-2xl text-secondary-teal font-semibold">
                Ride for Change
              </p>
              <div className="text-gray-700 leading-relaxed text-lg">
                <p>
                  ValveCycle is a bicycle rental and mobility initiative that
                  promotes eco-friendly transport, fitness, and adventure in
                  rural Kenya. Originally launched in Mbale during the COVID-19
                  pandemic, we have reintroduced a broader and more adventurous
                  ValveCycle, promoting cycling as a lifestyle solution for a
                  healthier, greener, and more connected society. Through our
                  bikes, we target to offer:
                </p>
                <br />
                <div className="space-y-3">
                  {valveCycleServices.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-secondary-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        {React.createElement(service.icon, {
                          className: "w-4 h-4 text-secondary-teal",
                        })}
                      </div>
                      <span className="text-gray-700">{service.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-neutral-light p-8 rounded-3xl border border-secondary-teal/10 shadow-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-secondary-teal mt-1 flex-shrink-0" />{" "}
                  <p className="text-neutral-dark font-medium text-lg">
                    <strong>Impact:</strong> Healthy living, green transport,
                    and community bonding through cycling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center animate-fade-in-up delay-600">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-accent-gold rounded-2xl flex items-center justify-center shadow-xl transform hover:rotate-12 hover:scale-110 transition-all duration-500">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-neutral-dark">
                    Digital Marketing
                  </h3>
                  <div className="w-24 h-1 bg-accent-gold rounded-full mt-2"></div>
                </div>
              </div>
              <p className="text-2xl text-accent-gold font-semibold">
                Website Development & Brand Strategy
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                We provide cutting-edge digital marketing, brand strategy, and
                web development services for schools, small businesses, NGOs,
                and community organizations. We help our clients grow online so
                they can grow in the real world.
              </p>

              <h3 className="text-xl font-semibold text-neutral-dark">
                Our Services Include:
              </h3>
              <div className="space-y-3">
                {digitalMarketingServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {React.createElement(service.icon, {
                        className: "w-4 h-4 text-accent-gold",
                      })}
                    </div>
                    <span className="text-gray-700 font-medium">
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-neutral-light p-8 rounded-3xl border border-primary-blue/10 shadow-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-blue mt-1 flex-shrink-0" />{" "}
                  <p className="text-neutral-dark font-medium text-lg">
                    <strong>Impact:</strong> Helping local brands reach their
                    audiences and thrive in the digital economy.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-neutral-light p-6 rounded-2xl border border-accent-gold/10 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {React.createElement(service.icon, {
                      className:
                        "w-8 h-8 text-accent-gold mb-3 group-hover:scale-110 transition-transform duration-300",
                    })}
                    <div className="text-neutral-dark font-semibold text-sm">
                      {service.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-accent-gold/10 rounded-3xl transform rotate-2 animate-pulse delay-300"></div>
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl transform hover:scale-105 transition-all duration-700">
                <Image
                  src="/temp.png?height=400&width=500"
                  alt="Digital marketing services"
                  width={500}
                  height={400}
                  className="rounded-2xl object-cover w-full"
                />
                <div className="absolute -top-4 -right-4 bg-accent-gold text-white p-3 rounded-xl shadow-lg animate-bounce delay-500">
                  <div className="text-sm font-bold">50+ Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
