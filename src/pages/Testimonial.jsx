import React, { useState } from 'react';

// ==========================================
// MOCK DATA (Internalized within the file)
// ==========================================
const TESTIMONIALS_DATA = [
    {
        id: 1,
        name: "Michael Carter",
        role: "Marketing Director",
        quote: "This agency transformed our brand with high quality designs and fast turnarounds. The seamless process made collaboration effortless!",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 2,
        name: "David Vance",
        role: "Creative Director",
        quote: "Exceptional attention to detail and unmatched speed. They didn't just deliver assets; they elevated our entire visual identity structure.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
    },
    {
        id: 3,
        name: "Marcus Aureli",
        role: "Product Manager",
        quote: "Working with them felt like an extension of our internal team. Communication was flawless, and the final outputs exceeded all expectations.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
    }
];

// ==========================================
// SUB-COMPONENT: AvatarStack
// ==========================================
function AvatarStack({ testimonials, currentIndex, onSelect }) {
    return (
        <div className="flex items-center justify-center -space-x-3 mb-8">
            {testimonials.map((item, index) => {
                const isActive = index === currentIndex;
                return (
                    <button
                        key={item.id}
                        onClick={() => onSelect(index)}
                        className="focus:outline-none transition-transform hover:scale-105 active:scale-95"
                        aria-label={`View testimonial from ${item.name}`}
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className={`w-14 h-14 rounded-full border-2 border-white object-cover shadow-sm transition-all duration-300 ${isActive
                                ? 'scale-110 z-10 opacity-100 grayscale-0'
                                : 'scale-95 opacity-40 grayscale hover:opacity-70'
                                }`}
                        />
                    </button>
                );
            })}
        </div>
    );
}

// ==========================================
// SUB-COMPONENT: TestimonialContent
// ==========================================
function TestimonialContent({ quote, name, role }) {
    return (
        <>
            <blockquote className="max-w-3xl text-2xl font-medium text-[#4a4a4a] leading-relaxed mb-6  md:min-h-[100px] flex items-center justify-center">
                "{quote}"
            </blockquote>

            <div className="mb-12">
                <h4 className="text-xl font-bold text-[#111111] mb-1">
                    {name}
                </h4>
                <p className="text-sm font-medium text-[#777777] tracking-wide">
                    {role}
                </p>
            </div>
        </>
    );
}

// ==========================================
// SUB-COMPONENT: SliderDots
// ==========================================
function SliderDots({ total, current, onSelect }) {
    return (
        <div className="flex items-center gap-2">
            {Array.from({ length: total }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onSelect(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${index === current ? 'bg-[#5c7cfa] scale-110' : 'bg-[#e9ecef] hover:bg-gray-300'
                        }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    );
}

// ==========================================
// MAIN EXPORT COMPONENT: TestimonialCard
// ==========================================
export default function TestimonialCard() {
    // Manage the active testimonial slide internally
    const [activeIndex, setActiveIndex] = useState(0);
    const currentTestimonial = TESTIMONIALS_DATA[activeIndex];

    return (
        <div className="flex flex-col items-center justify-center min-h-[500px] bg-[#f8f9fa] px-6 py-12 text-center font-sans selective-transition">

            {/* Interactive Avatar Row */}
            <AvatarStack
                testimonials={TESTIMONIALS_DATA}
                currentIndex={activeIndex}
                onSelect={setActiveIndex}
            />

            {/* Main Copy Text Block */}
            <TestimonialContent
                quote={currentTestimonial.quote}
                name={currentTestimonial.name}
                role={currentTestimonial.role}
            />

            {/* Interactive Bottom Dot Indicators */}
            <SliderDots
                total={TESTIMONIALS_DATA.length}
                current={activeIndex}
                onSelect={setActiveIndex}
            />

        </div>
    );
}