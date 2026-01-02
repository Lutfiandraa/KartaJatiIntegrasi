import * as React from "react"

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(true)
  const [lastScrollY, setLastScrollY] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }

      // Always show at top of page
      if (currentScrollY < 10) {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl mx-auto px-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-32"
      }`}
    >
      <nav className="bg-gray-500/10 backdrop-blur-sm rounded-[90px] shadow-sm border border-gray-400/20">
        <div className="relative flex items-center justify-between h-12 md:h-14 px-4 md:px-6">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl md:text-2xl font-bold text-white">
              Karta Jati
            </a>
          </div>
          
          {/* Desktop Menu - Centered */}
          <nav className="hidden md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:space-x-8" aria-label="Main navigation">
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('about')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-gray-300 hover:text-white transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('services')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              Service
            </a>
            <a 
              href="#portfolio" 
              className="text-gray-300 hover:text-white transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById('portfolio')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              Showcase
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-3 px-4 space-y-3" aria-label="Mobile navigation">
            <a
              href="#about"
              className="block text-gray-300 hover:text-white transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault()
                setIsMenuOpen(false)
                const element = document.getElementById('about')
                if (element) {
                  setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }, 100)
                }
              }}
            >
              About
            </a>
            <a
              href="#services"
              className="block text-gray-300 hover:text-white transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault()
                setIsMenuOpen(false)
                const element = document.getElementById('services')
                if (element) {
                  setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }, 100)
                }
              }}
            >
              Service
            </a>
            <a
              href="#portfolio"
              className="block text-gray-300 hover:text-white transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault()
                setIsMenuOpen(false)
                const element = document.getElementById('portfolio')
                if (element) {
                  setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }, 100)
                }
              }}
            >
              Showcase
            </a>
          </nav>
        )}
      </nav>
    </header>
  )
}

export default Header

