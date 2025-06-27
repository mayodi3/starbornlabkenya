"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Search, MapPin, Wrench, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

interface Artisan {
  id: string;
  name: string;
  skill: string;
  location: string;
  image: string;
  bio: string;
}

export function ArtisanDirectorySection() {
  const allArtisans: Artisan[] = [
    {
      id: "artisan-1",
      name: "Grace Mbugua",
      skill: "Plumber",
      location: "Nairobi",
      image: "/woman-plumber.jpg?height=150&width=150",
      bio: "Experienced plumber known for quick and reliable service. Specializes in leak detection and pipe installation.",
    },
    {
      id: "artisan-2",
      name: "Daniel Kimani",
      skill: "Welder",
      location: "Nakuru",
      image: "/welder.jpg?height=150&width=150",
      bio: "Certified welder with expertise in metal fabrication and structural repairs for various projects.",
    },
    {
      id: "artisan-3",
      name: "Jacob Murimi",
      skill: "Carpenter",
      location: "Kisumu",
      image: "/carpenter.jpg?height=150&width=150",
      bio: "Creative carpenter specializing in custom furniture design and intricate woodwork for homes and offices.",
    },
    {
      id: "artisan-4",
      name: "Peter Otieno",
      skill: "Electrician",
      location: "Mombasa",
      image: "/electrician.jpg?height=150&width=150",
      bio: "Highly skilled electrician providing safe and efficient electrical installations, repairs, and maintenance.",
    },
    {
      id: "artisan-5",
      name: "John Kamau",
      skill: "Motor Vehicle Mechanic",
      location: "Nairobi",
      image: "/mechanic.jpg?height=150&width=150",
      bio: "Expert mechanic capable of diagnosing and fixing complex vehicle issues for various makes and models.",
    },
  ];

  return (
    <section
      id="artisan-directory"
      className="py-24 bg-neutral-light relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="bg-primary-blue/10 text-primary-blue hover:bg-primary-blue/20 px-6 py-3 text-sm font-medium mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <Wrench className="w-4 h-4 mr-2" />
            Our Network
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-bold text-neutral-dark mb-8">
            Find Your{" "}
            <span className="text-accent-gold animate-none">
              Skilled Artisan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Connect with vetted and talented vocational graduates ready to bring
            their expertise to your projects.
          </p>
        </div>

        {allArtisans.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allArtisans.map((artisan, index) => (
              <Card
                key={artisan.id}
                className="group hover:shadow-xl transition-all duration-300 border border-muted bg-white hover:scale-105 transform animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary-blue group-hover:border-secondary-teal transition-colors duration-300">
                    <Image
                      src={artisan.image}
                      alt={artisan.name}
                      width={150}
                      height={150}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-dark mb-1">
                    {artisan.name}
                  </h3>
                  <p className="text-primary-blue font-semibold mb-2">
                    {artisan.skill}
                  </p>
                  <p className="text-gray-700 text-sm flex items-center justify-center mb-4">
                    <MapPin className="w-3 h-3 mr-1" />
                    {artisan.location}
                  </p>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {artisan.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 text-lg py-10">
            No artisans found matching your criteria.
          </div>
        )}
      </div>

      <div className="flex justify-center mt-10">
        <Button className="mt-5 w-[300px]">
          <Link href="https://handiey.com" target="_blank">
            Hire One of Us
          </Link>
        </Button>
      </div>
    </section>
  );
}
