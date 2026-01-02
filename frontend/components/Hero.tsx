import * as React from "react"
import Particles from "./Particles"

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const titleRef = React.useRef<HTMLHeadingElement>(null)
  const descRef = React.useRef<HTMLParagraphElement>(null)
  const buttonsRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (typeof window === "undefined") return

    let gsapInstance: any = null

    import("gsap").then(({ gsap }) => {
      gsapInstance = gsap
      if (!titleRef.current || !descRef.current || !buttonsRef.current) return

      const elements = [titleRef.current, descRef.current, buttonsRef.current]

      // Set initial state
      gsap.set(elements, {
        opacity: 0,
        y: 30,
      })

      // Animate with stagger
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      })
    })

    // Cleanup
    return () => {
      if (gsapInstance && titleRef.current && descRef.current && buttonsRef.current) {
        gsapInstance.killTweensOf([titleRef.current, descRef.current, buttonsRef.current])
      }
    }
  }, [])

  return (
    <section className="hero-section relative py-20 md:py-32 overflow-hidden">
      {/* Particles.js Container */}
      <Particles id="particles-js-hero" />
      
      {/* Content Overlay */}
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Solusi Integrasi Teknologi dan Digitalisasi Kebutuhan anda
          </h1>
          <p 
            ref={descRef}
            className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed"
          >
            Karta Jati Integrasi membantu mitra bisnis mengoptimalkan teknologi dengan pendekatan sederhana namun powerful. 
            Kami mengintegrasikan sistem, infrastruktur jaringan, dan solusi teknologi untuk mendukung kesuksesan perusahaan Anda.
          </p>
          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#services" 
              className="btn-primary" 
              aria-label="Lihat layanan kami"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('services')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              Layanan Kami
            </a>
            <a 
              href="#contact" 
              className="btn-secondary" 
              aria-label="Hubungi kami"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

