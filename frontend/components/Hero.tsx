import * as React from "react"

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 md:py-32">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Solusi Integrasi Teknologi untuk Kebutuhan anda
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Karta Jati Integrasi membantu mitra bisnis mengoptimalkan teknologi dengan pendekatan sederhana namun powerful. 
            Kami mengintegrasikan sistem, infrastruktur jaringan, dan solusi teknologi untuk mendukung kesuksesan perusahaan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

