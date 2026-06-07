import React, { useState } from 'react';
import Icon from '../assets/icon.svg?react'
import { FaBehance, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Globe } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// ==========================================
// SUB-COMPONENT: LeftContent
// ==========================================
function LeftContent() {
    return (
        <div className="flex flex-col justify-between h-full min-h-[380px] md:min-h-[440px] py-4">
            {/* Brand Logo Header */}
            <div className=" items-center gap-2.5">
                <div className="flex items-center">
                    <Icon />
                    <h1 className="text-xl font-medium text-black">
                        DesignDreams
                    </h1>
                </div>
                <h1 className="text-h lg:text-3xl  text-[#111111] tracking-tight leading-[1.12] max-w-md  mt-[4rem]">
                    Hassle free services with a dedicated team
                </h1>
            </div>



            {/* Social Media Footer Channels */}
            <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                <span className="text-gray-400 font-normal">Follow us:</span>
                <div className="flex items-center gap-4 text-[#111111]">
                    <a href="#" className="hover:text-gray-600 transition-colors"><FaTwitter size="22px" /></a>
                    <a href="#" className="hover:text-gray-600 transition-colors"><FaLinkedin size="22px" /></a>
                    <a href="#" className="hover:text-gray-600 transition-colors"><Globe size="22px" /></a>
                    <a href="#" className="hover:text-gray-600 transition-colors"><FaFacebook size="22px" /></a>
                    <a href="#" className="hover:text-gray-600 transition-colors"><FaBehance size="22px" /></a>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// SUB-COMPONENT: BookingCard
// ==========================================
function BookingCard() {
    const [selectedDate, setSelectedDate] = useState(null);

    const YOUR_EMAIL = "yourmail@gmail.com";

    const handleBooking = () => {
        if (!selectedDate) {
            alert("Please select a slot first");
            return;
        }

        // Format date for Google Calendar
        const start = new Date(selectedDate);

        // 15 min meeting
        const end = new Date(start.getTime() + 15 * 60000);

        const formatGoogleDate = (date) => {
            return date
                .toISOString()
                .replace(/-|:|\.\d+/g, "");
        };

        const startFormatted = formatGoogleDate(start);
        const endFormatted = formatGoogleDate(end);

        const title = encodeURIComponent(
            "15-min Intro Call - DesignDreams"
        );

        const details = encodeURIComponent(`
Hi DesignDreams Team,

I would like to book a 15-minute intro call.

Selected Slot:
${start.toLocaleString()}

Looking forward to discussing the project.

Thanks
        `);

        const googleCalendarUrl = `
https://calendar.google.com/calendar/render?action=TEMPLATE
&text=${title}
&dates=${startFormatted}/${endFormatted}
&details=${details}
&add=${YOUR_EMAIL}
`;

        window.open(googleCalendarUrl, "_blank");

        // Optional mail open after calendar
        setTimeout(() => {
            window.location.href = `
mailto:${YOUR_EMAIL}
?subject=${encodeURIComponent("15-min Intro Call Booking")}
&body=${details}
            `;
        }, 1000);
    };
    return (
        <div id='book-a-call' className="bg-[#f1f1f1] rounded-[32px] p-8 md:p-10 flex flex-col justify-between max-w-md w-full ml-auto shadow-sm">

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
            <h2 className="text-3xl md:text-4xl text-[#111111] tracking-tight leading-tight mb-6">
                Book a 15-min<br /> intro call
            </h2>

            <div className="mb-6">
                <p className="text-sm mb-3 text-gray-600">
                    Select your preferred slot
                </p>

                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    showTimeSelect
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    minDate={new Date()}
                    placeholderText="Choose date & time"
                    calendarClassName="custom-calendar"
                    className="
        w-full
        rounded-2xl
        border
        border-gray-200
        bg-white
        px-5
        py-4
        text-sm
        font-medium
        text-[#111111]
        shadow-sm
        outline-none
        transition-all
        focus:border-black
        focus:ring-4
        focus:ring-black/5
    "
                />
            </div>
            {/* Dark Pill Gradient Button */}
            <button className="w-full bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a] text-white font-medium text-sm py-4 px-6 rounded-full shadow-md hover:opacity-95 transition-opacity duration-200 mb-8 active:scale-[0.99] cursor-pointer"
                onClick={handleBooking}

            >
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
        <div className="w-full lg:min-h-screen bg-white flex items-center justify-center px-6 py-10 md:py-10 font-sans">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 items-center">

                {/* Left Messaging Layout Column */}
                <LeftContent />

                {/* Right Dynamic Widget Booking Card Column */}
                <BookingCard />

            </div>
        </div>
    );
}