"use client";

import { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { ResumeData } from "@/app/lib/data";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

function SubmitButton({ label }: { label: string }) {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="group flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-heading font-bold text-sm hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            aria-label={label}
        >
            {pending ? (
                <span className="animate-pulse">Sending...</span>
            ) : (
                <>
                    {label} <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </>
            )}
        </button>
    );
}

export default function ContactForm({ data }: { data: ResumeData['contactForm'] }) {
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    async function handleSubmit(formData: FormData) {
        const result = await sendEmail(null, formData);
        if (result.success) {
            setStatus('success');
        } else {
            setStatus('error');
        }
    }

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                <CheckCircle2 size={48} className="text-green-600 dark:text-green-400 mb-4" />
                <h3 className="font-heading text-xl font-bold text-neutral-900 dark:text-white">
                    {data.success}
                </h3>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm underline text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <section className="mt-8">
            <h2 className="font-heading text-2xl font-bold mb-6 text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-700 pb-2">
                {data.title}
            </h2>

            <form action={handleSubmit} className="space-y-8 max-w-xl">
                <div className="absolute -left-2499.75" aria-hidden="true">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        tabIndex={-1}
                        autoComplete="off"
                    />
                </div>
                <div className="relative group">
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="peer w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-2 text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors placeholder-transparent"
                    />
                    <label className="absolute left-0 -top-3.5 text-xs text-neutral-600 dark:text-neutral-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neutral-900 dark:peer-focus:text-white pointer-events-none font-body">
                        {data.name}
                    </label>
                </div>

                <div className="relative group">
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your email"
                        className="peer w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-2 text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors placeholder-transparent"
                    />
                    <label className="absolute left-0 -top-3.5 text-xs text-neutral-600 dark:text-neutral-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neutral-900 dark:peer-focus:text-white pointer-events-none font-body">
                        {data.email}
                    </label>
                </div>
                <div className="relative group">
                    <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Message"
                        className="peer w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 py-2 text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors placeholder-transparent resize-none"
                    ></textarea>
                    <label className="absolute left-0 -top-3.5 text-xs text-neutral-600 dark:text-neutral-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neutral-900 dark:peer-focus:text-white pointer-events-none font-body">
                        {data.message}
                    </label>
                </div>

                {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
                        <AlertCircle size={16} />
                        {data.error}
                    </div>
                )}

                <SubmitButton label={data.btn} />
            </form>
        </section>
    );
}