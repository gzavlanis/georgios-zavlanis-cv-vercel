import Image from "next/image";
import { ResumeData } from "@/app/lib/data";
import { Linkedin, Github } from "lucide-react";

type Props = {
    data: ResumeData['hero'];
    contact: ResumeData['contact'];
    about: ResumeData['about'];
};

export default function Hero({ data, contact, about }: Props) {
    return (
        <section className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8 overflow-hidden rounded-full border border-neutral-200 shadow-sm group">
                <Image
                    src="/profile.jpg" // Βεβαιώσου ότι η φώτο υπάρχει στο public/profile.jpg
                    alt={data.name}
                    fill
                    priority
                    className="object-cover grayscale contrast-125 transition-all duration-500 ease-in-out"
                />
            </div>

            <h1 className="font-heading text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-4 tracking-tight leading-tight">
                {data.name}
            </h1>
            <p className="font-body text-sm uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 mb-8 border-b border-neutral-100 dark:border-neutral-700 pb-8 w-1/2 mx-auto">
                {data.title}
            </p>

            <p className="font-heading italic text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
                &ldquo;{about.description}&rdquo;
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400 mb-8 font-light mt-5">
                <a href={`mailto:${contact.email}`} className="hover:text-black transition-colors flex items-center gap-1">
                    {contact.email}
                </a>
                <span className="text-neutral-300 dark:text-neutral-500 select-none">|</span>
                <span className="flex items-center gap-1 dark:text-neutral-500">{contact.phone}</span>
                <span className="text-neutral-300 select-none dark:text-neutral-500">|</span>
                <span className="flex items-center gap-1 dark:text-neutral-500">{contact.address}</span>
            </div>

            <div className="flex justify-center gap-5 text-neutral-900">
                <a
                    href={contact.socials.linkedin}
                    target="_blank"
                    aria-label="Open LinkedIn"
                    className="p-2 border border-transparent hover:border-neutral-200 text-neutral-900 dark:text-white dark:border-white rounded-full transition-all hover:bg-neutral-50 dark:hover:bg-neutral-700"
                >
                    <Linkedin strokeWidth={1.5} size={20} />
                </a>
                <a
                    href={contact.socials.github}
                    aria-label="Show Github profile page"
                    target="_blank"
                    className="p-2 border border-transparent hover:border-neutral-200 text-neutral-900 dark:text-white dark:border-white rounded-full transition-all hover:bg-neutral-50 dark:hover:bg-neutral-700"
                >
                    <Github strokeWidth={1.5} size={20} />
                </a>
            </div>
        </section>
    );
}