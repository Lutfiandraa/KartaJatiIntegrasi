import * as React from "react"
import { FaShieldAlt, FaLightbulb, FaHandshake } from "react-icons/fa"

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simplified your tech solution
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Didirikan sejak tahun 2017, Karta Jati Integrasi berdiri untuk membantu mitra dalam menyediakan jasa konsultasi 
            dan integrasi sistem yang akan dikerjakan pada perusahaannya. Karta Jati Integrasi memiliki slogan "simplified your tech solution".
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Sesuai dengan slogan kami, kami berkomitmen untuk terus bekerja keras dalam bermitra dan menggunakan cara 
            yang sesimple mungkin dengan hasil yang maksimal dan tidak mengecewakan.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:mt-20">
          <div className="text-center p-6 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors">
            <div className="flex justify-center mb-4">
              <FaShieldAlt className="text-5xl text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Integritas</h3>
            <p className="text-gray-600">
              Kami menjunjung tinggi kejujuran dan keadilan dalam semua aspek bisnis.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors">
            <div className="flex justify-center mb-4">
              <FaLightbulb className="text-5xl text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Inovasi</h3>
            <p className="text-gray-600">
              Kami senantiasa mencari cara-cara baru untuk meningkatkan kinerja dan memberikan nilai tambah bagi klien.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors">
            <div className="flex justify-center mb-4">
              <FaHandshake className="text-5xl text-primary-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Kolaborasi</h3>
            <p className="text-gray-600">
              Kami bekerja sama sebagai satu tim untuk mencapai tujuan bersama.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

