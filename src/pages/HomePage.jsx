import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'

import boundarySurveyImg from '@/assets/services-image/boundary-survey.png'
import topographicSurveyImg from '@/assets/services-image/Topographic-SURVEY.jpg'
import engineeringSurveyImg from '@/assets/services-image/ENGINEERING-SURVEY.png'
import gisMappingImg from '@/assets/services-image/GIS.png'
import consultantPortrait from '@/assets/portrait/benajisafeportfolio.jpg'

import carousel1 from '@/assets/carousel-images/CAROUSEL-1.png'
import carousel2 from '@/assets/carousel-images/CAROUSEL-2.png'
import carousel3 from '@/assets/carousel-images/CAROUSEL-3.png'
import carousel4 from '@/assets/carousel-images/CAROUSEL-4.png'
import carousel5 from '@/assets/carousel-images/CAROUSEL-5.png'

const heroSlides = [carousel1, carousel2, carousel3, carousel4, carousel5]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

const services = [
  {
    icon: 'location_on',
    title: 'Boundary Survey',
    desc: 'We mark exactly where your land starts and ends so no one fights over the borders.',
    bg: 'bg-surface-container',
    offset: false,
    image: boundarySurveyImg,
  },
  {
    icon: 'terrain',
    title: 'Topographic Survey',
    desc: 'We map all the hills, trees, and bumps on the land so builders know what to expect.',
    bg: 'bg-surface-container-high',
    offset: true,
    image: topographicSurveyImg,
  },
  {
    icon: 'precision_manufacturing',
    title: 'Engineering Survey',
    desc: 'We guide the big machines to build long roads, strong bridges, and deep dams.',
    bg: 'bg-surface-container',
    offset: false,
    image: engineeringSurveyImg,
  },
  {
    icon: 'map',
    title: 'GIS & Mapping',
    desc: 'We use smart computer maps to plan whole cities and make sure everything is in the right spot.',
    bg: 'bg-surface-container-high',
    offset: true,
    image: gisMappingImg,
  },
]

