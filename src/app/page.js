"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import LetterGlitch from "../Components/LetterGlitch"

export default function MaintenancePage() {
// August 22, 2025 at 23:59:59
  const TARGET_DATE = new Date(2025, 7, 22, 23, 59, 59);

  // Alternative: You can also set date like this:
  // const TARGET_DATE = new Date("2024-12-31T23:59:59")

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const timerRef = useRef(null)
  const contactsRef = useRef(null)

  useEffect(() => {
    const targetDate = TARGET_DATE

    const updateTimer = () => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, []) // Removed MAINTENANCE_DAYS dependency

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline()

    tl.from(titleRef.current, {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: "bounce.out",
    })
      .from(
        subtitleRef.current,
        {
          duration: 0.8,
          y: 30,
          opacity: 0,
          ease: "power2.out",
        },
        "-=0.5",
      )
      .from(
        timerRef.current,
        {
          duration: 1,
          scale: 0,
          opacity: 0,
          ease: "back.out(1.7)",
        },
        "-=0.3",
      )
      .from(
        contactsRef.current,
        {
          duration: 0.8,
          y: 50,
          opacity: 0,
          ease: "power2.out",
        },
        "-=0.5",
      )

    // Pulse animation for timer numbers
    gsap.to(".timer-number", {
      duration: 1,
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.1,
    })
  }, [])

  return (
    <div className=" min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <LetterGlitch
          glitchColors={["#374151", "#4b5563", "#35e463", "#6b7280"]}
          glitchSpeed={80}
          outerVignette={true}
          centerVignette={false}
          smooth={true}
        />
      </div>

      <div ref={containerRef} className="text-center max-w-4xl mx-auto relative z-10">
        {/* Title */}
        <div ref={titleRef} className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight drop-shadow-2xl text-white">
            We&apos;ll Be Back Soon
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef} className="mb-12">
          <p className="text-xl md:text-2xl leading-relaxed drop-shadow-lg text-white">
            We&apos;re upgrading our site to serve you better.
            <br />
            Thank you for your patience!
          </p>
        </div>

        {/* Countdown Timer */}
        <div ref={timerRef} className="mb-16">
          <h2 className="text-2xl md:text-3xl mb-8 font-semibold drop-shadow-lg" style={{ color: "#fff" }}>
            Coming Back In
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
            {[
              {
                label: "Days",
                value: timeLeft.days,
              },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-2xl"
              >
                <div className="timer-number text-4xl md:text-5xl font-bold mb-2" style={{ color: "#35e463" }}>
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-gray-300 text-sm md:text-base font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div
          ref={contactsRef}
          className="bg-gray-900/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30 shadow-2xl"
        >
          <div className="text-white/90">
            <p className="mb-6 text-lg md:text-xl" style={{ color: "#35e463" }}>
              Need urgent support?
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              {/* Email */}
              <a
                href="mailto:hello@teachfosys.com"
                className="hover:text-white transition-all duration-300 flex items-center space-x-3 group hover:scale-105"
              >
                <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-3 rounded-full group-hover:shadow-lg group-hover:shadow-gray-600/25">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <span className="text-lg font-medium">Email Support</span>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61579265554049"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all duration-300 flex items-center space-x-3 group hover:scale-105"
              >
                <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-3 rounded-full group-hover:shadow-lg group-hover:shadow-blue-800/25">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span className="text-lg font-medium">Facebook</span>
              </a>

              {/* Call */}
              <a
                href="tel:+8801972732652"
                className="hover:text-white transition-all duration-300 flex items-center space-x-3 group hover:scale-105"
              >
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full group-hover:shadow-lg group-hover:shadow-green-500/25">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <span className="text-lg font-medium">Call Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 rounded-3xl py-5 text-white  text-sm bg-gray-900/60 backdrop-blur-sm">
          <p>© 2024 TeachFosys. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
