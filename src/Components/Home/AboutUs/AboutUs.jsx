"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import images from "../../../../public/images"

gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const arrowRef = useRef(null)
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        },
      )

      gsap.fromTo(
        arrowRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        },
      )

      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        },
      )

      gsap.fromTo(
        paragraphRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        },
      )

      gsap.fromTo(
        cardsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="px-4 py-32 bg-[#18191b]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image (Centered) */}
          <div className="relative w-full lg:w-1/2 flex items-center justify-center">
            <Image
              ref={imageRef}
              src={images.image.about || "/placeholder.svg"}
              alt="About Us"
              className="rounded-2xl"
              priority
            />
           <div ref={(el) => (cardsRef.current[0] = el)} className="lg:block hidden absolute bottom-40  right-80">
             <div
                  ref={(el) => (cardsRef.current[0] = el)}
                  className="bg-lime-400 absolute w-80 h-46  text-black rounded-2xl p-8 flex flex-col justify-between transition hover:scale-105 z-10"
                >
                  <span className="text-2xl font-bold">Social Media</span>
                  <span className="mt-4 text-lg font-medium">01</span>
                </div>
                {/* Overlap effect */}
                <div className="absolute -top-10 left-0 right-0 mx-auto">
                  <div className="bg-lime-400 rounded-2xl h-0"></div>
                </div>
          </div>
           </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 space-y-10">
            {/* Heading */}
            <div className="flex items-center gap-6">
              <Image
                ref={arrowRef}
                src={images.svg.arrow || "/placeholder.svg"}
                alt="Arrow Icon"
                className="w-30 h-28  md:w-40 md:h-36"
              />
              <h2 ref={headingRef} className="text-[2rem] lg:text-7xl font-bold text-white leading-tight">
                Best Creative & <br /> Digital Agency
              </h2>
            </div>

            {/* Paragraph */}
            <p ref={paragraphRef} className="text-xl text-gray-400 max-w-[40rem]">
              Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret.
              Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you
              instrument out reasonably.
            </p>

            {/* Service Cards */}
            <div className="grid md:grid-cols-2 gap-8 pt-6">
              {/* Card 1 - Overlapping Image */}
                <div
                  ref={(el) => (cardsRef.current[0] = el)}
                  className="bg-lime-400 block lg:hidden w-full max-w-sm h-46 text-black rounded-2xl p-8  justify-between transition hover:scale-105 z-10"
                >
                  <span className="text-2xl font-bold">Social Media</span>
                  <span className="mt-4 text-lg font-medium">01</span>
                </div>
                {/* Overlap effect */}
                <div className="absolute -top-10 left-0 right-0 mx-auto">
                  <div className="bg-lime-400 rounded-2xl h-0"></div>
                </div>

              {/* Card 2 */}
              <div
                ref={(el) => (cardsRef.current[1] = el)}
                className="w-full max-w-sm h-46 bg-transparent border border-gray-600 text-white rounded-2xl p-8 flex flex-col justify-between transition hover:scale-105"
              >
                <span className="text-2xl font-semibold">Content Writing</span>
                <span className="mt-4 text-lg font-medium">02</span>
              </div>

              {/* Card 3 */}
              <div
                ref={(el) => (cardsRef.current[2] = el)}
                className="w-full max-w-sm h-46 bg-transparent border border-gray-600 text-white rounded-2xl p-8 flex flex-col justify-between transition hover:scale-105"
              >
                <span className="text-2xl font-semibold">Video Production</span>
                <span className="mt-4 text-lg font-medium">03</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
