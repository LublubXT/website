"use client";
import React, { useState } from "react";
import Image from "next/image";
import sparktoapplogo from "../sparktoapplogo.svg";
import menu from "../menu.svg";
import close from "../close.svg";
import Link from "next/link";

export default function Navbar({ menuimage, logoimage, closeimage }) {
    const [openNav, setOpenNav] = useState(false);

    return (
        <div className="w-full px-10 max-sm:px-5">
            <header className=" text-gray-600 body-font w-full max-w-[1280px] mx-auto py-10 max-sm:py-5">
                <div className="container mx-auto w-full flex flex-row items-center justify-between">
                    <Link
                        href={"/"}
                        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
                    >
                        <Image
                            src={sparktoapplogo}
                            alt="logo"
                            width={50}
                            height={34}
                        />
                        <span className="ml-5 text-2xl mt-3 text-neutral">
                            SparkToApp
                        </span>
                    </Link>
                    <button
                        className="hidden max-lg:block"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        <Image
                            src={openNav ? close : menu}
                            alt="menu button"
                            width={32}
                            height={32}
                        />
                    </button>
                    <nav className="flex flex-wrap gap-8 items-center text-base justify-center max-lg:hidden">
                        <Link
                            className="hover:text-gray-900 font-space cursor-pointer"
                            href="/"
                        >
                            Home
                        </Link>
                        <Link
                            className="hover:text-gray-900 font-space cursor-pointer"
                            href="/#about"
                        >
                            About
                        </Link>
                        <Link
                            href="/#benefits"
                            className="hover:text-gray-900 font-space cursor-pointer"
                        >
                            Benefits
                        </Link>
                        <Link
                            href={"/#features"}
                            className="hover:text-gray-900 font-space cursor-pointer"
                        >
                            Features
                        </Link>
                        <Link
                            href={"/#pricing"}
                            className="hover:text-gray-900 font-space cursor-pointer"
                        >
                            Pricing
                        </Link>
                        <Link
                            href={"/#contact"}
                            className="hover:text-gray-900 font-space cursor-pointer"
                        >
                            Contact
                        </Link>
                        <button className="font-space btn btn-secondary shadow-lg shadow-secondary/50">
                            Sign Up
                        </button>
                    </nav>
                </div>
                <nav
                    className={
                        openNav
                            ? "flex flex-col gap-8 items-start text-base justify-center bg-white w-full z-[999999999] absolute -ml-10 p-10"
                            : "hidden"
                    }
                >
                    <Link
                        className="hover:text-gray-900 font-space cursor-pointer"
                        href="/"
                    >
                        Home
                    </Link>
                    <Link
                        href={"/#about"}
                        className="hover:text-gray-900 font-space cursor-pointer"
                    >
                        About
                    </Link>
                    <Link
                        href={"/#benefits"}
                        className="hover:text-gray-900 font-space cursor-pointer"
                    >
                        Benefits
                    </Link>
                    <Link
                        href={"/#features"}
                        className="hover:text-gray-900 font-space cursor-pointer"
                    >
                        Features
                    </Link>
                    <Link
                        href={"/#pricing"}
                        className="hover:text-gray-900 font-space cursor-pointer"
                    >
                        Pricing
                    </Link>
                    <Link
                        href={"/#contact"}
                        className="hover:text-gray-900 font-space cursor-pointer"
                    >
                        Contact
                    </Link>
                    <button className="font-space btn btn-secondary">
                        Sign Up
                    </button>
                </nav>
            </header>
        </div>
    );
}
