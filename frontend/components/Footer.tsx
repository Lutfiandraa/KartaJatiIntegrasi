import * as React from "react"
import Particles from "./Particles"
import { GiPineTree } from "react-icons/gi"

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer id="contact" className="relative bg-black/80 backdrop-blur-sm border-t border-gray-800 text-white py-12 md:py-16 overflow-hidden">
      <Particles id="particles-js-footer" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <GiPineTree className="mr-2 text-cyan-400" />
              Karta Jati Integrasi
            </h3>
            <p className="text-gray-400 mb-4">
              Solusi Integrasi Teknologi dan Digitalisasi Kebutuhan anda
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                <a href="mailto:support@kartajati.co.id" className="hover:text-white transition-colors">
                  support@kartajati.co.id
                </a>
              </p>
              <p className="mt-4">
                Bintaro, Sanur Software House (SSH), Kota Tangerang, Banten
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Karta Jati Integrasi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

