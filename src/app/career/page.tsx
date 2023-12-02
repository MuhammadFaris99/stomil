function PageCareer() {
  return (
    <section className="relative bg-opacity-10 py-28 bg-[url('/images/career.jpg')] bg-contain bg-cover">
      <div className="container mx-auto">
        <div className="grid items-center grid-cols-12 rtl:gap-10">
          <div className="col-span-12">
            <div className="mb-3 ltr:mr-14 rtl:ml-14">
              <h1 className="mb-3 text-5xl font-semibold leading-tight text-white">
                Find your dream jobs <br /> with{' '}
                <span className="font-bold group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500">
                  Jobcy
                </span>
              </h1>
              <p className="text-lg font-light whitespace-pre-line dark:text-gray-300 text-white">
                Find jobs, create trackable resumes and enrich your applications.Carefully crafted
                after analyzing the needs of different industries.
              </p>
            </div>
          </div>
          <div className="col-span-12 flex items-center justify-center mt-20">
            <a
              target="_blank"
              href="/images/pdf/Career.pdf"
              download
              className="bg-red-400 p-4 rounded-lg text-white"
            >
              See All Our Job Vacancies
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageCareer
