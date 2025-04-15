import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Shield, Code, Brain, LineChart } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface LearnMoreModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LearnMoreModal = ({ open, onOpenChange }: LearnMoreModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] glass-effect">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">NovaCore Solutions</DialogTitle>
          <DialogDescription className="text-gray-300">
            Discover how our innovative technology solutions can transform your business.
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-6">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="process">Our Process</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="space-y-4">
              <p className="text-gray-300">
                NovaCore Systems delivers cutting-edge technology solutions that help businesses 
                navigate digital transformation and achieve their strategic objectives.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-muted p-4 rounded-lg flex items-start">
                  <Brain className="text-primary mr-3 mt-1 h-5 w-5" />
                  <div>
                    <h4 className="font-medium text-white">AI & Machine Learning</h4>
                    <p className="text-sm text-gray-300">Intelligent systems that learn and adapt</p>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg flex items-start">
                  <Code className="text-primary mr-3 mt-1 h-5 w-5" />
                  <div>
                    <h4 className="font-medium text-white">Custom Development</h4>
                    <p className="text-sm text-gray-300">Tailored software for your unique needs</p>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg flex items-start">
                  <Shield className="text-primary mr-3 mt-1 h-5 w-5" />
                  <div>
                    <h4 className="font-medium text-white">Cybersecurity</h4>
                    <p className="text-sm text-gray-300">Comprehensive protection for your data</p>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg flex items-start">
                  <LineChart className="text-primary mr-3 mt-1 h-5 w-5" />
                  <div>
                    <h4 className="font-medium text-white">Data Analytics</h4>
                    <p className="text-sm text-gray-300">Transform data into actionable insights</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="benefits" className="space-y-4">
            <p className="text-gray-300">Our solutions deliver measurable business value:</p>
            
            <div className="space-y-3 mt-4">
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-medium text-white">Increased Operational Efficiency</h4>
                  <p className="text-sm text-gray-300">Our clients report an average 30% reduction in operational costs after implementation.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-medium text-white">Enhanced Customer Experience</h4>
                  <p className="text-sm text-gray-300">Personalized solutions that improve satisfaction and loyalty metrics.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-medium text-white">Future-Proof Technology</h4>
                  <p className="text-sm text-gray-300">Scalable systems that grow with your business and adapt to market changes.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Check className="text-primary mr-3 mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-medium text-white">Data-Driven Decision Making</h4>
                  <p className="text-sm text-gray-300">Advanced analytics that turn information into competitive advantage.</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="process" className="space-y-4">
            <p className="text-gray-300">Our proven methodology ensures successful outcomes:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="relative">
                <div className="absolute left-6 top-6 bottom-0 w-0.5 bg-primary/30"></div>
                <div className="bg-muted p-4 rounded-lg relative mb-4">
                  <div className="bg-primary text-background w-8 h-8 rounded-full absolute -left-4 flex items-center justify-center font-bold">1</div>
                  <div className="ml-6">
                    <h4 className="font-medium text-white">Discovery & Analysis</h4>
                    <p className="text-sm text-gray-300">Understand your business challenges and goals</p>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg relative">
                  <div className="bg-primary text-background w-8 h-8 rounded-full absolute -left-4 flex items-center justify-center font-bold">3</div>
                  <div className="ml-6">
                    <h4 className="font-medium text-white">Development & Testing</h4>
                    <p className="text-sm text-gray-300">Build and validate your solution with rigorous quality control</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-6 top-6 bottom-0 w-0.5 bg-primary/30"></div>
                <div className="bg-muted p-4 rounded-lg relative mb-4">
                  <div className="bg-primary text-background w-8 h-8 rounded-full absolute -left-4 flex items-center justify-center font-bold">2</div>
                  <div className="ml-6">
                    <h4 className="font-medium text-white">Strategic Planning</h4>
                    <p className="text-sm text-gray-300">Design a tailored solution and implementation roadmap</p>
                  </div>
                </div>
                
                <div className="bg-muted p-4 rounded-lg relative">
                  <div className="bg-primary text-background w-8 h-8 rounded-full absolute -left-4 flex items-center justify-center font-bold">4</div>
                  <div className="ml-6">
                    <h4 className="font-medium text-white">Deployment & Support</h4>
                    <p className="text-sm text-gray-300">Implement your solution and provide ongoing optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter className="mt-6">
          <Button
            onClick={() => onOpenChange(false)}
            className="bg-primary text-background font-semibold hover:bg-primary/90 glow-on-hover"
          >
            <Zap className="mr-2 h-4 w-4" />
            Book a Demo
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LearnMoreModal;