import Paw from "../assets/paw.png"

export default function Preload() {
  return (
    <>
      <section className="h-screen w-screen bg-rose-700 flex justify-center items-center m-0 p-0 box-border">
        <img className="h-40 animate-bounce" src={Paw} alt="paw" />
      </section>
    </>
  )
}
