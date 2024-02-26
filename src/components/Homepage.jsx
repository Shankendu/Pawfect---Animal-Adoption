import { useEffect, useState } from "react";
import Preload from "./Preload";

export default function Homepage() {

    const[load, setLoad] = useState(false) 

    useEffect(()=>{
        setLoad(true)

        setTimeout(()=>{
            setLoad(false)
        },3000)
    },[])
  return load ? <Preload/> : (
    <>
      <section className="relative bg-[url(https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat h-screen w-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 from-0% via-white/25 to-60% to-transparent "></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl text-rose-700 font-black font-poppins sm:text-5xl ">
             Paw<span className="font-outline-rose-2 bg-clip-text text-transparent">fect</span>
              <h1 className="block font-extrabold font-poppins text-white/60 font-outline-rose-1">
                {" "} 
                Animal Adoption{" "}
              </h1>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed font-poppins font-semibold">
            &quot;Find your furry friend, change a life. Adopt, don&apos;t shop. Unleash love today. Rescue, renew, rejoice. Join us in saving lives, one paw at a time.&quot;
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded border-rose-700 border-2 hover:bg-rose-700 px-12 py-3 text-sm font-medium hover:text-white text-rose-700 shadow focus:outline-none focus:ring active:bg-rose-500 md:w-auto"
              >
                Adopt
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 md:w-auto"
              >
               Donate
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
