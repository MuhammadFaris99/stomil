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
                        <a href="" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">Get Started</a>
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
                        
                            <div className="relative mt-10">
                                <a href="#portfolio" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">View Portfolio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
