"use client";

import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

export function FaqSection() {
  const faqItems: FAQItem[] = [
    {
      question: "What is Starbornlab Kenya's primary mission?",
      answer:
        "Our primary mission is to empower vocational skills graduates by connecting them with opportunities for employment, entrepreneurship, and digital transformation across East Africa.",
    },
    {
      question: "How does Handiey.com work?",
      answer:
        "Handiey.com is a digital marketplace where clients can find and hire skilled artisans (plumbers, welders, carpenters, etc.) vetted by Starbornlab Kenya for various job opportunities. It provides visibility and job access for our trained graduates.",
    },
    {
      question: "What is ValveCycle?",
      answer:
        "ValveCycle is our bicycle rental and mobility initiative. It promotes eco-friendly transport, fitness, and adventure in rural Kenya, offering services like fitness cycling, tourism exploration, and competitive adventure circuits.",
    },
    {
      question: "How can I partner with Starbornlab Kenya?",
      answer:
        "We welcome partnerships with county governments, NGOs, TVET institutions, and financial institutions. Please visit our 'Get Involved' section or contact us directly to explore collaboration opportunities.",
    },
    {
      question: "Do you offer digital marketing services for businesses?",
      answer:
        "Yes, we provide cutting-edge digital marketing, brand strategy, and web development services tailored for schools, small businesses, NGOs, and community organizations.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20 animate-fade-in-up">
          <Badge className="bg-secondary-teal/10 text-secondary-teal hover:bg-secondary-teal/20 px-6 py-3 text-sm font-medium mb-6 shadow-lg transform hover:scale-105 transition-all duration-300">
            <HelpCircle className="w-4 h-4 mr-2" />
            FAQs
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-bold text-neutral-dark mb-8">
            Common{" "}
            <span className="text-accent-gold animate-none">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Find answers to the most frequently asked questions about our
            mission, initiatives, and how you can get involved.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-muted"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-neutral-dark hover:text-primary-blue transition-colors duration-300">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed py-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
