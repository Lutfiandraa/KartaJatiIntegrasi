import * as React from "react"

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Karta Jati Integrasi</h3>
            <p className="text-gray-400 mb-4">
              Solusi Integrasi Teknologi untuk Kebutuhan anda
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
              <p>
                <a href="tel:+6287770772978" className="hover:text-white transition-colors">
                  0877 7077 2978
                </a>
              </p>
              <p className="mt-4">
                RUKO DE MANSION, JL.JALUR SUTERA TIM. No.C-5, RT.002/RW.014, 
                KUNCIRAN, KEC.PINANG, KOTA TANGERANG, BANTEN 15143
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

