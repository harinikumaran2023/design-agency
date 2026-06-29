"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "Most websites are completed within 2–4 weeks depending on the project requirements.",
    },
    {
      question: "Do you provide mobile responsive designs?",
      answer:
        "Yes! Every website we build is fully responsive and works perfectly on desktop, tablet, and mobile devices.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Absolutely. We can modernize your existing website while improving performance and user experience.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes. We offer maintenance, updates, and technical support after project completion.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-indigo-600 uppercase tracking-widest font-semibold">
            FAQ
          </span>

          <h2 className="text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-gray-600">
            Answers to some of the most common questions from our clients.
          </p>
        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left font-semibold text-lg hover:bg-gray-50"
              >
                {faq.question}

                <ChevronDown
                  className={`transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}