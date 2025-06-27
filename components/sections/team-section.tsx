"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  Linkedin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Globe,
  Github,
  Youtube,
  MessageCircle,
} from "lucide-react";

// Social platform configuration
const socialPlatforms = {
  phone: {
    icon: Phone,
    label: "Call",
    colorClass:
      "border-green-500/20 text-green-600 hover:bg-green-600 hover:border-green-600",
    action: (value: string) => `tel:${value}`,
    target: "_self",
  },
  linkedin: {
    icon: Linkedin,
    label: "LinkedIn",
    colorClass:
      "border-blue-600/20 text-blue-600 hover:bg-blue-600 hover:border-blue-600",
    action: (value: string) => value,
    target: "_blank",
  },
  facebook: {
    icon: Facebook,
    label: "Facebook",
    colorClass:
      "border-blue-800/20 text-blue-800 hover:bg-blue-800 hover:border-blue-800",
    action: (value: string) => value,
    target: "_blank",
  },
  twitter: {
    icon: Twitter,
    label: "Twitter",
    colorClass:
      "border-sky-500/20 text-sky-500 hover:bg-sky-500 hover:border-sky-500",
    action: (value: string) => value,
    target: "_blank",
  },
  instagram: {
    icon: Instagram,
    label: "Instagram",
    colorClass:
      "border-pink-500/20 text-pink-500 hover:bg-pink-500 hover:border-pink-500",
    action: (value: string) => value,
    target: "_blank",
  },
  email: {
    icon: Mail,
    label: "Email",
    colorClass:
      "border-gray-600/20 text-gray-600 hover:bg-gray-600 hover:border-gray-600",
    action: (value: string) => `mailto:${value}`,
    target: "_self",
  },
  website: {
    icon: Globe,
    label: "Website",
    colorClass:
      "border-purple-600/20 text-purple-600 hover:bg-purple-600 hover:border-purple-600",
    action: (value: string) => value,
    target: "_blank",
  },
  github: {
    icon: Github,
    label: "GitHub",
    colorClass:
      "border-gray-800/20 text-gray-800 hover:bg-gray-800 hover:border-gray-800",
    action: (value: string) => value,
    target: "_blank",
  },
  youtube: {
    icon: Youtube,
    label: "YouTube",
    colorClass:
      "border-red-600/20 text-red-600 hover:bg-red-600 hover:border-red-600",
    action: (value: string) => value,
    target: "_blank",
  },
  whatsapp: {
    icon: MessageCircle,
    label: "WhatsApp",
    colorClass:
      "border-green-600/20 text-green-600 hover:bg-green-600 hover:border-green-600",
    action: (value: string) => `https://wa.me/${value.replace(/[^0-9]/g, "")}`,
    target: "_blank",
  },
} as const;

type SocialPlatform = keyof typeof socialPlatforms;

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials?: Partial<Record<SocialPlatform, string>>;
}

