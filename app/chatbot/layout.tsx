import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AutoChat AI - Automate Support',
  description: 'نبني لك موظف ذكاء اصطناعي يرد على عملائك 24/7',
};

export default function ChatbotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        .chatbot-page {
          font-family: 'Cairo', sans-serif;
        }
        .chatbot-page .bg-grid-pattern {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, #e2e8f0 1px, transparent 1px),
                            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px);
          mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
        }
        .chatbot-page .scrollbar-hide::-webkit-scrollbar { display: none; }
        .chatbot-page .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0px) translateX(var(--tx, 0)); }
          50% { transform: translateY(-30px) translateX(var(--tx, 0)); }
        }
        @keyframes floatUpDownReverse {
          0%, 100% { transform: translateY(0px) translateX(var(--tx, 0)); }
          50% { transform: translateY(30px) translateX(var(--tx, 0)); }
        }
      `}</style>
      {children}
    </>
  );
}
