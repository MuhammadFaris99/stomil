interface Props {
    params: { [key: string]: string }
}

const PageService = ({ params }: Props) => {
    return `product ${params.slug}`
    // <section className="py-20">
    //     <div className="container mx-auto">
    //         <div className="grid grid-cols-1">
    //             <div className="relative">
    //                 <h5 className="mb-4 text-gray-900 dark:text-gray-50">Use for Jobcy</h5>
    //                 <ul className="pb-2 mb-4 space-y-4 text-gray-500 about-list dark:text-gray-300">
    //                     <li className="ltr:pl-7 rtl:pr-7">
    //                         At Jobcy, accessible at Website.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Jobcy and how we use
    //                         If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at <b className="text-red-600">Jobcytechnologypvt.ltd.com</b>
    //                     </li>
    //                     <li className="ltr:pl-7 rtl:pr-7">
    //                         If you have additional questions or require more information about our Privacy Policy
    //                     </li>
    //                     <li className="ltr:pl-7 rtl:pr-7">
    //                         This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Jobcy. This policy is not applicable to any information collected offline or via channels other than this website.
    //                     </li>
    //                     <li className="ltr:pl-7 rtl:pr-7">
    //                         Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity to our website with regards to the information that they shared and/or collect in Jobcy. This policy is not applicable to any information collected offline or via channels other than this website.
    //                     </li>
    //                 </ul>
    //             </div>
    //             <div className="relative mt-4">
    //                 <h5 className="mb-4 text-gray-900 dark:text-gray-50">We use your information to :</h5>
    //                 <ul className="pb-2 mb-4 space-y-4 text-gray-500 about-list dark:text-gray-300">
    //                     <li className="ltr:pl-7 rtl:pr-7">
    //                         Digital Marketing Solutions for Tomorrow</b>
    //                     </li>
    //                     <li className="ltr:pl-7 rtl:pr-7">
    //                         Our Talented & Experienced Marketing Agency
    //                     </li>
    //                     <li className="ltr:pl-7 rtl:pr-7">
    //                         It is said that song composers of the past used texts.
    //                     </li>
    //                     <li className="ltr:pl-7 rtl:pr-7">
    //                         Create your own skin to match your brand
    //                     </li>
    //                 </ul>
    //             </div>
    //             <div className="relative mt-4">
    //                 <h5 className="mb-4 text-gray-900 dark:text-gray-50">Privacy and copyright protection :</h5>
    //                 <ul className="pb-2 mb-4 space-y-4 text-gray-500 about-list dark:text-gray-300">
    //                     <li className="ltr:pl-7 rtl:pr-7">
    //                         There is now an <b className="text-red-600">abundance</b> of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.
    //                     </li>
    //                     <li className="ltr:pl-7 rtl:pr-7">
    //                         It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.
    //                     </li>
    //                 </ul>
    //             </div>
    //             <div className="mt-8 mb-2 text-end">
    //                 <a href="javascript:void(0)" className="text-white border-transparent btn ltr:mr-2 rtl:ml-2 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 focus:ring focus:ring-custom-500/30">  <i className="uil uil-print ltr:mr-2 rtl:ml-2"></i>  Print</a>
    //             </div>
    //         </div>
    //     </div>
    // </section>
}

export default PageService