export function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      name: "Esalako Hillary",
      role: "Visionary Founder & CEO",
      image: "/founder.JPG",
      bio: "Transformational leader with an unwavering passion for empowering East African youth through innovative vocational skills training and cutting-edge digital transformation initiatives.",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/esalakohillary/?originalSubdomain=ke",
        phone: "+254704728385",
        facebook: "https://www.facebook.com/SIR.HILLERIE/",
        email: "esalako.hillary@starbornlabkenya.co.ke",
      },
    },
    {
      name: "Isaac Mayodi",
      role: "Software Engineer & System Architect",
      image: "/system architect.JPG",
      bio: "Brilliant technical mastermind who architects and develops Starbornlab's robust technological infrastructure, ensuring seamless digital experiences and scalable solutions.",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/isaac-mayodi-16a412304/?originalSubdomain=ke",
        phone: "+254707317185",
        github: "https://github.com/isaacmayodi",
        email: "mayodi.isaac@starbornlabkenya.co.ke",
      },
    },
    {
      name: "Vanessa",
      role: "Operations Manager & Digital Marketing Lead",
      image: "/graduate.png",
      bio: "Dynamic operations powerhouse who orchestrates daily business activities while driving strategic digital marketing campaigns that amplify our brand presence across multiple platforms.",
      socials: {
        // phone: "+254734567890",
        // instagram: "https://instagram.com/vanessa_marketing",
        email: "vanessa.kegehi@starboenlabkenya.co.ke",
      },
    },
    {
      name: "Patrick",
      role: "Fleet Manager & Bike Care Specialist",
      image: "/bike handler.JPG",
      bio: "Dedicated mobility expert who ensures our bike-sharing fleet remains in pristine condition, meticulously maintaining and servicing every bicycle to guarantee safe and reliable transportation for our community.",
      socials: {
        // phone: "+254756789012",
      },
    },
    {
      name: "Derrick",
      role: "Creative Visual Director & Photographer",
      image: "/photographer.JPG",
      bio: "Artistic storyteller who captures compelling visual narratives, creating stunning photography and imagery that brings our brand to life across websites, marketing materials, and digital platforms.",
      socials: {
        // phone: "+254745678901",
        // instagram: "https://instagram.com/derrick_visuals",
        // youtube: "https://youtube.com/@derrickvisuals",
        // email: "vanessa.kegehi@starboenlabkenya.co.ke",
      },
    },
  ];

  const handleSocialClick = (platform: SocialPlatform, value: string) => {
    const config = socialPlatforms[platform];
    const url = config.action(value);

    if (config.target === "_blank") {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.open(url, config.target);
    }
  };

  const getSocialButtonLayout = (
    socials: Partial<Record<SocialPlatform, string>>
  ) => {
    const socialEntries = Object.entries(socials) as [SocialPlatform, string][];
    const socialCount = socialEntries.length;

    if (socialCount === 1) {
      return "grid-cols-1";
    } else if (socialCount === 2) {
      return "grid-cols-2";
    } else if (socialCount === 3) {
      return "grid-cols-3";
    } else if (socialCount === 4) {
      return "grid-cols-2";
    } else {
      return "grid-cols-3";
    }
  };

  return (
    <section
      id="team"
      className="py-24 bg-gradient-to-br from-neutral-light via-white to-neutral-light relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-fade-in-up">
          <Badge className="bg-primary-blue/10 text-primary-blue hover:bg-primary-blue/20 px-8 py-4 text-base font-medium mb-8 shadow-xl transform hover:scale-105 transition-all duration-300 rounded-full">
            <Users className="w-5 h-5 mr-3" />
            Our Amazing Team
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-bold text-neutral-dark mb-8 tracking-tight">
            Meet the{" "}
            <span className="text-secondary-teal animate-none bg-gradient-to-r from-secondary-teal to-primary-blue bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Behind every initiative and every success story are dedicated
            individuals committed to our mission of transforming lives through
            innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-3xl transition-all duration-700 border-0 bg-white hover:scale-[1.02] transform animate-fade-in-up overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl backdrop-blur-sm flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative w-full h-80 overflow-hidden rounded-t-3xl">
                <Image
                  src={member.image || "/placeholder.svg?height=500&width=400"}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Users className="w-4 h-4 text-primary-blue" />
                </div>
              </div>

              <CardContent className="p-8 bg-gradient-to-b from-white to-gray-50/50 flex-1 flex flex-col">
                <div className="text-center mb-6 flex-1">
                  <h3 className="text-2xl font-bold text-neutral-dark mb-3 group-hover:text-primary-blue transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="inline-block bg-gradient-to-r from-primary-blue to-secondary-teal bg-clip-text text-transparent font-bold text-lg mb-5">
                    {member.role}
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed line-clamp-4 group-hover:text-gray-800 transition-colors duration-300">
                    {member.bio}
                  </p>
                </div>

                {/* Dynamic Social Media Icons at Bottom */}
                {member.socials && Object.keys(member.socials).length > 0 && (
                  <div className="mt-auto">
                    <div
                      className={`grid gap-3 ${getSocialButtonLayout(
                        member.socials
                      )}`}
                    >
                      {Object.entries(member.socials).map(
                        ([platform, value]) => {
                          const platformKey = platform as SocialPlatform;
                          const config = socialPlatforms[platformKey];
                          const Icon = config.icon;

                          return (
                            <Button
                              key={platform}
                              variant="outline"
                              size="sm"
                              className={`border-2 transition-all duration-300 rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:scale-[1.02] hover:text-white ${config.colorClass}`}
                              onClick={() =>
                                handleSocialClick(platformKey, value)
                              }
                            >
                              <Icon className="w-4 h-4 mr-2" />
                              <span className="hidden sm:inline">
                                {config.label}
                              </span>
                              <span className="sm:hidden">
                                <Icon className="w-4 h-4" />
                              </span>
                            </Button>
                          );
                        }
                      )}
                    </div>
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
