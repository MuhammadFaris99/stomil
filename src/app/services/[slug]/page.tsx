/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
interface Props {
  params: { [key: string]: string }
}

function PageService({ params }: Props) {
  // return `product ${params.slug}`
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <div className="border rounded-md border-gray-100/30 dark:border-neutral-600/80">
              <div className="relative">
                <img src="/images/Sepc1.jpg" alt="" className="rounded-md img-fluid mb-7" />
              </div>
              <div className="p-6">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-8">
                    <div className="relative">
                      <h5 className="mb-1 text-gray-900 dark:text-gray-50">
                        Product Designer / UI Designer
                      </h5>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-4">
                    <div className="flex gap-3 md:justify-end">
                      <div className="w-8 h-8 text-center text-gray-100 transition-all duration-300 bg-transparent border rounded cursor-pointer border-gray-100/50 hover:bg-red-600 hover:text-white hover:border-transparent dark:border-zinc-700">
                        <a href="javascript:void(0)">
                          <i className="uil uil-heart-alt text-lg leading-[1.8]" />
                        </a>
                      </div>
                      <div className="w-8 h-8 text-center text-gray-100 transition-all duration-300 bg-transparent border rounded cursor-pointer border-gray-100/50 hover:bg-red-600 hover:text-white hover:border-transparent dark:border-zinc-700">
                        <a href="javascript:void(0)">
                          <i className="uil uil-setting text-lg leading-[1.8]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <h5 className="mb-3 text-gray-900 dark:text-gray-50">Job Description</h5>
                  <div>
                    <p className="mb-0 text-gray-500 dark:text-gray-300">
                      As a Product Designer, you will work within a Product Delivery Team fused with
                      UX, engineering, product and data talent. You will help the team design
                      beautiful interfaces that solve business challenges for our clients. We work
                      with a number of Tier 1 banks on building web-based applications for AML, KYC
                      and Sanctions List management workflows. This role is ideal if you are looking
                      to segue your career into the FinTech or Big Data arenas.
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <h5 className="mb-3 text-gray-900 dark:text-gray-50">Responsibilities</h5>
                  <div>
                    <p className="mb-3 text-gray-500 dark:text-gray-300">
                      As a Product Designer, you will work within a Product Delivery Team fused with
                      UX, engineering, product and data talent.
                    </p>

                    <ul className="mb-0 text-gray-500 dark:text-gray-300">
                      <li className="mb-2 text-gray-500 dark:text-gray-300">
                        <i className="mr-2 uil uil-circle" /> Have sound knowledge of commercial
                        activities.
                      </li>
                      <li className="mb-2 text-gray-500 dark:text-gray-300">
                        <i className="mr-2 uil uil-circle" /> Build next-generation web applications
                        with a focus on the client side
                      </li>
                      <li className="mb-2 text-gray-500 dark:text-gray-300">
                        <i className="mr-2 uil uil-circle" /> Work on multiple projects at once, and
                        consistently meet draft deadlines
                      </li>
                      <li className="mb-2 text-gray-500 dark:text-gray-300">
                        <i className="mr-2 uil uil-circle" /> have already graduated or are
                        currently in any year of study
                      </li>
                      <li className="text-gray-500 dark:text-gray-300">
                        <i className="mr-2 uil uil-circle" /> Revise the work of previous designers
                        to create a unified aesthetic for our brand materials
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-5">
                  <h5 className="mb-3 text-gray-900 dark:text-gray-50">Qualification</h5>
                  <div>
                    <ul className="mb-0 text-gray-500 dark:text-gray-300">
                      <li className="mb-2 text-gray-500 dark:text-gray-300">
                        <i className="mr-2 uil uil-circle" /> B.C.A / M.C.A under National
                        University course complete.
                      </li>
                      <li className="mb-2 text-gray-500 dark:text-gray-300">
                        <i className="mr-2 uil uil-circle" /> 3 or more years of professional design
                        experience
                      </li>
                      <li className="mb-2 text-gray-500 dark:text-gray-300">
                        <i className="mr-2 uil uil-circle" /> have already graduated or are
                        currently in any year of study{' '}
                      </li>
                      <li className="mb-2 text-gray-500 dark:text-gray-300">
                        <i className="mr-2 uil uil-circle" /> Advanced degree or equivalent
                        experience in graphic and web design
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-5">
                  <h5 className="mb-3 text-gray-900 dark:text-gray-50">Skill & Experience</h5>
                  <div>
                    <ul className="mb-0 text-gray-500 dark:text-gray-300">
                      <li className="mb-2 text-gray-500 dark:text-gray-300">
                        <i className="mr-2 uil uil-circle" /> Understanding of key Design Principal
                      </li>
                      <li className="mb-2 text-gray-500 dark:text-gray-300">
                        <i className="mr-2 uil uil-circle" /> Proficiency With HTML, CSS, Tailwind
                      </li>
                      <li className="mb-2 text-gray-500 dark:text-gray-300">
                        <i className="mr-2 uil uil-circle" /> Wordpress: 1 year (Required){' '}
                      </li>
                      <li className="mb-2 text-gray-500 dark:text-gray-300">
                        <i className="mr-2 uil uil-circle" /> Experience designing and developing
                        responsive design websites{' '}
                      </li>
                      <li className="mb-2 text-gray-500 dark:text-gray-300">
                        <i className="mr-2 uil uil-circle" /> web designing: 1 year (Preferred){' '}
                      </li>
                    </ul>
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

export default PageService
