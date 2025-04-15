import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ScrollLink from "@/components/scroll-link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface IndustryDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  image: string;
}

const IndustryDetailModal = ({ 
  open, 
  onOpenChange, 
  title, 
  description, 
  image 
}: IndustryDetailModalProps) => {
  // Generate dummy case studies based on industry
  const caseStudies = [
    {
      title: `${title} Digital Transformation`,
      company: `${title} Industry Leader`,
      description: `How we helped a leading ${title.toLowerCase()} company modernize their operations and achieve 40% efficiency increase.`
    },
    {
      title: `AI Implementation in ${title}`,
      company: `${title} Innovators Inc.`,
      description: `Implementing machine learning solutions to solve complex challenges in the ${title.toLowerCase()} sector.`
    }
  ];
  
  // Generate typical challenges based on industry
  const challenges = [
    `Digital transformation in ${title.toLowerCase()} environments`,
    `Data security and compliance requirements`,
    `Integration with legacy systems`,
    `Scaling operations while maintaining quality`
  ];
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] glass-effect p-0 overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={`${title} industry`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
          <div className="absolute bottom-0 p-6">
            <h2 className="text-3xl font-bold text-white">{title}</h2>
          </div>
        </div>
        
        <div className="p-6">
          <Tabs defaultValue="overview" className="mt-2">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
              <TabsTrigger value="casestudies">Case Studies</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <p className="text-gray-300">
                {description}
              </p>
              <p className="text-gray-300">
                NovaCore Systems delivers specialized solutions for the {title.toLowerCase()} industry, 
                helping organizations navigate complex challenges while staying ahead of the competition.
              </p>
              
              <div className="bg-muted p-4 rounded-lg mt-6">
                <h4 className="font-semibold text-white mb-2">Our {title} Approach</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4" />
                    <span className="text-gray-300">Industry-specific solutions tailored to your unique needs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4" />
                    <span className="text-gray-300">Regulatory compliance and security built-in from the ground up</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 mt-1 h-4 w-4" />
                    <span className="text-gray-300">Seamless integration with your existing technology ecosystem</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="challenges" className="space-y-4">
              <p className="text-gray-300 mb-4">
                The {title} industry faces unique challenges in today's rapidly evolving technological landscape:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-300">{challenge}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-300 mt-4">
                Our technology solutions address these challenges head-on, providing you with the tools and expertise needed to thrive.
              </p>
            </TabsContent>
            
            <TabsContent value="casestudies" className="space-y-4">
              <p className="text-gray-300 mb-4">
                See how we've helped other {title} organizations achieve their goals:
              </p>
              
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-white">{study.title}</h4>
                  <p className="text-primary text-sm mb-2">{study.company}</p>
                  <p className="text-gray-300 text-sm mb-3">{study.description}</p>
                  <Button 
                    variant="link" 
                    className="p-0 text-primary font-medium flex items-center hover:gap-1 transition-all"
                  >
                    Read case study <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <DialogFooter className="px-6 pb-6">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-gray-600 text-gray-300 hover:text-white"
          >
            Close
          </Button>
          <Button 
            className="bg-primary text-background font-semibold hover:bg-primary/90 glow-on-hover"
            asChild
          >
            <ScrollLink to="/contact" onClick={() => onOpenChange(false)}>
              Contact Our {title} Team
            </ScrollLink>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default IndustryDetailModal;