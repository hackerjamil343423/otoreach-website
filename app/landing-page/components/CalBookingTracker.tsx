'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    fbq?: (action: string, event: string, parameters?: Record<string, unknown>) => void
  }
}

export default function CalBookingTracker() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'cal:event:bookingSuccessful') {
        try {
          if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('trackCustom', 'ScheduleCall')
          }
        } catch (error) {
          console.error('Failed to track booking success:', error)
        }
      }
    }

    window.addEventListener('message', handleMessage)

    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  return null
}
