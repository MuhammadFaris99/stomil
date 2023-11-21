import items from "../../../__mocks__/items.json"
import Link from "next/link"
import Image from "next/image"


const Footer = () => {
  return (
    <footer className="footer max-w-screen-2xl mx-auto">
      <section className="py-12 bg-zinc-800 dark:bg-neutral-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 lg:gap-10">
            <div className="col-span-12 xl:col-span-4">
              <div className="mr-12">
                {/* <h4 className="text-white mb-6 text-[23px]">Logo</h4> */}
                <a href="index.html" className="flex items-center">
                  <Image src="/images/company.png" alt="image company" width={120} height={50} style={{ objectFit: 'contain' }} className="logo-dark h-20 block" />
                </a>
                <br />
                <p className="text-white/50 dark:text-gray-300">
                  Komplek Permata Taman Palem Blok D-9 no.35 Pegadungan, Kalideres, Jakarta Barat – 11830
                </p>
                <p className="mt-3 text-white dark:text-gray-50">Follow Us on:</p>
                <div className="mt-5">
                  <ul className="flex gap-3">
                    <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:border-transparent">
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:border-transparent">
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li className="w-8 h-8 leading-loose text-center text-gray-200 transition-all duration-300 border rounded-full cursor-pointer border-gray-200/50 hover:text-gray-50 group-data-[theme-color=violet]:hover:bg-violet-500 group-data-[theme-color=sky]:hover:bg-sky-500 group-data-[theme-color=red]:hover:bg-red-500 group-data-[theme-color=green]:hover:bg-green-500 group-data-[theme-color=pink]:hover:bg-pink-500 group-data-[theme-color=blue]:hover:bg-blue-500 hover:border-transparent">
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">

            </div>
            <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
              <p className="mb-6 text-white text-16">Products</p>
              <ul className="space-y-4">
                {items.products.map((item, i) => (
                  <li key={i} className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                    <Link href={item.href}>
                      <i className="mdi mdi-chevron-right"></i> {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
              <p className="mb-6 text-white text-16">Services</p>
              <ul className="space-y-4">
                {items.services.map((item, i) => (
                  <li key={i} className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                    <Link href={item.href}>
                      <i className="mdi mdi-chevron-right"></i> {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 mt-8 md:col-span-6 xl:col-span-2 md:mt-0">
              <p className="mb-6 text-white text-16">Social Media</p>
              <ul className="space-y-4">
                {items.socmed.map((item, i) => (
                  <li key={i} className="text-sm transition-all duration-500 ease-in-out text-white/50 hover:text-gray-50 hover:text-base dark:text-gray-300 dark:hover:text-gray-50">
                    <Link href={item.href}>
                      <i className="mdi mdi-chevron-right"></i> {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 border-t bg-zinc-800 border-gray-100/10 dark:bg-neutral-900">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="mb-0 text-center text-white/50">
              Copyright {new Date().getFullYear()} © PT STOMIL INDONESIA. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}
export default Footer