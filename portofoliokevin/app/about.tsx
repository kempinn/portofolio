import { Briefcase, Users, Award, Download} from "lucide-react"
export default function About() {
    return (
        <div id="About">
           <div className ="text-center">
                <h1 className="flex justify-center text-4xl font-bold text-center text-slate-400 py-20">
                    About Me
                </h1>
                <div className="w-20 h-1 mx-auto rounded-full bg-blue-300 -mt-15"/>
                
           </div>

           
            
           <div className="grid grid-cols-2 gap-x-10 mb-10 items-center px-40 py-20">
                
                <div className="space-y-4">
                    <h1 className="text-3xl text-gray-400 font-semibold">
                        Driven by Data,Empowered by Strategy
                    </h1>
                    <div className="space-y-2">
                        <p className="text-gray-500 leading-relaxed">
                            I’m a Binus University graduate passionate about exploring the synergy between business and data. With a strong foundation in information technology and business analysis, I aim to bridge the gap between strategic decision-making and data-driven insights.
                        </p>
                        <p className="text-gray-500 leading-relaxed">
                            My interest lies in analyzing complex business processes, identifying improvement opportunities, and transforming raw data into meaningful solutions that drive organizational growth. As both an aspiring IT Business Analyst and Data Analyst, I thrive on connecting technical understanding with real business impact.
                        </p>
                        <p className="text-gray-500 leading-relaxed">
                            I’m highly motivated to keep learning about data analytics tools, visualization techniques, and business process optimization. My goal is to contribute to innovative projects where I can help organizations make smarter, data-backed decisions while enhancing their digital transformation journey.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-5 mt-5">
                        
                        <div className="rounded-lg w-50 h-25 bg-white border border-slate-300 bg-white shadow-sm hover:shadow-lg transition-all hover:translate-y-1">
                            <Briefcase className="text-sky-500 mx-auto mt-3"size={18}/>
                            <h1 className="font-semibold text-xl text-center mt-2 text-gray-700">
                                1
                                <span className="relative -top-2 text-sm text-gray-400">
                                    Year
                                </span>
                            </h1>
                            <h2 className="text-sm text-center text-gray-500 ">
                                Internship Experience
                            </h2>
                        </div>

                        <div className="rounded-lg w-50 h-25 bg-white border border-slate-300 bg-white shadow-sm hover:shadow-lg transition-all hover:translate-y-1">
                            <Users className="text-sky-500 mx-auto mt-3" size={18}/>
                            <h1 className="font-semibold text-xl text-center mt-2 text-gray-700">
                                10
                                <span className="relative -top-2 text-sm text-gray-400">
                                    +  
                                </span>
                            </h1>
                            <h2 className="text-sm text-center text-gray-500">
                                Project Delivered
                            </h2>

                        </div>

                         <div className="rounded-lg w-50 h-25 bg-white border border-slate-300 bg-white shadow-sm hover:shadow-lg transition-all hover:translate-y-1">
                            <Award className="text-sky-500 mx-auto mt-3" size={18}/>
                            <h1 className="font-semibold text-xl text-center mt-2 text-gray-700">
                                2
                                <span className="relative -top-2 text-sm text-gray-400">
                                    +
                                </span>
                            </h1>
                            <h2 className="text-sm text-center text-gray-500 ">
                                Certification Achieved
                            </h2>
                        </div>

                    </div>
                
                    <div>
                        <a 
                        href="/CV_Kevin.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <button className="group flex items-center justify-center bg-sky-500 text-white mt-5 px-5 py-2 gap-3 rounded-lg full hover:bg-sky-600 transition duration-300">
                            Download my CV
                            <Download size={18}></Download>
                        </button>
                        </a>
                        

                        
                    </div>
                    
                </div>
                <div className="flex justify-center">
                    <img src="/images/fotokevin.jpg" alt="Kevin Photo" className="w-110 h-130 rounded-md object-cover -translate-y-5"/>
                </div>

            </div>
        </div>
    )
}
