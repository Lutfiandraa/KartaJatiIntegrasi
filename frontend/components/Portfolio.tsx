import * as React from "react"
import { FaFolder } from "react-icons/fa"

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
    { title: "Migrasi dan Setup Email Kementerian Pariwisata dan Ekonomi Kreatif" },
    { title: "Pengembangan Aplikasi Mobile Kementerian Pariwisata dan Ekonomi Kreatif" },
    { title: "Pengembangan mesin antrean Kementrian Pariwisata" },
    { title: "E-belanja pegawai provinsi DKI Jakarta" }
  ]

  React.useEffect(() => {
    if (typeof window === "undefined") return

    import("gsap").then(({ gsap }) => {
      if (!titleRef.current) return

      // Set initial state
      gsap.set(titleRef.current, { opacity: 0, y: 30 })
      gsap.set(portfolioBoxRefs.current.filter(Boolean), { opacity: 0, y: 40 })

      // Animate title
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      // Animate portfolio boxes with stagger
      gsap.to(portfolioBoxRefs.current.filter(Boolean), {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.3,
      })
    })
  }, [])

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-black">
      <div className="container-custom">
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
              ref={(el) => (portfolioBoxRefs.current[index] = el)}
              className="bg-gray-600/30 backdrop-blur-sm border border-gray-500/40 p-6 rounded-lg hover:border-gray-500/60 transition-all duration-300 min-h-[200px] flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-full h-32 bg-gray-600/40 rounded-lg mb-4 flex items-center justify-center">
                  <FaFolder className="text-5xl text-gray-400" />
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

