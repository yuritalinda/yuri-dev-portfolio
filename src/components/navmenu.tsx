import { useState } from "react";
import { Karla } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-karla",
});
//TODO: cuando page proyecto este lista revisar como se ve el CSS de los items y el destacado del menu debe coincidir con la ruta. inicio = destacado inicio

export default function Navmenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    handleToggle();
  };

  function handleToggle() {
    const navElement = document.getElementById("navbar-sticky");
    if (navElement) {
      navElement.classList.toggle("hidden");
    }
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  const menuItem = [
    { item: "Inicio", url: "/" },
    { item: "Proyectos", url: "/proyectos" },
    { item: "Acerca de mi", url: "#aboutme" },
    { item: "Contacto", url: "#contacto" },
  ];
  return (
    <>
      <nav
        className={`bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 ${karla.variable} font-sans`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center">
            <img
              src="/imgs/code-svgrepo-com.svg"
              className="h-8 mr-3"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-palerose dark:text-white">
              Yuri Dev
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-palerose rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="true"
              onClick={handleClick}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            {/* to map() menuItem */}
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {menuItem.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    //block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500
                    // block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700
                    className={
                      item.url === "/"
                        ? "block py-2 pl-3 pr-4 text-white bg-gold rounded md:bg-transparent md:text-gold md:p-0 md:dark:text-yellow"
                        : "block py-2 pl-3 pr-4 text-gold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    }
                    // aria-current="page"
                  >
                    {item.item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
