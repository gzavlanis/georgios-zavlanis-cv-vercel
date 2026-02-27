"use server";

import { Resend } from "resend";
import { z } from "zod";

const FormDataSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.string().email("Invalid email address"),
    message: z.string()
        .min(10, "Message must be at least 10 characters")
        .max(5000, "Message is too long")
        .refine((val) => !/(http|https|www\.)/i.test(val), {
            message: "Links are not allowed in the message.",
        })
        .refine((val) => !/<[^>]*>/g.test(val), {
            message: "HTML tags are not allowed.",
        })
        .refine((val) => !/[Α-яЁё]/i.test(val), {
            message: "Cyrillic characters are not supported.",
        }),
});

export type ContactFormState = {
    success: boolean;
    error?: string;
};

export async function sendEmail(prevState: ContactFormState | null, formData: FormData) {
    if (formData.get("address")) {
        console.warn("Spam bot detected and blocked.");
        return { success: true };
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error("❌ MISSING RESEND_API_KEY in .env file");
        return { success: false, error: "Server configuration error (Missing API Key)" };
    }

    const resend = new Resend(apiKey);
    const data = Object.fromEntries(formData.entries());
    const result = FormDataSchema.safeParse(data);

    if (!result.success) {
        return { success: false, error: "Validation failed" };
    }

    const { name, email, message } = result.data;

    try {
        const data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "gzavlanis@gmail.com",
            replyTo: email,
            subject: `New Message from ${name} (Portfolio)`,
            text: message,
            html: `
                <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
                    <h3>You have a new message!</h3>
                    <p><strong>From:</strong> ${name} (${email})</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p><strong>Message:</strong></p>
                    <blockquote style="background: #f9f9f9; padding: 15px; border-left: 4px solid #000;">
                        ${message.replace(/\n/g, '<br>')}
                    </blockquote>
                </div>
            `
        });

        if (data.error) {
            console.error("Resend API Error:", data.error);
            return { success: false, error: "Failed to send email" };
        }

        return { success: true };
    } catch (error) {
        console.error("Server Error:", error);
        return { success: false, error: "Failed to send email" };
    }
}