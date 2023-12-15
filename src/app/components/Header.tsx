'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import products from '../../../__mocks__/products.json'
import services from '../../../__mocks__/services.json'

function Header() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  return (
    <nav
      className="navbar fixed right-0 left-0 top-0 transition-all duration-500 ease shadow-lg shadow-gray-200/20 bg-gray-800 border-gray-200 dark:bg-neutral-800 z-40 dark:shadow-neutral-900 max-w-screen-2xl mx-auto"
      id="navbar"
    >
      <div className="mx-auto container">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/company.png"
              alt="image company"
              width={120}
              height={50}
              style={{ objectFit: 'contain' }}
              className="logo-dark h-20 block"
            />
          </Link>
          <button
            data-collapse-toggle="navbar-collapse"
            type="button"
            className="inline-flex items-center p-2 text-sm text-white rounded-lg navbar-toggler group lg:hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => setIsOpen(prev => !prev)}
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
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div
            id="navbar-collapse"
            className={`navbar-res items-center justify-between w-full text-sm lg:flex lg:w-auto lg:order-1 group-focus:[.navbar-toggler]:block ${
              isOpen ? '' : 'hidden'
            }`}
          >
            <ul
              className="flex flex-col items-start mt-5 mb-10 font-medium lg:mt-0 lg:mb-0 lg:items-center lg:flex-row text-white dark:text-white"
              id="navigation-menu"
            >
              <li className="relative dropdown py-5 lg:py-0">
                <Link
                  href="/"
                  className="text-white lg:px-4 dropdown-toggle dark:text-white lg:h-[70px]"
                  id="home"
                  data-bs-toggle="dropdown"
                >
                  Home <i className="align-middle bx bxs-chevron-down ltr:ml-1 rtl:mr-1" />
                </Link>
              </li>
              <li className="relative dropdown py-5 lg:py-0">
                <Link
                  href="/about-us"
                  className="text-white lg:px-4 dropdown-toggle dark:text-white lg:h-[70px]"
                  id="about-us"
                  data-bs-toggle="dropdown"
                >
                  About Us <i className="align-middle bx bxs-chevron-down ltr:ml-1 rtl:mr-1" />
                </Link>
              </li>

              <li className="relative dropdown py-5 lg:py-0">
                <button
                  className="text-white lg:px-4 dropdown-toggle dark:text-white lg:h-[70px]"
                  id="blog"
                  data-bs-toggle="dropdown"
                  type="button"
                >
                  Products <i className="align-middle bx bxs-chevron-down ltr:ml-1 rtl:mr-1" />
                </button>
                <ul
                  className="relative top-auto z-50 py-2 list-none bg-gray-800 border-0 rounded dropdown-menu lg:border border-gray-500/20 lg:absolute ltr:-left-3 rtl:-right-3  lg:shadow-lg dark:bg-neutral-800"
                  aria-labelledby="product"
                >
                  {products.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        className="block w-full px-4 py-2 text-13 font-medium text-white duration-300 bg-transparent dropdown-item whitespace-nowrap hover:translate-x-1.5 group-data-[theme-color=violet]:hover:text-violet-500 group-data-[theme-color=sky]:hover:text-sky-500 group-data-[theme-color=red]:hover:text-red-500 group-data-[theme-color=green]:hover:text-green-500 group-data-[theme-color=pink]:hover:text-pink-500 group-data-[theme-color=blue]:hover:text-blue-500 uppercase group-data-[mode=dark]:text-white"
                        href={item.href}
                      >{`${item.title} Product`}</Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="relative dropdown py-5 lg:py-0">
                <button
                  className="text-white lg:px-4 dropdown-toggle dark:text-white lg:h-[70px]"
                  id="blog"
                  data-bs-toggle="dropdown"
                  type="button"
                >
                  Services <i className="align-middle bx bxs-chevron-down ltr:ml-1 rtl:mr-1" />
                </button>
                <ul
                  className="relative top-auto z-50 py-2 list-none bg-gray-800 border-0 rounded dropdown-menu lg:border border-gray-500/20 lg:absolute ltr:-left-3 rtl:-right-3  lg:shadow-lg dark:bg-neutral-800"
                  aria-labelledby="product"
                >
                  {services.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        className="block w-full px-4 py-2 text-13 font-medium text-white duration-300 bg-transparent dropdown-item whitespace-nowrap hover:translate-x-1.5 group-data-[theme-color=violet]:hover:text-violet-500 group-data-[theme-color=sky]:hover:text-sky-500 group-data-[theme-color=red]:hover:text-red-500 group-data-[theme-color=green]:hover:text-green-500 group-data-[theme-color=pink]:hover:text-pink-500 group-data-[theme-color=blue]:hover:text-blue-500 uppercase group-data-[mode=dark]:text-white"
                        href={item.href}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="relative dropdown py-5 lg:py-0">
                <Link
                  href="/supply-record"
                  className="py-5 text-white lg:px-4 dropdown-toggle dark:text-white lg:h-[70px]"
                  id="supplyrecord"
                  data-bs-toggle="dropdown"
                >
                  Supply Record <i className="align-middle bx bxs-chevron-down ltr:ml-1 rtl:mr-1" />
                </Link>
              </li>
              <li className="relative dropdown py-5 lg:py-0">
                <Link
                  href="/career"
                  className="py-5 text-white lg:px-4 dropdown-toggle dark:text-white lg:h-[70px]"
                  id="career"
                  data-bs-toggle="dropdown"
                >
                  Career <i className="align-middle bx bxs-chevron-down ltr:ml-1 rtl:mr-1" />
                </Link>
              </li>
              <li className="relative dropdown py-5 lg:py-0">
                <Link
                  href="/contact-us"
                  className="py-5 text-white lg:px-4 dropdown-toggle dark:text-white lg:h-[70px]"
                  id="contact-us"
                  data-bs-toggle="dropdown"
                >
                  Contact Us <i className="align-middle bx bxs-chevron-down ltr:ml-1 rtl:mr-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header
