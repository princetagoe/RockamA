import { LucideIcon, Check, BarChart, Clock, Users, ServerIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScrollLink from "@/components/scroll-link";

interface SolutionDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

const SolutionDetailModal = ({ 
  open, 
  onOpenChange, 
  title, 
  description, 
  icon: Icon,
  image 
}: SolutionDetailModalProps) => {
  // Generate features based on solution type
  const features = [
    `State-of-the-art ${title} technology`,
    `Fully customizable to your business needs`,
    `24/7 expert support and maintenance`,
    `Seamless integration with existing systems`
  ];
  
  // Generate benefits data
  const benefits = [
    {
      title: "Increased Efficiency",
      description: `Our ${title} solutions streamline operations and reduce manual work.`,
      icon: Clock
    },
    {
      title: "Data-Driven Insights",
      description: `Transform raw data into actionable intelligence for better decision making.`,
      icon: BarChart
    },
    {
      title: "Enhanced Collaboration",
      description: `Improve team productivity and communication across your organization.`,
      icon: Users
    },
    {
      title: "Scalable Architecture",
      description: `Solutions that grow with your business and adapt to changing needs.`,
      icon: ServerIcon
    }
  ];
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] glass-effect">
        <DialogHeader className="flex flex-row items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
            <Icon className="text-primary h-6 w-6" />
          </div>
          <div>
            <DialogTitle className="text-2xl font-bold text-white">{title}</DialogTitle>
            <DialogDescription className="text-gray-300">
              Advanced technology solutions to drive innovation and growth
            </DialogDescription>
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-6">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            {image && (
              <div className="w-full h-56 rounded-lg overflow-hidden mb-4">
                <img 
                  src={image} 
                  alt={`${title} solution`} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <p className="text-gray-300">
              {description}
            </p>
            
            <p className="text-gray-300">
              NovaCore's {title} solutions are built on cutting-edge technology and industry best practices, 
              designed to help your business thrive in today's competitive landscape.
            </p>
            
            <div className="bg-muted p-4 rounded-lg mt-4">
              <h4 className="font-semibold text-white mb-2">Why Choose Our {title} Solutions?</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                  <span className="text-gray-300">Industry-leading expertise and implementation experience</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                  <span className="text-gray-300">Tailored approach that addresses your specific challenges</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                  <span className="text-gray-300">Continuous innovation and technology updates</span>
                </li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="features" className="space-y-4">
            <p className="text-gray-300 mb-4">
              Our {title} solutions include a comprehensive set of features designed to maximize value:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                      <Check className="text-primary h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Feature {index + 1}</p>
                      <p className="text-gray-300 text-sm">{feature}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-gray-300 mt-4">
              All features can be customized to match your specific requirements and business objectives.
            </p>
          </TabsContent>
          
          <TabsContent value="benefits" className="space-y-4">
            <p className="text-gray-300 mb-4">
              Implementing our {title} solutions offers numerous benefits to your organization:
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, index) => {
                const BenefitIcon = benefit.icon;
                return (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-primary/20 p-2 rounded-lg mr-3">
                        <BenefitIcon className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{benefit.title}</h4>
                        <p className="text-gray-300 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-6">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-gray-600 text-gray-300 hover:text-white"
          >
            Close
          </Button>
          <Button 
            className="bg-primary text-background font-semibold hover:bg-primary/90 glow-on-hover"
            onClick={() => {
              onOpenChange(false);
              // This would navigate to the Contact page with the solution pre-selected
            }}
            asChild
          >
            <ScrollLink to="/contact">Request a Consultation</ScrollLink>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SolutionDetailModal;