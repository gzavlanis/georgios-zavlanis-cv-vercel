"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// --- Custom Black & White SVG Flags ---
const GrFlagBW = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 18" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="18" rx="1" fill="#171717"/>
        <rect y="3" width="24" height="2" fill="white"/>
        <rect y="8" width="24" height="2" fill="white"/>
        <rect y="13" width="24" height="2" fill="white"/>
        <rect width="10" height="10" fill="#171717"/>
        <rect x="4" width="2" height="10" fill="white"/>
        <rect y="4" width="10" height="2" fill="white"/>
        <rect width="24" height="18" rx="1" fill="none" stroke="#171717" strokeOpacity="0.1" strokeWidth="0.5"/>
    </svg>
);

const UsFlagBW = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 18" className={className} xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="18" rx="1" fill="#171717"/>
        <rect y="2" width="24" height="2" fill="white"/>
        <rect y="6" width="24" height="2" fill="white"/>
        <rect y="10" width="24" height="2" fill="white"/>
        <rect y="14" width="24" height="2" fill="white"/>
        <rect width="10" height="9" fill="#171717"/>
        <circle cx="2.5" cy="2.5" r="0.8" fill="white"/>
        <circle cx="5" cy="2.5" r="0.8" fill="white"/>
        <circle cx="7.5" cy="2.5" r="0.8" fill="white"/>
        <circle cx="2.5" cy="5" r="0.8" fill="white"/>
        <circle cx="5" cy="5" r="0.8" fill="white"/>
        <circle cx="7.5" cy="5" r="0.8" fill="white"/>
        <circle cx="3.75" cy="7" r="0.8" fill="white"/>
        <circle cx="6.25" cy="7" r="0.8" fill="white"/>
        <rect width="24" height="18" rx="1" fill="none" stroke="#171717" strokeOpacity="0.1" strokeWidth="0.5"/>
    </svg>
);

// --- Main Component ---
export default function LanguageSwitch() {
    const pathname = usePathname();
    const isGreek = pathname.startsWith("/el");

    return (
        <div className="fixed top-4 right-4 z-50 print:hidden">
            <Link
                href={isGreek ? "/en" : "/el"}
                className="pl-3 pr-4 py-2 bg-white/95 backdrop-blur shadow-[0_2px_8px_rgba(0,0,0,0.08)] rounded-full font-bold text-sm hover:bg-neutral-50 transition-all border border-neutral-200 text-neutral-800 flex items-center gap-3 group"
            >
                {isGreek ? (
                    <>
                        <UsFlagBW className="w-6 h-auto shadow-sm group-hover:shadow transition-shadow" />
                        <span className="font-lato tracking-wide">English</span>
                    </>
                ) : (
                    <>
                        <GrFlagBW className="w-6 h-auto shadow-sm group-hover:shadow transition-shadow" />
                        <span className="font-lato tracking-wide">Ελληνικά</span>
                    </>
                )}
            </Link>
        </div>
    );
}