import Image from "next/image";
import { Marquee } from "../magicui/marquee";
import images from "../../../public/images";


const MarqueeSlide = () => {
 const marqueeItems = [
     "Custom Software Solutions",
  "Shopify Development",
  "UI/UX Design",
  "WordPress Development",
  "4+ Years of Experience",
  "Webflow Development",
  "Brand Identity",
  "Responsive Websites",
  "E-commerce Development",
  "App Development",
  "User-Centered Design",
  "Technology That Works",
];



  return (
    <div className="bg-[#FFFEDA] py-3 md:py-5 overflow-hidden">
      <Marquee className="flex items-center gap-2 md:gap-4 text-black text-xl font-medium">
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#313131] font-medium whitespace-nowrap px-2 md:px-4">
              {item}
            </h2>
            <Image
              src={images?.svg?.star}
              alt="star"
              width={24}
              height={24}
              
              className="mx-2 sm:mx-3 md:mx-4 lg:mx-6 w-5 sm:w-4 md:w-6 lg:w-8 xl:w-12 h-5 sm:h-4 md:h-6 lg:h-8 xl:h-12 flex-shrink-0"
            />
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default MarqueeSlide
