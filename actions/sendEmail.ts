"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const FormDataSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function sendEmail(prevState: never, formData: FormData) {
    const data = Object.fromEntries(formData.entries());
    const result = FormDataSchema.safeParse(data);

    if (!result.success) {
        return { success: false, error: "Validation failed" };
    }

    const { name, email, message } = result.data;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: process.env.SMTP_EMAIL,
            replyTo: email,
            subject: `New Message from ${name} (Portfolio)`,
            text: message,
            html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #333; margin: 0;">
            ${message.replace(/\n/g, '<br>')}
          </blockquote>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Email Error:", error);
        return { success: false, error: "Failed to send email" };
    }
}