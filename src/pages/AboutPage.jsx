import { motion } from 'framer-motion'
import aboutHeroImg from '../assets/hero-backgrounds/about-hero.jpg'
import consultantPortrait from '../assets/portrait/benajishafeportfolio.jpg'

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const affiliations = [
  {
    icon: 'school',
    title: 'Federal School of Surveying',
    subtitle: 'Senior Lecturer & Academic Pillar',
  },
  {
    icon: 'architecture',
    title: 'Geotrainers Consult Limited',
    subtitle: 'Strategic Technical Advisor',
  },
  {
    icon: 'hub',
    title: 'The Geo-Bases Company',
    subtitle: 'Innovation Lead & Partner',
  },
  {
    icon: 'verified_user',
    title: 'Professional License: 2660',
    subtitle: 'Licensed Practitioner Status',
    highlight: true,
  },
]

const galleryImages = [
  {
    alt: 'Technical fieldwork',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARA_DMgrtA-5q3eEvr4W7Qv0dgBkEsQhSLsVoTMk7H-vgm9NZ1uFJf7KCNVw2_MX9znkqJzcJZE4TAhbSbea8f5eLPjP4rgbM4SV2RMguAWWW9U6e48zfnLwHdqbobxDvUUFZjBHKjMFodiES65nlDyoHH1dIR5HI1vZH3v5lBuj40ItZBPwji_OM2VW5kliFRTKGZiOTiK2VaS1ZLutLRekfJGUEi4iTXdXNVMT8OqcLyy6CmoLoxQBGlvDAvOsptt8L9cW0gjls',
    aspect: 'aspect-square',
  },
  {
    alt: 'UAV Operations',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9QYCzwDFq2jDvf6-Qja08GetXEdKPSX_ejq0WAVmExSqnYkObofz5HAqFZd36GUHQC4WDgab_7s9lhYwtAhGyuP9Dt0B05ThF6BBu5Wnyc_CF20sbmFx4wZRxD4a8quWMiUqdhXEpjUa4tK_eRZHi1IpXxDFapV8XH1zcy2N9bxpT8dsSBhOHq8FSp3UyfMZZGBJb2BQhQY9OXBMcRmOPS49QKLezpIRPCoyurF0JBvUhlDbR5d8KMyXN0H99-DK2hNSTEJgxlAM',
    aspect: 'aspect-[3/4]',
  },
  {
    alt: 'Academic Environment',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMlOpUZg_0U7gDcqmKlE_JNCZSgm6JkZx6IP0Tf2ay2dhxJue5WMKFVNlyiJSjcDWLOzIa8gSM8l52u1hBZUiR2JkxrNyM-OJW_hHhGOQu-XS8JSIp5_rcENCkwXqDn90q7u8lPsqylv7w1wU97bYnN_eTUmnNzLuoohKw4wvr5LydhcETCsMReqY2ZrAgFFiD6euKhF-PdB_7iblXmmtMBBfEliDRb8dQPUEUangciTaRSRyi3s7LxAF-BbLIcMYDCT_0rA1n2p8',
    aspect: 'aspect-[3/4]',
  },
  {
    alt: 'Corporate setting',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB1LFAY7BZnR_rLvFEaFsglOKh5xtgQ9hAC1sQFndDzISFtMo0XTS8vjFB0ZVLmq9I_eYrxYFX3nIRk2B3FYdicWG-QT7hpEOR01rao69dkiMwkDTUD6h0piGzYETB3DR6iEiNi9Sb7qHrt6B2myvDDAjY3y4DuJywZLVAePt6aEAMnldP3A4jcKEyE7rmhwsimYK13FXKuosoyc_OGPoduBmSzf9Uv7CbOgzyUnOnirh6ld8prHV5ywM1SqlmcA6XtfF9yMHRAek',
    aspect: 'aspect-square',
  },
]

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="md:pt-[27px] py-[50px]"
    >
      {/* Hero Section / Header */}
      <header className="px-6 md:px-12 min-h-[50vh] flex items-center relative overflow-hidden bg-surface-container-lowest pt-28 pb-16 md:pt-32 md:pb-20">
        <img src={aboutHeroImg} alt="About Hero" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 topo-bg-dense opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-headline font-bold uppercase tracking-[0.3em] text-xs mb-6 block"
          >
            Executive Leadership
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black uppercase leading-[0.9] tracking-tighter mb-8"
            style={{ color: 'rgba(255, 255, 255, 0.25)' }}
          >
            LEADING <span style={{ color: 'var(--primary)' }}>THE</span> WAY
          </motion.h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed font-light"
            >
              We are the map-makers of the future. We don't just look at the ground; we help plan where the next big Nigerian cities and roads will be built.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-right hidden md:block flex-shrink-0"
            >
              <p className="font-headline text-primary text-5xl font-black italic">
                2660
              </p>
              <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                Official License ID
              </p>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content: Profile Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Stylized Headshot */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary z-20" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary z-20" />
            <div className="bg-surface-container-high aspect-[4/5] overflow-hidden transition-all duration-700">
              <img
                alt="Benjamin Ifedeji Ajisafe"
                className="w-full h-full object-cover"
                src={consultantPortrait}
                loading="lazy"
                decoding="async"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 bg-surface-container p-6 md:p-8 border-l-4 border-primary"
            >
              <h3 className="font-headline text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-2">
                Benjamin Ifedeji Ajisafe
              </h3>
              <p className="text-primary font-label uppercase text-xs tracking-widest font-semibold mb-4">
                Principal Surveyor & Lead Researcher
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/benjamin-ajisafe-889383113?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://www.instagram.com/cooldonnell_?igsh=MXU2a3Y5Z2VwaDdmMg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="mailto:benjaminifedejiajisafe@gmail.com"
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    mail
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Biography & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-headline font-black uppercase tracking-tight">
                The Chief Land Mapper
              </h2>
              <div className="h-1 w-20 bg-primary" />
              <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
                For more than{' '}
                <span className="text-white font-bold">
                  15 years
                </span>{' '}
                Mr. Benjamin Ifedeji Ajisafe has been the go-to person when it comes to measuring land in Nigeria. As a beloved{' '}
                <span className="text-white">
                  Teacher at the Federal School of Surveying
                </span>
                , he takes what he teaches in the classroom straight to the building sites.
              </p>
              <p className="text-on-surface-variant leading-relaxed text-base md:text-lg">
                He is an expert at flying drones (UAVs) and using laser scanners (LiDAR) to take pictures of the earth from the sky. Because he is always learning, Treasure Multi-map uses the best tools to get the job done.
              </p>
            </div>

            {/* Bento Grid of Affiliations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {affiliations.map((aff, i) => (
                <motion.div
                  key={aff.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className={`bg-surface-container p-5 md:p-6 flex items-start gap-4 hover:bg-surface-bright transition-colors group ${aff.highlight ? 'border border-primary/20' : ''
                    }`}
                >
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {aff.icon}
                  </span>
                  <div>
                    <h4 className="font-headline font-bold text-sm uppercase tracking-wide group-hover:text-primary">
                      {aff.title}
                    </h4>
                    <p className="text-xs text-on-surface-variant mt-1">
                      {aff.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-surface-container-low py-20 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <span className="text-primary font-headline font-bold uppercase tracking-[0.3em] text-xs mb-6 block">
                Core Services
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-black uppercase mb-8 leading-tight">
                Solutions driven by{' '}
                <span className="text-primary italic">Accuracy.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 bg-primary flex items-center justify-center text-on-primary font-headline font-black">
                    01
                  </div>
                  <div>
                    <h4 className="font-headline font-bold uppercase text-lg mb-2">
                      Protecting Our Environment
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      We use laser scanners to watch how the land changes. This helps us build without destroying the trees and rivers around us.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 bg-white flex items-center justify-center text-black font-headline font-black">
                    02
                  </div>
                  <div>
                    <h4 className="font-headline font-bold uppercase text-lg mb-2">
                      Building Strong Cities
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      We provide the exact maps needed to plan big cities, lay down strong pipes, and build roads that won't wash away in the rain.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Gallery Grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2 grid grid-cols-2 gap-4"
            >
              <div className="space-y-4 pt-12">
                {galleryImages.slice(0, 2).map((img, i) => (
                  <motion.div
                    key={img.alt}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`bg-surface-container-highest ${img.aspect} hover:grayscale-0 transition-all duration-500 overflow-hidden`}
                  >
                    <img
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      src={img.src}
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="space-y-4">
                {galleryImages.slice(2, 4).map((img, i) => (
                  <motion.div
                    key={img.alt}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`bg-surface-container-highest ${img.aspect} hover:grayscale-0 transition-all duration-500 overflow-hidden`}
                  >
                    <img
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      src={img.src}
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
