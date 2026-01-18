import { GetMeScroll, HomeScroll, ShowcaseScroll, AboutmeScroll } from "./iteractive";

export default function Header() {
  return (
    <section className="font-sans">
      {/* Container utama dengan h-auto agar fleksibel */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 flex justify-between items-center px-6 md:px-10 py-4">
        
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-sans font-semibold text-sky-400 shrink-0">
          Portfolio
        </h1>

        {/* Navigation */}
        <nav className="ml-4 overflow-x-auto no-scrollbar">
          {/* - gap-4 di mobile, gap-8 di desktop
             - flex-nowrap agar tidak turun ke bawah
          */}
          <ul className="flex items-center gap-4 md:gap-8 flex-nowrap list-none whitespace-nowrap">
            <HomeScroll />
            <AboutmeScroll />
            <ShowcaseScroll />
            <GetMeScroll />
          </ul>
        </nav>
      </div>
      {/* Spacer agar konten di bawah tidak tertutup fixed header */}
      <div className="h-5 md:h-10"></div>
    </section>
  );
}