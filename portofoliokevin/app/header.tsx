import { GetMeScroll } from "./iteractive";
import { HomeScroll } from "./iteractive";
import { ShowcaseScroll } from "./iteractive";
import { AboutmeScroll } from "./iteractive";
export default function Header() {



  return (
    <section>
      <div className=" fixed top-0 left-0 w-full bg-white shadow-md z-50 w-full flex justify-between items-center shadow-md px-10 py-5">
        <h1 className="text-2xl font-sans font-semibold text-sky-300">Portofolio</h1>
        <nav className="">
          <div className="items-center flex gap-6">
              <HomeScroll />
              <AboutmeScroll/>
              <ShowcaseScroll />
            <li>
              <GetMeScroll />
            </li>
          </div>
        </nav>
      </div>
    </section>
  )
}