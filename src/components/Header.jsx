import React, { useState } from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiIndent } from "react-icons/ci";
import { FaBalanceScale } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-yellow-600/20 bg-[#07111e]/95 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="border-2 border-yellow-500 rounded-md p-2">
                        <h3 className="mb-4 text-3xl font-extrabold text-[#d4af37]">
                            <FaBalanceScale size={30} />
                        </h3>
                    </div>

                    <div>
                        <h1 className="text-yellow-500 font-bold uppercase tracking-wide text-lg md:text-xl">
                            Rajat Purohit
                        </h1>

                        <p className="text-gray-400 text-[10px] md:text-xs tracking-wide">
                            ADVOCATE | RAJASTHAN HIGH COURT
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex items-center gap-8">
                    {[
                        { to: "/", label: "Home" },
                        { to: "/about", label: "About" },
                        { to: "/services", label: "Services" },
                        { to: "/practice-areas", label: "Practice Areas" },
                        { to: "/blog", label: "Blog" },
                        { to: "/contact", label: "Contact" },
                    ].map((link) => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    `${isActive ? "text-yellow-500 font-medium" : "text-white hover:text-yellow-500"} transition`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Call Button */}
                <a
                    href="tel:+918947074077"
                    className="hidden md:flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-2.5 rounded-md transition-all duration-300"
                >
                    <MdPhoneInTalk size={16} />
                    +91 89470 74077
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-yellow-500"
                >
                    {isOpen ? <CiIndent size={28} /> : <GiHamburgerMenu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden bg-[#07111e] border-t border-yellow-500/20 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col p-5 space-y-4">
                    {[
                        { to: "/", label: "Home" },
                        { to: "/about", label: "About" },
                        { to: "/services", label: "Services" },
                        { to: "/practice-areas", label: "Practice Areas" },
                        { to: "/blog", label: "Blog" },
                        { to: "/contact", label: "Contact" },
                    ].map((link) => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    `${isActive ? "text-yellow-500 font-medium" : "text-white hover:text-yellow-500"}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}

                    <a
                        href="tel:+918947074077"
                        className="flex items-center justify-center gap-2 bg-yellow-500 text-black font-semibold py-3 rounded-md"
                    >
                        <MdPhoneInTalk size={16} />
                        +91 89470 74077
                    </a>
                </ul>
            </div>
        </header>
    );
};

export default Header;