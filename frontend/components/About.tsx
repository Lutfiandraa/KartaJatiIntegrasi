import * as React from "react"
import { FaShieldAlt, FaLightbulb, FaHandshake } from "react-icons/fa"
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiNodedotjs, SiGatsby, SiAngular, SiReact, SiVuedotjs, SiPython } from "react-icons/si"
import Particles from "./Particles"

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const titleRef = React.useRef<HTMLHeadingElement>(null)
  const descRefs = React.useRef<(HTMLParagraphElement | null)[]>([])
  const boxRefs = React.useRef<(HTMLDivElement | null)[]>([])

  React.useEffect(() => {
    if (typeof window === "undefined") return

    let gsapInstance: any = null

    import("gsap").then(({ gsap }) => {
      gsapInstance = gsap
      if (!titleRef.current) return

      const descElements = descRefs.current.filter(Boolean)
      const boxElements = boxRefs.current.filter(Boolean)

      // Set initial state
      gsap.set(titleRef.current, { opacity: 0, y: 30 })
      gsap.set(descElements, { opacity: 0, y: 20 })
      gsap.set(boxElements, { opacity: 0, y: 40 })

      // Animate title
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      // Animate descriptions
      if (descElements.length > 0) {
        gsap.to(descElements, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
          delay: 0.3,
        })
      }

      // Animate boxes
      if (boxElements.length > 0) {
        gsap.to(boxElements, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.6,
        })
      }
    })

    // Cleanup
    return () => {
      if (gsapInstance && titleRef.current) {
        gsapInstance.killTweensOf([titleRef.current, ...descRefs.current, ...boxRefs.current])
      }
    }
  }, [])

  return (
    <section id="about" className="relative py-16 md:py-24 bg-black overflow-hidden">
      <Particles id="particles-js-about" />
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Simplified your tech solution
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto px-4">
          <p 
            ref={(el) => { descRefs.current[0] = el }}
            className="text-base md:text-lg text-gray-400 leading-relaxed text-center"
          >
            Karta Jati Integrasi hadir sebagai mitra teknologi yang menyederhanakan kompleksitas menjadi solusi yang terstruktur melalui prinsip "Simplified Your Solution", kami berfokus pada pendekatan yang tepat guna untuk membantu mitra mencapai hasil optimal di era digital.
          </p>
        </div>

        {/* Technology Ticker Section */}
        <div className="mt-12 md:mt-16">
          {/* Ticker Container */}
          <div className="relative overflow-hidden mt-8 border-y border-gray-500/20 py-6">
            <div className="flex animate-scroll whitespace-nowrap">
              {/* First set */}
              <TechItem icon={<SiHtml5 />} name="HTML5" />
              <TechItem icon={<SiCss3 />} name="CSS3" />
              <TechItem icon={<SiTailwindcss />} name="Tailwind" />
              <TechItem icon={<SiJavascript />} name="Javascript" />
              <TechItem icon={<SiTypescript />} name="Typescript" />
              <TechItem icon={<SiNextdotjs />} name="Next.js" />
              <TechItem icon={<SiNodedotjs />} name="Node.js" />
              <TechItem icon={<SiGatsby />} name="Gatsby" />
              <TechItem icon={<SiAngular />} name="Angular" />
              <TechItem icon={<SiReact />} name="React.js" />
              <TechItem icon={<SiVuedotjs />} name="Vue.js" />
              <TechItem icon={<SiPython />} name="Python" />
              {/* Duplicate for seamless loop */}
              <TechItem icon={<SiHtml5 />} name="HTML5" />
              <TechItem icon={<SiCss3 />} name="CSS3" />
              <TechItem icon={<SiTailwindcss />} name="Tailwind" />
              <TechItem icon={<SiJavascript />} name="Javascript" />
              <TechItem icon={<SiTypescript />} name="Typescript" />
              <TechItem icon={<SiNextdotjs />} name="Next.js" />
              <TechItem icon={<SiNodedotjs />} name="Node.js" />
              <TechItem icon={<SiGatsby />} name="Gatsby" />
              <TechItem icon={<SiAngular />} name="Angular" />
              <TechItem icon={<SiReact />} name="React.js" />
              <TechItem icon={<SiVuedotjs />} name="Vue.js" />
              <TechItem icon={<SiPython />} name="Python" />
            </div>
          </div>
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

// Tech Item Component
interface TechItemProps {
  icon: React.ReactNode
  name: string
}

const TechItem: React.FC<TechItemProps> = ({ icon, name }) => {
  return (
    <div className="inline-flex flex-col items-center justify-center min-w-[90px] mx-3 p-3 bg-gray-600/20 backdrop-blur-sm border border-gray-500/30 rounded-lg hover:border-gray-500/50 transition-all duration-300 group">
      <div className="text-2xl md:text-3xl mb-1.5 text-gray-300 group-hover:text-white transition-colors">
        {icon}
      </div>
      <span className="text-xs md:text-sm font-medium text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

export default About

