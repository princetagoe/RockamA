import { insertContactMessageSchema } from "../shared/schema";
import { storage } from "../server/storage";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    try {
      const contactData = insertContactMessageSchema.parse(req.body);
      const savedMessage = await storage.createContactMessage(contactData);
      console.log(`\n=========== EMAIL NOTIFICATION ==========\nTO: info@rockam.ai\nFROM: ${contactData.email}\nSUBJECT: New Contact Form Submission\nNAME: ${contactData.name}\nINTEREST: ${contactData.interest}\nMESSAGE: ${contactData.message}\n========================================\n`);
      return res.status(200).json({
        success: true,
        message: "Contact message received successfully. Would be sent to info@rockam.ai in production.",
        data: savedMessage
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.message
        });
      }
      console.error("Error processing contact form:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing your request. Please try again later."
      });
    }
  } else if (req.method === "GET") {
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
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