const stats = [
  { icon: 'history', value: '15+', label: 'Years Working' },
  { icon: 'workspace_premium', value: '2660', label: 'Official License' },
  { icon: 'domain', value: 'ALL', label: 'Kinds of Land' },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="md:pt-[27px]"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-[150vh] w-full flex items-center px-6 md:px-12 overflow-hidden topo-bg pt-20 md:pt-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentSlide}
              src={heroSlides[currentSlide]}
              alt="Professional land surveying fieldwork"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              fetchpriority="high"
              loading="eager"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          </AnimatePresence>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3 md:left-auto md:right-12 md:translate-x-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:flex-col">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`transition-all duration-500 ${
                i === currentSlide
                  ? 'w-8 h-1 md:w-1 md:h-8 bg-primary shadow-[0_0_12px_var(--primary)]'
                  : 'w-4 h-1 md:w-1 md:h-4 bg-white/25 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <motion.div
          className="relative z-20 w-full max-w-6xl pt-5 md:pt-0"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Byline — Personal Description */}
          <motion.div variants={fadeUp} custom={0} className="mb-8 md:mb-10 flex items-start md:items-center gap-4">
            <div className="h-[2px] w-8 md:w-16 bg-primary shrink-0 mt-2 md:mt-0" />
            <span className="font-headline text-primary tracking-[0.15em] md:tracking-[0.25em] uppercase text-[9px] sm:text-[10px] md:text-xs font-bold leading-relaxed">
              Benjamin Ajisafe • A surveyor by profession, an academic and researcher by vocation, and a humanist by nature
            </span>
          </motion.div>

          {/* Hero Tagline — The sole statement */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-headline font-black tracking-tighter uppercase mb-12 md:mb-16"
          >
            <span
              className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1] md:leading-[0.95] mb-2 md:mb-3"
              style={{ color: 'rgba(255, 255, 255, 0.3)' }}
            >
              Working with Every
            </span>
            <span
              className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] leading-[0.95] md:leading-[0.9] text-primary mb-2 md:mb-3"
              style={{ color: 'var(--primary)' }}
            >
              Fundamental
            </span>
            <span className="flex flex-col gap-2 md:gap-3">
              <span
                className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] leading-[0.95] md:leading-[0.9] text-primary"
                style={{ color: 'var(--primary)' }}
              >
                Elements
              </span>
              <span
                className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1] md:leading-[0.95] font-black"
                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
              >
                of Knowledge
              </span>
            </span>
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} custom={2} className="flex flex-wrap gap-4 md:gap-6">
            <Button size="lg" asChild>
              <Link to="/services">
                Explore Services
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/about">Our Portfolio</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Stat Deco */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-12 right-12 hidden lg:block border border-white/5 p-8 backdrop-blur-md bg-surface-container/30"
        >
          <div className="font-headline text-5xl font-black text-primary mb-2">15+</div>
          <div className="font-label text-xs tracking-widest uppercase opacity-60">
            Years Working On Land
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-container-low grid grid-cols-1 md:grid-cols-3 divide-x divide-white/5">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="p-6 md:p-8 flex flex-col items-center text-center"
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-3">
              {stat.icon}
            </span>
            <div className="text-5xl md:text-6xl font-headline font-black text-white mb-1">
              {stat.value}
            </div>
            <div className="font-label text-sm tracking-[0.2em] uppercase text-on-surface-variant">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-32 bg-surface-container-lowest relative topo-bg-service overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 px-6 md:px-12 max-w-screen-2xl mx-auto"
        >
          <div>
            <div className="text-primary text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-4 font-mono font-bold">
              <span className="w-8 h-[2px] bg-primary" />
              Our Expertise
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-black uppercase tracking-tighter mb-4">
              What We <span className="text-primary">Do Best</span>
            </h2>
            <p className="text-on-surface-variant max-w-xl text-base md:text-lg font-light">
              From measuring a small plot for a house to mapping out a whole city, we draw the lines that help builders know where to start.
            </p>
          </div>
          <Link
            to="/services"
            className="font-headline text-primary font-bold text-sm tracking-widest uppercase mt-6 md:mt-0 flex items-center gap-2 hover:gap-4 transition-all duration-300"
          >
            View All Solutions [04]
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link
                  to="/services"
                  className="group block h-full bg-surface-container/40 backdrop-blur-md border border-white/[0.05]
                    hover:border-primary/30 hover:bg-primary/[0.04] transition-all duration-500 cursor-pointer relative overflow-hidden"
                >
                  {/* Image Area — Top, takes up ~65% of card height */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Gradient fade into content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent z-10" />

                    {/* Index Badge */}
                    <span className="absolute top-4 right-4 z-20 font-mono text-primary/50 text-xs tracking-[0.3em] uppercase font-bold
                      bg-black/40 backdrop-blur-sm px-3 py-1">
                      [{String(i + 1).padStart(2, '0')}]
                    </span>

                    {/* Icon */}
                    <div className="absolute bottom-4 left-5 z-20">
                      <span className="material-symbols-outlined text-primary text-3xl md:text-4xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </span>
                    </div>
                  </div>

                  {/* Content Area — Bottom */}
                  <div className="relative z-10 p-5 md:p-6 flex flex-col">
                    <div className="h-[2px] w-10 bg-primary/30 mb-4 group-hover:w-16 transition-all duration-500" />
                    <h3 className="text-xl md:text-2xl font-headline font-black uppercase tracking-tight mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-5">
                      {service.desc}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-primary font-headline text-xs font-bold uppercase tracking-widest
                      opacity-60 group-hover:opacity-100 group-hover:gap-4 transition-all duration-300">
                      <span>Learn More</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 md:py-40 bg-background relative overflow-hidden flex flex-col justify-center border-t border-white/[0.02]">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-white/[0.03]" />
          <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-white/[0.03]" />
          <div className="absolute left-0 right-0 top-[20%] h-[1px] bg-white/[0.03]" />
          <div className="absolute left-0 right-0 bottom-[20%] h-[1px] bg-white/[0.03]" />
        </div>

        <div className="px-6 md:px-12 w-full max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left: Complex Portrait Composition */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative group"
            >
              {/* Animated Accent Frame */}
              <div className="absolute -inset-4 md:-inset-8 border border-white/5 bg-white/[0.01] transition-colors duration-500 group-hover:bg-primary/5 group-hover:border-primary/20 z-0"></div>
              
              {/* Corner Accents */}
              <div className="absolute -top-6 -left-6 w-4 h-4 border-t-2 border-l-2 border-primary z-20" />
              <div className="absolute -bottom-6 -right-6 w-4 h-4 border-b-2 border-r-2 border-primary z-20" />

              {/* Topographic overlay inside frame */}
              <div className="absolute inset-0 z-20 opacity-30 mix-blend-overlay topo-bg-dense pointer-events-none" />

              {/* The Portrait Image */}
              <div className="relative z-10 w-full aspect-[3/4] overflow-hidden">
                <img
                  className="w-full h-full object-cover contrast-125 transition-all duration-700 ease-in-out scale-100 hover:scale-105"
                  alt="Benjamin Ajisafe - Principal Consultant and Expert Surveyor"
                  src={consultantPortrait}
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Duotone Overlay */}
                <div className="absolute inset-0 bg-primary/20 mix-blend-color z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Crosshairs overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 pointer-events-none z-20 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-primary" />
                  <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border border-primary" />
                </div>
              </div>

              {/* Data Tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-8 -right-6 md:-right-16 bg-surface-container border border-white/10 p-4 md:p-6 z-30 shadow-2xl backdrop-blur-md"
              >
                <div className="font-headline font-black text-white text-lg md:text-2xl uppercase tracking-wider mb-1 flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_var(--primary)]" />
                  Benjamin Ajisafe
                </div>
                <div className="text-xs text-primary/80 uppercase tracking-[0.2em] font-mono">
                  ID: PRN-CONSULTANT
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Typography-driven Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 lg:pl-16 flex flex-col justify-center relative z-10 mt-16 lg:mt-0"
            >
              <div className="text-primary text-sm tracking-[0.3em] uppercase mb-6 flex items-center gap-4 font-mono font-bold">
                <span className="w-12 h-[2px] bg-primary" />
                Leadership & Vision
              </div>
              
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-headline font-black uppercase tracking-tighter mb-10 leading-[0.9]">
                <span className="block text-transparent pb-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>A surveyor by profession,</span>
                <span className="block text-white pb-1">an academic and researcher by vocation,</span>
                <span className="block text-primary flex flex-wrap items-center gap-6">
                  and a humanist by nature.
                  <span className="text-2xl sm:text-4xl text-white/10 font-light hidden sm:inline-block tracking-normal">/01</span>
                </span>
              </h2>

              <div className="space-y-6 text-on-surface-variant text-lg md:text-xl font-light leading-relaxed max-w-2xl border-l border-white/10 pl-6 md:pl-8">
                <p>
                  As a leading authority at the renowned{' '}
                  <span className="text-white font-medium">
                    Federal School of Surveying in Oyo
                  </span>
                  , Mr. Benjamin Ajisafe doesn't just measure the land—he defines the standards for how it's done. 
                </p>
                <p>
                  Pioneering the use of advanced UAV drones, 3D laser scanners, and modern GIS techniques, he ensures our company stays lightyears ahead of traditional methods in Nigeria.
                </p>
                
                <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="group relative">
                    <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                    <div className="text-white/40 uppercase text-xs tracking-[0.2em] mb-2 font-mono">Affiliation</div>
                    <div className="font-headline text-white font-bold uppercase text-xl tracking-wide group-hover:text-primary transition-colors duration-300">
                      Geotrainers Consult
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                    <div className="text-white/40 uppercase text-xs tracking-[0.2em] mb-2 font-mono">Partner</div>
                    <div className="font-headline text-white font-bold uppercase text-xl tracking-wide group-hover:text-primary transition-colors duration-300">
                      The Geo-Bases Co.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-primary">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-headline font-black text-on-primary leading-none uppercase tracking-tighter">
            Ready to measure
            <br />
            your <span className="text-white">new land?</span>
          </h2>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </motion.div>
      </section>
    </motion.main>
  )
}
