import Image from 'next/image'
import services from '../../../../__mocks__/services.json'

interface Props {
  params: { [key: string]: string }
}

function PageService({ params }: Props) {
  const selected = services.items.find(x => x.slug === params.slug.toLowerCase())
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="border rounded-md border-gray-100/30 dark:border-neutral-600/80">
              <div className="relative w-full h-[50vh]">
                {selected && (
                  <Image
                    fill
                    src={selected?.imagesProduct}
                    className="rounded-md mb-7 object-cover"
                    alt={selected.title}
                  />
                )}
              </div>
              <div className="p-6">
                <div className="grid grid-cols-12">
                  <div className="col-span-12">
                    <div className="relative">
                      <h1 className="mb-1 text-gray-900 text-[24px] font-bold">
                        {selected?.title}
                      </h1>
                      <p className="mt-4">{selected?.description}</p>
                    </div>
                  </div>
                </div>

                {selected?.listInfo.map(x => (
                  <div className="my-5" key={x.title}>
                    <h3 className="mb-3 text-gray-900 font-bold">{x.title}</h3>
                    <div>
                      <p className="mb-3 text-gray-500 dark:text-gray-300">{x.description}</p>

                      {x.range.length > 0 && (
                        <ul className="mb-0 text-gray-500 dark:text-gray-300">
                          {x.range.map(y => (
                            <li className="mb-2 text-gray-500 dark:text-gray-300" key={y}>
                              <i className="mx-2 fa fa-circle" style={{ fontSize: '8px' }} />
                              <span>{y}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageService
