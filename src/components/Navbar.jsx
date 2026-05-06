import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import treasureLogo from '@/assets/TREASURE-LOGO.png'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl flex justify-between items-center px-6 md:px-12 h-24 max-w-full mx-auto">
      <Link to="/" className="flex items-center gap-3 group">
        <img src={treasureLogo} alt="Treasure Multi-map Logo" className="h-10 w-auto group-hover:scale-105 transition-transform" />
        <span className="text-xl md:text-2xl font-black tracking-tighter text-primary uppercase font-headline">
          Treasure Multi-map
        </span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-10 items-center">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`font-headline tracking-tight uppercase text-sm font-bold transition-all duration-300 ${
                isActive
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-background/70 hover:text-on-background'
              }`}
            >
              {link.label}
            </Link>
          )
        })}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-4">
        <Button size="default" className="hidden sm:inline-flex bg-primary text-on-primary hover:bg-primary-dim" asChild>
          <a href="tel:08067777113">Call Now</a>
        </Button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-on-background p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-24 left-0 w-full bg-background border-t border-outline/20 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`font-headline tracking-tight uppercase text-sm font-bold py-3 border-b border-outline/20 transition-colors ${
                      isActive ? 'text-primary' : 'text-on-background/70'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Button className="mt-4 w-full bg-primary text-on-primary" asChild>
                <a href="tel:08067777113">Call Now</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
