import { Mail, Phone, MapPin } from "lucide-react"
import { sendEmail } from "./showcase/action"

export default function ContactForm() {
    return (
        <div className="font-sans px-6 pb-20" id="AboutMe">
            {/* Header Section */}
            <div className="text-center">
                <h1 className="flex justify-center mx-auto text-3xl md:text-4xl font-bold text-center text-slate-400 pt-20 pb-10">
                    Get in Touch
                </h1>
                <div className="w-24 md:w-50 h-1 mx-auto rounded-full bg-blue-300 -mt-5" />
                <p className="block text-center text-base md:text-lg text-gray-500 mt-8 max-w-2xl mx-auto">
                    Have a project in mind? Let's work together to bring your ideas to life
                </p>
            </div>

            {/* Info Cards Section */}
            <div className="flex justify-center flex-wrap gap-6 md:gap-10 py-15">
                {/* Email Card */}
                <div className="group rounded-lg w-full sm:w-65 h-40 bg-white border border-slate-300 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 flex-col flex justify-center items-center">
                    <div className="w-13 h-13 border bg-sky-100 rounded-full group-hover:bg-sky-200 transition duration-300 group-hover:animate-bounce flex justify-center items-center">
                        <Mail className="text-sky-500" size={30} />
                    </div>
                    <div className="pt-2 text-center">
                        <h1 className="text-gray-400 text-md font-bold">Email</h1>
                        <h1 className="text-gray-500 text-sm font-regular">akunbuatskola@gmail.com</h1>
                    </div>
                </div>
                
                {/* Phone Card */}
                <div className="group rounded-lg w-full sm:w-65 h-40 bg-white border border-slate-300 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 flex-col flex justify-center items-center">
                    <div className="w-13 h-13 border bg-sky-100 rounded-full group-hover:bg-sky-200 transition duration-300 group-hover:animate-bounce flex justify-center items-center">
                        <Phone className="text-sky-500" size={30} />
                    </div>
                    <div className="pt-2 text-center">
                        <h1 className="text-gray-400 text-md font-bold">Phone</h1>
                        <h1 className="text-gray-500 text-sm font-regular">+62 853-2832-2389</h1>
                    </div>
                </div>

                {/* Location Card */}
                <div className="group rounded-lg w-full sm:w-65 h-40 bg-white border border-slate-300 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 flex-col flex justify-center items-center">
                    <div className="w-13 h-13 border bg-sky-100 rounded-full group-hover:bg-sky-200 transition duration-300 group-hover:animate-bounce flex justify-center items-center">
                        <MapPin className="text-sky-500" size={30} />
                    </div>
                    <div className="pt-2 text-center">
                        <h1 className="text-gray-400 text-md font-bold">Location</h1>
                        <h1 className="text-gray-500 text-sm font-regular">Tangerang</h1>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="flex justify-center items-center">
                {/* Container Form: Mengganti w-215 menjadi max-w-4xl w-full */}
                <div className="w-full max-w-4xl h-auto border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm p-4 sm:p-8">
                    <form className="w-full" action={sendEmail}>
                        {/* Grid Form: 1 kolom di HP, 2 kolom di Tablet/Laptop */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="flex flex-col p-3">
                                <label className="text-gray-500 font-medium mb-2 ml-1">Name</label>
                                <input 
                                    placeholder="Your Name"
                                    required
                                    name="name"
                                    type="text" 
                                    className="placeholder-gray-400 text-gray-600 text-sm border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-300 transition-all"
                                />
                            </div>
                            <div className="flex flex-col p-3">
                                <label className="text-gray-500 font-medium mb-2 ml-1">Email</label>
                                <input 
                                    placeholder="your.email@example.com" 
                                    required
                                    name="email"
                                    type="email" 
                                    className="placeholder-gray-400 text-gray-600 text-sm border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-300 transition-all"
                                />
                            </div>
                            {/* Subject Full Width di mobile maupun desktop */}
                            <div className="flex flex-col p-3 md:col-span-2">
                                <label className="text-gray-500 font-medium mb-2 ml-1">Subject</label>
                                <input 
                                    placeholder="Project Inquiry" 
                                    required
                                    name="subject"
                                    type="text" 
                                    className="placeholder-gray-400 text-gray-600 text-sm border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-300 transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col p-3">
                            <label className="text-gray-500 font-medium mb-2 ml-1">Message</label>
                            <textarea
                                required
                                name="message"
                                placeholder="Write your message here..." 
                                className="w-full placeholder-gray-400 text-gray-600 text-sm border border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-sky-300 transition-all resize-none"
                            />
                        </div>
                        
                        <div className="flex justify-center p-3">
                            <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold text-md py-3 px-6 rounded-xl transition duration-300 shadow-md shadow-sky-100">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}