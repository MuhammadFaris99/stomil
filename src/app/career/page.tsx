const PageCareer = () => {
    return (
        <section className="relative bg-opacity-10 py-28 dark:bg-violet-900 group-data-[theme-color=violet]:bg-violet-500/20 group-data-[theme-color=sky]:bg-sky-500/20 group-data-[theme-color=red]:bg-red-500/20 group-data-[theme-color=green]:bg-green-500/20 group-data-[theme-color=pink]:bg-pink-500/20 group-data-[theme-color=blue]:bg-blue-500/20">
            <div className="container mx-auto">
                <div className="grid items-center grid-cols-12 rtl:gap-10">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="mb-3 ltr:mr-14 rtl:ml-14">
                            <h6 className="mb-3 text-sm text-gray-900 uppercase dark:text-gray-50">We have 150,000+ live jobs</h6>
                            <h1 className="mb-3 text-5xl font-semibold leading-tight text-gray-900 dark:text-gray-50">Find your dream jobs <br/> with <span className="font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500">Jobcy</span></h1>
                            <p className="text-lg font-light text-gray-500 whitespace-pre-line dark:text-gray-300">Find jobs, create trackable resumes and enrich your
                                    applications.Carefully crafted after analyzing the needs of different 
                                    industries.</p>
                        </div>
                    </div>
                    <div className="col-span-5">
                        <div className="mt-5">
                            <img src="assets/images/process-02.png" alt="" className="mb-5 home-img max-w-none"/> 
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/images/bg-shape.png" alt="" className="absolute block -bottom-5 dark:hidden"/>
            <img src="assets/images/bg-shape-dark.png" alt="" className="absolute hidden -bottom-5 dark:block"/>
            
            <div className="py-20 bg-gray-50 dark:bg-neutral-700">
                <div className="container mx-auto">
                    <div className="nav-tabs round-pill">
                        <div className="grid items-center grid-cols-12 gap-5">
                            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
                                <div className="text-center">
                                    <h5 className="mb-5 group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500">Welcome to our job vacancies in PT. STOMIL INDONESIA.
                                        Here, you’ll find all our currently available vacant positions.</h5>
                                    {/* <p className="text-gray-500 dark:text-gray-300">Post a job to tell us about your project. We&apos;ll quickly match you with
                                        the right freelancers.</p> */}
                                    <div className="pt-2 mt-5">
                                        <a href="javascript:void(0)" className="text-white border-transparent group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 btn hover:-translate-y-2">SEE ALL OUR JOB VACANCIES <i className="align-middle uil uil-rocket ms-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default PageCareer