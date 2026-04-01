"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/app/components/ui/sheet';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          <Link href="/" className="flex items-center gap-2 flex-shrink-0" dir="ltr">
            <span
              className="rounded-full flex-shrink-0"
              style={{ width: '34px', height: '34px', backgroundColor: '#D4F657' }}
            />
            <span style={{ fontSize: '15px', fontWeight: 600, color: '#111111', whiteSpace: 'nowrap' }}>
              OTO<span style={{ color: '#555555', fontWeight: 500 }}>Reach</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center" style={{ gap: '28px', marginRight: '80px' }}>
            <a
              href="#services"
              style={{ fontSize: '15px', fontWeight: 500, color: '#111111', textDecoration: 'none' }}
            >
              المنتجات والخدمات
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
              href="/apply"
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
                <a
                  href="#services"
                  onClick={() => setIsOpen(false)}
                  style={{ display: 'block', padding: '8px 4px', fontSize: '15px', fontWeight: 500, color: '#111111', textDecoration: 'none' }}
                >
                  المنتجات والخدمات
                </a>
                <div style={{ height: '1px', backgroundColor: '#EAEAEA', margin: '10px 0' }} />
                <a
                  href="/apply"
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
