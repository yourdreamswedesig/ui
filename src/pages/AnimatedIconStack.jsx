import React from 'react';

// ==========================================
// INLINE LIGHTNING BOLT SVG ICON
// ==========================================
function LightningIcon({ className }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path d="M13 10V3L4 14H11V21L20 10H13Z" />
        </svg>
    );
}

// ==========================================
// MAIN EXPORT COMPONENT: AnimatedIconStack
// ==========================================
export default function AnimatedIconStack() {
    return (
        <div className="w-full flex items-center justify-center ">

            {/* Container wrapper housing the 4 layers */}
            <div className="relative flex items-center justify-center w-52 h-44">

                {/* 1. FRONT TOP CARD (Static anchoring center point) */}
                <div className="absolute w-28 h-28 rounded-[32px] bg-[#5c7cfa] flex items-center justify-center shadow-lg shadow-blue-500/10 z-[4]">
                    <LightningIcon className="w-12 h-12 text-white drop-shadow-sm animate-pulse" />
                </div>

                {/* 2. SECOND DECK CARD (Directly behind top card) */}
                <div
                    className="absolute w-28 h-28 rounded-[32px] bg-[#748ffc] opacity-75 z-[3] animate-[stack-fan_3.8s_ease-in-out_infinite]"
                    style={{
                        '--tw-enter-x': '-16px',
                        '--tw-exit-x': '-28px',
                        '--tw-exit-y': '-3px',
                        '--tw-exit-scale': '0.96',
                        animationDelay: '0ms'
                    }}
                />

                {/* 3. THIRD DECK CARD (Mid-background layer) */}
                <div
                    className="absolute w-28 h-28 rounded-[32px] bg-[#91a7ff] opacity-45 z-[2] animate-[stack-fan_3.8s_ease-in-out_infinite]"
                    style={{
                        '--tw-enter-x': '-32px',
                        '--tw-exit-x': '-54px',
                        '--tw-exit-y': '-6px',
                        '--tw-exit-scale': '0.92',
                        animationDelay: '200ms'
                    }}
                />

                {/* 4. FOURTH BASE CARD (Deepest background layer - Newly Added) */}
                <div
                    className="absolute w-28 h-28 rounded-[32px] bg-[#adc1ff] opacity-25 z-[1] animate-[stack-fan_3.8s_ease-in-out_infinite]"
                    style={{
                        '--tw-enter-x': '-48px',
                        '--tw-exit-x': '-78px',
                        '--tw-exit-y': '-9px',
                        '--tw-exit-scale': '0.88',
                        animationDelay: '400ms'
                    }}
                />

            </div>

            {/* Global CSS Injection for the keyframe engine */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes stack-fan {
          0%, 100% {
            transform: translate3d(var(--tw-enter-x, 0), 0, 0) scale(1);
          }
          50% {
            transform: translate3d(var(--tw-exit-x, 0), var(--tw-exit-y, 0), 0) scale(var(--tw-exit-scale, 1));
          }
        }
      `}} />

        </div>
    );
}