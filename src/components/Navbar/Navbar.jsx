import useNav from "../../hooks/useNav";
import MenuMobile from "./MenuMobile";
import texts from "../../sections.json";

const Navbar = () => {
  const { isOpen, handleIsOpen } = useNav();

  return (
    <div
      className=" flex justify-between px-5 lg:px-10 py-10"
      style={{ backgroundColor: "white" }}
    >
      <div className="">
        <a
          className=" text-2xl font-semibold flex items-center gap-5"
          href="/#"
        >
          <img src={texts["section-one"].logo} alt="logo" width={70} />
          <h1>{texts["section-one"].logoName}</h1>
        </a>
      </div>
      <div className="justify-between hidden lg:flex items-center">
        <ul className="menu menu-horizontal  font-semibold  gap-16">
          <li className="hover:text-[#1BBC82]">
            <a href="/#">{texts["section-one"].item1}</a>
          </li>

          <li className="hover:text-[#1BBC82]">
            <a
              href="http://blog.realtechdigital.xyz/"
              target="_blank"
              rel="noreferrer"
            >
              {texts["section-one"].item4}
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <a
          className="flex items-center btn  gap-2 py-2 px-5 rounded-full"
          href="https://blog.realtechdigital.xyz/contacto/"
          target="_blank"
          rel="noreferrer"
          style={{ backgroundColor: "white" }}
        >
          Contactar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <title>arrow</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </div>
  );
};
export default Navbar;
