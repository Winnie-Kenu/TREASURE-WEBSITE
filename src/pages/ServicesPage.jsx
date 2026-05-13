import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import servicesHeroImg from '../assets/hero-backgrounds/services-hero.jpg'
import engineeringSurveyImg from '@/assets/services-image/ENGINEERING-SURVEY.png'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const serviceFeatures1 = [
  { icon: 'architecture', label: 'Finding Property Corners' },
  { icon: 'grid_view', label: 'Mapping Hills & Bumps' },
  { icon: 'precision_manufacturing', label: 'Building Layouts' },
]

export default function ServicesPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-24 topo-bg-service min-h-screen"
    >
      {/* Hero Header */}
      <header className="px-6 md:px-12 min-h-[50vh] flex items-center relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
        <img src={servicesHeroImg} alt="Services Hero" className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none" fetchpriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-headline font-bold tracking-[0.3em] text-xs mb-6 uppercase"
          >
            Specialized Solutions
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-headline font-black tracking-tighter uppercase leading-[0.85] break-words"
            style={{ color: 'rgba(255, 255, 255, 0.25)' }}
          >
            WHAT <span style={{ color: 'var(--primary)' }}>WE</span> DO.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-col md:flex-row gap-8 md:gap-12 items-start"
          >
            <p className="max-w-xl text-on-surface-variant text-lg leading-relaxed">
              We use really cool gadgets and computers to understand the land. We
              take the real dirt and hills you see outside and turn them into
              perfect maps on a computer.
            </p>
            <div className="h-24 w-[1px] bg-outline-variant hidden md:block" />
            <div className="flex flex-col gap-2">
              <span className="text-primary font-black text-2xl">04</span>
              <span className="text-white/40 uppercase tracking-widest text-[10px] font-bold">
                Core Domains
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Service 01: Land & Engineering */}
      <section className="grid grid-cols-1 md:grid-cols-12 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5 px-6 md:px-12 py-16 md:py-24 flex flex-col justify-center md:border-r border-white/5"
        >
          <span className="font-headline font-bold text-primary mb-4">
            01 // ENGINEERING
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter mb-8">
            Land & Building Surveying
          </h2>
          <div className="space-y-6 text-on-surface-variant font-light leading-relaxed">
            <p>
              We find the exact spots to build big projects and fence properties.
              We use super-accurate robots and satellite tools (GPS) so that
              every building stands perfectly straight.
            </p>
            <ul className="space-y-4 pt-4">
              {serviceFeatures1.map((feat) => (
                <li key={feat.label} className="flex items-center gap-4 text-white">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {feat.icon}
                  </span>
                  <span className="font-bold uppercase text-xs tracking-widest">
                    {feat.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 bg-surface-container relative min-h-[400px] md:min-h-[600px] overflow-hidden group"
        >
          <img
            alt="Land Surveying"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUkIIi5u11deVEpsqTWOjUFpTIgS6RyPX_PbDzBRxA1A54b3UBS09SVh3PX-x8j85uzxBtM0EW2MozTixXScm5HYpzGFrHYJ8oVX6yE1cPw1o1_FG364JYxHM70I6RtiWPfhNmckhO6DuCDIlVjV8kepA1ocDe4ngmpmC_-jTrNWbvMmt_t-9c6EVwNUbnR7YQJ7pLlrtcH2eAnBxbXlt11kH8KVtQliODJKju5U5GY444zPg946O41rguh6Ys5P8PW2iT2dreQfg"
            loading="lazy"
            decoding="async"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute bottom-8 md:bottom-12 left-8 md:left-12 bg-black/80 backdrop-blur-md p-4 md:p-6 border-l-4 border-primary"
          >
            <span className="block font-headline font-bold text-xl text-white">
              1mm Tolerance
            </span>
            <span className="text-[10px] text-white/50 uppercase tracking-widest">
              Surveying Standard
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* Service 02: Aerial & LiDAR */}
      <section className="grid grid-cols-1 md:grid-cols-12 w-full bg-surface-container-low">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 bg-surface-container relative min-h-[400px] md:min-h-[600px] overflow-hidden group order-2 md:order-1"
        >
          <img
            alt="LiDAR Scan"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuACyUXdSlfoWrDmm7m5ARer8xgRRU45ebgaVPW0TGmeUyKsgNNAw7tMmt8Qha9wPqZbwVCtXGXWZxWXmJ4bjtYWxHhDke3e44L9e7q3yUQbGs5FjYCiFVMmckQMHrd5BtJDBf44vuHOadH4Fhh-enoIsAzyADBFV0MLkKeVL87866lt22eCb3qtknYTY0NGoR58QaCdVVkovrSp_ETslaSt57zwmR-j8a_MOp5yKbxjd7YHAVGsyp4GtNjfN840hKQEaf6atvoHRIg"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute top-8 md:top-12 right-8 md:right-12 text-right">
            <span className="text-primary font-headline text-4xl md:text-6xl font-black">
              LiDAR
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5 px-6 md:px-12 py-16 md:py-24 flex flex-col justify-center md:border-l border-white/5 order-1 md:order-2"
        >
          <span className="font-headline font-bold text-primary mb-4">
            02 // REMOTE SENSING
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter mb-8">
            Drone & Laser Mapping
          </h2>
          <div className="space-y-6 text-on-surface-variant font-light leading-relaxed">
            <p>
              We fly drones that shoot safe lasers to see through thick bushes
              and map the ground underneath. The clear pictures from the sky
              help us understand very rough lands.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-8">
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-surface-container-high p-4 md:p-6 border-t-2 border-primary"
              >
                <span className="material-symbols-outlined block mb-2 text-primary">
                  flight
                </span>
                <span className="block text-white font-bold text-sm mb-1 uppercase tracking-tighter">
                  Flying Drones
                </span>
                <p className="text-[11px] leading-tight">
                  Tactical flight planning for maximal coverage.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                className="bg-surface-container-high p-4 md:p-6 border-t-2 border-primary"
              >
                <span className="material-symbols-outlined block mb-2 text-primary">
                  view_in_ar
                </span>
                <span className="block text-white font-bold text-sm mb-1 uppercase tracking-tighter">
                  3D Land Pictures
                </span>
                <p className="text-[11px] leading-tight">
                  Digital twins for BIM integration.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Service 03: GIS & Spatial Analysis */}
      <section className="grid grid-cols-1 md:grid-cols-12 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5 px-6 md:px-12 py-16 md:py-24 flex flex-col justify-center md:border-r border-white/5"
        >
          <span className="font-headline font-bold text-primary mb-4">
            03 // INTELLIGENCE
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter mb-8">
            Computer Maps & Data
          </h2>
          <div className="space-y-6 text-on-surface-variant font-light leading-relaxed">
            <p>
              We turn numbers into smart maps that help people make good choices.
              Our computer programs help the government and builders plan where
              to put water, light, and new houses.
            </p>
            <div className="space-y-4 mt-8">
              {[
                {
                  icon: 'database',
                  title: 'Organizing Data',
                  desc: 'Putting different pieces of information into one clean map.',
                },
                {
                  icon: 'monitoring',
                  title: 'Looking Ahead',
                  desc: 'Using data to guess how the land will change in the future.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="h-10 w-10 flex-shrink-0 bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 bg-black p-6 md:p-12 flex items-center justify-center"
        >
          <div className="w-full aspect-video bg-surface-container-high relative overflow-hidden border border-white/10">
            <img
              alt="GIS Dashboard"
              className="w-full h-full object-cover opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYP_ytqDadCVPczvb0CEKkGEX3FP_c5kp_l1l0Ufd2MyQRxUl-FIGhjFaHLg52PEwyvV-lfKyBwFopciCE-6ueujKa9k8Olx11-Dcor36FJeWxqN3S0VYHFdCWsv6dORqNFcQWUAFCvNX0UrJ7o6W3yxkNobsZWGWrWNPOwXW7KR0p3xLIrSMGHzYrC0mw-o6nwIxt5O69NOdgPtAVC6xbNCvm1Eza3cWV9SK5uOGvpkbLc83oFyyogLDZQ0E5khHHi2n4dHZ0eqA"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-8 md:p-12">
              <div className="max-w-xs">
                <div className="h-1 w-12 bg-primary mb-4" />
                <p className="text-white font-headline text-xl md:text-2xl font-bold">
                  Real-time Land Monitoring
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Service 04: Consulting */}
      <section className="grid grid-cols-1 md:grid-cols-12 w-full bg-surface-container-lowest">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 bg-surface-container relative min-h-[400px] md:min-h-[500px] overflow-hidden flex items-center justify-center group"
        >
          <img
            alt="Professional Consulting"
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEVgTP4nuYCQIqWaI2FLemFB4E28QXFv6g5owS9Vm5dUUl-2NA7zanMEamZsxvxkb5krwNORVthgJwrsfujwECfALEl4yxLqaMjWo-e0mhAoDItSEVBbwzS0RTFMCOkPZUDNe6_ap8XM1dc4KpvZVXpijCg4I2Qn-ZagvMZblRv7iboP-evdG5Gl_vihuHmLlFT5b3sMoY17paQxM6Yz8f0PbG3Sg97R8ccBjM15hQlAVrzUZKcG4srqVtgNYskLYUdz37zV_jt9g"
          />
          <div className="relative z-10 text-center px-12">
            <h3 className="text-primary font-headline text-6xl md:text-8xl font-black opacity-10 select-none">
              ADVISORY
            </h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5 px-6 md:px-12 py-16 md:py-24 flex flex-col justify-center md:border-l border-white/5"
        >
          <span className="font-headline font-bold text-primary mb-4">
            04 // STRATEGY
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-black uppercase tracking-tighter mb-8">
            Professional Advice
          </h2>
          <div className="space-y-6 text-on-surface-variant font-light leading-relaxed">
            <p>
              We give expert advice on the rules of buying and building on land.
              We help you check if a land is safe to build on and guide you to
              get all the right government papers.
            </p>
            <div className="pt-6 border-t border-white/10 space-y-4">
              {[
                { label: 'Feasibility Audits', status: 'Verified' },
                { label: 'Regulatory Liaison', status: 'Direct' },
                { label: 'Precision QC', status: 'Standard' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center text-xs uppercase tracking-[0.2em]"
                >
                  <span>{item.label}</span>
                  <span className="text-primary font-bold">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-24 md:py-40 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full topo-bg-service opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-headline font-black tracking-tighter uppercase mb-12">
                Ready to <span className="text-primary">Measure?</span>
              </h2>
              <p className="text-on-surface-variant text-lg md:text-xl mb-12">
                Talk to our friendly team today to plan out your land and see what
                you need to start building.
              </p>
              <Button size="lg" className="text-base md:text-lg font-black px-6 md:px-12 py-4 md:py-6 w-full sm:w-auto" asChild>
                <Link to="/contact">
                  GET STARTED
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-square lg:aspect-video overflow-hidden border border-white/10"
            >
              <img
                src={engineeringSurveyImg}
                alt="Engineering Survey"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
