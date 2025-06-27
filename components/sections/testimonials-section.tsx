import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, CheckCircle, Users } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  image: string;
  rating: number;
  testimonial: string;
  gradient: string;
  bgGradient: string;
  delay: string;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Grace Wanjiku",
      role: "Plumber & Handiey.com Professional",
      location: "Nakuru County",
      image: "/woman-plumber.jpg?height=100&width=100",
      rating: 5,
      testimonial:
        "Handiey.com has completely transformed my plumbing business! Before joining the platform, I struggled to find consistent work. Now I receive 3-4 job requests every week. The verification process gave my clients confidence, and I've been able to expand my services to three counties. Asante sana Starbornlab!",
      gradient: "bg-primary-blue",
      bgGradient: "bg-primary-blue/5",
      delay: "0",
    },
    {
      name: "Samuel Kipchoge",
      role: "ValveCycle Enthusiast & Tour Guide",
      location: "Eldoret, Uasin Gishu",
      image: "/cyclist.jpg?height=100&width=100",
      rating: 5,
      testimonial:
        "ValveCycle introduced me to a healthier lifestyle and opened up new opportunities! I now lead cycling tours around Eldoret, showing visitors our beautiful landscapes. The bikes are well-maintained, and the community we've built is amazing. It's more than transport - it's brought our community together for fitness and adventure.",
      gradient: "bg-secondary-teal",
      bgGradient: "bg-secondary-teal/5",
      delay: "200",
    },
    {
      name: "Moses Ambasi",
      role: "School Principal & Digital Client",
      location: "Kisumu County",
      image: "/school principal.jpg?height=100&width=100",
      rating: 5,
      testimonial:
        "Starbornlab Kenya designed our school's website and managed our social media campaigns. The results were incredible! Our enrollment increased by 40% after parents could easily find information about our programs online. Their team understood our local context and created content that resonated with our community. Highly recommended!",
      gradient: "bg-accent-gold",
      bgGradient: "bg-accent-gold/5",
      delay: "400",
    },
  ];

  return (
    <section className="py-24 bg-neutral-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-secondary-teal/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent-gold/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-blue/10 rounded-full animate-pulse delay-2000"></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-fade-in-up">
          <Badge className="bg-secondary-teal/10 text-secondary-teal hover:bg-secondary-teal/20 px-6 py-3 text-sm font-medium mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <Star className="w-4 h-4 mr-2" />
            Success Stories
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-bold text-neutral-dark mb-8">
            What Our{" "}
            <span className="text-secondary-teal animate-none">
              Community Says
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from artisans, businesses, and partners who have
            experienced the transformative power of our initiatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-700 border-0 ${testimonial.bgGradient} hover:scale-105 transform animate-fade-in-up relative overflow-hidden`} // Used bgGradient prop
              style={{ animationDelay: `${testimonial.delay}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>

              <CardContent className="p-8 relative z-10">
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-600 fill-current animate-pulse"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>

                <blockquote className="text-neutral-dark leading-relaxed text-lg mb-8 italic">
                  "{testimonial.testimonial}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div
                      className={`w-16 h-16 ${testimonial.gradient} rounded-full p-0.5 group-hover:scale-110 transition-transform duration-500`}
                    >
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full rounded-full object-cover bg-white"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary-teal rounded-full border-2 border-white flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-neutral-dark text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {testimonial.role}
                    </div>
                    <div className="text-gray-500 text-sm flex items-center mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 text-6xl text-neutral-dark/20 font-serif opacity-50 group-hover:opacity-70 transition-opacity duration-500">
                  "
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in-up delay-600">
          <p className="text-xl text-gray-600 mb-8">
            Ready to join our growing community of successful artisans and
            businesses?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-secondary-teal text-white hover:bg-secondary-teal/90 px-8 py-4 text-lg shadow-xl hover:shadow-secondary-teal/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <Star className="mr-2 h-5 w-5" />
              Share Your Story
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 text-lg shadow-xl hover:shadow-primary-blue/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              <Users className="mr-2 h-5 w-5" />
              Join Our Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
