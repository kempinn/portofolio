
import { Layers} from 'lucide-react';
import ShowcaseMenu from './all-projects/projectmenu';


export default function Showcase() {
  return (
    <div id='Showcase' className="font-sans min-h-screen bg-white font-sans text-gray-900 pb-20">
      
      {/* Background Gradient Decoration */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-50/50 to-transparent -z-10 pointer-events-none" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-sky-400 text-xs font-semibold mb-6">
            <Layers size={14} />
            My Portfolio
          </div>
          
          {/* Tambahkan leading-loose atau leading-relaxed di sini */}
            <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-400 mb-3">
                 Skills, Projects &
                </h1>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-300 mb-7">
                 Certificates
                </h1>
            </div>
            
          
          <p className="text-gray-500 text-lg leading-relaxed">
            Explore my journey as a fresh graduate — from technical skills and hands-on projects to professional certifications that validate my expertise.
          </p>
        </div>

        {/* --- Tab Switcher (Static) --- */}
        <ShowcaseMenu />
      </main>
    </div>
  );
}

