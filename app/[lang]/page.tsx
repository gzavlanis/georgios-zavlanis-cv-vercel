import { getDictionary } from "@/app/lib/data";
import Hero from "@/app/components/Hero";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";
import Education from "@/app/components/Education";
import Hobbies from "@/app/components/Hobbies";
import PrintButton from "@/app/components/PrintButton";
import LanguageSwitch from "@/app/components/LanguageSwitch";
import ThemeSwitch from "@/app/components/ThemeSwitch";
import {PaperEntrance, RevealSection} from "@/app/components/Motion";
import ContactForm from "@/app/components/ContactForm";

type Props = {
    params: Promise<{ lang: 'en' | 'el' }>;
};

export default async function Home({ params }: Props) {
    const { lang } = await params;
    const dict = getDictionary(lang);
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": dict.hero.name,
        "jobTitle": dict.hero.title,
        "inLanguage": lang === 'el' ? 'el-GR' : 'en-US',
        "url": "https://georgios-zavlanis.vercel.app",
        "image": "https://georgios-zavlanis.vercel.app/profile.jpg",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Athens",
            "addressCountry": "GR"
        },
        "email": dict.contact.email,
        "telephone": dict.contact.phone,
        "sameAs": [
            dict.contact.socials.linkedin,
            dict.contact.socials.github
        ]
    };

    return (
        <main className="min-h-screen py-8 md:py-16 px-4 flex justify-center items-start bg-[#f2f2f0] dark:bg-neutral-950 print:bg-white overflow-hidden transition-colors duration-300">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="print:hidden fixed top-4 right-4 z-50 flex items-center gap-3">
                <LanguageSwitch />
                <ThemeSwitch />
            </div>

            <div className="print:hidden">
                <PrintButton />
            </div>

            <PaperEntrance className="a4-paper w-full max-w-[210mm] bg-white dark:bg-[#1c1c1c] shadow-2xl dark:shadow-neutral-900 min-h-[297mm] p-8 md:p-16 relative text-neutral-900 dark:text-white transition-colors duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-neutral-900 dark:bg-white print:hidden"></div>
                <div className="space-y-12">
                    <Hero data={dict.hero} contact={dict.contact} about={dict.about} />

                    <hr className="border-t border-neutral-200 dark:border-neutral-700 my-6" />

                    <RevealSection>
                        <Experience data={dict.experience} />
                    </RevealSection>

                    <hr className="border-t border-neutral-200 dark:border-neutral-700 my-6" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 print:gap-8">
                        <RevealSection delay={0.1}>
                            <Education data={dict.education} />
                        </RevealSection>
                        <RevealSection delay={0.2}>
                            <Skills data={dict.skills} />
                        </RevealSection>
                    </div>

                    <hr className="border-t border-neutral-200 dark:border-neutral-700 my-6" />

                    <RevealSection>
                        <Hobbies data={dict.hobbies} />
                    </RevealSection>

                    <div className="print:hidden">
                        <hr className="border-t border-neutral-200 dark:border-neutral-700 my-6" />

                        <RevealSection>
                            <ContactForm data={dict.contactForm} />
                        </RevealSection>
                    </div>

                    <div className="mt-16 pt-8 border-t border-neutral-100 dark:border-neutral-800 text-center text-xs text-neutral-400 dark:text-neutral-500 font-serif italic">
                        Georgios Zavlanis • Full Stack Developer • {new Date().getFullYear()}
                    </div>
                </div>
            </PaperEntrance>
        </main>
    );
}