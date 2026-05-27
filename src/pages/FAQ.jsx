import React, { useState } from 'react';

// ==========================================
// FAQ DATA (Self-contained internal state)
// ==========================================
const FAQ_DATA = [
    {
        id: 1,
        question: "How does the subscription model work",
        answer: "You pay a fixed monthly fee and get unlimited design requests. We work on them one by one, ensuring top quality and fast turnaround."
    },
    {
        id: 2,
        question: "What type of designs do you offer",
        answer: "We offer a wide range of design services including UI/UX design, branding, presentation decks, social media graphics, and web development illustrations."
    },
    {
        id: 3,
        question: "How fast will I receive my designs",
        answer: "Most simple requests are completed in under 48 hours. More complex design ecosystems or full web multi-page flows are broken down and delivered incrementally."
    },
    {
        id: 4,
        question: "Can I cancel or pause my subscription",
        answer: "Yes, you can pause or cancel your subscription at any time. If you pause, your remaining days will be saved and can be used whenever you need design work again."
    },
    {
        id: 5,
        question: "What tools do you use for design",
        answer: "We primarily build inside Figma for core designs, prototypes, and asset handoffs. For secondary media, we leverage Adobe Creative Suite and Webflow."
    }
];

// ==========================================
// SUB-COMPONENT: FAQItem
// ==========================================
function FAQItem({ question, answer, isOpen, onToggle }) {
    return (
        <div className="w-full bg-[#f8f9fa] rounded-2xl border border-gray-100/50 overflow-hidden shadow-sm transition-all duration-300">
            {/* Trigger Header Button */}
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between text-left px-6 py-5 md:px-8 md:py-6 focus:outline-none group"
                aria-expanded={isOpen}
            >
                <span className="text-base md:text-lg font-medium text-[#111111] tracking-tight transition-colors duration-200 group-hover:text-gray-600">
                    {question}
                </span>

                {/* State Icon (+ / ×) */}
                <span className="text-base font-light text-[#111111] ml-4 select-none transition-transform duration-300 ease-in-out">
                    {isOpen ? (
                        <span className="block transform rotate-0 scale-110">✕</span>
                    ) : (
                        <span className="block transform rotate-0 hover:scale-110">＋</span>
                    )}
                </span>
            </button>

            {/* Animated Collapsible Expand Body */}
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 pb-6 md:px-8 md:pb-7 text-sm md:text-base text-[#777777] leading-relaxed max-w-3xl">
                    {answer}
                </div>
            </div>
        </div>
    );
}

// ==========================================
// MAIN EXPORT COMPONENT: FAQAccordion
// ==========================================
export default function FAQAccordion() {
    // Track which item index is currently open (null means all collapsed)
    // Initial state opens the first item to perfectly mirror your reference screenshot
    const [openId, setOpenId] = useState(1);

    const handleToggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="w-full min-h-screen bg-[#fcfcfc] flex flex-col items-center px-4 py-16 md:py-24 font-sans selection:bg-blue-100">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center">

                {/* Top Mini Pill Indicator */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-100 rounded-full shadow-sm mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#5c7cfa]" />
                    <span className="text-xs font-semibold text-gray-600 tracking-wide uppercase pr-1">
                        Faq's
                    </span>
                </div>

                {/* Dynamic Title */}
                <h2 className="text-3xl md:text-5xl font-bold text-[#111111] tracking-tight text-center max-w-2xl leading-[1.15] mb-14">
                    How our unlimited design subscription works
                </h2>

                {/* Accordion Stack Wrapper */}
                <div className="w-full max-w-3xl flex flex-col gap-3">
                    {FAQ_DATA.map((faq) => (
                        <FAQItem
                            key={faq.id}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openId === faq.id}
                            onToggle={() => handleToggle(faq.id)}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}