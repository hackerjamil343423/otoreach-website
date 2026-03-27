'use client'

export default function VideoSection() {
  return (
    <div className="mt-6 w-full max-w-4xl mx-auto px-4">
      {/* Video Container with Landing Page Styling */}
      <div
        className="w-full rounded-2xl overflow-hidden relative"
        style={{
          border: '3px solid rgb(199, 243, 84)',
          boxShadow: '0 25px 50px -12px rgba(199, 243, 84, 0.25), 0 0 0 1px rgba(199, 243, 84, 0.1)'
        }}
      >
        {/* Responsive iframe */}
        <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/JjBYI17MSlU?rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&cc_load_policy=0&playsinline=1"
            title="Video Presentation"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>

        {/* Decorative glow effect */}
        <div
          className="absolute -inset-1 rounded-2xl -z-10"
          style={{
            background: 'linear-gradient(45deg, rgba(199, 243, 84, 0.2), rgba(199, 243, 84, 0.1))',
            filter: 'blur(8px)'
          }}
        />
      </div>
    </div>
  )
}
