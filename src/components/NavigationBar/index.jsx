import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
import Button from '../Button';
import Icon from '../../assets/icon.svg?react'
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full container mx-auto sticky top-0 bg-[#f7f7f7] z-1">
            <div className="mx-auto px-6 md:px-10 py-5 flex items-center justify-between border border-gray-200 ">

                {/* Logo */}
                <div className="flex items-center">
                    <Icon />
                    <h1 className="text-xl font-medium text-black">
                        DesignDreams
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-14">
                    <a
                        href="#"
                        className="text-black text-sm font-medium hover:text-gray-600 transition"
                    >
                        Projects
                    </a>

                    <a
                        href="#"
                        className="text-black text-sm font-medium hover:text-gray-600 transition"
                    >
                        Services
                    </a>

                    <a
                        href="#"
                        className="text-black text-sm font-medium hover:text-gray-600 transition"
                    >
                        Testimonial
                    </a>
                </div>

                {/* Desktop Button */}
                <Button label='Get Started' />

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-black"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? 'X' : 'M'}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-6 pb-6 flex flex-col gap-5 bg-[#f4f4f4]">
                    <a
                        href="#"
                        className="text-lg font-medium hover:text-gray-600"
                    >
                        Projects
                    </a>

                    <a
                        href="#"
                        className="text-lg font-medium hover:text-gray-600"
                    >
                        Services
                    </a>

                    <a
                        href="#"
                        className="text-lg font-medium hover:text-gray-600"
                    >
                        Testimonial
                    </a>

                    <button className="bg-black text-white py-3 rounded-full shadow-lg mt-2 text-sm">
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
}