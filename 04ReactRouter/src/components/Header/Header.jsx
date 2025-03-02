import { Link, NavLink } from "react-router";

function Header() {
  return (
    <>
      <header className="sticky shadow z-50 top-0">
        <nav className="bg-white border border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center ">
              <img
                src="https://images.pexels.com/photos/1931141/pexels-photo-1931141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Logo"
                className="mr-3 h-12"
              />
            </Link>
            <div className="flex items-center lg:order-2">
              <Link
                to="#"
                className="text-gray-800 hover:bg-gray-200 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none cursor-pointer"
              >
                Log in
              </Link>
              <Link
                to="#"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm ml-5 px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none cursor-pointer"
              >
                Get started
              </Link>
            </div>

            <div
              className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive
                          ? "text-green-700 underline underline-offset-8"
                          : "text-green-600"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive
                          ? "text-green-700 underline underline-offset-8"
                          : "text-green-600"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive
                          ? "text-green-700 underline underline-offset-8"
                          : "text-green-600"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/github"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive
                          ? "text-green-700 underline underline-offset-8"
                          : "text-green-600"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                    }
                  >
                    Github
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
