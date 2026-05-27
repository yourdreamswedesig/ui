import React from 'react';

// ==========================================
// PURE INLINE BRAND SVG ICONS
// ==========================================
function TwitterIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

function LinkedinIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
        </svg>
    );
}

function GlobeIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
    );
}

function FacebookIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
    );
}

function BehanceIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M8.228 15.01c0 .412-.356.743-.794.743H4.352v-2.004h3.082c.438 0 .794.331.794.743zm-.235-3.834c0 .373-.314.676-.704.676H4.352V10.51h2.937c.39 0 .704.303.704.676zm13.111.455c-.15-.71-.62-1.222-1.353-1.222-.756 0-1.233.528-1.355 1.222h2.708zm2.896.79c0 3.193-2.59 5.779-5.782 5.779H0V1H12.2c3.19 0 5.78 2.586 5.78 5.779 0 1.57-.626 2.996-1.64 4.04 1.272.936 2.096 2.459 2.096 4.181H24v-1.422h-4.323c-.22 2.015-1.923 3.571-4.004 3.571-2.247 0-4.07-1.808-4.116-4.047h10.43c.01-.137.013-.274.013-.413 0-2.825-2.22-4.571-4.908-4.571-2.828 0-5.021 2.226-5.021 5.088 0 2.863 2.193 5.088 5.021 5.088 2.062 0 3.833-1.218 4.606-2.969h1.764zm-14.8-1.579h3.764c1.192 0 2.161.944 2.161 2.105 0 1.162-.969 2.106-2.161 2.106H1v-8.421h11.235c1.11 0 2.012.879 2.012 1.961 0 1.083-.902 1.963-2.012 1.963H9.2v.286z" />
        </svg>
    );
}

// ==========================================
// SUB-COMPONENT: LeftContent
// ==========================================
function LeftContent() {
    return (
        <div className="flex flex-col justify-between h-full min-h-[380px] md:min-h-[440px] py-4">
            {/* Brand Logo Header */}
            <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-[#1a1a1a] rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white font-black text-xl tracking-tighter select-none">D</span>
                </div>
                <span className="text-xl font-bold text-[#111111] tracking-tight">
                    DesignDreams
                </span>
            </div>

            {/* Main Punchy Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-[#111111] tracking-tight leading-[1.12] max-w-md my-8 md:my-0">
                Hassle free services with a dedicated team
            </h1>

            {/* Social Media Footer Channels */}
            <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                <span className="text-gray-400 font-normal">Follow us:</span>
                <div className="flex items-center gap-4 text-[#111111]">
                    <a href="#" className="hover:text-gray-600 transition-colors"><TwitterIcon className="w-4 h-4" /></a>
                    <a href="#" className="hover:text-gray-600 transition-colors"><LinkedinIcon className="w-4 h-4" /></a>
                    <a href="#" className="hover:text-gray-600 transition-colors"><GlobeIcon className="w-4 h-4" /></a>
                    <a href="#" className="hover:text-gray-600 transition-colors"><FacebookIcon className="w-4 h-4" /></a>
                    <a href="#" className="hover:text-gray-600 transition-colors"><BehanceIcon className="w-4 h-4" /></a>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// SUB-COMPONENT: BookingCard
// ==========================================
function BookingCard() {
    return (
        <div className="bg-[#f1f1f1] rounded-[32px] p-8 md:p-10 flex flex-col justify-between max-w-md w-full ml-auto shadow-sm">

            {/* Creator Profile Header */}
            <div className="flex items-center gap-4 mb-10">
                <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Muzamal Hussain"
                    className="w-14 h-14 rounded-full object-cover border border-white shadow-sm"
                />
                <div>
                    <h3 className="text-lg font-bold text-[#111111] tracking-tight">
                        Muzamal Hussain
                    </h3>
                    <p className="text-xs font-medium text-gray-500">
                        Template Creator
                    </p>
                </div>
            </div>

            {/* Call to Action Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] tracking-tight leading-tight mb-6">
                Book a 15-min intro call
            </h2>

            {/* Dark Pill Gradient Button */}
            <button className="w-full bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a] text-white font-medium text-sm py-4 px-6 rounded-full shadow-md hover:opacity-95 transition-opacity duration-200 mb-8 active:scale-[0.99]">
                Book a Call
            </button>

            {/* Short Copy Blurb */}
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-10">
                Reach out if you need a fast and reliable web designer to bring your vision to life.
            </p>

            {/* Direct Contact Metadata Link */}
            <div className="flex flex-col gap-1">
                <span className="text-xs font-medium text-gray-400">
                    or Email with me
                </span>
                <a
                    href="mailto:hello@insertsupply.com"
                    className="text-lg md:text-xl font-bold text-[#111111] tracking-tight hover:underline transition-all"
                >
                    hello@insertsupply.com
                </a>
            </div>

        </div>
    );
}

// ==========================================
// MAIN EXPORT COMPONENT: IntroHeroSection
// ==========================================
export default function IntroHeroSection() {
    return (
        <div className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-12 md:py-24 font-sans">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 items-center">

                {/* Left Messaging Layout Column */}
                <LeftContent />

                {/* Right Dynamic Widget Booking Card Column */}
                <BookingCard />

            </div>
        </div>
    );
}