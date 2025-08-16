"use client"

import { Button } from "../ui/button"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import images from "../../../public/images"


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`py-5 w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#1f1f1f]/80 backdrop-blur-md shadow-lg border-b border-gray-200/50" : "bg-transparent"
          }`}
      >
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/">
                {/* Full logo for larger screens */}
                <Image
                  src={images.svg.logo}
                  alt="Teachfosys Logo"
                  className="hidden sm:block h-8 w-auto cursor-pointer"
                />
                {/* Mini logo for mobile screens */}
                <Image
                  src={images.svg.miniLogo}
                  alt="Teachfosys Logo"
                  className="block sm:hidden h-10 w-auto cursor-pointer"
                />
              </Link>
            </div>

            {/* Menu Items - Center */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-[18px] font-medium transition-colors duration-200 ${isScrolled ? "text-white hover:text-[#55e76d]" : "text-white hover:text-[#55e76d]"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Contact Info - Right */}
            <div className="flex items-center space-x-4">
             <Link href="/contact">
      <Button
        className="bg-[#55e76d] text-white px-6 h-12 text-[18px] font-medium
          transition-all duration-300 ease-in-out
          hover:bg-[#4dd663] hover:scale-105 hover:shadow-md
          active:scale-95"
      >
        Contact Us
      </Button>
    </Link>


              <div className="md:hidden">
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className={`focus:outline-none transition-colors duration-200 ${isScrolled
                      ? "text-white hover:text-[#55e76d] focus:text-[#55e76d]"
                      : "text-white hover:text-[#55e76d] focus:text-[#55e76d]"
                    }`}
                  aria-label="Toggle menu"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMobileMenu}></div>

        {/* Side Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-[#0e0f11] shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <Link href="/">
                {/* Full logo for larger mobile screens */}
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fullLogo-uMzSp1Q19mocY7NB0bcnsKX45mm0IE.png"
                  alt="TEA Cyprus Logo"
                  className="hidden xs:block h-8 w-auto cursor-pointer"
                />
                {/* Mini logo for smaller mobile screens */}
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/miniLogo-VPCFxdqh0m3AoT9qjrwGdtMvxShaFq.svg"
                  alt="TEA Logo"
                  className="block xs:hidden h-8 w-auto cursor-pointer"
                />
              </Link>
              <button onClick={closeMobileMenu} className="text-gray-500 hover:text-[#55e76d] focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 px-6 py-8">
              <nav className="space-y-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block text-lg font-medium text-white hover:text-[#55e76d] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="px-6 py-6 border-t border-gray-200">
              <div className="flex items-center text-white mb-4">
                <svg className="w-5 h-5 mr-3 text-[#55e76d]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-medium">+880 1234-567890</span>
              </div>
              <Link href="/contact">
                <Button className="w-full items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none justify-self-center whitespace-nowrap bg-emerald-50 text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none">
                  Contact Us
                </Button>
              </Link>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

