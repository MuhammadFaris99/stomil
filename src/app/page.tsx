import RunningText from "./components/RunningText";
import SliderCandidate from "./components/SliderCandidate";

export default function Home() {
    return (
        <div className="relative">
            <section className="py-4 lg:py-36 lg:py-64 w-full table relative px-4 lg:px-24" id="homeBanner">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <RunningText />
            </section>


            <section className="relative md:py-24 py-16 bg-zinc-50 dark:bg-gray-800 px-4 lg:px-0" id="about">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
                        <div className="lg:col-span-5">
                            <div className="relative">
                                <img src="images/c.jpg" className="rounded-lg shadow-lg relative" alt="image about" />
                                <div className="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                                    <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-black text-orange-600">
                                        <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="lg:ml-7">
                                <h6 className="text-orange-600 text-base font-medium uppercase mb-2">Who We Are ?</h6>
                                <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">Our Company Story</h3>

                                <p className="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">Start working with Upwind that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with &apos;real&apos; content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>

                                <div className="relative mt-10">
                                    <a href="#portfolio" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">About Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 dark:bg-neutral-800">
                <div className="container mx-auto">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 lg:col-span-2">
                            <img src="images/logo-01.png" alt="" className="mx-auto cursor-pointer h-9 lg:h-6 xl:h-9" data-tooltip-target="tooltip-default" />
                            <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                                Tooltip content
                                <div className="tooltip-arrow" data-popper-arrow></div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-2">
                            <img src="images/logo-01.png" alt="" className="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9" />
                        </div>
                        <div className="col-span-12 lg:col-span-2">
                            <img src="images/logo-01.png" alt="" className="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9" />
                        </div>
                        <div className="col-span-12 lg:col-span-2">
                            <img src="images/logo-02.png" alt="" className="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9" />
                        </div>
                        <div className="col-span-12 lg:col-span-2">
                            <img src="images/logo-02.png" alt="" className="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9" />
                        </div>
                        <div className="col-span-12 lg:col-span-2">
                            <img src="images/logo-02.png" alt="" className="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 lg:px-0 py-20 dark:bg-neutral-800">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-5">
                        <div className="mb-5 text-center">
                            <h3 className="mb-3 text-3xl text-gray-900 dark:text-gray-50">Testimonial</h3>
                            <p className="mb-5 text-gray-500 whitespace-pre-line dark:text-gray-300">What our customer are saying</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 mt-8">
                        <div className="col-span-12 lg:col-span-8 lg:col-start-3">
                            <SliderCandidate />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
