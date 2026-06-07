import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

function ContactUs() {
    const [selectedDate, setSelectedDate] = useState(null);

    const YOUR_EMAIL = "yourmail@gmail.com";

    const handleBooking = () => {
        if (!selectedDate) {
            alert("Please select a slot first");
            return;
        }

        const start = new Date(selectedDate);

        // 15 min meeting
        const end = new Date(start.getTime() + 15 * 60000);

        const formatGoogleDate = (date) => {
            return date.toISOString().replace(/-|:|\.\d+/g, "");
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

        // Open Google Calendar
        window.open(googleCalendarUrl, "_blank");

        // Open mail client
        setTimeout(() => {
            window.location.href = `
mailto:${YOUR_EMAIL}
?subject=${encodeURIComponent("15-min Intro Call Booking")}
&body=${details}
            `;
        }, 800);
    };

    return (
        <div className="w-full flex justify-center py-16 bg-[#f7f7f7] overflow-visible">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="
                    relative
                    w-[90%]
                    max-w-6xl
                    rounded-[40px]
                    bg-[#1f1f1f]
                    overflow-visible
                    px-6
                    py-20
                    text-center
                "
            >
                {/* GRID */}
                <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

                {/* ICON */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="relative z-10 flex justify-center mb-6"
                >
                    <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.6)]">
                        ⚡
                    </div>
                </motion.div>

                {/* TITLE */}
                <h1 className="relative z-10 text-white text-4xl md:text-5xl font-medium leading-tight">
                    Your journey begins here
                    <br />
                    with your one & only agency
                </h1>

                {/* SUBTEXT */}
                <p className="relative z-10 text-white/60 mt-5 text-sm md:text-base">
                    Our service delivers top-quality products when you need.
                </p>

                {/* DATE PICKER */}
                <div className="relative z-50 max-w-md mx-auto mt-10">
                    <p className="text-sm mb-4 text-white/60">
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

                {/* BUTTON */}
                <motion.div
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="relative z-10 mt-10 flex justify-center"
                >
                    <button
                        onClick={handleBooking}
                        className="
                            px-10
                            py-5
                            rounded-2xl
                            bg-[#5b8cff]
                            text-white
                            text-xl
                            font-medium
                            shadow-[0_0_0_6px_rgba(91,140,255,0.2)]
                            hover:scale-[1.02]
                            transition-all
                            cursor-pointer
                        "
                    >
                        Book a 15-min Call
                    </button>
                </motion.div>

                {/* EMAIL */}
                <p className="relative z-10 mt-8 text-white/40 text-sm">
                    {YOUR_EMAIL}
                </p>

                {/* BORDER */}
                <div className="absolute inset-0 rounded-[40px] border border-white/10 pointer-events-none" />
            </motion.div>
        </div>
    );
}

export default ContactUs;