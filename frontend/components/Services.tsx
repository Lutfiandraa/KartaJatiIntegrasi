import * as React from "react"
import { FaLink, FaCog, FaGlobe } from "react-icons/fa"

interface Service {
  title: string
  description: string
  icon: React.ReactNode
}

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  const services: Service[] = [
    {
      title: "Integrasi Sistem",
      description: "Kemampuan integrasi sistem kami secara luas dan mendalam membantu memperkecil resiko anda dan memberikan pelayanan yang lengkap dan solusi yang tepat.",
      icon: <FaLink className="text-5xl text-primary-600" />
    },
    {
      title: "Penyedia Suku Cadang",
      description: "Layanan service hardware baik maintenance maupun penyediaan kualitas terbaik.",
      icon: <FaCog className="text-5xl text-primary-600" />
    },
    {
      title: "Instalasi Infrastruktur Jaringan",
      description: "Layanan jasa konsultan sarana prasarana teknologi informasi dengan biaya yang terjangkau ke seluruh pelosok nusantara",
      icon: <FaGlobe className="text-5xl text-primary-600" />
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Karta Jati Integrasi membantu mitra bisnis dalam memahami dan memanfaatkan teknologi secara cepat, tepat dan efisien. 
            Dengan mengandalkan inovasi, kreativitas, pengalaman dan penguasaan teknologi hardware, software dan jaringan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

