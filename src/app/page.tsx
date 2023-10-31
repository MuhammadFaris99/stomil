import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <section className="py-36 md:h-screen h-auto items-center flex relative" id="home">
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1">
                    <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">Providing Brilliant Ideas <br/>For Your <span className="typewrite relative text-type-element" data-period="2000" data-type='[ "Business", "Startups", "Digital Agency", "Marketing" ]'></span></h4>
                
                    <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>
                
                    <div className="relative mt-10">
                        <a href=" " className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">About Us</a>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="relative md:py-24 py-16 bg-zinc-50 dark:bg-gray-800" id="about">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
                    <div className="lg:col-span-5">
                        <div className="relative">
                            <img src="assets/images/about.jpg" className="rounded-lg shadow-lg relative" alt="" />
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
                        
                            {/* <div className="relative mt-10">
                                <a href="#portfolio" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">View Portfolio</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-10 dark:bg-neutral-800">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 lg:col-span-2">
                        <img src="assets/images/logo/logo-01.png" alt="" className="mx-auto cursor-pointer h-9 lg:h-6 xl:h-9" data-tooltip-target="tooltip-default"/>
                        <div id="tooltip-default" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                            Tooltip content
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-2">
                        <img src="assets/images/logo/logo-02.png" alt="" className="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9"/>
                    </div>
                    <div className="col-span-12 lg:col-span-2">
                        <img src="assets/images/logo/logo-03.png" alt="" className="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9"/>
                    </div>
                    <div className="col-span-12 lg:col-span-2">
                        <img src="assets/images/logo/logo-04.png" alt="" className="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9"/>
                    </div>
                    <div className="col-span-12 lg:col-span-2">
                        <img src="assets/images/logo/logo-05.png" alt="" className="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9"/>
                    </div>
                    <div className="col-span-12 lg:col-span-2">
                        <img src="assets/images/logo/logo-06.png" alt="" className="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9"/>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 dark:bg-neutral-800">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-5">
                    <div className="mb-5 text-center">
                        <h3 className="mb-3 text-3xl text-gray-900 dark:text-gray-50">Happy Candidates</h3>
                        <p className="mb-5 text-gray-500 whitespace-pre-line dark:text-gray-300">Post a job to tell us about your project. We&apos;ll quickly match you with the right <br/> freelancers.</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-8">
                    <div className="col-span-12 lg:col-span-8 lg:col-start-3">
                        <div className="pb-5 swiper testimonialSlider">
                            <div className="mb-12 swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="text-center">
                                        <div className="mb-4">
                                            <img src="assets/images/logo/mailchimp.svg" className="h-12 mx-auto" alt="" />
                                        </div>
                                        <p className="mb-4 text-lg font-thin text-gray-500 dark:text-gray-200">&quot; Very well thought out and articulate communication.
                                            Clear milestones, deadlines and fast work. Patience. Infinite patience. No
                                            shortcuts. Even if the client is being careless. &quot;</p>
                                        <h5 className="mb-0 dark:text-gray-50">Jeffrey Montgomery</h5>
                                        <p className="mb-0 text-gray-500 dark:text-gray-300">Product Manager</p>
                                    </div>
                                </div>
                                
                                <div className="swiper-slide">
                                    <div className="text-center">
                                        <div className="mb-4">
                                            <img src="assets/images/logo/wordpress.svg" className="h-12 mx-auto" alt="" />
                                        </div>
                                        <p className="mb-4 text-lg font-thin text-gray-500 dark:text-gray-200">&quot; Very well thought out and articulate communication.
                                            Clear milestones, deadlines and fast work. Patience. Infinite patience. No
                                            shortcuts. Even if the client is being careless. &quot;</p>
                                        <h5 className="mb-0 dark:text-gray-50">Rebecca Swartz</h5>
                                        <p className="mb-0 text-gray-500 dark:text-gray-300">Creative Designer</p>
                                    </div>
                                </div>
                                
                                <div className="swiper-slide">
                                    <div className="text-center">
                                        <div className="mb-4">
                                            <img src="assets/images/logo/instagram.svg" className="h-12 mx-auto" alt="" />
                                        </div>
                                        <p className="mb-4 text-lg font-thin text-gray-500 dark:text-gray-200">&quot; Very well thought out and articulate communication.
                                            Clear milestones, deadlines and fast work. Patience. Infinite patience. No
                                            shortcuts. Even if the client is being careless. &quot;</p>
                                        <h5 className="mb-0 dark:text-gray-50">Charles Dickens</h5>
                                        <p className="mb-0 text-gray-500 dark:text-gray-300">Store Assistant</p>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
