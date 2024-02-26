import Hamburger from "../components/Hamburger"

export default function Header() {
  return (
    <>
      <div className="px-5 py-3 flex justify-between items-center">
        <h1>
          PAW<span>fect</span>
        </h1>
        <div className="hidden sm:block">
          <ul className="space-x-8 flex ">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <ul className="space-x-5 flex items-center">
          <li>
            <Hamburger className="top-[19px] sm:hidden z-50" />
          </li>
        </ul>
      </div>
    </>
  );
}
