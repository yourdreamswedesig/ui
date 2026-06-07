import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../Button";
import Icon from "../../assets/icon.svg?react";
import { scrollToSection } from "../../HelperFunction/scrollToSection";

export function NavItem(props) {
    const { label, id, onClick } = props;

    return (
        <span
            className="text-black text-sm font-medium hover:text-gray-600 transition cursor-pointer"
            onClick={() => {
                scrollToSection(id);
                onClick?.();
            }}
        >
            {label}
        </span>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    // Close menu on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav
            ref={navRef}
            className="w-[90%] container mx-auto relative"
        >
            <div className="mx-auto py-5 flex items-center justify-between border border-gray-200">

                {/* Logo */}
                <div className="flex items-center">
                    <Icon />
                    <h1 className="text-xl font-medium text-black">
                        DesignDreams
                    </h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-14">
                    <NavItem label="Projects" id="projects" />
                    <NavItem label="Services" id="services" />
                    <NavItem label="Testimonial" id="testimonial" />
                </div>

                {/* Desktop Button */}
                <div className="hidden lg:block">
                    <Button
                        label="Get Started"
                        click={() => {
                            scrollToSection("book-a-call");
                        }}
                    />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-black mr-[1rem]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>
            {isOpen && (
                <div className="lg:hidden px-6 py-6 flex flex-col gap-5 bg-[#f4f4f4] text-center absolute w-full transition-all"
                    onClick={() => setIsOpen(false)}
                >
                    <NavItem
                        label="Projects"
                        id="projects"

                    />
                    <NavItem
                        label="Services"
                        id="services"
                    />
                    <NavItem
                        label="Testimonial"
                        id="testimonial"
                    />
                </div>
            )}
            {/* Mobile Menu */}

        </nav>
    );
}