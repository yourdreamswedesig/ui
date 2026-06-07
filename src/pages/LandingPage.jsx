import React from 'react';
import CheckIcon from '../assets/check.svg?react';
import TestimonialCard from './Testimonial.jsx';
import FAQ from './FAQ.jsx';
import IntroHeroSection from './IntroHeroSection.jsx';

import ContactUs from './ContactUs.jsx';

import AnimatedIconStack from './AnimatedIconStack'
import {
    Zap,
    Download,
    Database,
    CircleSlash,
    Layers3,
    PanelsTopLeft,
    Circle,
    Play,
    Minus,
    Plus
} from "lucide-react";
import { scrollToSection } from '../HelperFunction/scrollToSection';
import Button from '../components/Button';
import { useEffect, useRef, useState } from "react";


const projects = [
    {
        title: "Static",
        category: "Design",
        year: "2025",
        image:
            "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1200",
    },
    {
        title: "Taxis",
        category: "Framer",
        year: "2025",
        image:
            "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200",
    },
    {
        title: "Files",
        category: "Web design",
        year: "2024",
        image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200",
    },
    {
        title: "Reborn",
        category: "Branding",
        year: "2024",
        image:
            "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200",
    },
];


const stats = [
    {
        number: "8K+",
        label: "Brands designed",
    },
    {
        number: "50K+",
        label: "Designs delivered",
    },
    {
        number: "99%",
        label: "Client satisfaction",
    },
    {
        number: "500+",
        label: "Businesses subscribed",
    },
];

function VideoSection() {
    return (
        <div className="relative overflow-hidden rounded-[28px]">
            <img
                src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1600&auto=format&fit=crop"
                alt="Abstract"
                className="h-[450px] w-full object-cover"
            />

            <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-500 shadow-xl transition hover:scale-105">
                <Play className="ml-1 h-6 w-6 fill-white text-white" />
            </button>
        </div>
    );
}

function IntroContent() {
    return (
        <div className="mt-16 grid grid-cols-1 gap-10 grid-cols-[180px_1fr]">
            {/* Left Label */}
            <div className="pt-2">
                <div class="flex items-center justify-center gap-2"><span class="h-2 w-2 rounded-full bg-blue-500"></span><span class="text-base text-gray-500">Introduction</span></div>
            </div>

            {/* Right Text */}
            <div>
                <h2 className="max-w-4xl text-2xl pl-[4rem] lg:pl-[10rem] text-[#595959]">
                    DesignDreams is an agency for design, code and no-code
                    development, providing unlimited services for a simplified cost.
                    Simplify your workflow and scale with ease.
                </h2>
            </div>
        </div>
    );
}


function StatCard({ number, label, duration = 1500 }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            {
                threshold: 0.4,
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        const numericValue = parseInt(number);

        let start = 0;
        const increment = numericValue / (duration / 16);

        const timer = setInterval(() => {
            start += increment;

            if (start >= numericValue) {
                start = numericValue;
                clearInterval(timer);
            }

            setCount(Math.floor(start));
        }, 16);

        return () => clearInterval(timer);
    }, [hasAnimated, number, duration]);

    // Extract suffix like k, M, +
    const suffix = number.replace(/[0-9]/g, "");

    return (
        <div ref={cardRef} className="text-center">
            <h3 className="text-5xl font-semibold text-black">
                {count}
                {suffix}
            </h3>

            <p className="mt-3 text-sm text-gray-500">
                {label}
            </p>
        </div>
    );
}



// function StatCard({ number, label }) {
//     return (
//         <div className="text-center">
//             <h3 className="text-5xl font-semibold text-black">
//                 {number}
//             </h3>

//             <p className="mt-3 text-sm text-gray-500">{label}</p>
//         </div>
//     );
// }

function StatsSection() {
    return (
        <div className="mt-24 grid grid-cols-2 gap-10 md:grid-cols-4">
            {stats.map((item, index) => (
                <StatCard
                    key={index}
                    number={item.number}
                    label={item.label}
                />
            ))}
        </div>
    );
}

//benefits section

const benefits = [
    {
        icon: Zap,
        title: "AI first approach",
        description:
            "Submit as many design requests as you need, and we'll deliver them",
    },
    {
        icon: Download,
        title: "Fast turnaround",
        description:
            "Get high quality design & code delivered quickly to keep your projects",
    },
    {
        icon: Database,
        title: "Dedicated teams",
        description:
            "Work with experienced designers who understand your brand",
    },
    {
        icon: CircleSlash,
        title: "Simplified cost",
        description:
            "No hidden costs or surprises, just simple and transparent pricing",
    },
    {
        icon: Layers3,
        title: "Unlimited revisions",
        description:
            "Request changes until you're fully satisfied with the final design",
    },
    {
        icon: PanelsTopLeft,
        title: "Everything at one place",
        description:
            "From branding to web and social media, we cover all your creative",
    },
];

