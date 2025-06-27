"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Star, Zap, Award, Sparkles, ArrowDown } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-primary-blue/5"></div>

      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1A3B5F 1px, transparent 0)`,
            backgroundSize: "50px 50px",
            animation: "float 20s ease-in-out infinite",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <Badge className="bg-secondary-teal/10 text-secondary-teal hover:bg-secondary-teal/20 border border-secondary-teal/10 px-6 py-3 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Star className="w-4 h-4 mr-2" />
                🌟 Empowering Africa's Future
              </Badge>

              <h1 className="text-5xl lg:text-8xl font-bold leading-tight">
                <span className="inline-block text-primary-blue animate-none">
                  Empowering
                </span>
                <br />
                <span className="inline-block text-neutral-dark transform hover:scale-105 transition-transform duration-500">
                  Vocational Talent.
                </span>
                <br />
                <TypingAnimation
                  text="Building Africa's Future."
                  speed={150}
                  className="inline-block text-secondary-teal"
                />
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in-up delay-300">
                Starbornlab Kenya is a social enterprise creating employment,
                visibility, and digital opportunities for artisans and
                innovators from Vocational Training Centers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up delay-500">
              <Link
                href="#about"
                className="flex flex-1 items-center justify-between rounded-md bg-primary-blue text-white hover:bg-primary-blue/90 px-10 py-6 text-sm shadow-2xl hover:shadow-primary-blue/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 group"
              >
                Learn More About Us
                <ArrowDown className="ml-3 h-5 w-5 lg:hidden xl:block group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="#initiatives"
                className="flex flex-1 items-center justify-between rounded-md border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white px-10 py-6 text-sm shadow-xl hover:shadow-accent-gold/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <Zap className="mr-3 h-5 w-5 lg:hidden xl:block" />
                Explore Our Ventures
              </Link>
              <Link
                href="#contact"
                className="flex flex-1 items-center justify-between rounded-md bg-primary-blue text-white hover:bg-primary-blue/90 px-10 py-6 text-sm shadow-2xl hover:shadow-primary-blue/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 group"
              >
                Work With Us
                <ArrowDown className="ml-3 h-5 w-5 lg:hidden xl:block group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary-blue rounded-2xl flex items-center justify-center shadow-xl animate-bounce delay-1000">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent-gold rounded-xl flex items-center justify-center shadow-lg animate-pulse delay-2000">
              <Sparkles className="w-6 h-6 text-white" />
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-primary-blue/10 rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-700 blur-xl"></div>
              <div className="absolute inset-0 bg-secondary-teal/10 rounded-3xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-700 blur-lg"></div>

              <div className="relative bg-neutral-light rounded-3xl p-4 shadow-2xl transform group-hover:scale-105 transition-all duration-700 border border-white/50">
                <Image
                  src="/hero.png?height=500&width=600"
                  alt="Youth artisans at work in Kenya"
                  width={600}
                  height={500}
                  className="rounded-2xl object-cover w-full shadow-lg"
                />

                <div className="absolute -bottom-6 -right-6 bg-secondary-teal text-white p-6 rounded-2xl shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                  <div className="text-3xl font-bold">30,000+</div>
                  <div className="text-sm opacity-90">Youth Trained</div>
                </div>

                <div className="absolute -top-4 left-4 bg-primary-blue text-white p-4 rounded-xl shadow-xl animate-pulse">
                  <div className="text-lg font-bold">150+</div>
                  <div className="text-xs opacity-90">Artisans</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
