/* eslint-disable react/prop-types */

import { useState } from "react"
export default function Hamburger(props) {
    const [open, setOpen] = useState(false);
  return (
    <>
     
    <div className="sm:hidden">
      <header
        onClick={() => setOpen(!open)}
        className={`${props.className} absolute right-0 top-7`}
      >
        <div
          className={`h-[2px] w-6 mb-2 bg-black rounded-full transition-all duration-150 delay-100 ${
            open ? "rotate-45 translate-y-[6px] " : "rotate-180"
          }`}
        ></div>
        <div
          className={`h-[2px] w-6 bg-black rounded-full transition-all duration-150 delay-100 ${
            open ? "-rotate-45 -translate-y-[6px] " : "rotate-180"
          }`}
        ></div>
      </header>
     
        {open &&<main
          id="menu"
          className={`flex flex-col absolute top-0 right-0 w-screen h-screen bg-[#B2C8BA] transition-all duration-500 ease-in z-[2] `}
        >
          <span className="before:w-3 before:h-3 before:mx-10 before:top-24 before:absolute before:bg-[#0f3412] before:rounded-full">
            <span className="mx-16 absolute top-20 text-4xl border-b-2 pb-2 text-[#0f3412]">
              NAVIGATION
            </span>
          </span>
          <div className="">
            <div
              id="indicator-dot"
              className="after:absolute after:w-2 after:h-2 after:rounded-full after:bg-[#0f3412] after:left-44 after:top-40 after:duration-200"
            ></div>
            <ul className="absolute top-36 left-20 text-3xl text-[#0f3412]">
              <li className="menu-content pb-5">Home</li>
              <li className="menu-content pb-5">About</li>
              <li className="menu-content pb-5">Facts</li>
              <li className="menu-content pb-5">Help</li>
              <li className="menu-content pb-5">Donate</li>
            </ul>
          </div>
        </main>}
      </div>
    </>
  )
}
