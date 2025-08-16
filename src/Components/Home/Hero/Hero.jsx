"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Image from "next/image"
import images from "../../../../public/images"
import MarqueeSlide from "@/Components/MarqueeSlide/MarqueeSlide"

const Hero = () => {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const text2Ref = useRef(null)
  const inlineImageRef = useRef(null)
  const heroIconRef = useRef(null)
  const videoRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline for coordinated animations
      const tl = gsap.timeline()

      // Animate overlay fade in
      tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power2.out" })

      // Animate first text line - slide up and fade in
      tl.fromTo(
        textRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
        "-=0.5",
      )

      // Animate second text line with stagger effect
      tl.fromTo(text2Ref.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8")

      // Animate inline image - scale and fade in
      tl.fromTo(
        inlineImageRef.current,
        { scale: 0, opacity: 0, rotation: -10 },
        { scale: 1, opacity: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.5",
      )

      // Animate hero icon - slide from right and fade in
      tl.fromTo(
        heroIconRef.current,
        { x: 100, opacity: 0, rotation: 15 },
        { x: 0, opacity: 1, rotation: 0, duration: 1, ease: "power2.out" },
        "-=0.6",
      )

      // Animate video container - slide up and fade in
      tl.fromTo(
        videoRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
        "-=0.4",
      )

      // Add subtle floating animation to hero icon
      gsap.to(heroIconRef.current, {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2,
      })

      // Add subtle pulse to inline image
      gsap.to(inlineImageRef.current, {
        scale: 1.05,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2.5,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="z-20 relative  bg-cover bg-center overflow-visible" style={{ backgroundImage: `url('/teachfosysBg.svg')` }}> 
      {/* Background Image */}

      {/* Dark Overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="container mx-auto relative z-10 flex flex-col justify-center h-full px-4">
        {/* Text */}
        <div className="text-white pt-40 sm:pt-32 md:pt-40">
          <h2
            ref={textRef}
            className="font-sans text-[42px] sm:text-4xl md:text-6xl lg:text-[120px] font-bold leading-tight"
          >
            Finest solutions for
          </h2>
          <h2
            ref={text2Ref}
            className="pl-4 sm:pl-10 md:pl-20 lg:pl-0 xl:pl-40 font-sans text-[42px] sm:text-4xl md:text-6xl lg:text-[120px] font-bold leading-tight"
          >
            all{" "}
            <span className="inline-flex items-center ">
              <Image
                ref={inlineImageRef}
                src={images.image.img1 || "/placeholder.svg"}
                alt="Team collaboration"
                width={200}
                height={75}
                className="inline-block mx-1 sm:mx-2 rounded-lg object-cover w-12 h-8 sm:w-16 sm:h-10 md:w-24 md:h-16 lg:w-[200px] lg:h-[75px]"
              />
            </span>{" "}
            challenges
          </h2>

          <Image
            ref={heroIconRef}
            src={images.svg.heroicon || "/placeholder.svg"}
            alt="Hero Icon"
            width={200}
            height={120}
            className="z-10 w-16 sm:w-24 md:w-32 lg:w-[20rem] absolute right-2 sm:right-4 md:right-8 lg:right-0 top-60 sm:top-48 md:top-60 inline-block mx-2 rounded-lg object-cover"
          />
        </div>

        {/* Video */}
        <div
          ref={videoRef}
          className="mt-6 sm:mt-8 md:mt-10 w-full rounded-lg overflow-hidden shadow-lg border border-white"
        >
          <video src="/webVideo.mp4" playsInline autoPlay muted loop className="w-full h-auto" />
        </div>
      </div>
       {/* Marquee Overlapping Bottom of Slider - Mobile Responsive */}
      <div className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 lg:-bottom-10 xl:-bottom-10 left-0 right-0 rotate-[-1deg] sm:rotate-[-1.5deg] md:rotate-[-2deg] z-20 overflow-hidden">
        <div className="w-[110%] -ml-[5%]">
          <MarqueeSlide />
        </div>
      </div>
    </section>
  )
}

export default Hero
