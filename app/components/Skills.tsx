import { ResumeData } from "@/app/lib/data";
import { StaggerContainer, StaggerItem } from "@/app/components/Motion";

export default function Skills({ data }: { data: ResumeData['skills'] }) {
    return (
        <section>
            <h2 className="font-heading text-2xl font-bold mb-6 text-neutral-900 border-b border-neutral-200 pb-2">
                {data.title}
            </h2>

            <StaggerContainer className="flex flex-wrap gap-x-4 gap-y-2">
                {data.list.map((skill, index) => (
                    <StaggerItem key={index} className="inline-block">
                        <span className="text-neutral-700 font-light font-body border-b border-neutral-100 pb-0.5">
                            {skill}
                        </span>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </section>
    );
}