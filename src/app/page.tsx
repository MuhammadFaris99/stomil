/* eslint-disable jsx-a11y/anchor-is-valid */
// import Image from 'next/image'
import Image from 'next/image'
import Link from 'next/link'
import RunningText from './components/RunningText'
import SectionVideo from './components/SectionVideo'
import SingleVideo from './components/SingleVideo'
import SliderCandidate from './components/SliderCandidate'

const principles = [
  {
    name: 'Yokohama',
    logo: '/images/CH2.jpg',
    link: '/supply-record',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ...',
  },
  {
    name: 'Mecal',
    logo: '/images/CH1.jpg',
    link: '/supply-record',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ...',
  },
  {
    name: 'Tectron',
    logo: '/images/CH4.png',
    link: '/supply-record',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ...',
  },
  {
    name: 'Robass',
    logo: '/images/CH5.png',
    link: '/supply-record',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ...',
  },
]

const services = [
  {
    name: 'Conveyor Belt Splicing and Installation',
    logo: '/images/yokohama1.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ...',
  },
  {
    name: 'Relagging Pulley',
    logo: '/images/yokohama1.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ...',
  },
  {
    name: 'Ceramic Tile Installation',
    logo: '/images/yokohama1.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ...',
  },
  {
    name: 'Steel Cord Belt Scanning',
    logo: '/images/yokohama1.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ...',
  },
  {
    name: 'Conveyor Belt and Splicing Inspection and Evaluation',
    logo: '/images/yokohama1.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ...',
  },
  {
    name: 'Metal Detector and Magnetic Separator Inspection and Evaluation',
    logo: '/images/yokohama1.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ...',
  },
  {
    name: 'Crusher Inspection and Evaluation',
    logo: '/images/yokohama1.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ...',
  },
  {
    name: 'Whole Conveyor System Inspection and Evaluation',
    logo: '/images/yokohama1.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ...',
  },
]

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
              <SingleVideo />
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
      <section className="bg-gray-100 pt-5 pb-10">
        <h2 className="text-center font-bold text-[24px] mb-10">Our Principals</h2>
        <div className="w-full gap-4 flex-wrap flex justify-center items-center">
          {principles.map((item, index) => (
            <div
              className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
              key={item.name}
            >
              <div className="h-20 w-full relative">
                <Image fill className="object-contain rounded-xl" src={item.logo} alt={item.name} />
              </div>
              <div className="p-2">
                <h2 className="font-bold text-lg mb-2 ">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
              <div className="m-2">
                <Link
                  href={item.link}
                  className={`text-white px-3 py-1 rounded-md ${
                    index % 2
                      ? 'bg-sky-500 hover:bg-purple-700'
                      : 'bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Home */}
      <SectionVideo />

      {/* Our Service Home */}
      <section className="bg-gray-100 py-10">
        <h2 className="text-center font-bold text-[24px] mb-10">Our Services</h2>
        <div className="flex items-center justify-center bg-white-800">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map(item => (
              <div
                className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
                key={item.name}
              >
                <div className="relative w-[22vw] h-44">
                  <Image
                    fill
                    className="object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={item.logo}
                    alt={item.name}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-white">{item.name}</h1>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.desc}
                  </p>
                  <button
                    className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                    type="button"
                  >
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Principals Home */}
      <section className="py-10 dark:bg-neutral-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-5">
            {principles.map(item => (
              <div className="col-span-12 lg:col-span-3" key={item.name}>
                <div className="relative w-[20vw] h-12">
                  <Image
                    fill
                    src={item.logo}
                    alt={item.name}
                    className="mx-auto cursor-pointer h-9 lg:h-6 xl:h-9 object-contain"
                    data-tooltip-target="tooltip-default"
                  />
                </div>
                <div
                  id="tooltip-default"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Tooltip content
                  <div className="tooltip-arrow" data-popper-arrow />
                </div>
              </div>
            ))}
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
            <div className="relative h-36 w-36">
              <Image src="/images/trophy.png" alt="trophy" className="object-cover" fill />
            </div>
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
                        className="object-contain"
                        fill
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
                        {/* <img src="assets/images/avatars/img-1.png" alt="" className="rounded-full h-8" /> */}
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
                        fill
                        src="/images/sryokohama.png"
                        alt="yokohama"
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
                        {/* <img src="assets/images/avatars/img-1.png" alt="" className="rounded-full h-8" /> */}
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
                        fill
                        src="/images/srmecal.png"
                        alt="mecal"
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
                        {/* <img src="assets/images/avatars/img-1.png" alt="" className="rounded-full h-8" /> */}
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
                        fill
                        src="/images/srmecal.png"
                        alt="mecal"
                        className="object-contain"
                      />
                    </div>
                    <div className="sm:text-end">
                      <h4>Robas</h4>
                      <p className="text-sm text-gray-700 font-light">1. </p>
                      <p className="text-sm text-gray-700 font-light">2. </p>
                      <p className="text-sm text-gray-700 font-light">3.</p>

                      <div className="flex items-center sm:justify-end gap-3 mt-5">
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
