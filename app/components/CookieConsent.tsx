"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

declare global {
    interface Window {
        gtag?: (
            command: "consent",
            action: "update" | "default",
            config: { analytics_storage: "granted" | "denied" }
        ) => void;
    }
}

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "accepted");
        setIsVisible(false);
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag("consent", "update", {
                analytics_storage: "granted",
            });
        }
    };

    const handleDecline = () => {
        localStorage.setItem("cookie_consent", "declined");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-90 z-50 p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl animate-in slide-in-from-bottom-10 fade-in duration-500 print:hidden">
            <div className="flex justify-between items-start mb-3">
                <h3 className="font-heading font-bold text-lg text-neutral-900 dark:text-white">
                    I use cookies too 🍪
                </h3>
                <button
                    onClick={handleDecline}
                    className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    aria-label="Close dialog"
                >
                    <X size={18} />
                </button>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                I use Google Analytics to understand how you interact with the site and improve your experience. Do you accept the use of analytics cookies?
            </p>
            <div className="flex gap-3">
                <button
                    onClick={handleAccept}
                    className="flex-1 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-bold py-2.5 rounded-xl hover:opacity-90 transition-opacity"
                >
                    Accept
                </button>
                <button
                    onClick={handleDecline}
                    className="flex-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm font-medium py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                >
                    Decline
                </button>
            </div>
        </div>
    );
}