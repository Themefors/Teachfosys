"use client"
import { Button } from "@/Components/ui/button"
import originalServices from "@/Json/services"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import images from "../../../../public/images"

gsap.registerPlugin(ScrollTrigger)


const WhoWeAre = () => {
  const sectionRef = useRef(null);  
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const originalCardsRef = useRef(null);
  const secondTitleRef = useRef(null);
  const secondDescRef = useRef(null);
  const newCardsRef = useRef(null);

  const newServices = [
  {
    id: 1,
    title: "For Startups",
    description:
      "We help startups turn their ideas into reality, with the goal of creating software products that meet the market demand.",
    icon: images.svg.startUp,
  },
  {
    id: 2,
    title: "For Scaleups",
    description:
      "We help rapidly expanding businesses create new sources of income, scale up their software, and speed up their development process.",
    icon: images.svg.scalUp,
  },
  {
    id: 3,
    title: "For Enterprises",
    description:
      "We work with enterprises to create and design software products that enhance their market share and competitiveness.",
    icon: images.svg.Enterprises,
  },
]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            once: true,
          },
        },
      )

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
            once: true,
          },
        },
      )

      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 80%",
            once: true,
          },
        },
      )

      gsap.fromTo(
        originalCardsRef.current.children,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: originalCardsRef.current,
            start: "top 80%",
            once: true,
          },
        },
      )

      gsap.fromTo(
        secondTitleRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: secondTitleRef.current,
            start: "top 80%",
            once: true,
          },
        },
      )

      gsap.fromTo(
        secondDescRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: secondDescRef.current,
            start: "top 80%",
            once: true,
          },
        },
      )

      gsap.fromTo(
        newCardsRef.current.children,
        { opacity: 0, y: 60, rotationY: 15 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: newCardsRef.current,
            start: "top 80%",
            once: true,
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="container mx-auto pt-40 bg-[#0e0f11] px-4">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div className="max-w-2xl">
          <h3 ref={titleRef} className="text-white text-5xl md:text-7xl font-normal font-sans">
            Our <span className="font-medium">Services</span>
          </h3>
          <p ref={subtitleRef} className="text-white text-lg md:text-xl mt-2">
            We harness the power of innovative technology to transform your business ideas into effective solutions.
          </p>
        </div>
        <Link href="/services" ref={buttonRef}>
          <Button className="border border-white rounded-[15px_0px_15px_0px] text-white px-6 h-12 text-[18px] font-medium transition-all ease-in-out hover:bg-[#4dd663] hover:scale-105 hover:shadow-md active:scale-95">
            Explore Our Services
          </Button>
        </Link>
      </div>

      {/* Original Services Grid */}
      <div ref={originalCardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {originalServices.map((service) => (
          <div
            key={service.id}
            className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between bg-[#1a1b1f]"
          >
            <div>
              <div className="w-10 h-10 mb-4">
                <Image
                  src={service.icon }
                  alt={service.title}
                  width={40}
                  height={40}
                  className="service-icon"
                />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
            <Link href="/services" className="mt-6">
              <Button className="border border-white rounded-[15px_0px_15px_0px] text-white px-6 h-12 text-[18px] font-medium transition-all ease-in-out hover:bg-[#4dd663] hover:scale-105 hover:shadow-md active:scale-95">
                Learn More
              </Button>
            </Link>
          </div>
        ))}
      </div>

      {/* New JSON Services Section */}
      <div className="mb-16 pt-20">
        <h2 ref={secondTitleRef} className="text-4xl md:text-[50px] font-medium font-sans text-white mb-4">
          Software Solutions for Any Business
        </h2>
        <p ref={secondDescRef} className="text-gray-300 md:w-full lg:w-3/4 mb-8">
          We are a software company with over 10 years of experience in developing and delivering innovative, reliable,
          and scalable software products. We offer a range of services, from web and mobile development, to cloud
          computing, to artificial intelligence, and more.
        </p>
        <div ref={newCardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newServices.map((service) => (
            <div
              key={service.id}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between bg-[#1a1b1f]"
            >
              <div>
                <div className="h-16 mb-4 flex items-center gap-5">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={50}
                    height={50}
                    className="service-icon"
                  />
                  <h4 className="text-xl font-semibold text-white">{service.title}</h4>
                </div>

                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
              <Link href="/services" className="mt-6">
                <Button className="border border-white rounded-[15px_0px_15px_0px] text-white px-6 h-12 text-[18px] font-medium transition-all ease-in-out hover:bg-[#4dd663] hover:scale-105 hover:shadow-md active:scale-95">
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
