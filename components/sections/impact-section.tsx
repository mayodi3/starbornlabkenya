"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CounterAnimation } from "@/components/ui/counter-animation";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { TrendingUp } from "lucide-react";

interface ImpactStat {
  number: number;
  suffix: string;
  label: string;
  description: string;
  gradient: string;
  icon: string;
  delay: string;
}

export function ImpactSection() {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats: ImpactStat[] = [
    {
      number: 30000,
      suffix: "+",
      label: "Youth Trained",
      description: "Digital skills across Kenya, Uganda, and Rwanda",
      gradient: "bg-primary-blue",
      icon: "👨‍🎓",
      delay: "0",
    },
    {
      number: 150,
      suffix: "+",
      label: "Artisans Listed",
      description: "Working through Handiey.com platform",
      gradient: "bg-accent-gold",
      icon: "🔧",
      delay: "200",
    },
    {
      number: 5,
      suffix: "+",
      label: "Counties Reached",
      description: "Through ValveCycle initiatives",
      gradient: "bg-secondary-teal",
      icon: "🚴‍♂️",
      delay: "400",
    },
    {
      number: 50,
      suffix: "+",
      label: "Digital Projects",
      description: "Websites and campaigns completed",
      gradient: "bg-primary-blue",
      icon: "💻",
      delay: "600",
    },
  ];

  return (
    <section
      id="impact"
      ref={elementRef}
      className="py-24 bg-neutral-light relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
        >
          <path
            d="M0,400 Q300,200 600,400 T1200,400 V800 H0 Z"
            fill="url(#wave1)"
            className="animate-wave"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0;50,0;0,0"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1A3B5F" />
              <stop offset="50%" stopColor="#CC9933" />
              <stop offset="100%" stopColor="#4A8C8C" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-fade-in-up">
          <Badge className="bg-primary-blue/10 text-primary-blue hover:bg-primary-blue/20 border border-primary-blue/10 px-6 py-3 text-sm font-medium mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <TrendingUp className="w-4 h-4 mr-2" />
            Our Impact
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-bold text-neutral-dark mb-8">
            Making a
            <span className="text-primary-blue animate-none">Difference</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-700 border-0 ${stat.gradient} text-white hover:scale-110 transform animate-fade-in-up cursor-pointer`} // Used gradient prop as solid color
              style={{ animationDelay: `${stat.delay}ms` }}
            >
              <CardContent className="p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-white/10 rounded-3xl transform rotate-12 group-hover:rotate-45 transition-transform duration-700"></div>
                </div>

                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">
                    {stat.icon}
                  </div>
                  <div className="text-5xl lg:text-6xl font-bold mb-3 group-hover:scale-110 transition-transform duration-500">
                    <CounterAnimation
                      end={stat.number}
                      suffix={stat.suffix}
                      duration={2500}
                      startAnimation={isIntersecting}
                    />
                  </div>
                  <div className="text-xl font-semibold mb-4 opacity-90">
                    {stat.label}
                  </div>
                  <p className="text-sm opacity-80 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
