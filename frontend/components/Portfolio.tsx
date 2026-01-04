import * as React from "react"
import { GiPineTree } from "react-icons/gi"
import Particles from "./Particles"

interface PortfolioItem {
  title: string
}

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  const titleRef = React.useRef<HTMLHeadingElement>(null)
  const portfolioBoxRefs = React.useRef<(HTMLDivElement | null)[]>([])

  const portfolioItems: PortfolioItem[] = [
    { title: "PPID Kementerian Pariwisata dan Ekonomi Kreatif" },
    { title: "E-Hibah BPKD Pemprov DKI Jakarta" },
    { title: "Migrasi dan Setup Email Kementerian Pariwisata dan Ekonomi Kreatif" }
  ]

  React.useEffect(() => {
    if (typeof window === "undefined") return

    let gsapInstance: any = null

    import("gsap").then(({ gsap }) => {
      gsapInstance = gsap
      if (!titleRef.current) return

      const portfolioBoxElements = portfolioBoxRefs.current.filter(Boolean)

      // Set initial state
      gsap.set(titleRef.current, { opacity: 0, y: 30 })
      gsap.set(portfolioBoxElements, { opacity: 0, y: 40 })

      // Animate title
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      // Animate portfolio boxes with stagger
      if (portfolioBoxElements.length > 0) {
        gsap.to(portfolioBoxElements, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.3,
        })
      }
    })

    // Cleanup
    return () => {
      if (gsapInstance && titleRef.current) {
        gsapInstance.killTweensOf([titleRef.current, ...portfolioBoxRefs.current])
      }
    }
  }, [])

  return (
    <section id="portfolio" className="relative py-16 md:py-24 bg-black overflow-hidden">
      <Particles id="particles-js-portfolio" />
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Our Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => { portfolioBoxRefs.current[index] = el }}
              className="bg-gray-600/30 backdrop-blur-sm border border-gray-500/40 p-6 rounded-lg hover:border-gray-500/60 transition-all duration-300 min-h-[200px] flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-full h-32 bg-gray-600/40 rounded-lg mb-4 flex items-center justify-center">
                  <GiPineTree className="text-5xl text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Comingsoon
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

