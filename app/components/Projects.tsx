"use client";

import { useRef } from "react";
import { ResumeData } from "@/app/lib/data";
import { Github, Globe, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Projects({ data }: { data: ResumeData['projects'] }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -320 : 320;
            current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="relative group print:hidden">
            <div className="flex justify-between items-end mb-6 border-b border-neutral-200 dark:border-neutral-700 pb-2">
                <h2 className="font-heading text-2xl font-bold text-neutral-900 dark:text-white">
                    {data.title}
                </h2>
                <div className="hidden md:flex gap-2 mb-1">
                    <button
                        onClick={() => scroll('left')}
                        className="p-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors"
                        aria-label="Scroll Left"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors"
                        aria-label="Scroll Right"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
            <div
                ref={scrollRef}
                className="
            flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4
            scrollbar-hide scroll-smooth
            print:grid print:grid-cols-2 print:overflow-visible print:pb-0
        "
            >
                {data.list.map((project, index) => (
                    <div
                        key={index}
                        className="
                snap-center shrink-0
                w-[85vw] md:w-[calc(50%-12px)]
                print:w-full print:break-inside-avoid
                flex flex-col p-5 rounded-xl border border-neutral-200 dark:border-neutral-800
                bg-neutral-50/50 dark:bg-neutral-800/30
                hover:border-neutral-900 dark:hover:border-neutral-600 transition-all duration-300
            "
                    >
                        <h3 className="font-bold text-neutral-900 dark:text-white font-heading text-lg mb-2 flex items-center gap-2">
                            {project.name}
                            {project.repoUrl && <ArrowUpRight size={14} className="text-neutral-600" />}
                        </h3>

                        <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4 line-clamp-2 h-10 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-6">
                            {project.tech.slice(0, 3).map((tech) => (
                                <span key={tech} className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 font-mono">
                        {tech}
                    </span>
                            ))}
                        </div>
                        <div className="mt-auto flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-700/50">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 dark:text-white hover:underline decoration-neutral-400 underline-offset-4"
                                >
                                    <Globe size={14} className="text-neutral-600 dark:text-neutral-300" />
                                    Live Demo
                                </a>
                            )}

                            {project.liveUrl && project.repoUrl && (
                                <span className="text-neutral-300 dark:text-neutral-700">|</span>
                            )}

                            <a
                                href={project.repoUrl}
                                aria-label="Show source code of the project"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                            >
                                <Github size={14} />
                                Source Code
                            </a>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}