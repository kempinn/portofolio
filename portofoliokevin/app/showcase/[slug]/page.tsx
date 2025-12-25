import { dataProjects } from "@/app/showcase/dataprojects";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<
    {slug:string}>
}

export default async function ProjectDetails({params}:Props){
    const {slug} = await params;
    const projects= dataProjects().find(item => item.slug === slug);
    if(!projects) return notFound();

    
    return(
    <div>
        <section className="max-w-7xl mx-auto px-14 py-30">
            <div className="grid grid-cols-2 items-start gap-30">
                <div>
                    <div>
                        <h1 className="text-4xl font-bold mb-4 py-2">{projects.title}</h1>
                        <p className="text-gray-500 text-lg leading-relaxed">
                        {projects.description}
                        </p>
                    </div>
                    
                    <div>

                    </div>
                    
                    
                </div>
                
                <div>
                    tes
                </div>
            </div>  
        </section>
    </div>
    )
}
