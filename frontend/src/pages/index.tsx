import * as React from "react"
import Header from "../../components/Header"
import Hero from "../../components/Hero"
import About from "../../components/About"
import Services from "../../components/Services"
import Portfolio from "../../components/Portfolio"
import Footer from "../../components/Footer"

const IndexPage: React.FC = () => {
  React.useEffect(() => {
    // Always scroll to top on initial load/refresh
    window.scrollTo(0, 0)
    
    // Prevent hash navigation on initial load
    if (window.location.hash) {
      // Remove hash from URL without scrolling
      window.history.replaceState(null, '', window.location.pathname)
    }
  }, [])

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
    <meta name="theme-color" content="#000000" />
    <meta name="robots" content="index, follow" />
    <link rel="preconnect" href="https://cdn.jsdelivr.net" />
  </>
)

