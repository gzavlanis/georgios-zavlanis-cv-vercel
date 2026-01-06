import { getDictionary } from "@/app/lib/data";
import Hero from "@/app/components/Hero";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";
import Education from "@/app/components/Education.jsx";
import PrintButton from "@/app/components/PrintButton";
import LanguageSwitch from "@/app/components/LanguageSwitch";

type Props = {
    params: Promise<{ lang: 'en' | 'el' }>;
};

export default async function Home({ params }: Props) {
    const { lang } = await params;
    const dict = getDictionary(lang);

    return (
        <main className="min-h-screen py-8 md:py-16 px-4 flex justify-center items-start bg-[#f2f2f0] print:bg-white">

            <div className="print:hidden">
                <LanguageSwitch />
                <PrintButton />
            </div>

            <div className="a4-paper w-full max-w-[210mm] bg-white shadow-2xl min-h-[297mm] p-8 md:p-16 relative text-neutral-900">
                <div className="absolute top-0 left-0 w-full h-2 bg-neutral-900 print:hidden"></div>
                <div className="space-y-12">
                    {/* Περνάμε τα μεταφρασμένα δεδομένα */}
                    <Hero data={dict.hero} contact={dict.contact} />

                    <hr className="border-t border-neutral-200 my-6" />

                    <Experience data={dict.experience} />

                    <hr className="border-t border-neutral-200 my-6" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 print:gap-8">
                        <Education data={dict.education} />
                        <Skills data={dict.skills} />
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-neutral-100 text-center text-xs text-neutral-400 font-serif italic">
                    Georgios Zavlanis • Full Stack Developer • {new Date().getFullYear()}
                </div>
            </div>
        </main>
    );
}