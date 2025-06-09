import React from "react";

export function HorizontalCard({ number, image, category, title, description, link }) {
  return (
    <div className="mt-[5vw] flex items-center px-4 sm:px-8">

      <div className="text-[rgb(186,157,98)] font-light font-serif text-lg sm:text-xl md:text-4xl lg:text-6xl xl:text-8xl">
        {number}.
      </div>

      <div className="flex justify-center w-full">
        {/* Card Container */}
        <div className="w-[90%] flex flex-col md:flex-row h-auto md:h-[250px] rounded-2xl overflow-hidden 
                        bg-transparent shadow-[0_0_0_0.25px_rgb(186,157,98)]">

          {/* Image Section */}
          <div className="w-full md:w-2/5 h-[200px] md:h-full">
            <img
              src={image}
              alt="card-image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center p-4 text-white w-full md:w-3/5 min-h-[250px]">
            <h3 className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl">
              {category}
            </h3>
            <h2 className="font-light text-md sm:text-lg md:text-xl lg:text-2xl mt-1">
              {title}
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 
              font-extralight tracking-wide leading-5 sm:leading-6 text-gray-400 mt-2
              max-h-20 overflow-y-auto scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-gray-300">
  {description}
</p>
            <a href={link} className="mt-4 inline-block text-[rgb(186,157,98)] underline text-sm">
              Learn More →
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
