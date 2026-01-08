import { ResumeData } from "@/app/lib/data";
import { Camera, Plane, BookOpen } from "lucide-react";

const iconMap = {
    travel: Plane,
    camera: Camera,
    book: BookOpen,
};

export default function Hobbies({ data }: { data: ResumeData['hobbies'] }) {
    return (
        <section>
            <h2 className="font-heading text-2xl font-bold mb-6 text-neutral-900 border-b border-neutral-200 pb-2">
                {data.title}
            </h2>

            <div className="flex justify-between md:justify-start md:gap-16">
                {data.list.map((hobby, index) => {
                    const IconComponent = iconMap[hobby.icon as keyof typeof iconMap] || BookOpen;

                    return (
                        <div key={index} className="flex flex-col items-center gap-3 group">
                            <div className="p-4 rounded-full border border-neutral-200 group-hover:border-neutral-900 group-hover:bg-neutral-50 transition-all duration-300">
                                <IconComponent
                                    size={24}
                                    strokeWidth={1.5}
                                    className="text-neutral-600 group-hover:text-neutral-900 transition-colors"
                                />
                            </div>
                            <span className="text-sm font-medium text-neutral-600 font-body tracking-wide group-hover:text-neutral-900">
                {hobby.name}
              </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}