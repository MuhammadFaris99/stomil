import Link from "next/link"
import items from "../../../__mocks__/items.json"

const Header = () => {
  return (
    <nav className="navbar fixed right-0 left-0 top-0 px-5 lg:px-24 transition-all duration-500 ease shadow-lg shadow-gray-200/20 bg-white border-gray-200 dark:bg-neutral-800 z-40 dark:shadow-neutral-900" id="navbar">
      <div className="mx-auto container-fluid">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <a href="index.html" className="flex items-center">
            <img src="images/a.jpeg" alt="" className="logo-dark h-20 block" />
            </a>
          <button data-collapse-toggle="navbar-collapse" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg navbar-toggler group lg:hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          <div id="navbar-collapse" className="navbar-res items-center justify-between w-full text-sm lg:flex lg:w-auto lg:order-1 group-focus:[.navbar-toggler]:block hidden">
            <ul className="flex flex-col items-start mt-5 mb-10 font-medium lg:mt-0 lg:mb-0 lg:items-center lg:flex-row" id="navigation-menu">
              <li className="relative dropdown">
                <Link href="/" className="py-5 text-gray-800 lg:px-4 dropdown-toggle dark:text-gray-50 lg:h-[70px]" id="home" data-bs-toggle="dropdown">Home <i className='align-middle bx bxs-chevron-down ltr:ml-1 rtl:mr-1'></i></Link>
                </li>
              <li className="relative dropdown">
                <Link href="/about-us" className="py-5 text-gray-800 lg:px-4 dropdown-toggle dark:text-gray-50 lg:h-[70px]" id="about-us" data-bs-toggle="dropdown">About Us <i className='align-middle bx bxs-chevron-down ltr:ml-1 rtl:mr-1'></i></Link>
                </li>

              <li className="relative dropdown lg:mt-0">
                <button className="py-5 text-gray-800 lg:px-4 dropdown-toggle dark:text-gray-50 lg:h-[70px]" id="blog" data-bs-toggle="dropdown">Products <i className='align-middle bx bxs-chevron-down ltr:ml-1 rtl:mr-1'></i></button>
                <ul className="relative top-auto z-50 py-2 list-none bg-white border-0 rounded dropdown-menu lg:border border-gray-500/20 lg:absolute ltr:-left-3 rtl:-right-3  lg:shadow-lg dark:bg-neutral-800" aria-labelledby="product">
                  {items.products.map((item, i) => (
                    <li key={i}><Link className="block w-full px-4 py-2 text-13 font-medium text-gray-700 duration-300 bg-transparent dropdown-item whitespace-nowrap hover:translate-x-1.5 group-data-[theme-color=violet]:hover:text-violet-500 group-data-[theme-color=sky]:hover:text-sky-500 group-data-[theme-color=red]:hover:text-red-500 group-data-[theme-color=green]:hover:text-green-500 group-data-[theme-color=pink]:hover:text-pink-500 group-data-[theme-color=blue]:hover:text-blue-500 uppercase group-data-[mode=dark]:text-gray-50"
                      href={item.href}>{`${item.title} Product`}</Link>
                    </li>
                    ))}
                  </ul>
                </li>

              <li className="relative dropdown lg:mt-0">
                <button className="py-5 text-gray-800 lg:px-4 dropdown-toggle dark:text-gray-50 lg:h-[70px]" id="blog" data-bs-toggle="dropdown">Services <i className='align-middle bx bxs-chevron-down ltr:ml-1 rtl:mr-1'></i></button>
                <ul className="relative top-auto z-50 py-2 list-none bg-white border-0 rounded dropdown-menu lg:border border-gray-500/20 lg:absolute ltr:-left-3 rtl:-right-3  lg:shadow-lg dark:bg-neutral-800" aria-labelledby="product">
                  {items.services.map((item, i) => (
                    <li key={i}><Link className="block w-full px-4 py-2 text-13 font-medium text-gray-700 duration-300 bg-transparent dropdown-item whitespace-nowrap hover:translate-x-1.5 group-data-[theme-color=violet]:hover:text-violet-500 group-data-[theme-color=sky]:hover:text-sky-500 group-data-[theme-color=red]:hover:text-red-500 group-data-[theme-color=green]:hover:text-green-500 group-data-[theme-color=pink]:hover:text-pink-500 group-data-[theme-color=blue]:hover:text-blue-500 uppercase group-data-[mode=dark]:text-gray-50"
                      href={item.href}>{item.title}</Link>
                </li>
                  ))}
                </ul>
              </li>
              <li className="relative dropdown">
                <Link href="/career" className="py-5 text-gray-800 lg:px-4 dropdown-toggle dark:text-gray-50 lg:h-[70px]" id="about-us" data-bs-toggle="dropdown">Career <i className='align-middle bx bxs-chevron-down ltr:ml-1 rtl:mr-1'></i></Link>
              </li>
              <li className="relative dropdown">
                <Link href="/contact-us" className="py-5 text-gray-800 lg:px-4 dropdown-toggle dark:text-gray-50 lg:h-[70px]" id="about-us" data-bs-toggle="dropdown">Contact Us <i className='align-middle bx bxs-chevron-down ltr:ml-1 rtl:mr-1'></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
  )
}
export default Header