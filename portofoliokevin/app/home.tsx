import { Mail,Linkedin} from "lucide-react"
import { ViewMyWorkScroll } from "./iteractive"
import { ContactMeScroll } from "./iteractive"
export default function Home() {

    return (
        <div id="Home" className="relative flex flex-col justify-center items-center py-35 space-y-5 border-b-2 border-sky-500 min-h-screen w-full" >
            <h1 className="text-2xl text-center text-sky-500 font-semibold">
                Welcome to My Portofolio
            </h1>
            <h1 className="text-8xl text-center space-y-3">
                <span className="block text-slate-300 font-bold">
                    Business Analyst
                </span>
                <span className="block text-sky-300 font-bold">
                    and Data Analyst
                </span>
            </h1>
            <h1 className ="text-xl font-semibold text-gray-400 py-10">
                <span className ="block text-center">
                    Driving business growth through 
                </span>
                <span className="block text-center">
                    strategic analysis, data-driven insights, and process optimization.
                </span>
            </h1>
            
            <div className="flex items-center justify-center gap-4">
                <ViewMyWorkScroll />
                <ContactMeScroll />
            </div>
            
            <div className="flex items-center justify-center mt-5 gap-5 cursor-pointer text-sky-500 ">
            
                <a href="mailto:akunbuatskola@gmail.com">
                <Mail className="text-gray-500 hover:text-sky-500 transition duration-300" size={35}></Mail>
                </a>
                <a 
                href="https://www.linkedin.com/in/portokevin/"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Linkedin className="text-gray-500 hover:text-sky-500 transition duration-300" size={35}></Linkedin>
                </a>
                
            </div>

            <div className=" relative z-10 flex justify-center mt-5">
                <div className="relative z-10 w-6 h-10 border-2 border-sky-300 rounded-full flex justify-center animate-bounce">
                    <div className="relative z-10 w-1 h-2 bg-sky-500 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
         </div>
    )
}