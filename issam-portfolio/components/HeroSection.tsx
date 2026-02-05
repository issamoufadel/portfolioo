'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden grid-bg">
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-terminal-green to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-terminal-green to-transparent" />
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-terminal-green to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-terminal-green to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-20">
        {/* Left content */}
        <div className={`space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Status */}
          <div className="flex items-center gap-3 text-terminal-green text-sm tracking-wider">
            <div className="w-2 h-2 bg-terminal-green rounded-full status-indicator" />
            <span>SYSTEM ONLINE • OPEN TO WORK</span>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <h1 className="text-6xl lg:text-7xl font-display font-bold tracking-tight leading-none">
              <span className="text-white glitch-text">ISSAM</span>
              <br />
              <span className="text-white glitch-text">OUFADEL</span>
            </h1>
          </div>

          {/* Title */}
          <div className="space-y-2 pl-1 border-l-2 border-terminal-green">
            <p className="text-xl text-gray-300 pl-4">
              Ingénieur d'État <span className="text-terminal-green font-bold">Génie Mécanique</span>
            </p>
            <p className="text-sm text-gray-500 pl-4 tracking-wide uppercase">
              Spécialisation Productique & Aéronautique
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4">
            <a
              href="#contact"
              className="btn-terminal bg-white text-terminal-dark px-6 py-3 text-sm font-bold tracking-wider hover:bg-terminal-green transition-all duration-300 uppercase"
            >
              Me contacter
            </a>
            <a
              href="#projects"
              className="btn-terminal border-2 border-terminal-green text-terminal-green px-6 py-3 text-sm font-bold tracking-wider hover:bg-terminal-green hover:text-terminal-dark transition-all duration-300 uppercase"
            >
              Explorer data
            </a>
          </div>
        </div>

        {/* Right image */}
        <div className={`relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
            {/* Decorative frame corners */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-terminal-green" />
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-terminal-green" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-terminal-green" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-terminal-green" />
            
            {/* Image container */}
            <div className="relative w-full h-full bg-terminal-gray overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-terminal-dark via-transparent to-transparent z-10" />
              <Image
                src="/profile.jpg"
                alt="Issam Oufadel"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>

            {/* Info tag */}
            <div className="absolute bottom-0 right-0 bg-terminal-dark/90 border-t border-l border-terminal-green px-4 py-2 text-xs tracking-wider">
              <div className="text-terminal-green font-mono">ID: OUFADEL_I</div>
              <div className="text-gray-500 font-mono">LOC: MAROC/FRANCE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
