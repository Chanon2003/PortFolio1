import { useState } from "react"
import { IoClose } from "react-icons/io5"

const TitleLink = ({ isHighLight, title, link, tool }) => {
  const [openModal, setIsOpenModal] = useState(false)
  console.log('link', link)

  return (
    <div className={`text-primaryAccent flex gap-4 text-xl cursor-pointer  ${isHighLight ? 'text-primaryTitle' : ""}`}>
      <a onClick={() => setIsOpenModal(true)}>{title}</a>
      {openModal && (
        <section className="fixed inset-0 bg-neutral-800 bg-opacity-70 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-6xl bg-white p-4 rounded-lg shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <h1 className="font-semibold text-xl md:text-2xl">{title}</h1>
              <button onClick={() => setIsOpenModal(false)} aria-label="Close">
                <IoClose size={25} />
              </button>
            </div>

            {/* Responsive content */}
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Video */}
              <div className="w-full lg:w-1/2">
                <video className="w-full h-auto rounded" controls>
                  <source src={link} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

              </div>

              {/* Tool List */}
              <div className="w-full lg:w-1/2 flex flex-col gap-2">
                {tool?.map((el, i) => (
                  <div key={i} className="bg-gray-100 p-3 rounded shadow-sm text-sm md:text-base">
                    {el}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}


    </div>

  )
}
export default TitleLink