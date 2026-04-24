"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroCarousel() {
  const images = [
    "/images/cro1.jpg",
    "/images/cro5.jpg",
    "/images/cro1.jpg",
    "/images/cro4.jpg",
    "/images/cro5.jpg",
  ]

  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[80vh] sm:h-[90vh] overflow-hidden">
      
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={src} alt="" fill className="object-cover" />
        </div>
      ))}

      {/* Prev */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 
        bg-black/40 hover:bg-black/60 text-white 
        w-10 h-10 rounded-full"
      >
        ‹
      </button>

      {/* Next */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 
        bg-black/40 hover:bg-black/60 text-white 
        w-10 h-10 rounded-full"
      >
        ›
      </button>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white">
          Your Health, Our Priority
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mt-4 max-w-2xl">
          Experience compassionate and professional healthcare
        </p>

        <div className="mt-6 flex gap-4">
          <Link href="/booking">
            <Button size="lg">
              Schedule Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>

          <Link href="/services">
            <Button size="lg" variant="outline">
              Explore Services
            </Button>
          </Link>
        </div>
      </div>

    </div>
  )
}