import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a dental implant surgical guide?",
      answer: "A dental implant surgical guide is a custom-made device that helps in precise placement of dental implants by guiding the drill to the exact position."
    },
    {
      question: "Why should I use a guided approach for implant placement?",
      answer: "A guided approach ensures accuracy, minimizes surgical errors, and improves the overall success rate of implant placements."
    },
    {
      question: "How long does it take to receive my surgical guide?",
      answer: "The turnaround time depends on the complexity of the case but usually takes around 5-7 business days after receiving all necessary files."
    },
    {
      question: "How is Guided Excellence different from other surgical guide providers?",
      answer: "Guided Excellence provides high-quality, precise, and affordable surgical guides tailored to each patient's needs."
    },
    {
      question: "What type of cases can benefit from surgical guides?",
      answer: "Surgical guides are beneficial for single implants, full arch reconstructions, and complex cases requiring high precision."
    },
    {
      question: "What digital files do I need to submit a case?",
      answer: "Typically, you need a CBCT scan, intraoral scan (STL files), and treatment planning data to submit a case."
    },
    {
      question: "How do I get started?",
      answer: "You can start by submitting your case details on our website or contacting our support team for guidance."
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div>
          <h2 className="text-3xl font-bold text-center text-[#0c1152] mb-12">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:border-navy-900 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-left">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#0c1152] transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === index && (
                  <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 mt-2">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
