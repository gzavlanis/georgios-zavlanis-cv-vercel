import {ResumeData} from "@/app/lib/data";

export default function Skills({ data }: { data: ResumeData['skills'] }) {
    return (
        <section>
            <h2 className="font-playfair text-2xl font-bold mb-6 text-neutral-900 border-b border-neutral-200 pb-2">
                {data.title}
            </h2>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
                {data.list.map((skill, index) => (
                    <span key={index} className="text-neutral-700 font-light border-b border-neutral-100 pb-0.5">
            {skill}
          </span>
                ))}
            </div>
        </section>
    );
}