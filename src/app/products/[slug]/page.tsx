interface Props {
    params: { [key: string]: string }
}

const PageProduct = ({ params }: Props) => {
    // return `product ${params.slug}`
    return (
        <section className="relative md:py-24 py-16">
            <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="grid grid-cols-1 gap-[30px]">
                            <img src="/images/yokohama1.jpg" className="rounded-md" alt="" />
                            <img src="/images/yokohama2.png" className="rounded-md" alt="" />
                            <img src="/images/yokohama3.png" className="rounded-md" alt="" />
                            <img src="/images/yokohama4.png" className="rounded-md" alt="" />
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="sticky top-20">
                            <div className="grid lg:grid-cols-12 grid-cols-1 gap-[30px]">
                                <div className="lg:col-span-12">
                                    <div className="work-details">
                                        <h4 className="text-xl font-medium mb-3 border-b border-gray-100 dark:border-gray-700 pb-3">Project Detail :</h4>
                                        <p className="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non dolorem consequatur vitae hic.</p>
                                        <p className="text-slate-400 mt-2">Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos.</p>
                                    </div>
                                </div>

                                <div className="lg:col-span-7">
                                    <div className="bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 p-6 rounded-md">
                                        <h5 className="text-lg font-medium border-b border-gray-100 dark:border-gray-700 pb-3 mb-3">Project Info :</h5>
                                        <dl className="grid grid-cols-12 mb-0">
                                            <dt className="md:col-span-4 col-span-5 mt-2">Client :</dt>
                                            <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">Calvin Carlo</dd>

                                            <dt className="md:col-span-4 col-span-5 mt-2">Category :</dt>
                                            <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">Web Design</dd>

                                            <dt className="md:col-span-4 col-span-5 mt-2">Date :</dt>
                                            <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">23rd July, 2023</dd>

                                            <dt className="md:col-span-4 col-span-5 mt-2">Website :</dt>
                                            <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">www.yourdomain.com</dd>

                                            <dt className="md:col-span-4 col-span-5 mt-2">Location :</dt>
                                            <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">3/2/64 Mongus Street, UK</dd>
                                        </dl>
                                    </div>
                                </div>

                                <div className="lg:col-span-7">
                                    <div className="bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 p-6 rounded-md">
                                        <h5 className="text-lg font-medium border-b border-gray-100 dark:border-gray-700 pb-3 mb-3">Project Info :</h5>
                                        <dl className="grid grid-cols-12 mb-0">
                                            <dt className="md:col-span-4 col-span-5 mt-2">Client :</dt>
                                            <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">Calvin Carlo</dd>

                                            <dt className="md:col-span-4 col-span-5 mt-2">Category :</dt>
                                            <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">Web Design</dd>

                                            <dt className="md:col-span-4 col-span-5 mt-2">Date :</dt>
                                            <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">23rd July, 2023</dd>

                                            <dt className="md:col-span-4 col-span-5 mt-2">Website :</dt>
                                            <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">www.yourdomain.com</dd>

                                            <dt className="md:col-span-4 col-span-5 mt-2">Location :</dt>
                                            <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">3/2/64 Mongus Street, UK</dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl font-medium">Have Question ? Get in touch!</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>

                    <div className="mt-6">
                        <a href="contactus.html" className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"><i className="uil uil-phone align-middle me-2"></i> Contact us</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageProduct