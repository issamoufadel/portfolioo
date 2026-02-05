'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'ACCUEIL', href: '/' },
  { name: 'SUR MOI', href: '#about' },
  { name: 'PARCOURS', href: '#parcours' },
  { name: 'PROJETS', href: '#projects' },
  { name: 'CONTACT', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-terminal-dark/90 backdrop-blur-sm border-b border-terminal-green/20' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-display font-bold tracking-wider glitch-text">
          <span className="border-2 border-terminal-green px-3 py-1 inline-block hover:bg-terminal-green hover:text-terminal-dark transition-all duration-300">
            IO.SYS
          </span>
        </Link>
        
        <div className="flex gap-8">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs tracking-widest text-gray-400 hover:text-terminal-green transition-colors duration-300 relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-terminal-green group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
