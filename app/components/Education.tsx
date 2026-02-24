import {ResumeData} from "@/app/lib/data";

export default function Education({ data }: { data: ResumeData['education'] }) {
    return (
        <section>
            <h2 className="font-playfair text-2xl font-bold mb-6 text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-white pb-2">
                {data.title}
            </h2>
            <div className="space-y-6">
                {data.items.map((item, index) => (
                    <div key={index}>
                        <h3 className="font-bold text-neutral-800 dark:text-white">{item.institution}</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 italic font-serif">{item.degree}</p>
                        <p className="text-xs text-neutral-600 dark:text-neutral-500 mt-1">{item.period}</p>
                        {item.details && (
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 font-light">{item.details}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}