'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowLeft } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'أعمالنا', href: '#portfolio' },
    { label: 'مزايانا', href: '#features' },
    { label: 'طريقة العمل', href: '#process' },
    { label: 'الأسعار', href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ padding: '12px 20px' }}>
      <div
        className="mx-auto transition-all duration-300"
        style={{
          maxWidth: '900px',
          backgroundColor: isScrolled ? '#FFFFFF' : 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(20px)',
          borderRadius: '14px',
          boxShadow: isScrolled ? '0 2px 16px rgba(0,0,0,0.08)' : '0 1px 8px rgba(0,0,0,0.04)',
          padding: '0 24px',
        }}
      >
        <div className="flex items-center justify-between" style={{ height: '68px' }}>

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 flex-shrink-0" dir="ltr">
            <span
              className="rounded-full flex-shrink-0"
              style={{ width: '34px', height: '34px', backgroundColor: '#D4F657' }}
            />
            <span style={{ fontSize: '15px', fontWeight: 600, color: '#111111', whiteSpace: 'nowrap' }}>
              OTO<span style={{ color: '#555555', fontWeight: 500 }}>Reach</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center" style={{ gap: '24px' }}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{ fontSize: '15px', fontWeight: 500, color: '#111111', textDecoration: 'none', opacity: 0.75, transition: 'opacity 0.3s' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a href="/landing-page/apply">
              <button
                className="flex items-center gap-2"
                style={{
                  backgroundColor: '#D4F657',
                  color: '#111111',
                  padding: '10px 18px',
                  borderRadius: '7px',
                  fontSize: '14px',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#C5E84A')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#D4F657')}
              >
                ابدأ الآن
                <ArrowLeft className="w-4 h-4" />
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ color: '#111111', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2" style={{ maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid #EAEAEA',
              padding: '16px',
              overflow: 'hidden',
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  display: 'block',
                  padding: '10px 12px',
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#111111',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  textAlign: 'right',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F7F7F5')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div style={{ height: '1px', backgroundColor: '#EAEAEA', margin: '8px 0' }} />
            <div style={{ padding: '8px 4px' }}>
              <a href="/landing-page/apply">
                <button
                  className="flex items-center justify-center gap-2 w-full"
                  style={{
                    backgroundColor: '#D4F657',
                    color: '#111111',
                    padding: '10px 18px',
                    borderRadius: '7px',
                    fontSize: '14px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#C5E84A')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#D4F657')}
                >
                  ابدأ الآن
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
