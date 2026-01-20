"use client"

import { dataCertificate } from "./dataCertificate";
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Building2, Calendar, X, ExternalLink, FileText } from "lucide-react";

export default function CardCertificate(){
const certification = dataCertificate();
const[selectedCertificate, setSelectedCertificate] = useState<any>(null);

    return(
    <section className="font-sans -mt-15 py-12 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto bg-gray-50/50">
        {/* Grid: 1 kolom di HP, 2 di Tablet, 3 di Laptop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
            
            <h3 className="text-lg font-bold text-gray-500 mb-2 line-clamp-2">
              {certi.slug}
            </h3>

            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Building2 className="w-4 h-4 shrink-0" />
                <span className="truncate">{certi.issued}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <Calendar className="w-4 h-4 shrink-0" />
                <span>{certi.date}</span>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {certi.skills_act.slice(0, 3).map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
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

        <AnimatePresence>
          {selectedCertificate && (
            <>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"/>

            {/* Modal Container: P-4 agar tidak menempel ke pinggir layar HP */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedCertificate.id}`}
                className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto pointer-events-auto relative">
              
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>

                {/* Modal Content: Padding responsif (p-6 di HP, p-8 di Desktop) */}
                <div className="p-6 md:p-10">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 text-center sm:text-left">
                    <div className={`p-4 rounded-2xl ${selectedCertificate.iconColor} scale-110 shrink-0`}>
                      {selectedCertificate.icon}
                    </div>

                    <div className="min-w-0">
                      <h2 className="text-xl font-bold text-gray-500 leading-tight">{selectedCertificate.slug}</h2>
                      
                      <div className="flex flex-col gap-2 text-gray-500 mt-3 text-sm md:text-base">
                        <div className="flex items-center justify-center sm:justify-start gap-2">
                          <Building2 className="w-5 h-5 shrink-0" />
                          <span>Issued by {selectedCertificate.issued}</span>
                        </div>

                        <div className="flex items-center justify-center sm:justify-start gap-2">
                          <Calendar className="w-5 h-5 shrink-0" />
                          <span>{selectedCertificate.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description Box */}
                  <div className="flex items-start gap-3 w-full bg-gray-50 p-4 rounded-xl mb-6">
                    <FileText className="w-6 h-6 text-gray-400 shrink-0 mt-1" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-800 leading-snug">{selectedCertificate.Description}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                        {selectedCertificate.description}
                  </p>

                  <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3">Skills Acquired:</h4>
                      
                      <div className="flex flex-wrap gap-2">
                       {selectedCertificate.skills_act.map((skill: string, idx: number) => (
                          <span
                          key={idx}
                          className={`px-3 py-1.5 ${selectedCertificate.skillColor} text-xs md:text-sm font-medium rounded-full`}
                          >
                          {skill}
                          </span>
                          ))}
                      </div>
                  </div>

                  <a 
                        href={selectedCertificate.link}
                        target="_blank"
                        rel="noreferrer"
                        className="h-auto flex items-center justify-center gap-2 w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-sky-100"
                    >
                        Verify Certificate
                        <ExternalLink className="w-4 h-4" />
                    </a>

                </div>
              </motion.div>
            </div>
            </>
          )}
        </AnimatePresence>
    </section>
    )
}