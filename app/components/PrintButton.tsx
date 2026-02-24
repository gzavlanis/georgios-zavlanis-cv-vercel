"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
    return (
        <button
            onClick={() => window.print()}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-full shadow-lg hover:bg-neutral-800 transition-all hover:scale-105 print:hidden"
            aria-label="Save as PDF"
        >
            <Printer size={18} />
            <span className="font-lato font-medium text-sm">Save as PDF</span>
        </button>
    );
}