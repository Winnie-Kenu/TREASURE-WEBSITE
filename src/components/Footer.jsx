import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const XIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const TikTokIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.28-2.26.74-4.63 2.58-5.89 1.14-.78 2.5-.14 3.66.51V11.1c-1.1-.63-2.4-1.05-3.68-.84-1.29.18-2.45.96-3.2 2.01-1.03 1.44-1.28 3.34-.6 5.03.65 1.55 2.12 2.76 3.75 3.06 1.4.29 2.91-.01 4.1-.88 1.4-1.02 2.13-2.73 2.1-4.47l.03-14.93z" />
  </svg>
)

const ThreadsIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 24c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12zm0-2c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0-18c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" />
  </svg>
)

const serviceLinks = [
  { label: 'Boundary Survey', path: '/services' },
  { label: 'Topographic Survey', path: '/services' },
  { label: 'Engineering Survey', path: '/services' },
  { label: 'GIS & Mapping', path: '/services' },
]

const socials = [
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/benjamin-ajisafe-889383113?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { icon: <InstagramIcon />, label: 'Instagram', href: 'https://www.instagram.com/cooldonnell_?igsh=MXU2a3Y5Z2VwaDdmMg==' },
  { icon: <FacebookIcon />, label: 'Facebook', href: 'https://www.facebook.com/share/1DScfi2r6S/' },
  { icon: <TikTokIcon />, label: 'TikTok', href: 'https://www.tiktok.com/@cooldonnell_?_r=1&_t=ZS-93YBieDbO2E' },
  { icon: <ThreadsIcon />, label: 'Threads', href: 'https://www.threads.com/@cooldonnell_' },
]

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest text-white relative overflow-hidden topo-bg">
      {/* Main footer content */}
      <div className="relative z-10 px-6 md:px-12 pt-20 pb-12 max-w-7xl mx-auto">

        {/* Top: Brand + Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-8">
              <span className="font-headline text-2xl font-black tracking-tighter text-primary uppercase">
                Treasure Multi-map Concept
              </span>
            </Link>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm mb-8">
              Treasure Multi-map Concept is a geospatial and infrastructure company based in Ibadan, Oyo State, Nigeria.
               We provide expert land surveying and infrastructure development, GIS and mapping, environmental and project management services using advanced methods and cutting-edge technologies.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/[0.07] flex items-center justify-center
                    text-on-surface-variant hover:text-primary hover:border-primary/40
                    backdrop-blur-sm bg-surface-container/20 transition-all duration-300"
                  aria-label={`Follow us on ${social.label}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">

            {/* Services */}
            <div>
              <h4 className="font-headline font-bold text-xs tracking-[0.25em] uppercase text-primary mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {serviceLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className="text-on-surface-variant text-sm hover:text-white hover:pl-2 transition-all duration-300 block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-headline font-bold text-xs tracking-[0.25em] uppercase text-primary mb-6">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-on-surface-variant text-sm hover:text-white hover:pl-2 transition-all duration-300 block"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-on-surface-variant text-sm hover:text-white hover:pl-2 transition-all duration-300 block"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-headline font-bold text-xs tracking-[0.25em] uppercase text-primary mb-6">
                Reach Us
              </h4>
              <div className="space-y-4 text-on-surface-variant text-sm">
                <p>
                  Department of Surveying and Geoinformatics,
                  <br />
                  Federal School of Surveying, Oyo, Nigeria.
                </p>
                <a
                  href="mailto:benjaminifedejiajisafe@gmail.com"
                  className="block hover:text-primary transition-colors duration-300"
                >
                  benjaminifedejiajisafe@gmail.com
                </a>
                <a
                  href="tel:08067777113"
                  className="block hover:text-primary transition-colors duration-300"
                >
                  08067777113
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.07] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant text-xs tracking-wider">
            © {new Date().getFullYear()} Treasure Multi-map Concept. All rights reserved.
          </p>

        </div>
      </div>

      {/* Large architectural brand watermark */}
      <div className="relative z-0 -mt-16 pointer-events-none select-none overflow-hidden">
        <div className="text-[8rem] md:text-[16rem] font-headline font-black text-white/[0.03] leading-none whitespace-nowrap tracking-tighter uppercase -ml-4">
          TREASURE
        </div>
      </div>
    </footer>
  )
}
