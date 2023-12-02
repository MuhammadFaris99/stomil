interface Props {
    params: { [key: string]: string }
}

const PageService = ({ params }: Props) => {
    // return `product ${params.slug}`
    return (
        <section className="lg:py-10 py-10">
            <div className="container" data-aos="fade-up">
                <div className="flex flex-col items-center justify-center">
                    <img src="/images/Sepc1.jpg" className="rounded-md"/>
                    <p className="text-xs text-gray-500 mt-2 text-center">EPC</p>
                </div>

                <div>
                    <h1 className="text-xl mb-3 mt-10">Material Handling Facility</h1>
                    <ul className="pb-2 mb-4 space-y-4 text-gray-500 about-list dark:text-gray-300">
                        <li className="ltr:pl-8 rtl:pr-8">
                            <i className="fa fa-check">Engineering Design</i>
                        </li>
                        <li className="ltr:pl-8 rtl:pr-8">
                            <i className="fa fa-check">Construction Handling</i>
                        </li>
                        <li className="ltr:pl-8 rtl:pr-8">
                            <i className="fa fa-check">Equipment Installation</i>
                        </li>
                        <li className="ltr:pl-8 rtl:pr-8">
                            <i className="fa fa-check">Shipment Handling</i>
                        </li>
                    </ul>
                </div>

                <div>
                    <p className="text-sm/relaxed tracking-wider text-gray-600 mb-6">Sed ut perspiciatis unde omnis iste natus the error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus.</p>
                </div>

                <div className="bg-gray-100 p-8 mb-6">
                    <h5 className="text-base sm:text-lg font-normal text-gray-600 mb-3">Perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beataevitae dicta sunt explicabo tempore cum soluta.</h5>
                    <p className="text-gray-500 font-light text-sm"><i className="fa-solid fa-minus me-2"></i> Christian Hall</p>
                </div>

                <div>
                    <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">At vero eos et accusamus et iusto odio dignissimos ducimus that qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate provident similique sunt in culpa qui officia deserunt mollitia animi id est laborum et fuga.</p>
                </div>

            </div>
            
           
        </section>
    )
}

export default PageService