function SectionLabel(props) {
    const { label = 'Benefits' } = props;
    return (
        <div className="flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            {/* using your theme class */}
            <span className="text-base text-gray-500">
                {label}
            </span>
        </div>
    );
}

function BenefitCard({ icon: Icon, title, description }) {
    return (
        <div className="flex flex-col items-center text-center">
            {/* Icon Box */}
            <div className="flex h-[48px] w-[48px] items-center justify-center rounded-2xl bg-gradient-to-b from-[#b7c8ff] to-[#6f95ff] shadow-sm">
                <Icon
                    size={22}
                    className="text-white"
                    strokeWidth={2.3}
                />
            </div>

            <h3 className="mt-7 text-xl font-semibold">
                {title}
            </h3>

            <p className="mt-3 max-w-[300px] text-lg leading-8 text-gray-500">
                {description}
            </p>
        </div>
    );
}

function BenefitsGrid() {
    return (
        <div className="mt-20 grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, index) => (
                <BenefitCard key={index} {...item} />
            ))}
        </div>
    );
}


//Project sections
function SectionHeading() {
    return (
        <div className="mx-auto mt-5  text-center">
            <h2 className="text-h lg:text-hero font-semibold leading-[1.2] tracking-[-0.03em]">
                High quality projects crafted
                <br />
                by experts
            </h2>
        </div>
    );
}

function ProjectCard({
    title,
    category,
    year,
    image,
}) {
    return (
        <div className="w-[48%] lg:w-[42%] h-[300px] lg:h-[425px] perspective-[1200px] cursor-pointer group">
            <div
                className="
                    relative w-full h-full
                    transition-transform duration-700
                    [transform-style:preserve-3d]
                    group-hover:[transform:rotateY(180deg)]
                "
            >
                {/* FRONT SIDE */}
                <div
                    className="
                        absolute inset-0
                        rounded-[30px]
                        overflow-hidden
                        [backface-visibility:hidden]
                    "
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-8 left-6 right-6 text-white">
                        <h3 className="text-2xl font-medium">
                            {title}
                        </h3>

                        <div className="flex items-center gap-2 text-base text-white/90 mt-2">
                            <span>{category}</span>
                            <span>•</span>
                            <span>{year}</span>
                        </div>
                    </div>
                </div>

                {/* BACK SIDE */}
                <div
                    className="
                        absolute inset-0
                        rounded-[30px]
                        bg-black text-white
                        p-8 flex flex-col justify-center
                        [transform:rotateY(180deg)]
                        [backface-visibility:hidden]
                    "
                >
                    <p className="text-sm uppercase tracking-[3px] text-white/50 mb-4">
                        Project Details
                    </p>

                    <h3 className="text-3xl font-semibold">
                        {title}
                    </h3>

                    <p className="mt-5 text-white/70 leading-relaxed">
                        This is some random project description text.
                        You can write about the project, tech stack,
                        achievements, animations, UI/UX, or anything here.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                            React
                        </span>

                        <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                            Tailwind
                        </span>

                        <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                            GSAP
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectsGrid() {
    return (
        <div className="mt-[4rem] lg:mt-[10rem] flex  flex-row  flex-wrap gap-6 justify-around mb-[3rem] lg:mb-[6rem]">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    {...project}
                />
            ))}
        </div>
    );
}
//Services we provide
const services = [
    {
        number: "001",
        title: "UI-UX design",
        description:
            "Ever used an app and thought, 'Why is this so hard?' Yeah, we fix that. Interfaces that behave like they've met people before.",
        image:
            "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=600",
        tags: [
            "User Research",
            "Personas",
            "Information Architecture",
            "User Flows",
            "Microinteractions",
        ],
    },
    {
        number: "002",
        title: "Website development",
        description:
            "Think of it like a good host—welcoming, easy to navigate, and never leaves you guessing where the bathroom is.",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
        tags: [
            "Responsive Design",
            "Grid Systems",
            "CMS Integration",
            "Analytics & reporting",
            "Navigation Design",
        ],
    },
    {
        number: "003",
        title: "Mobile app development",
        description:
            "Not just a logo—this is your fingerprint. Distinct, bold, unmistakably you.",
        image:
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600",
        tags: [
            "Brand Strategy",
            "Logo Design",
            "Color Palette",
            "Brand Manual",
            "Platform optimization",
            "7+",
        ],
    },
    {
        number: "004",
        title: "Game development & design",
        description:
            "Designed for quick taps, late-night swipes, and half-asleep scrolling.",
        image:
            "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600",
        tags: [
            "Market Research",
            "Design Systems",
            "MVP Design",
            "Iteration Cycles",
            "User Testing",
        ],
    },
    {
        number: "005",
        title: "Video editing & motion design",
        description:
            "Designed for quick taps and modern storytelling experiences.",
        image:
            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600",
        tags: [
            "Onboarding Flows",
            "Adaptive UI",
            "Dark Mode",
            "Content Design",
            "iOS & Android",
        ],
    },
];



