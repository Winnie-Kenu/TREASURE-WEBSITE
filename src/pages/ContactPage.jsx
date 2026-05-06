import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import contactHeroImg from '../assets/hero-backgrounds/contact-hero.jpg'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/benjamin-ajisafe-889383113?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { label: 'Instagram', href: 'https://www.instagram.com/cooldonnell_?igsh=MXU2a3Y5Z2VwaDdmMg==' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1DScfi2r6S/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@cooldonnell_?_r=1&_t=ZS-93YBieDbO2E' },
  { label: 'Threads', href: 'https://www.threads.com/@cooldonnell_' },
]

export default function ContactPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24 topo-bg min-h-screen relative z-0"
    >
      {/* Hero Header */}
      <header className="px-6 md:px-12 min-h-[50vh] flex items-center relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
        <img src={contactHeroImg} alt="Contact Hero" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none z-0" />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-headline text-sm tracking-widest font-bold uppercase mb-4 block"
          >
            Got a new land?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-headline font-black tracking-tighter uppercase leading-[0.85] max-w-5xl"
            style={{ color: 'rgba(255, 255, 255, 0.25)' }}
          >
            LET'S BUILD <span style={{ color: 'var(--primary)' }}>SOMETHING</span>
          </motion.h2>
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Column: Form */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 py-12 md:py-16 lg:pr-16 xl:pr-24"
          >
            <form 
              action="https://formspree.io/f/mrejkwrd" 
              method="POST" 
              className="space-y-8 md:space-y-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="relative group">
                  <label className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">
                    FullName
                  </label>
                  <Input 
                    placeholder="Your Full Name" 
                    type="text" 
                    name="fullname" 
                    required 
                    className="rounded-none"
                  />
                </div>
                <div className="relative group">
                  <label className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">
                    EmailAddress
                  </label>
                  <Input 
                    placeholder="your@email.com" 
                    type="email" 
                    name="email" 
                    required 
                    className="rounded-none"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">
                  Project Type
                </label>
                <div className="relative">
                  <select 
                    name="project_type"
                    required
                    className="w-full bg-surface-container-highest border-none p-4 text-on-background focus:ring-0 focus:border-b-2 focus:border-primary transition-all border-b-2 border-transparent outline-none appearance-none font-body rounded-none"
                  >
                    <option value="" disabled selected>Select a service</option>
                    <option>Surveying</option>
                    <option>Construction</option>
                    <option>GIS</option>
                    <option>Engineering</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">
                    expand_more
                  </span>
                </div>
              </div>

              <div className="relative group">
                <label className="block font-headline text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us a little bit about your land and what you want to do..."
                  rows={4}
                  name="message"
                  required
                  className="rounded-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button size="lg" className="group rounded-none" type="submit">
                  Send Message
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Button>
                <Button variant="secondary" size="lg" asChild className="rounded-none">
                  <a href="tel:08067777113">
                    <span className="material-symbols-outlined text-lg">
                      call
                    </span>
                    Call Now
                  </a>
                </Button>
              </div>
            </form>
          </motion.section>

          {/* Right Column: Info & Map */}
          <motion.aside
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5 lg:border-l border-white/5 py-12 md:py-16 lg:pl-12 xl:pl-16 flex flex-col justify-between"
          >
            <div className="space-y-12 md:space-y-16">
              {/* Office Info */}
              <div>
                <h3 className="font-headline text-xs uppercase tracking-[0.2em] text-primary mb-8 font-bold">
                  Where to Find Us
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white text-xl md:text-2xl font-bold leading-tight max-w-sm">
                      Department of Surveying and Geoinformatics
                    </p>
                    <p className="text-on-surface-variant mt-2 text-sm uppercase tracking-wider">
                      Federal School of Surveying
                      <br />
                      Oyo, Nigeria
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <span className="text-xl font-medium tracking-tight">
                      08067777113
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-headline text-xs uppercase tracking-[0.2em] text-primary mb-8 font-bold">
                  Follow Us
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="group flex items-center gap-3 p-4 bg-surface-container hover:bg-surface-bright transition-all"
                    >
                      <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-white transition-all">
                        {link.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

          </motion.aside>
        </div>
      </div>

      {/* Full Width Map Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 w-full h-[400px] md:h-[500px] bg-surface-container overflow-hidden group border-t border-white/5 relative"
      >
        <iframe
          title="Federal School of Surveying Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.4192666144!2d3.9477865759178334!3d7.851084206450651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103759776c9c6bb9%3A0x95424bff5e3e21d3!2sFederal%20School%20of%20Surveying!5e0!3m2!1sen!2sng!4v1714581500000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'contrast(1.2) opacity(0.8)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="contrast-125 opacity-80 hover:opacity-100 transition-all duration-700"
        ></iframe>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur px-6 py-3 border border-primary/20 pointer-events-none">
          <p className="font-headline text-xs uppercase tracking-[0.3em] text-white text-center">
            7° 50' 32.7" N, 3° 57' 01.3" E
          </p>
        </div>
      </motion.section>
    </motion.main>
  )
}
