import Image from "next/image"

const PageAboutUs = () => {
    return (
        <section className="py-16 px-4 lg:px-0 overflow-hidden dark:bg-neutral-800">
            <div className="container mx-auto">
                <div className="grid items-center grid-cols-12 gap-5">
                    <div className="col-span-12 lg:col-span-6">
                        <h2 className="text-lg text-gray-900 uppercase dark:text-gray-50/80">About Us</h2>
                        {/* <h2 className="mt-1 mb-4 text-gray-900 dark:text-gray-50/80">Why <span className="font-bold text-yellow-500">35,000+</span> People Trust On <br/> Jobcy?</h2> */}
                        <p className="font-light text-gray-500 dark:text-gray-300">Fast growing Indonesian company specialized in bulk material handling, i.e. conveyor system.
                            Established in 2009, PT. STOMIL INDONESIA is inspired by principles of correctness, transparency, honesty and integrity in the management of its activities.
                            <br /><br />Supported by highly motivated personnel who have a passion for challenges and continuous improvement, PT. STOMIL INDONESIA is confident to deliver best services to meet your satisfaction.
                            <br /><br />At PT. STOMIL INDONESIA, we believe your satisfaction is the only raw material to build our reputation.
                            With over than 58 staffs from various expertise, PT. STOMIL INDONESIA currently operates 3 (three) divisions, which are:</p>
                        <div className="grid grid-cols-12 gap-5 mt-8">
                            <div className="col-span-12 md:col-span-6">
                                <div className="relative">
                                    <ul className="space-y-2 text-gray-700 about-list dark:text-gray-300">
                                        <li className="ltr:pl-8 rtl:pr-8">
                                            <i className="fa fa-check">Trading</i>
                                        </li>
                                        <li className="ltr:pl-8 rtl:pr-8">
                                            <i className="fa fa-check">Engineering Procurement Construction (EPC)</i>
                                        </li>
                                        <li className="ltr:pl-8 rtl:pr-8">
                                            <i className="fa fa-check">Service and Maintenance</i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <div className="lg:w-[100%] h-[50vh] relative">
                            <Image fill src="/images/billboards2.jpg" alt="" className="rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageAboutUs