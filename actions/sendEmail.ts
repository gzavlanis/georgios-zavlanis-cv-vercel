"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
const FormDataSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function sendEmail(prevState: null, formData: FormData) {
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