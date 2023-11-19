import Image from "next/image"
import { redirect } from "next/navigation"
import items from "../../../../__mocks__/items.json"
interface Props {
    params: { [key: string]: string }
}

const PageProduct = ({ params }: Props) => {
    const products = items.products
    const product = products.find(x => x.slug === params.slug.toLowerCase())
    if (!product) {
        return redirect('/')
    }
    return (
        <section className="relative md:py-24 py-16">
            <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="grid grid-cols-1 gap-[30px]">
                            {product.imagesProduct.map(item => (
                                <img src={item} key={item} className="rounded-md w-full object-cover" alt="" />
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="sticky top-20">
                            <div className="grid lg:grid-cols-12 grid-cols-1 gap-[30px]">
                                <div className="lg:col-span-12">
                                    <div className="work-details">
                                        <h4 className="text-xl font-medium mb-3 border-b border-gray-100 dark:border-gray-700 pb-3">Project Detail :</h4>
                                        <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
                                    </div>
                                </div>
                                {product.listInfo.map(info => (
                                    <div className="lg:col-span-12" key={info.title}>
                                        <div className="bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 p-6 rounded-md">
                                            <h5 className="text-lg font-medium border-b border-gray-100 dark:border-gray-700 pb-3 mb-3">{info.title}</h5>
                                            {info.description ?
                                                <p className="pb-4">{info.description}</p>
                                            : null}
                                            <dl className="grid grid-cols-12 mb-0">
                                                {info.range && (<div className="lg:col-span-4 px-4">
                                                    <strong>{info.range?.subTitle}</strong>
                                                    <ul style={{ listStyle: "initial" }}>
                                                        {info.range?.list.map(range => (
                                                            <li key={range} className="ml-4">{range}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                )}
                                                {info.feature && (
                                                    <div className="lg:col-span-4 px-4">
                                                        <strong>{info.feature?.subTitle}</strong>
                                                        <ul style={{ listStyle: "initial" }}>
                                                            {info.feature?.list.map(feature => (
                                                                <li key={feature} className="ml-4">{feature}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                                <div className="lg:col-span-4">
                                                    {info.image?.map(image => (
                                                        <div key={image} className="relative h-[150px] w-full my-1">
                                                            <Image fill alt="img product list" style={{objectFit:"contain"}} src={image} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 text-center">
                    <h3 className="mb-6 md:text-2xl text-xl font-medium">Have Question ? Get in touch!</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <div className="mt-6">
                        <a href="/contact-us" className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"><i className="uil uil-phone align-middle me-2"></i> Contact us</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageProduct