import { useLenis } from "lenis/react";
import { Mail } from "lucide-react"
import { Phone } from "lucide-react"
import { MapPin } from "lucide-react"
import { sendEmail} from "./showcase/action"

export default function ContactForm() {

    return (
        <div id="AboutMe">
            <div className ="text-center">
                <h1 className="flex justify-center mx-auto text-4xl font-bold text-center text-slate-400 py-20">
                    Get in Touch
                </h1>
                <div className="w-50 h-1 mx-auto rounded-full bg-blue-300 -mt-15"/>
                <p className="block text-center text-lg  text-gray-500 mt-5">
                    Have a project in mind? Let's work together to bring your ideas to life
                </p>
           </div >
            <div className="flex justify-center flex flex-wrap gap-10 py-15">
                <div className="group rounded-lg w-65 h-40 bg-white border border-slate-300 bg-white shadow-sm hover:shadow-lg transition-all hover:translate-y-1 flex-col flex justify-center items-center ">
                    
                    <div className="w-13 h-13 border bg-sky-100 rounded-full items-start group-hover:bg-sky-200 transition duration-300 group-hover:animate-bounce flex justify-center items-center">
                        <Mail className="text-sky-500 m-2" size={30}/>
                    </div>
                    
                    <div className="flex justify-center items-center pt-2">
                        <h1 className="text-gray-400 text-md font-bold">
                        Email
                        </h1>
                    </div>
                    
                    <div className="flex justify-center items-center mt-1">
                        <h1 className="text-gray-500 text-sm font-regular">
                        akunbuatskola@gmail.com
                        </h1>
                    </div>

                </div>
                
                <div className="group rounded-lg w-65 h-40 bg-white border border-slate-300 bg-white shadow-sm hover:shadow-lg transition-all hover:translate-y-1 flex-col flex justify-center items-center  ">
                        <div className="w-13 h-13 border bg-sky-100 rounded-full items-start group-hover:bg-sky-200 transition duration-300 group-hover:animate-bounce flex justify-center items-center">
                        <Phone className="text-sky-500 m-2" size={30}/>
                    </div>
                    
                    <div className="flex justify-center items-center pt-2">
                        <h1 className="text-gray-400 text-md font-bold">
                        Phone
                        </h1>
                    </div>
                    
                    <div className="flex justify-center items-center mt-1">
                        <h1 className="text-gray-500 text-sm font-regular">
                        +62 853-2832-2389
                        </h1>
                    </div>

                </div>

                <div className="group rounded-lg w-65 h-40 bg-white border border-slate-300 bg-white shadow-sm hover:shadow-lg transition-all hover:translate-y-1 flex-col flex justify-center items-center ">
                    <div className="w-13 h-13 border bg-sky-100 rounded-full items-start group-hover:bg-sky-200 transition duration-300 group-hover:animate-bounce flex justify-center items-center">
                        <MapPin className="text-sky-500 m-2" size={30}/>
                    </div>
                    
                    <div className="flex justify-center items-center pt-2">
                        <h1 className="text-gray-400 text-md font-bold">
                        Location
                        </h1>
                    </div>
                    
                    <div className="flex justify-center items-center mt-1">
                        <h1 className="text-gray-500 text-sm font-regular">
                        Tangerang
                        </h1>
                    </div>

                </div>
                 
            </div>
            
             <div className="flex justify-center items-center">
                <div className="w-215 h-100 border bg-white rounded-lg">
                    <div className="flex justify-center items-center pt-5">
                        <form className="w-full rounded-xl bg-white" action={sendEmail}>
                            <div className="grid grid-cols-2">
                                <div className ="flex flex-col p-3">
                                    <label className="text-gray-500 font-medium ml-5">Name</label>
                                    <input placeholder ="Your Name"
                                            required
                                            name="name"
                                            type="text" 
                                            className="placeholder-gray-400 text-gray-600 text-sm border border-gray-300 rounded-lg p-1 ml-5 mt-2 focus:outline-none focus:ring-1 focus:ring-sky-300"/>
                                </div>
                                <div className ="flex flex-col p-3">
                                    <label className="text-gray-500 font-medium mr-5">Email</label>
                                    <input placeholder="your.email@example.com" 
                                            required
                                            name="email"
                                            type="email" 
                                            className="text-gray-600 text-sm border border-gray-300 rounded-lg p-1 mr-5 mt-2 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-300"/>
                                </div>
                                <div className ="flex flex-col p-3">
                                    <label className="text-gray-500 font-medium ml-5">Subject</label>
                                    <input placeholder="Project Inquiry" 
                                            required
                                            name="subject"
                                            type="text" 
                                            className="placeholder-gray-400 text-gray-600 text-sm border border-gray-300 rounded-lg p-1 ml-5 mt-2 focus:outline-none focus:ring-1 focus:ring-sky-300"/>
                                </div>
                            </div>


                            <div className="flex flex-col p-3">
                                <label className="text-gray-500 font-medium ml-5">Message</label>
                                    <textarea
                                        required
                                        name="message"
                                        placeholder="Write your message here..." 
                                        className="w-198 placeholder-gray-400 text-gray-600 text-sm border border-gray-300 rounded-lg p-1 ml-5 mt-2 h-24 focus:outline-none focus:ring-1 focus:ring-sky-300"/>
                            </div>
                            
                            <div className="flex justify-center">
                                <button className="w-198 bg-sky-500 hover:bg-sky-600 text-white font-medium text-md py-2 px-6 rounded-lg mb-5 mt-2 transition duration-300">
                                Send Message
                                </button>
                            </div>


                        </form>
                        
                    </div>
                    
                </div>
            </div>
           
        </div>
    )
}