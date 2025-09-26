"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import ContainerWrapper from "@/components/common/ContainerWrapper";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is the app free to use?",
    answer:
      "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.",
  },
  {
    question: "Can I assign multiple employees to one job?",
    answer:
      "You can assign multiple team members to any job and track their individual progress and time spent.",
  },
  {
    question: "Does it work on both mobile and desktop?",
    answer:
      "Yes, our app is fully responsive and works seamlessly across all devices - mobile phones, tablets, and desktop computers.",
  },
  {
    question: "How do I track job progress?",
    answer:
      "Our app provides real-time job tracking with status updates, photo uploads, and automatic notifications to keep everyone informed.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-15">
      <ContainerWrapper>
        <div className="text-center mb-15">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-600">
            Quick answers to help you get the most out of our app.
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-[#C7E6C5] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="cursor-pointer w-full p-6 text-left flex gap-6 items-center justify-between"
              >
                <span className="font-medium text-gray-800">
                  {item.question}
                </span>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <Minus className="w-5 h-5 text-gray-800 transform rotate-180 transition-transform" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-800" />
                  )}
                </div>
              </button>

              {openItems.includes(index) && (
                <div className="pl-15 pr-5 pb-5">
                  <p className="leading-relaxed text-sm text-gray-600">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </ContainerWrapper>
    </div>
  );
}
