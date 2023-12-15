import supplyRecord from '../../../__mocks__/supplyRecord.json'
import SliderImage from '../products/[slug]/components/SliderImage'
import './style.css'

function PageSupplyRecord() {
  const { items } = supplyRecord
  return (
    <section className="lg:py-24 pb-1 relative bg-white">
      {/* <div className="pt-28 lg:pt-44 pb-28 group-data-[theme-color=violet]:bg-violet-500 group-data-[theme-color=sky]:bg-sky-500 group-data-[theme-color=red]:bg-red-500 group-data-[theme-color=green]:bg-green-500 group-data-[theme-color=pink]:bg-pink-500 group-data-[theme-color=blue]:bg-blue-500 dark:bg-neutral-900 bg-[url('/images/page-title.png')] bg-center bg-cover relative">
        <div className="container mx-auto">
          <div className="grid">
            <div className="col-span-12">
              <div className="text-center text-white">
                <h3 className="mb-4 text-[26px]">Supply Record</h3>
              </div>
            </div>
          </div>
        </div>
        <img src="/images/shape.png" className="absolute block bg-cover -bottom-0 dark:hidden" />
        <img src="/images/shape2.png" className="absolute hidden bg-cover -bottom-0 dark:block" />
      </div> */}
      {items.map(item => (
        <div className="container my-4" data-aos="fade-up" key={item.title}>
          <div className="grid lg:grid-cols-2 gap-14 mb-10" key={item.title}>
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl mb-7">{item.title}</h1>
              <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
                {item.description}
              </p>
              <br />
              <br />
              <br />
              <br />
              <div className="flex items-center" key={item.linkDownload}>
                <a
                  target="_blank"
                  href={item.linkDownload}
                  download
                  className="bg-orange-500 p-2 rounded-lg text-white"
                >
                  Download Supply Record
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SliderImage
                images={item.imageProduct}
                className="!h-[300px] slider-main"
                navigation
              />
            </div>
          </div>

          {item.List.map(list => (
            <div className="bg-gray-100 p-8 mb-6" key={list.title}>
              <div>
                <h3 className="text-2xl">{list.title}</h3>
                <div className="mt-5" dangerouslySetInnerHTML={{ __html: list.description }} />
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-16">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <tbody>
                      {list.table.map(table =>
                        table.coloum2.map((col2, i) => (
                          <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            key={table.coloum1}
                          >
                            {i === 0 && (
                              <td
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border"
                                rowSpan={table.coloum2.length}
                              >
                                {table.coloum1}
                              </td>
                            )}
                            <td className="px-6 py-4 border"> {col2}</td>
                            <td className="px-6 py-4 border">
                              {table.coloum3[i] ? table.coloum3[i] : ''}
                            </td>
                          </tr>
                        )),
                      )}
                    </tbody>
                  </table>
                  {/* ))} */}
                </div>

                <SliderImage images={list.image} className="!h-[300px]" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}
export default PageSupplyRecord
