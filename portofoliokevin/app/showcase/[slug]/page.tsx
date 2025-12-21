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
            test detail page {projects.title}   
        </div>
    )
}
