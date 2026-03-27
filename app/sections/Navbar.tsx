"use client";

import { useState } from 'react';
import { ChevronDown, ArrowLeft, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/app/components/ui/sheet';

const productsMenu = [
  { label: 'مجتمع المؤسسين', href: '#community' },
  { label: 'أداة "تلميح"', href: '#talmeeh' },
  { label: 'أداة "وكلني"', href: '#wakilni' },
];

const servicesMenu = [
  { label: 'بناء نظام تشغيلي', href: '#systems' },
  { label: 'شات بوت AI', href: '/chatbot' },
  { label: 'صفحات هبوط', href: '/landing-page' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: 'transparent', padding: '12px 20px' }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: '1200px',
          backgroundColor: '#FFFFFF',
          borderRadius: '14px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          padding: '0 24px',
        }}
      >
        <div className="flex items-center justify-between" style={{ height: '68px' }}>

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0" dir="ltr">
            <span
              className="rounded-full flex-shrink-0"
              style={{ width: '34px', height: '34px', backgroundColor: '#D4F657' }}
            />
            <span style={{ fontSize: '15px', fontWeight: 600, color: '#111111', whiteSpace: 'nowrap' }}>
              OTO<span style={{ color: '#555555', fontWeight: 500 }}>Reach</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center" style={{ gap: '28px', marginRight: '80px' }}>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => { setProductsOpen(!productsOpen); setServicesOpen(false); }}
                className="flex items-center gap-1"
                style={{ fontSize: '15px', fontWeight: 500, color: '#111111', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                المنتجات
                <ChevronDown
                  className="w-4 h-4 transition-transform"
                  style={{ transform: productsOpen ? 'rotate(180deg)' : 'rotate(0deg)', color: '#555555' }}
                />
              </button>
              {productsOpen && (
                <div
                  className="absolute mt-2"
                  style={{
                    top: '100%',
                    right: 0,
                    minWidth: '180px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    border: '1px solid #EAEAEA',
                    overflow: 'hidden',
                  }}
                >
                  {productsMenu.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setProductsOpen(false)}
                      style={{
                        display: 'block',
                        padding: '10px 16px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#111111',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F7F7F5')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setProductsOpen(false); }}
                className="flex items-center gap-1"
                style={{ fontSize: '15px', fontWeight: 500, color: '#111111', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                الخدمات
                <ChevronDown
                  className="w-4 h-4 transition-transform"
                  style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', color: '#555555' }}
                />
              </button>
              {servicesOpen && (
                <div
                  className="absolute mt-2"
                  style={{
                    top: '100%',
                    right: 0,
                    minWidth: '180px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    border: '1px solid #EAEAEA',
                    overflow: 'hidden',
                  }}
                >
                  {servicesMenu.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setServicesOpen(false)}
                      style={{
                        display: 'block',
                        padding: '10px 16px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#111111',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F7F7F5')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#updates"
              style={{ fontSize: '15px', fontWeight: 500, color: '#111111', textDecoration: 'none', opacity: 0.75 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
            >
              التحديثات
            </a>
            <a
              href="#blog"
              style={{ fontSize: '15px', fontWeight: 500, color: '#111111', textDecoration: 'none', opacity: 0.75 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
            >
              المدونة
            </a>
          </nav>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Right Section */}
          <div className="hidden lg:flex items-center" style={{ gap: '14px' }}>
            <p style={{ fontSize: '13px', color: '#6B6B6B', maxWidth: '190px', lineHeight: '1.25', textAlign: 'right' }}>
              هل تريد تنمية عملك التجاري؟
            </p>
            <a
              href="#consultation"
              className="flex items-center gap-2"
              style={{
                backgroundColor: '#D4F657',
                color: '#111111',
                padding: '10px 18px',
                borderRadius: '7px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#C5E84A')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#D4F657')}
            >
              احجز استشارة
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button className="p-2 rounded-lg" style={{ color: '#111111' }}>
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px]" style={{ backgroundColor: '#FFFFFF' }}>
              <div className="flex flex-col gap-1 mt-8">
                <p style={{ fontSize: '12px', fontWeight: 600, color: '#6B6B6B', padding: '4px 4px 8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  المنتجات
                </p>
                {productsMenu.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    style={{ display: 'block', padding: '8px 4px', fontSize: '15px', fontWeight: 500, color: '#111111', textDecoration: 'none' }}
                  >
                    {item.label}
                  </a>
                ))}
                <div style={{ height: '1px', backgroundColor: '#EAEAEA', margin: '10px 0' }} />
                <p style={{ fontSize: '12px', fontWeight: 600, color: '#6B6B6B', padding: '4px 4px 8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  الخدمات
                </p>
                {servicesMenu.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    style={{ display: 'block', padding: '8px 4px', fontSize: '15px', fontWeight: 500, color: '#111111', textDecoration: 'none' }}
                  >
                    {item.label}
                  </a>
                ))}
                <div style={{ height: '1px', backgroundColor: '#EAEAEA', margin: '10px 0' }} />
                <a href="#updates" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '8px 4px', fontSize: '15px', fontWeight: 500, color: '#111111', textDecoration: 'none' }}>
                  التحديثات
                </a>
                <a href="#blog" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '8px 4px', fontSize: '15px', fontWeight: 500, color: '#111111', textDecoration: 'none' }}>
                  المدونة
                </a>
                <div style={{ height: '1px', backgroundColor: '#EAEAEA', margin: '10px 0' }} />
                <a
                  href="#consultation"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: '#D4F657',
                    color: '#111111',
                    padding: '10px 18px',
                    borderRadius: '7px',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    marginTop: '8px',
                  }}
                >
                  احجز استشارة
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </header>
  );
}
