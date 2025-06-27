"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Inbox } from "lucide-react";
import Image from "next/image";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "About",
    "Founder",
    "Team",
    "Artisans",
    "Initiatives",
    "Impact",
    "FAQ",
    "Blog",
    "Location",
    "Contact",
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-neutral-light/90 backdrop-blur-xl border-b border-primary-blue/10 shadow-lg shadow-primary-blue/5">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <Image
              src="/logo.jpeg"
              alt="A logo Image"
              priority
              width={100}
              height={100}
              className="w-24 h-24 rounded-full"
            />
            <div>
              <span className="text-xl font-bold text-primary-blue">
                Starbornlab
              </span>
              <div className="text-sm text-gray-600 font-medium">Kenya</div>
            </div>
          </div>

          <div className="hidden xl:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="relative text-gray-700 hover:text-primary-blue transition-all duration-300 font-medium group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          <div className="hidden xl:block">
            <Button className="bg-primary-blue hover:bg-primary-blue/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <Inbox className="w-4 h-4 mr-2" />
              Work With Us
            </Button>
          </div>

          <div className="xl:hidden">
            <Button
              variant="ghost"
              size="lg"
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-blue hover:bg-primary-blue/5 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transform rotate-180 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 transform rotate-0 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        <div
          className={`xl:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-6 pb-6 space-y-3">
            {navItems.map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                onClick={closeMenu}
                className="block px-4 py-2 text-gray-700 hover:text-primary-blue hover:bg-primary-blue/5 rounded-xl transition-all duration-300 font-medium transform hover:translate-x-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                  <span>{item}</span>
                </div>
              </Link>
            ))}

            <div className="px-4 pt-3">
              <Button
                className="w-full bg-primary-blue hover:bg-primary-blue/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 py-3"
                onClick={closeMenu}
              >
                <Inbox className="w-4 h-4 mr-2" />
                Work With Us
              </Button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="xl:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
            onClick={closeMenu}
          ></div>
        )}
      </div>
    </nav>
  );
}
