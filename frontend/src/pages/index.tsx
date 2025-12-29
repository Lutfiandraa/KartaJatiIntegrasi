import * as React from "react"
import Header from "../../components/Header"
import Hero from "../../components/Hero"
import About from "../../components/About"
import Services from "../../components/Services"
import Portfolio from "../../components/Portfolio"
import Footer from "../../components/Footer"

const IndexPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: React.FC = () => (
  <>
    <title>Karta Jati Integrasi - Solusi Integrasi Teknologi dan Digitalisasi Kebutuhan anda</title>
    <meta name="description" content="Karta Jati Integrasi membantu mitra bisnis mengoptimalkan teknologi dengan pendekatan sederhana namun powerful." />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
)

