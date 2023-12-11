/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image'
import Link from 'next/link'
import RunningText from './components/RunningText'
import SliderCandidate from './components/SliderCandidate'

export default function Home() {
  return (
    <div className="relative">
      <RunningText />
      {/* About us Home */}
      <section
        className="relative md:py-24 py-16 bg-zinc-50 dark:bg-gray-800 px-4 lg:px-0"
        id="about"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <Image
                  src="images/yokohama1.jpg"
                  className="rounded-lg shadow-lg relative"
                  alt="about"
                />
                <div className="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                  <a
                    data-type="youtube"
                    data-id="yba7hPeTSjk"
                    className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-black text-orange-600 cursor-pointer"
                  >
                    <i className="fa fa-play inline-flex items-center justify-center text-2xl" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="lg:ml-7">
                <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
                  Who We Are ?
                </h6>
                <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
                  Our Company Story
                </h3>

                <p className="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">
                  Start working with Upwind that can provide everything you need to generate
                  awareness, drive traffic, connect. Dummy text is text that is used in the
                  publishing industry or by web designers to occupy the space which will later be
                  filled with &apos;real&apos; content. This is required when, for example, the
                  final text is not yet available. Dummy texts have been in use by typesetters since
                  the 16th century.
                </p>

                <div className="relative mt-10">
                  <Link
                    href="/about-us"
                    className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md px-4 py-2"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Principals Home */}
      <section>
        <h2 className="container text-center">Our Principals</h2>
        <div className="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
          <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <Image className="h-40 object-cover rounded-xl" src="images/CH2.jpg" alt="" />
            <div className="p-2">
              <h2 className="font-bold text-lg mb-2 ">Yokohama</h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ...
              </p>
            </div>
            <div className="m-2">
              <a
                role="button"
                href="/supply-record"
                className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <Image className="h-40 object-cover rounded-xl" src="images/CH1.jpg" alt="" />
            <div className="p-2">
              <h2 className="font-bold text-lg mb-2 ">Mecal</h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ...
              </p>
            </div>
            <div className="m-2">
              <a
                role="button"
                href="/supply-record"
                className="text-white bg-sky-500 px-3 py-1 rounded-md hover:bg-purple-700"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <Image className="h-40 object-cover rounded-xl" src="images/CH4.png" alt="" />
            <div className="p-2">
              <h2 className="font-bold text-lg mb-2 ">Tectron</h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ...
              </p>
            </div>
            <div className="m-2">
              <a
                role="button"
                href="/supply-record"
                className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <Image className="h-40 object-cover rounded-xl" src="images/CH5.png" alt="" />
            <div className="p-2">
              <h2 className="font-bold text-lg mb-2 ">Robass</h2>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ...
              </p>
            </div>
            <div className="m-2">
              <a
                role="button"
                href="/supply-record"
                className="text-white bg-sky-500 px-3 py-1 rounded-md hover:bg-purple-700"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Home */}
      <section>
        <h2 className="container text-center">Video Product</h2>
        <div className="flex min-h-screen items-center justify-center bg-white-800">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="images/yokohama1.jpg"
                  alt=""
                />
              </div>
              <div className="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                <a
                  data-type="youtube"
                  data-id="yba7hPeTSjk"
                  className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-black text-orange-600 cursor-pointer"
                >
                  <i className="fa fa-play inline-flex items-center justify-center text-2xl" />
                </a>
              </div>
            </div>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="images/yokohama1.jpg"
                  alt=""
                />
              </div>
              <div className="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                <a
                  data-type="youtube"
                  data-id="yba7hPeTSjk"
                  className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-black text-orange-600 cursor-pointer"
                >
                  <i className="fa fa-play inline-flex items-center justify-center text-2xl" />
                </a>
              </div>
            </div>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="images/yokohama1.jpg"
                  alt=""
                />
              </div>
              <div className="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                <a
                  data-type="youtube"
                  data-id="yba7hPeTSjk"
                  className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-black text-orange-600 cursor-pointer"
                >
                  <i className="fa fa-play inline-flex items-center justify-center text-2xl" />
                </a>
              </div>
            </div>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="images/yokohama1.jpg"
                  alt=""
                />
              </div>
              <div className="absolute bottom-2/4 translate-y-2/4 right-0 left-0 text-center">
                <a
                  data-type="youtube"
                  data-id="yba7hPeTSjk"
                  className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-black text-orange-600 cursor-pointer"
                >
                  <i className="fa fa-play inline-flex items-center justify-center text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Service Home */}
      <section>
        <h2 className="container text-center">Our Services</h2>
        <div className="flex min-h-screen items-center justify-center bg-white-800">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="images/yokohama1.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Conveyor Belt Splicing and Installation
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci
                  placeat.
                </p>
                <button
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                  type="button"
                >
                  See More
                </button>
              </div>
            </div>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="images/yokohama1.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">Relagging Pulley</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci
                  placeat.
                </p>
                <button
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                  type="button"
                >
                  See More
                </button>
              </div>
            </div>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="images/yokohama1.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Ceramic Tile Installation
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci
                  placeat.
                </p>
                <button
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                  type="button"
                >
                  See More
                </button>
              </div>
            </div>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="images/yokohama1.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Steel Cord Belt Scanning
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci
                  placeat.
                </p>
                <button
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                  type="button"
                >
                  See More
                </button>
              </div>
            </div>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="images/yokohama1.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Conveyor Belt and Splicing Inspection and Evaluation
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci
                  placeat.
                </p>
                <button
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                  type="button"
                >
                  See More
                </button>
              </div>
            </div>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="images/yokohama1.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Metal Detector and Magnetic Separator Inspection and Evaluation
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci
                  placeat.
                </p>
                <button
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                  type="button"
                >
                  See More
                </button>
              </div>
            </div>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="images/yokohama1.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Crusher Inspection and Evaluation
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci
                  placeat.
                </p>
                <button
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                  type="button"
                >
                  See More
                </button>
              </div>
            </div>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <Image
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="images/yokohama1.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Whole Conveyor System Inspection and Evaluation
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci
                  placeat.
                </p>
                <button
                  className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                  type="button"
                >
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Principals Home */}
      <section className="py-10 dark:bg-neutral-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-3">
              <Image
                src="images/CH1.jpg"
                alt=""
                className="mx-auto cursor-pointer h-9 lg:h-6 xl:h-9"
                data-tooltip-target="tooltip-default"
              />
              <div
                id="tooltip-default"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Tooltip content
                <div className="tooltip-arrow" data-popper-arrow />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <Image
                src="images/CH2.jpg"
                alt=""
                className="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9"
              />
            </div>
            <div className="col-span-12 lg:col-span-3">
              <Image
                src="images/CH4.png"
                alt=""
                className="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9"
              />
            </div>
            <div className="col-span-12 lg:col-span-3">
              <Image
                src="images/CH5.png"
                alt=""
                className="mx-auto cursor-pointer h-9 lg:h-7 xl:h-9"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Home */}
      <section className="px-4 lg:px-0 py-20 dark:bg-neutral-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-5">
            <div className="mb-5 text-center">
              <h3 className="mb-3 text-3xl text-gray-900 dark:text-gray-50">Testimonial</h3>
              <p className="mb-5 text-gray-500 whitespace-pre-line dark:text-gray-300">
                What our customer are saying
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 mt-8">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <SliderCandidate />
            </div>
          </div>
        </div>
      </section>

      {/* Supply Record Home */}
      <section className="py-14">
        <div className="container">
          <div className="float-right hidden sm:block">
            <Image src="/images/trophy.png" alt="" className="h-36" />
          </div>

          <div className="text-center max-w-md mx-auto">
            <span className="text-purple-500 text-base font-medium uppercase block mb-3">
              Supply Record
            </span>
            <h1 className="text-4xl font-semibold mb-5">The 3 Top Buyer</h1>
            <p className="text-gray-500 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt.
            </p>
          </div>

          <div className="border-b my-10" />

          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <div className="space-y-6">
                <div className="bg-yellow-500/40 rounded-xl p-7">
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-10">
                    <div className="relative h-20 w-40">
                      <Image
                        src="/images/sryokohama.png"
                        alt="yokohama"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="sm:text-end">
                      <h4>Yokohama</h4>
                      <p className="text-sm text-gray-700 font-light">
                        1. PT INDOCEMENT TUNGGAL PRAKARSA Tbk.
                      </p>
                      <p className="text-sm text-gray-700 font-light">2. PT BUKIT ASAM Tbk.</p>
                      <p className="text-sm text-gray-700 font-light">3. PT BAYAN RESOURCES Tbk.</p>

                      <div className="flex items-center sm:justify-end gap-3 mt-5">
                        {/* <Image src="assets/images/avatars/img-1.png" alt="" className="rounded-full h-8" /> */}
                        <a
                          href="/supply-record"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-500/40 rounded-xl p-7">
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-10">
                    <div className="relative h-20 w-40">
                      <Image
                        src="/images/sryokohama.png"
                        alt="yokohama"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="sm:text-end">
                      <h4>Tectron</h4>
                      <p className="text-sm text-gray-700 font-light">
                        1. PT. Komipo Pembangkitan Jawa Bali (KPJB)
                      </p>
                      <p className="text-sm text-gray-700 font-light">2. PT. Indexim Coalindo</p>
                      <p className="text-sm text-gray-700 font-light">
                        3. PT. Indonesia Bulk Terminal
                      </p>

                      <div className="flex items-center sm:justify-end gap-3 mt-5">
                        {/* <Image src="assets/images/avatars/img-1.png" alt="" className="rounded-full h-8" /> */}
                        <a
                          href="/supply-record"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-6 lg:mt-20">
                <div className="bg-purple-500/40 rounded-xl p-7">
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-10">
                    <div className="relative h-20 w-40">
                      <Image
                        src="/images/srmecal.png"
                        alt="mecal"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="sm:text-end">
                      <h4>Mecal</h4>
                      <p className="text-sm text-gray-700 font-light">1. PT BUKIT ASAM Tbk.</p>
                      <p className="text-sm text-gray-700 font-light">2. PT BORNEO INDOBARA</p>
                      <p className="text-sm text-gray-700 font-light">
                        3. PT KOMIPO PEMBANGKITAN JAWA BALI (KPJB)
                      </p>

                      <div className="flex items-center sm:justify-end gap-3 mt-5">
                        {/* <Image src="assets/images/avatars/img-1.png" alt="" className="rounded-full h-8" /> */}
                        <a
                          href="/supply-record"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-500/40 rounded-xl p-7">
                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-10">
                    <div className="relative h-20 w-40">
                      <Image
                        src="/images/srmecal.png"
                        alt="mecal"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="sm:text-end">
                      <h4>Robas</h4>
                      <p className="text-sm text-gray-700 font-light">1. </p>
                      <p className="text-sm text-gray-700 font-light">2. </p>
                      <p className="text-sm text-gray-700 font-light">3.</p>

                      <div className="flex items-center sm:justify-end gap-3 mt-5">
                        {/* <Image src="assets/images/avatars/img-1.png" alt="" className="rounded-full h-8" /> */}
                        <a
                          href="/supply-record"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
