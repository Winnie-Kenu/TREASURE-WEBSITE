import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFoundPage({ type = '404' }) {
  const isOffline = type === 'offline'

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background px-6"
    >
      {/* Background Topo Pattern */}
      <div className="absolute inset-0 z-0 topo-bg opacity-20 pointer-events-none" />
      
      {/* Decorative Glitch Crosshair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[1px] bg-primary/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-screen w-[1px] bg-primary/10 pointer-events-none" />

      <div className="max-w-3xl w-full text-center relative z-10">
        {/* Error Code / Icon */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-headline text-primary text-[6rem] md:text-[12rem] font-black leading-none tracking-tighter mb-4 select-none opacity-20 flex justify-center"
        >
          {isOffline ? (
            <span className="material-symbols-outlined text-[10rem] md:text-[16rem]">wifi_off</span>
          ) : (
            "404"
          )}
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-white"
        >
          {isOffline ? (
            <>Signal <span className="text-primary italic">Lost.</span></>
          ) : (
            <>Coordinates <span className="text-primary italic">Lost.</span></>
          )}
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl mx-auto border-l-2 border-primary/30 pl-6 text-left md:text-center md:border-l-0 md:pl-0"
        >
          {isOffline ? (
            "The telemetry link to our servers has been interrupted. Please check your network connection to resume data synchronization."
          ) : (
            "The requested plot of data cannot be located on our current map. It may have been moved, renamed, or is currently outside our surveying perimeter."
          )}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {isOffline ? (
            <Button size="xl" className="w-full sm:w-auto px-12" onClick={() => window.location.reload()}>
              Retry Connection
              <span className="material-symbols-outlined ml-2">sync</span>
            </Button>
          ) : (
            <>
              <Button size="xl" className="w-full sm:w-auto px-12" asChild>
                <Link to="/">
                  Return to Base
                  <span className="material-symbols-outlined ml-2">home</span>
                </Link>
              </Button>
              <Button variant="secondary" size="xl" className="w-full sm:w-auto px-12" asChild>
                <Link to="/contact">
                  Report Anomaly
                  <span className="material-symbols-outlined ml-2">error</span>
                </Link>
              </Button>
            </>
          )}
        </motion.div>
      </div>

      {/* Decorative Technical ID */}
      <div className="absolute bottom-12 left-12 hidden md:block">
        <p className="font-mono text-[10px] text-primary/40 uppercase tracking-[0.4em]">
          {isOffline ? "TELEMETRY_LINK_BREAK // 0xOFF" : "ERR_PERIMETER_BREACH // 0x404"}
        </p>
      </div>
    </motion.main>
  )
}
