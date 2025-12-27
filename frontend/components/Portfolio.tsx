import * as React from "react"
import { FaFolder } from "react-icons/fa"

interface PortfolioItem {
  title: string
}

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  const portfolioItems: PortfolioItem[] = [
    { title: "PPID Kementerian Pariwisata dan Ekonomi Kreatif" },
    { title: "E-Hibah BPKD Pemprov DKI Jakarta" },
    { title: "Migrasi dan Setup Email Kementerian Pariwisata dan Ekonomi Kreatif" },
    { title: "Pengembangan Aplikasi Mobile Kementerian Pariwisata dan Ekonomi Kreatif" },
    { title: "Pengembangan mesin antrean Kementrian Pariwisata" },
    { title: "E-belanja pegawai provinsi DKI Jakarta" }
  ]

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 min-h-[200px] flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-full h-32 bg-primary-200 rounded-lg mb-4 flex items-center justify-center">
                  <FaFolder className="text-5xl text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
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

