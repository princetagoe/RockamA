import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const contactData = insertContactMessageSchema.parse(req.body);
      
      // Store the contact message
      const savedMessage = await storage.createContactMessage(contactData);
      
      // Log email details (since we can't actually send the email without appropriate packages)
      console.log(`
=========== EMAIL NOTIFICATION ==========
TO: info@rockam.ai
FROM: ${contactData.email}
SUBJECT: New Contact Form Submission
NAME: ${contactData.name}
INTEREST: ${contactData.interest}
MESSAGE: ${contactData.message}
========================================
      `);
      
      // Return success response
      return res.status(200).json({
        success: true,
        message: "Contact message received successfully. Would be sent to info@rockam.ai in production.",
        data: savedMessage
      });
    } catch (error) {
      // Handle validation errors
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.message
        });
      }
      
      // Handle other errors
      console.error("Error processing contact form:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing your request. Please try again later."
      });
    }
  });

  // GET endpoint to retrieve all contact messages (for testing/admin purposes)
  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json({
        success: true,
        data: messages
      });
    } catch (error) {
      console.error("Error retrieving contact messages:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while retrieving contact messages."
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
