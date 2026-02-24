import {ResumeData} from "@/app/lib/data";

export default function Experience({ data }: { data: ResumeData['experience'] }) {
    return (
        <section>
            <h2 className="font-playfair text-3xl font-bold mb-8 text-neutral-900 dark:text-neutral-300 border-l-4 border-neutral-900 dark:border-white pl-4">
                {data.title}
            </h2>

            <div className="space-y-10">
                {data.jobs.map((job, index) => (
                    <div key={index} className="group">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                            <h3 className="text-xl font-bold text-neutral-600 dark:text-neutral-300">{job.role}</h3>
                            <span className="font-serif italic text-neutral-600 dark:text-neutral-300">{job.period}</span>
                        </div>

                        <div className="text-sm font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-4">
                            {job.company} • {job.location}
                        </div>

                        <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-600 dark:text-neutral-300 leading-relaxed font-light text-justify">
                            {job.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}