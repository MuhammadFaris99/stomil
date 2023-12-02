// import React, {useState} from "react"

function PageContactUs() {
  // const [setSubmittedValue, submittedValue] = useState ("");
  return (
    <section className="lg:pb-24 py-6 relative">
        <div className="container">
            <div className="lg:flex align-items-center">
                <div className="lg:w-1/2">
                    <div className="mb-6 relative bg-clip-border rounded-[0.1875rem]">
                        <div className="py-12">
                            <h2 className="mb-4 text-2xl/6 mt-0 font-medium">Contact Us</h2>
                            <p className="mb-12 text-base/6">Please contact us by filling out the form below. If you have any other questions, comments or suggestions our team is ready to help.</p>

                            <form>
                                <div className="flex gap-6">
                                    <div className="md:w-1/2">
                                        <div className="mb-5">
                                            <label htmlFor="exampleInputName" className="block text-sm font-medium mb-1 text-gray-600">Name <span className="text-red-500">*</span></label>
                                            <input type="text" className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0" id="exampleInputName" placeholder="Your Name"/>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2">
                                        <div className="mb-5">
                                            <label htmlFor="exampleInputEmail" className="block text-sm font-medium mb-1 text-gray-600">Email <span className="text-red-500">*</span></label>
                                            <input type="text" className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0" id="exampleInputEmail" placeholder="Your Email"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="md:w-1/2">
                                        <div className="mb-5">
                                            <label htmlFor="exampleInputCompany" className="block text-sm font-medium mb-1 text-gray-600">Company <span className="text-red-500">*</span></label>
                                            <input type="text" className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0" id="exampleInputCompany" placeholder="Your Company"/>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2">
                                        <div className="mb-5">
                                            <label htmlFor="exampleInputPhone" className="block text-sm font-medium mb-1 text-gray-600">Phone <span className="text-red-500">*</span></label>
                                            <input type="tel" className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0" id="exampleInputPhone" placeholder="Your Phone"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="mb-5">
                                        <label htmlFor="exampleInputEmail1" className="block text-sm font-medium mb-1 text-gray-600">Email <span className="text-red-500">*</span></label>
                                        <input type="email" className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0" id="exampleInputEmail1" placeholder="Your Email"/>
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="exampleFormControlTextarea1" className="block text-sm font-medium mb-1 text-gray-600">Message <span className="text-red-500">*</span></label>
                                        <textarea className="py-2 px-4 leading-6 block w-full border-gray-300 rounded text-sm focus:border-gray-300 focus:ring-0" id="exampleFormControlTextarea1" rows={4} placeholder="Type Your Massage..."></textarea>
                                    </div>
                                </div>
                                <button 
                                  type="submit"
                                  id="submit"
                                  name="submit"
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                >
                                  {' '}
                                  Send Message <i className="uil uil-message ms-1" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="lg:w-5/12 ms-auto py-16 overflow-x-hidden">
                    <div className="h-[520px]">
                        <div id="marker-map5" className="h-100" data-toggle="map" data-map='{"mapCenter": [40.749179, -73.989276], "zoom": 12, "useTextIcon": false, "interactive": true, "geojson": "/assets/sample-listing-geojson.json" }'>
                            <iframe className="w-full h-[500px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.00487528595!2d106.7045112750947!3d-6.13004499385672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a02a4be56ed0b%3A0x2514e3aff0c03a31!2sPT%20Stomil%20Indonesia!5e0!3m2!1sen!2sid!4v1698600544309!5m2!1sen!2sid" frameBorder="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">

                <div className="flex mb-3">
                    <span className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg relative me-4 shrink-0">
                        <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                <path d="M12.7037037,14 L15.6666667,10 L13.4444444,10 L13.4444444,6 L9,12 L11.2222222,12 L11.2222222,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L12.7037037,14 Z" id="Combined-Shape" fill="currentcolor" opacity="0.3"></path>
                                <path d="M9.80428954,10.9142091 L9,12 L11.2222222,12 L11.2222222,16 L15.6666667,10 L15.4615385,10 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9.80428954,10.9142091 Z" id="Combined-Shape" fill="currentcolor"></path>
                            </g>
                        </svg>
                    </span>
                    <div className="grow">
                        <h5 className="text-base text-gray-700">Email</h5>
                        <a href="#" className="text-gray-500 my-1">stomilindo@cbn.net.id</a>
                    </div>
                </div>

                <div className="flex mb-3">
                    <span className="flex items-center justify-center w-12 h-12 bg-orange-500/20 rounded-lg relative me-4 shrink-0">
                        <svg className="w-7 h-7 text-orange-500" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                <path d="M13.0799676,14.7839934 L15.2839934,12.5799676 C15.8927139,11.9712471 16.0436229,11.0413042 15.6586342,10.2713269 L15.5337539,10.0215663 C15.1487653,9.25158901 15.2996742,8.3216461 15.9083948,7.71292558 L18.6411989,4.98012149 C18.836461,4.78485934 19.1530435,4.78485934 19.3483056,4.98012149 C19.3863063,5.01812215 19.4179321,5.06200062 19.4419658,5.11006808 L20.5459415,7.31801948 C21.3904962,9.0071287 21.0594452,11.0471565 19.7240871,12.3825146 L13.7252616,18.3813401 C12.2717221,19.8348796 10.1217008,20.3424308 8.17157288,19.6923882 L5.75709327,18.8875616 C5.49512161,18.8002377 5.35354162,18.5170777 5.4408655,18.2551061 C5.46541191,18.1814669 5.50676633,18.114554 5.56165376,18.0596666 L8.21292558,15.4083948 C8.8216461,14.7996742 9.75158901,14.6487653 10.5215663,15.0337539 L10.7713269,15.1586342 C11.5413042,15.5436229 12.4712471,15.3927139 13.0799676,14.7839934 Z" id="Path-76" fill="currentcolor"></path>
                                <path d="M14.1480759,6.00715131 L13.9566988,7.99797396 C12.4781389,7.8558405 11.0097207,8.36895892 9.93933983,9.43933983 C8.8724631,10.5062166 8.35911588,11.9685602 8.49664195,13.4426352 L6.50528978,13.6284215 C6.31304559,11.5678496 7.03283934,9.51741319 8.52512627,8.02512627 C10.0223249,6.52792766 12.0812426,5.80846733 14.1480759,6.00715131 Z M14.4980938,2.02230302 L14.313049,4.01372424 C11.6618299,3.76737046 9.03000738,4.69181803 7.1109127,6.6109127 C5.19447112,8.52735429 4.26985715,11.1545872 4.51274152,13.802405 L2.52110319,13.985098 C2.22450978,10.7517681 3.35562581,7.53777247 5.69669914,5.19669914 C8.04101739,2.85238089 11.2606138,1.72147333 14.4980938,2.02230302 Z" id="Combined-Shape" fill="currentcolor" opacity="0.3"></path>
                            </g>
                        </svg>
                    </span>
                    <div className="grow">
                        <h5 className="text-base text-gray-700">Phone</h5>
                        <a href="#" className="text-gray-500 my-1">021-5439 4436-37</a>
                    </div>
                </div>

                <div className="flex mb-3">
                    <span className="flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-lg relative me-4 shrink-0">
                        <svg className="w-7 h-7 text-yellow-500" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                <path d="M13.0799676,14.7839934 L15.2839934,12.5799676 C15.8927139,11.9712471 16.0436229,11.0413042 15.6586342,10.2713269 L15.5337539,10.0215663 C15.1487653,9.25158901 15.2996742,8.3216461 15.9083948,7.71292558 L18.6411989,4.98012149 C18.836461,4.78485934 19.1530435,4.78485934 19.3483056,4.98012149 C19.3863063,5.01812215 19.4179321,5.06200062 19.4419658,5.11006808 L20.5459415,7.31801948 C21.3904962,9.0071287 21.0594452,11.0471565 19.7240871,12.3825146 L13.7252616,18.3813401 C12.2717221,19.8348796 10.1217008,20.3424308 8.17157288,19.6923882 L5.75709327,18.8875616 C5.49512161,18.8002377 5.35354162,18.5170777 5.4408655,18.2551061 C5.46541191,18.1814669 5.50676633,18.114554 5.56165376,18.0596666 L8.21292558,15.4083948 C8.8216461,14.7996742 9.75158901,14.6487653 10.5215663,15.0337539 L10.7713269,15.1586342 C11.5413042,15.5436229 12.4712471,15.3927139 13.0799676,14.7839934 Z" id="Path-76" fill="currentcolor"></path>
                                <path d="M14.1480759,6.00715131 L13.9566988,7.99797396 C12.4781389,7.8558405 11.0097207,8.36895892 9.93933983,9.43933983 C8.8724631,10.5062166 8.35911588,11.9685602 8.49664195,13.4426352 L6.50528978,13.6284215 C6.31304559,11.5678496 7.03283934,9.51741319 8.52512627,8.02512627 C10.0223249,6.52792766 12.0812426,5.80846733 14.1480759,6.00715131 Z M14.4980938,2.02230302 L14.313049,4.01372424 C11.6618299,3.76737046 9.03000738,4.69181803 7.1109127,6.6109127 C5.19447112,8.52735429 4.26985715,11.1545872 4.51274152,13.802405 L2.52110319,13.985098 C2.22450978,10.7517681 3.35562581,7.53777247 5.69669914,5.19669914 C8.04101739,2.85238089 11.2606138,1.72147333 14.4980938,2.02230302 Z" id="Combined-Shape" fill="currentcolor" opacity="0.3"></path>
                            </g>
                        </svg>
                    </span>
                    <div className="grow">
                        <h5 className="text-base text-gray-700">Fax</h5>
                        <a href="#" className="text-gray-500 my-1">021-5439-4439</a>
                    </div>
                </div>

                <div className="flex mb-3">
                    <span className="flex items-center justify-center w-12 h-12 bg-teal-500/20 rounded-lg relative me-4 shrink-0">
                        <svg className="w-7 h-7 text-teal-500" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                <path d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z" id="Combined-Shape" fill="currentcolor"></path>
                            </g>
                        </svg>
                    </span>
                    <div className="grow">
                        <h5 className="text-base text-gray-700">Address</h5>
                        <a href="#" className="text-gray-500 my-1">Komplek Permata Taman Palem Blok D-9 no.35 Pegadungan, Kalideres, Jakarta Barat - 11830</a>
                    </div>
                </div>
            </div>
        </div>

    </section>
    // <section className="pt-16">
    //   <div className="container mx-auto ">
    //     <div className="grid items-center grid-cols-12 mt-5 lg:gap-8 gap-y-8">
    //       <div className="col-span-12 lg:col-span-6">
    //         <div className="mt-4">
    //           <h3 className="mb-2 text-3xl text-gray-900 dark:text-white">Contact Us</h3>
    //           <p className="text-gray-500 dark:text-gray-300">
    //             Please contact us by filling out the form below. If you have any other questions,
    //             comments or suggestions our team is ready to help.
    //           </p>
    //           <form
    //             method="post"
    //             className="mt-4 contact-form"
    //             name="myForm"
    //             id="myForm"
    //           >
    //             <span id="error-msg" />
    //             <div className="grid grid-cols-12 gap-5">
    //               <div className="col-span-12">
    //                 <div className="mb-3">
    //                   <label htmlFor="nameInput" className="text-gray-900 dark:text-gray-50">
    //                     Name
    //                   </label>
    //                   <input
    //                     type="text"
    //                     name="name"
    //                     id="name"
    //                     className="w-full mt-1 rounded border-gray-100/50 placeholder:text-sm placeholder:text-gray-400 dark:bg-transparent dark:border-gray-800 focus:ring-0 focus:ring-offset-0 dark:text-gray-200"
    //                     placeholder="Enter your name"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="col-span-12 lg:col-span-6">
    //                 <div className="mb-3">
    //                   <label htmlFor="emailInput" className="text-gray-900 dark:text-gray-50">
    //                     Email
    //                   </label>
    //                   <input
    //                     type="email"
    //                     className="w-full mt-1 rounded border-gray-100/50 placeholder:text-sm placeholder:text-gray-400 dark:bg-transparent dark:border-gray-800 focus:ring-0 focus:ring-offset-0 dark:text-gray-200"
    //                     id="email"
    //                     name="email"
    //                     placeholder="Enter your email"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="col-span-12 lg:col-span-6">
    //                 <div className="mb-3">
    //                   <label htmlFor="companyInput" className="text-gray-900 dark:text-gray-50">
    //                     Company
    //                   </label>
    //                   <input
    //                     type="text"
    //                     className="w-full mt-1 rounded border-gray-100/50 placeholder:text-sm placeholder:text-gray-400 dark:bg-transparent dark:border-gray-800 focus:ring-0 focus:ring-offset-0 dark:text-gray-200"
    //                     id="companyInput"
    //                     name="company"
    //                     placeholder="Enter your company"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="col-span-12 lg:col-span-6">
    //                 <div className="mb-3">
    //                   <label htmlFor="addressInput" className="text-gray-900 dark:text-gray-50">
    //                     Address
    //                   </label>
    //                   <input
    //                     type="text"
    //                     className="w-full mt-1 rounded border-gray-100/50 placeholder:text-sm placeholder:text-gray-400 dark:bg-transparent dark:border-gray-800 focus:ring-0 focus:ring-offset-0 dark:text-gray-200"
    //                     id="address"
    //                     name="address"
    //                     placeholder="Enter your address"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="col-span-12 lg:col-span-6">
    //                 <div className="mb-3">
    //                   <label htmlFor="phoneInput" className="text-gray-900 dark:text-gray-50">
    //                     Phone
    //                   </label>
    //                   <input
    //                     type="tel"
    //                     className="w-full mt-1 rounded border-gray-100/50 placeholder:text-sm placeholder:text-gray-400 dark:bg-transparent dark:border-gray-800 focus:ring-0 focus:ring-offset-0 dark:text-gray-200"
    //                     id="phoneInput"
    //                     name="phone"
    //                     placeholder="Enter your phone"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="col-span-12">
    //                 <div className="mb-3">
    //                   <label htmlFor="meassageInput" className="text-gray-900 dark:text-gray-50">
    //                     Your Message
    //                   </label>
    //                   <textarea
    //                     className="w-full mt-1 rounded border-gray-100/50 placeholder:text-sm placeholder:text-gray-400 dark:bg-transparent dark:border-gray-800 focus:ring-0 focus:ring-offset-0 dark:text-gray-200"
    //                     id="meassageInput"
    //                     placeholder="Enter your message"
    //                     name="comments"
    //                     rows={3}
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="text-right">
    //               <button
    //                 type="submit"
    //                 id="submit"
    //                 name="submit"
    //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    //               >
    //                 {' '}
    //                 Send Message <i className="uil uil-message ms-1" />
    //               </button>
    //             </div>
    //           </form>
    //           <div>{"Submitted Value: " + submittedValue}</div>
    //         </div>
    //       </div>

    //       <div className="col-span-12 lg:col-span-6 lg:ml-20">
    //         <div className="text-center">
    //           <img src="/images/personrandom.png" alt="" className="img-fluid h-425 w-331 mt-6" />
    //         </div>
    //         <div className="pt-3 mt-4">
    //           <div className="flex items-center mt-2 text-gray-500">
    //             <div className="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 shrink-0 text-22">
    //               <i className="fa fa-location-dot" />
    //             </div>
    //             <div className="ltr:ml-2 rtl:mr-2 grow-1">
    //               <p className="mb-0 dark:text-gray-300">
    //                 Komplek Permata Taman Palem Blok D-9 no.35 Pegadungan, Kalideres, <br />
    //                 Jakarta Barat – 11830
    //               </p>
    //             </div>
    //           </div>
    //           <div className="flex items-center mt-2 text-gray-500">
    //             <div className="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 shrink-0 text-22">
    //               <i className="fa fa-envelope" />
    //             </div>
    //             <div className="ltr:ml-2 rtl:mr-2 grow-1">
    //               <p className="mb-0 dark:text-gray-300">stomilindo@cbn.net.id</p>
    //             </div>
    //           </div>
    //           <div className="flex items-center mt-2 text-gray-500">
    //             <div className="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=sky]:text-sky-500 group-data-[theme-color=red]:text-red-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=pink]:text-pink-500 group-data-[theme-color=blue]:text-blue-500 shrink-0 text-22">
    //               <i className="fa fa-phone" />
    //             </div>
    //             <div className="ltr:ml-2 rtl:mr-2 grow-1">
    //               <p className="mb-0 dark:text-gray-300">021-5439 4436-37</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="pt-20">
    //     <iframe
    //       title="google embed"
    //       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.00487528595!2d106.7045112750947!3d-6.13004499385672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a02a4be56ed0b%3A0x2514e3aff0c03a31!2sPT%20Stomil%20Indonesia!5e0!3m2!1sen!2sid!4v1698600544309!5m2!1sen!2sid"
    //       height="350"
    //       style={{ border: 0, width: '100%' }}
    //       loading="lazy"
    //     />
    //   </div>
    // </section>
  )
}

export default PageContactUs
