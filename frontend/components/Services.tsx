import * as React from "react"
import { FaLink, FaLaptopCode, FaGlobe, FaTimes, FaExternalLinkAlt } from "react-icons/fa"

interface Service {
  title: string
  description: string
  icon: React.ReactNode
  hasPortfolio?: boolean
}

interface PortfolioItem {
  title: string
  url: string
}

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  const [openModal, setOpenModal] = React.useState<string | null>(null)
  const titleRef = React.useRef<HTMLHeadingElement>(null)
  const descRef = React.useRef<HTMLParagraphElement>(null)
  const serviceBoxRefs = React.useRef<(HTMLDivElement | null)[]>([])

  const services: Service[] = [
    {
      title: "Integrasi Sistem",
      description: "Kemampuan mengintegrasi sistem anda dan memberikan solusi yang tepat di era digital",
      icon: <FaLink className="text-5xl text-white" />,
      hasPortfolio: true
    },
    {
      title: "Digitalisasi",
      description: "Layanan Digitalisasi Bisnis anda, Rancang dan Bangun Bisnis anda di dunia Digital",
      icon: <FaLaptopCode className="text-5xl text-white" />,
      hasPortfolio: true
    },
    {
      title: "Instalasi Infrastruktur Jaringan",
      description: "Layanan jasa konsultan sarana prasarana teknologi informasi dengan biaya yang terjangkau ke seluruh pelosok nusantara",
      icon: <FaGlobe className="text-5xl text-white" />,
      hasPortfolio: true
    }
  ]

  const portfolioData: Record<string, PortfolioItem[]> = {
    "Integrasi Sistem": [
      { title: "PPID Kementerian Pariwisata dan Ekonomi Kreatif", url: "#" },
      { title: "E-Hibah BPKD Pemprov DKI Jakarta", url: "#" },
      { title: "Migrasi dan Setup Email Kementerian Pariwisata dan Ekonomi Kreatif", url: "#" }
    ],
    "Digitalisasi": [
      { title: "Gerobar (Usaha Mikro Kecil Menengah", url: "https://gerobar-umkm.vercel.app/" }
    ],
    "Instalasi Infrastruktur Jaringan": [
      { title: "Pengembangan Aplikasi Mobile Kementerian Pariwisata dan Ekonomi Kreatif", url: "#" },
      { title: "Pengembangan mesin antrean Kementrian Pariwisata", url: "#" },
      { title: "E-belanja pegawai provinsi DKI Jakarta", url: "#" }
    ]
  }

  const handleServiceClick = (service: Service) => {
    if (service.hasPortfolio) {
      setOpenModal(service.title)
    }
  }

  const closeModal = () => {
    setOpenModal(null)
  }

  const currentPortfolio = openModal ? portfolioData[openModal] || [] : []

  React.useEffect(() => {
    if (typeof window === "undefined") return

    import("gsap").then(({ gsap }) => {
      if (!titleRef.current || !descRef.current) return

      // Set initial state
      gsap.set([titleRef.current, descRef.current], { opacity: 0, y: 30 })
      gsap.set(serviceBoxRefs.current.filter(Boolean), { opacity: 0, y: 40 })

      // Animate title and description
      gsap.to([titleRef.current, descRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      })

      // Animate service boxes with stagger
      gsap.to(serviceBoxRefs.current.filter(Boolean), {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.4,
      })
    })
  }, [])

  return (
    <>
      <section id="services" className="py-16 md:py-24 bg-black">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 
              ref={titleRef}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              What We Do
            </h2>
            <p 
              ref={descRef}
              className="text-lg text-gray-400 max-w-3xl mx-auto"
            >
              Karta Jati Integrasi membantu mitra bisnis dalam memahami dan memanfaatkan teknologi secara cepat, tepat dan efisien. 
              Dengan mengandalkan inovasi, kreativitas, pengalaman dan penguasaan teknologi hardware, software dan jaringan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (serviceBoxRefs.current[index] = el)}
                onClick={() => handleServiceClick(service)}
                className={`bg-gray-600/30 backdrop-blur-sm border border-gray-500/40 p-8 rounded-lg transition-all duration-300 ${
                  service.hasPortfolio 
                    ? "hover:border-gray-500/60 cursor-pointer hover:scale-105" 
                    : "hover:border-gray-500/60"
                }`}
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Card Modal */}
      {openModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="bg-gray-600/25 backdrop-blur-xl border border-gray-500/35 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gray-600/25 backdrop-blur-xl border-b border-gray-500/35 px-6 py-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">{openModal}</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-600/30 rounded-lg"
                aria-label="Close modal"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className={`flex ${currentPortfolio.length === 1 ? 'justify-center' : ''}`}>
                <div className={`grid ${currentPortfolio.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-4 w-full`}>
                  {currentPortfolio.map((item, index) => (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group bg-gray-600/30 backdrop-blur-sm border border-gray-500/40 rounded-lg p-6 hover:border-gray-500/60 transition-all duration-200 flex items-center justify-between ${currentPortfolio.length === 1 ? 'w-full max-w-2xl mx-auto' : 'w-full'}`}
                    >
                      <span className="text-white group-hover:text-gray-200 transition-colors flex-1 pr-4">
                        {item.title}
                      </span>
                      <FaExternalLinkAlt className="text-gray-400 group-hover:text-white transition-colors flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Services

