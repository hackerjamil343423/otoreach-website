"use client";

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/app/lib/animations';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';

const faqs = [
  {
    question: "How long is this program?",
    answer: "Founder OS Velocity is a 12-month program designed to transform your business operations and scale your growth. You'll have ongoing access to Matt's C-Suite, weekly group calls, and all systems and resources.",
  },
  {
    question: "Can I pass this as a business expense?",
    answer: "Yes, Founder OS Velocity can typically be claimed as a business expense. We provide detailed invoices and receipts that you can use for tax purposes. Consult with your accountant for specific advice related to your situation.",
  },
  {
    question: "Is my success guaranteed?",
    answer: "While we provide proven systems, expert guidance, and a supportive community, your results depend on your commitment to implementing what you learn. We guarantee access to all resources and support, but your success is ultimately determined by your effort and execution.",
  },
  {
    question: "How can I get started?",
    answer: "Click the 'Apply for Velocity' button to submit your application. Our team will review it and schedule a call to discuss your business goals and determine if Velocity is the right fit for you.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Title */}
          <motion.h2 
            variants={fadeInUp}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary text-center leading-tight mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          {/* Accordion */}
          <motion.div variants={staggerItem}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-border-custom px-6 data-[state=open]:shadow-card transition-shadow"
                >
                  <AccordionTrigger className="text-left font-sans font-semibold text-text-primary hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-secondary pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
