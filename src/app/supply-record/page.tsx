import Image from "next/image"

const PageSupplyRecord = () => {
    return (
        <section className="lg:py-24 py-16">
            <div className="container" data-aos="fade-up">
                <div className="grid lg:grid-cols-2 gap-14">

                    <div className="order-2 lg:order-1">
                        <h1 className="text-3xl mb-7">Yokohama</h1>
                        <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, fuga voluptate rerum commodi dolor laboriosam. Magnam voluptas hic at ab, quos accusantium deserunt, repellat dolores eaque corporis, labore molestiae. Molestiae?
                        </p>
                        <br/><br/><br/><br/>
                        <div className="flex items-center">
                            <a target="_blank" href="/images/pdf/Yokohama.pdf" download className="bg-orange-500 p-2 rounded-lg text-white">Download Supply Record</a>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        
                        <div id="default-carousel" className="relative w-full" data-carousel="slide">

                            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="/images/yokohama1.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                </div>

                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="/images/yokohama2.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                </div>

                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="/images/yokohama3.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                </div>

                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="/images/yokohama4.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                </div>

                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src="/images/yokohama5.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                </div>
                            </div>

                            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                            </div>

                            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                                    </svg>
                                    <span className="sr-only">Previous</span>
                                </span>
                            </button>
                            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                    <span className="sr-only">Next</span>
                                </span>
                            </button>
                        </div>

                    </div>

                </div>

                <div className="bg-gray-100 p-8 mb-6">
                    <div>
                        <h3 className="text-2xl">1.	PT INDOCEMENT TUNGGAL PRAKARSA Tbk.</h3>
                        <p className="mt-5">One of the leading cement producers in Indonesia which started operating in 1975. Indocement produces premium cement under the Semen Tiga Roda brand which is Indonesia&apos;s TOP 100 Most Valuable Brands 2020 & TOP Brand Awards Cement Category.</p>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-16">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Period
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Belt Specification
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Qty (m)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Apple MacBook Pro 17
                                        </th>
                                        <td className="px-6 py-4">
                                            Silver
                                        </td>
                                        <td className="px-6 py-4">
                                            Laptop
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Microsoft Surface Pro
                                        </th>
                                        <td className="px-6 py-4">
                                            White
                                        </td>
                                        <td className="px-6 py-4">
                                            Laptop PC
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Magic Mouse 2
                                        </th>
                                        <td className="px-6 py-4">
                                            Black
                                        </td>
                                        <td className="px-6 py-4">
                                            Accessories
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <img src="/images/sryokohama1.jpg" className="rounded-md" />
                    </div>
                </div>
            </div>

        </section>
    )
}
export default PageSupplyRecord