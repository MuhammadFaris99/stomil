// import React, {useState} from "react"

const PageContactUs = () => {
    // const [setSubmittedValue, submittedValue] = useState ("");
    return (
        <section className="pt-16">
            <div className="container mx-auto">
                <div className="grid items-center grid-cols-12 mt-5 lg:gap-8 gap-y-8">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="mt-4">
                            <h3 className="mb-2 text-3xl text-gray-900 dark:text-white">Contact Us</h3>
                            <p className="text-gray-500 dark:text-gray-300">Please contact us by filling out the form below. If you have any other questions, comments or suggestions our team is ready to help.</p>
                            <form method="post" 
                            // onSubmit={e => {
                            //     e.preventDefault();
                            //     console.log("Submitted!");
                            //     // setSubmittedValue(e.target[0].value);
                            // }}
                            className="mt-4 contact-form" name="myForm" id="myForm">
                                <span id="error-msg"></span>
                                <div className="grid grid-cols-12 gap-5">
                                    <div className="col-span-12">
                                        <div className="mb-3">
                                            <label htmlFor="nameInput" className="text-gray-900 dark:text-gray-50">Name</label>
                                            <input type="text" name="name" id="name" className="w-full mt-1 rounded border-gray-100/50 placeholder:text-sm placeholder:text-gray-400 dark:bg-transparent dark:border-gray-800 focus:ring-0 focus:ring-offset-0 dark:text-gray-200" placeholder="Enter your name"/>
                                        </div>
                                    </div>
                                    <div className="col-span-12 lg:col-span-6">
                                        <div className="mb-3">
                                            <label htmlFor="emailInput" className="text-gray-900 dark:text-gray-50">Email</label>
                                            <input type="email" className="w-full mt-1 rounded border-gray-100/50 placeholder:text-sm placeholder:text-gray-400 dark:bg-transparent dark:border-gray-800 focus:ring-0 focus:ring-offset-0 dark:text-gray-200" id="email" name="email" placeholder="Enter your email"/>
                                        </div>
                                    </div>
                                    <div className="col-span-12 lg:col-span-6">
                                        <div className="mb-3">
                                            <label htmlFor="companyInput" className="text-gray-900 dark:text-gray-50">Company</label>
                                            <input type="text" className="w-full mt-1 rounded border-gray-100/50 placeholder:text-sm placeholder:text-gray-400 dark:bg-transparent dark:border-gray-800 focus:ring-0 focus:ring-offset-0 dark:text-gray-200" id="companyInput" name="company" placeholder="Enter your company"/>
                                        </div>
                                    </div>
                                    <div className="col-span-12 lg:col-span-6">
                                        <div className="mb-3">
                                            <label htmlFor="addressInput" className="text-gray-900 dark:text-gray-50">Address</label>
                                            <input type="text" className="w-full mt-1 rounded border-gray-100/50 placeholder:text-sm placeholder:text-gray-400 dark:bg-transparent dark:border-gray-800 focus:ring-0 focus:ring-offset-0 dark:text-gray-200" id="address" name="address" placeholder="Enter your address"/>
                                        </div>
                                    </div>
                                    <div className="col-span-12 lg:col-span-6">
                                        <div className="mb-3">

                                            <label htmlFor="phoneInput" className="text-gray-900 dark:text-gray-50">Phone</label>
                                            <input type="tel" className="w-full mt-1 rounded border-gray-100/50 placeholder:text-sm placeholder:text-gray-400 dark:bg-transparent dark:border-gray-800 focus:ring-0 focus:ring-offset-0 dark:text-gray-200" id="phoneInput" name="phone" placeholder="Enter your phone"/>
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <div className="mb-3">
                                            <label htmlFor="meassageInput" className="text-gray-900 dark:text-gray-50">Your Message</label>
                                            <textarea className="w-full mt-1 rounded border-gray-100/50 placeholder:text-sm placeholder:text-gray-400 dark:bg-transparent dark:border-gray-800 focus:ring-0 focus:ring-offset-0 dark:text-gray-200" id="meassageInput" placeholder="Enter your message" name="comments" rows={3}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button type="submit" id="submit" name="submit" className="text-white border-transparent btn group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500"> Send Message <i className="uil uil-message ms-1"></i></button>
                                </div>
                            </form>
                            {/* <div>{"Submitted Value: " + submittedValue}</div> */}
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5 lg:ml-20">
                        <div className="text-center">
                            <img src="images/a.jpeg" alt="" className="img-fluid"/>
                        </div>
                        <div className="pt-3 mt-4">
                            <div className="flex items-center mt-2 text-gray-500">
                                <div className="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 shrink-0 text-22">
                                    <i className="uil uil-map-marker"></i>
                                </div>
                                <div className="ltr:ml-2 rtl:mr-2 grow-1">
                                    <p className="mb-0 dark:text-gray-300">Komplek Permata Taman Palem Blok D-9 no.35 Pegadungan, Kalideres, Jakarta Barat – 11830</p>
                                </div>
                            </div>
                            <div className="flex items-center mt-2 text-gray-500">
                                <div className="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 shrink-0 text-22">
                                    <i className="uil uil-envelope"></i>
                                </div>
                                <div className="ltr:ml-2 rtl:mr-2 grow-1">
                                    <p className="mb-0 dark:text-gray-300">stomilindo@cbn.net.id</p>
                                </div>
                            </div>
                            <div className="flex items-center mt-2 text-gray-500">
                                <div className="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 shrink-0 text-22">
                                    <i className="uil uil-phone-alt"></i>
                                </div>
                                <div className="ltr:ml-2 rtl:mr-2 grow-1">
                                    <p className="mb-0 dark:text-gray-300">021-5439 4436-37</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="pt-20">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.00487528595!2d106.7045112750947!3d-6.13004499385672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a02a4be56ed0b%3A0x2514e3aff0c03a31!2sPT%20Stomil%20Indonesia!5e0!3m2!1sen!2sid!4v1698600544309!5m2!1sen!2sid" height="350" style={{border:0,width: "100%"}} loading="lazy"></iframe>
            </div>
        </section>
    )
}

export default PageContactUs