import { dataProjects } from "@/app/showcase/dataprojects";
import { dataCertificate } from "../dataCertificate";
import { notFound } from "next/navigation";
import { Wrench, FileText,Notebook,CircleDot, Star, Circle} from "lucide-react"
import GetImages from "./getImages";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


interface Props {
    params: Promise<
    {slug:string}>
    searchParams: Promise<{ from?: string }>;
}


export default async function ProjectDetails({params, searchParams}:Props){
    const {slug} = await params;
    const { from } = await searchParams;
    const projects= dataProjects().find(item => item.slug === slug);
    if(!projects) return notFound();
    
    let backLink = "/showcase/all-projects";
    let backText = "Back to All Projects";

   if (from === "all") {
        backLink = "/showcase/all-projects";
        backText = "Back to All Projects";
    } else if (from === "home") {
        backLink = "/?tab=projects#projects";
        backText = "Back to Showcase";
    }

    return(
    <div className="bg-white">
        <div className="max-w-7xl mx-auto px-14 pt-10">
                <Link 
                    href={backLink} 
                    className="group inline-flex items-center gap-2 text-gray-500 hover:text-sky-500 transition-colors font-medium"
                >
                    <div className="p-2 rounded-full bg-gray-50 group-hover:bg-sky-50 transition-colors">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    </div>
                    <span>{backText}</span>
                </Link>
            </div>
        <section className="max-w-7xl mx-auto px-14 py-30">
            <div className="grid grid-cols-2 items-start gap-30">
                <div>
                    <div>
                        <h1 className="text-slate-400 text-4xl font-bold mb-4 py-2">{projects.title}</h1>
                        <p className="text-gray-500 text-lg leading-relaxed">
                        {projects.description2}
                        </p>
                    </div>
                    
                    <div className="flex items-start gap-4 mt-7">
                        {/*card technologies*/}
                        <div className="flex flex-1 items-center h-20 gap-4 rounded-2xl border border-gray-200 bg-white shadow-sm">
                            <div className="flex h-12 w-12 items-center ml-5 justify-center rounded-xl bg-blue-50 text-blue-500">
                                <Wrench className="flex items-center h-6 w-6" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-xl font-semibold text-gray-900">{projects.tools}</h3>
                                <p className="text-sm text-gray-500">Tools</p>
                            </div>
                            
                        </div>
                         <div className="flex flex-1 items-center h-20 gap-4 rounded-2xl border border-gray-200 bg-white shadow-sm">
                            <div className="flex h-12 w-12 items-center ml-5 justify-center rounded-xl bg-blue-50 text-blue-500">
                                <FileText className="flex items-center h-6 w-6" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-xl font-semibold text-gray-900">{projects.documentation}</h3>
                                <p className="text-sm text-gray-500">Documentations</p>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <a 
                        href={projects.link} // Mengambil link dari array dataProjects secara otomatis
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                        >
                        <button className="group flex items-center justify-center bg-sky-500 mt-4 text-white px-5 py-2 rounded-2xl hover:bg-sky-600 transition duration-300">
                        <Notebook className="h-5 w-5 mr-2 text-white group-hover:text-white"/>
                        <p className="text-white group-hover:text-white">Documentation</p>
                        </button>
                        </a>
                    </div>
                    <div className="flex flex-row gap-2 mt-10">
                        <Wrench className="h-6 w-6 text-blue-300" />
                        <p className="text-medium font-regular text-gray-500">
                            Used Tools
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap flex-1 gap-2 mt-3">
                    {projects.toolsused?.map((toolused, index) => (
                        <div key={index} className="group inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-4 py-1.5 hover:bg-blue-100 transition duration-300">
                        <Wrench className="h-3 w-3 text-sky-500" />
                        <p className="text-sm font-regular text-sky-500">{toolused}</p>
                        </div>
                    ))}
                    </div>

                    <div className="flex flex-row gap-5 mt-10">
                        <CircleDot className="h-5 w-5 text-blue-300 " />
                        <p className="text-medium font-regular text-gray-500">
                            Build Process
                        </p>
                    </div>
                        <div className="flex flex-col gap-6 mt-4">
                            {projects.process?.map((process, index) => (
                            <div key={index} className="flex gap-6">
                                <div className="flex flex-col items-center shrink-0">
                                    <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-white z-10 mt-1.5" />
                                        {index !== projects.process.length - 1 && (
                                        <div className="w-px flex-1 bg-blue-200" />
                                    )}
                                </div>
                            <div>
                                <h4 className="font-semibold text-gray-900">
                                    {process.title}
                                </h4>
                                <p className="text-sm text-gray-500 mt-1">
                                    {process.description}
                                </p>
                            </div>
                            </div>
                             ))}
                    

                    </div>
                    
                </div>
                
                <div>
                  {projects.images && <GetImages images={projects.images} /> }
                  <div>
                    <div className="w-full h-auto mt-8 bg-white rounded-2xl p-6 border border-gray-200 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.1)]">
                        <h3 className="text-lg font-semibold mb-5 flex items-center gap-2 text-gray-500">
                            <Star className="text-blue-500 w-6 h-6" /> Designed Features
                        </h3>
                        {projects.features?.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 mb-4">
                                <div className="mt-1">
                                    <Circle className="h-4 w-4 text-blue-500" />
                                </div>
                                <p className="text-gray-600">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
                 
                 
            </div>  
        </section>
    </div>
    )
}
