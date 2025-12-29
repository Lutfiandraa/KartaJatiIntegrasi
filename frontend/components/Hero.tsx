import * as React from "react"

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const titleRef = React.useRef<HTMLHeadingElement>(null)
  const descRef = React.useRef<HTMLParagraphElement>(null)
  const buttonsRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (typeof window === "undefined") return

    import("gsap").then(({ gsap }) => {
      if (!titleRef.current || !descRef.current || !buttonsRef.current) return

      // Set initial state
      gsap.set([titleRef.current, descRef.current, buttonsRef.current], {
        opacity: 0,
        y: 30,
      })

      // Animate with stagger
      gsap.to([titleRef.current, descRef.current, buttonsRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      })
    })
  }, [])

  return (
    <section className="bg-black py-20 md:py-32">
      <div className="container-custom">
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
            <a href="#services" className="btn-primary">
              Layanan Kami
            </a>
            <a href="#contact" className="btn-secondary">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

