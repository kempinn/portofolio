"use client"

import { div } from "framer-motion/m"
import { dataCertificate } from "./dataCertificate";
import { useState } from "react"
import { motion } from "framer-motion";
import { CheckCircle2, Building2, Calendar } from "lucide-react";


export default function CardCertificate(){
const certification = dataCertificate();
const[selectedCertificate, setSelectedCertificate] = useState<any>(null);

    return(
    <section className="py-20 px-6 gap max-w-6xl mx-auto bg-gray-50/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {certification.map((certi)=>(
        <motion.div
        key ={certi.id}
        layoutId={`card-${certi.id}`}
        onClick={()=>setSelectedCertificate(certi)}
        whileHover={{ y: -5 }}
        className={`cursor-pointer bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all duration-300 border-t-4 ${certi.color}`}>
            
            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${certi.iconColor}`}>
                    {certi.icon}
                </div>
              <CheckCircle2 className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {certi.slug}
            </h3>

            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Building2 className="w-4 h-4" />
                <span>{certi.issued}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <Calendar className="w-4 h-4" />
                <span>{certi.date}</span>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {certi.skills_act.slice(0, 3).map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                  {skill}
                </span>
              ))}
              {certi.skills_act.length > 3 && (
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                  +{certi.skills_act.length - 3}
                </span>
              )}
            </div>

        
        
            
        </motion.div>

        ))}

        </div>
    </section>
    )
}