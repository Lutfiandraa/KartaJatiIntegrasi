import * as React from "react"
import { FaShieldAlt, FaLightbulb, FaHandshake } from "react-icons/fa"

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const titleRef = React.useRef<HTMLHeadingElement>(null)
  const descRefs = React.useRef<(HTMLParagraphElement | null)[]>([])
  const boxRefs = React.useRef<(HTMLDivElement | null)[]>([])

  React.useEffect(() => {
    if (typeof window === "undefined") return

    import("gsap").then(({ gsap }) => {
      if (!titleRef.current) return

      // Set initial state
      gsap.set(titleRef.current, { opacity: 0, y: 30 })
      gsap.set(descRefs.current.filter(Boolean), { opacity: 0, y: 20 })
      gsap.set(boxRefs.current.filter(Boolean), { opacity: 0, y: 40 })

      // Animate title
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      // Animate descriptions
      gsap.to(descRefs.current.filter(Boolean), {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.3,
      })

      // Animate boxes
      gsap.to(boxRefs.current.filter(Boolean), {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.6,
      })
    })
  }, [])

  return (
    <section id="about" className="py-16 md:py-24 bg-black">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Simplified your tech solution
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p 
            ref={(el) => (descRefs.current[0] = el)}
            className="text-lg text-gray-400 mb-8 leading-relaxed"
          >
            Didirikan sejak tahun 2017, Karta Jati Integrasi berdiri untuk membantu mitra dalam menyediakan jasa konsultasi 
            dan integrasi sistem yang akan dikerjakan pada perusahaannya. Karta Jati Integrasi memiliki slogan "simplified your tech solution".
          </p>
          <p 
            ref={(el) => (descRefs.current[1] = el)}
            className="text-lg text-gray-400 leading-relaxed"
          >
            Sesuai dengan slogan kami, kami berkomitmen untuk terus bekerja keras dalam bermitra dan menggunakan cara 
            yang sesimple mungkin dengan hasil yang maksimal dan tidak mengecewakan.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:mt-20">
          <div 
            ref={(el) => (boxRefs.current[0] = el)}
            className="text-center p-6 rounded-lg bg-gray-600/30 backdrop-blur-sm border border-gray-500/40 hover:border-gray-500/60 transition-colors"
          >
            <div className="flex justify-center mb-4">
              <FaShieldAlt className="text-5xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Integritas</h3>
            <p className="text-gray-400">
              Kami menjunjung tinggi kejujuran dan keadilan dalam semua aspek bisnis.
            </p>
          </div>
          
          <div 
            ref={(el) => (boxRefs.current[1] = el)}
            className="text-center p-6 rounded-lg bg-gray-600/30 backdrop-blur-sm border border-gray-500/40 hover:border-gray-500/60 transition-colors"
          >
            <div className="flex justify-center mb-4">
              <FaLightbulb className="text-5xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Inovasi</h3>
            <p className="text-gray-400">
              Kami senantiasa mencari cara-cara baru untuk meningkatkan kinerja dan memberikan nilai tambah bagi klien.
            </p>
          </div>
          
          <div 
            ref={(el) => (boxRefs.current[2] = el)}
            className="text-center p-6 rounded-lg bg-gray-600/30 backdrop-blur-sm border border-gray-500/40 hover:border-gray-500/60 transition-colors"
          >
            <div className="flex justify-center mb-4">
              <FaHandshake className="text-5xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Kolaborasi</h3>
            <p className="text-gray-400">
              Kami bekerja sama sebagai satu tim untuk mencapai tujuan bersama.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