function Tag({ children }) {
    return (
        <span className="rounded-full bg-white px-3 py-2 text-xs text-black">
            {children}
        </span>
    );
}
function ServiceRow({
    number,
    title,
    description,
    image,
    tags,
    ind
}) {
    const [isOpen, setIsOpen] = useState(ind === 0);

    return (
        <div
            className={`
                w-[90%] mx-auto py-8 lg:py-12
                ${ind !== 0 ? "border-t border-white/10" : ""}
            `}
        >
            {/* MOBILE LAYOUT */}
            <div className="flex flex-col gap-5 lg:hidden">

                {/* Top Row */}
                <div className="flex items-start justify-between gap-4">

                    <div className="flex gap-4">
                        {/* Image */}
                        <img
                            src={image}
                            alt={title}
                            className={`
                                rounded-xl object-cover transition-all duration-300
                                ${isOpen
                                    ? "w-[110px] h-[110px]"
                                    : "w-[72px] h-[72px]"
                                }
                            `}
                        />

                        {/* Title + Number */}
                        <div>
                            <p className="text-xs text-white/40 mb-2">
                                ({number})
                            </p>

                            <h3 className="text-xl font-medium text-white leading-snug">
                                {title}
                            </h3>
                        </div>
                    </div>

                    {/* Expand button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex h-10 w-10 min-w-10 items-center justify-center rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition"
                    >
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </button>
                </div>

                {/* Expandable Content */}
                <div
                    className={`
                        overflow-hidden transition-all duration-500
                        ${isOpen
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0"
                        }
                    `}
                >
                    <p className="text-sm leading-7 text-white/60">
                        {description}
                    </p>

                    {/* Tags */}
                    <div className="mt-6">
                        <p className="mb-3 text-xs uppercase tracking-wider text-white/30">
                            Categories
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, i) => (
                                <Tag key={i}>{tag}</Tag>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* DESKTOP LAYOUT */}
            <div
                className={`
                    hidden lg:grid
                    lg:grid-cols-[60px_100px_1fr_1fr_60px]
                    gap-8 items-start
                `}
            >
                {/* Number */}
                <div className="text-sm text-white/70">
                    ({number})
                </div>

                {/* Image */}
                <img
                    src={image}
                    alt={title}
                    className={`
                        rounded-xl object-cover transition-all duration-300
                        ${isOpen
                            ? "h-[140px] w-full lg:w-[160px]"
                            : "h-[72px] w-[100px]"
                        }
                    `}
                />

                {/* Content */}
                <div>
                    <h3 className="text-2xl font-medium text-white">
                        {title}
                    </h3>

                    <div
                        className={`
                            overflow-hidden transition-all duration-500
                            ${isOpen
                                ? "max-h-[300px] opacity-100 mt-4"
                                : "max-h-0 opacity-0"
                            }
                        `}
                    >
                        <p className="max-w-[320px] text-base leading-7 text-white/50">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Tags */}
                <div
                    className={`
                        overflow-hidden transition-all duration-500
                        ${isOpen
                            ? "max-h-[300px] opacity-100"
                            : "max-h-0 opacity-0"
                        }
                    `}
                >
                    <p className="mb-5 text-sm text-white/30">
                        Categories
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                            <Tag key={i}>{tag}</Tag>
                        ))}
                    </div>
                </div>

                {/* Expand button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition"
                >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </button>
            </div>
        </div>
    );
}

const LandingPage = () => {
    return (
        <div>
            <section className="w-[90%] min-h-screen bg-[#f5f5f5] flex flex-col justify-between overflow-hidden container mx-auto">

                {/* Main Hero */}
                <div className="flex flex-col items-center justify-center pt-[5rem] border-grey">

                    {/* Top Badge */}
                    <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-full px-5 py-3 shadow-sm">

                        {/* Avatars */}
                        <div className="flex -space-x-3">
                            <img
                                src="https://i.pravatar.cc/100?img=1"
                                alt=""
                                className="max-w-[32px] max-h-[32px] rounded-full border-2 border-white object-cover"
                            />

                            <img
                                src="https://i.pravatar.cc/100?img=2"
                                alt=""
                                className="max-w-[32px] max-h-[32px] rounded-full border-2 border-white object-cover"
                            />

                            <img
                                src="https://i.pravatar.cc/100?img=3"
                                alt=""
                                className="max-w-[32px] max-h-[32px] rounded-full border-2 border-white object-cover"
                            />
                        </div>

                        <p className="text-sm leading-none text-gray-600 font-medium">
                            1,000+ satisfied clients
                        </p>
                    </div>

                    {/* Heading */}
                    <div className="mt-[3rem] text-center leading-none">

                        {/* First Line */}
                        <div className="flex items-center justify-center ">
                            <h1 className="text-hero lg:text-3xl font-medium tracking-[-2px] text-black">
                                Scale your
                            </h1>

                            {/* Icon Stack */}
                            <div className="relative flex items-center ml-[2rem]">
                                <AnimatedIconStack />
                            </div>

                            <h1 className="text-hero lg:text-3xl font-medium tracking-[-2px] text-black">
                                brand
                            </h1>
                        </div>

                        {/* Second Line */}
                        <div className="mt-3">
                            <h1 className="text-hero lg:text-3xl font-medium tracking-[-2px] text-black">
                                with{" "}
                                <span
                                    className="font-normal italic poppins-thin tracking-[-2px] text-hero lg:text-3xl"
                                >
                                    DesignDreams
                                </span>
                            </h1>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-16 flex items-center gap-6 mb-[4rem] lg:mb-[10rem]">

                        <Button label='Get Started' click={() => {
                            scrollToSection('book-a-call')
                        }} />

                    </div>
                </div>

                {/* Bottom Features */}
                <div className='w-full container mx-auto border border-gray-200  mb-[3.2rem]'>
                    <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">

                        {/* Item 1 */}
                        <div className="flex items-center justify-center gap-5 py-4 border-r border-gray-200">
                            <div className="p-[6px] rounded-full border border-gray-300 flex items-center justify-center">
                                <CheckIcon />   {/* <Check size={22} /> */}
                            </div>

                            <p className="text-lg text-gray-600 font-medium">
                                Latest designs
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-center justify-center gap-5 py-4 border-r border-gray-200">
                            <div className="p-[6px] rounded-full border border-gray-300 flex items-center justify-center">

                                <CheckIcon />   {/* <Check size={22} /> */}
                            </div>

                            <p className="text-lg text-gray-600 font-medium">
                                Fast turnaround
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="flex items-center justify-center gap-5 py-4">
                            <div className="p-[6px] rounded-full border border-gray-300 flex items-center justify-center">
                                <CheckIcon />  {/* <Check size={22} /> */}
                            </div>

                            <p className="text-lg text-gray-600 font-medium">
                                High-quality
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl pb-[7rem]">
                    <VideoSection />
                    <IntroContent />
                    <StatsSection />
                </div>

                {/* Benefits section */}
                <div className="mx-auto w-full lg:container pb-[6rem] bg-white pt-[7rem]">

                    <SectionLabel />

                    {/* Heading */}
                    <div className="mx-auto mt-5 max-w-[900px] text-center">
                        <h2 className="text-h lg:text-hero font-semibold leading-[1.2] tracking-[-0.03em]">
                            Everything your brand needs
                            <br />
                            — in one creative partner
                        </h2>
                    </div>

                    <BenefitsGrid />

                </div>

                {/* Projects section */}
                <div className="mx-auto w-full container mt-[6rem]" id='projects'>
                    <SectionLabel label={'Projects'} />
                    <SectionHeading />
                    <ProjectsGrid />
                </div>


            </section>
            {/* Services section */}
            <div id='services' className="mx-auto      bg-gradient-to-b from-[#111] to-black
    rounded-3xl
    border border-white/10
    shadow-[0_0_50px_rgba(255,255,255,0.05)]
    m-[2rem]">
                <div className='max-w-7xl m-auto'>

                    <h3 className='text-h lg:text-3xl text-white text-center pt-[6rem]'>Services</h3>

                    {services.map((service, ind) => (
                        <ServiceRow
                            key={service.number}
                            {...service}
                            ind={ind}
                        />
                    ))}
                </div>


            </div>

            <div className=''>
                <TestimonialCard />
                <FAQ />
                <ContactUs />
                <IntroHeroSection />
            </div>
        </div>
    )
}

export default LandingPage;