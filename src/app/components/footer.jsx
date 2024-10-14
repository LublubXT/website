import React from "react";
import sparktoapplogo from "../sparktoapplogo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer class="text-gray-600 font-space">
            <div class="w-full max-w-[1280px] px-5 py-24 max-md:pb-0 mx-auto flex justify-between flex-row max-md:flex-col">
                <div class="w-64 flex flex-col max-md:mx-auto gap-0 max-md:items-center justify-start max-md:text-center">
                    <Link
                        href={"/"}
                        className="flex title-font font-medium items-center text-gray-900 md:mb-0 cursor-pointer"
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
                    <p class="mt-2 text-sm text-gray-500 font-space">
                        Find and post app ideas with ease.
                    </p>
                </div>
                <div class="grid grid-flow-col grid-cols-2 max-md:grid-flow-row max-md:grid-cols-1 max-md:grid-rows-2 gap-20 max-w-fit max-md:mx-auto max-md:mt-20">
                    <div class="w-full px-4 max-md:text-center">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                            MAIN
                        </h2>
                        <nav class="flex flex-col gap-3 w-full min-w-fit">
                            <Link
                                href={"/#about"}
                                class="text-gray-600 hover:text-gray-800"
                            >
                                About SparkToApp
                            </Link>
                            <Link
                                href={"/#benefits"}
                                class="text-gray-600 hover:text-gray-800"
                            >
                                Benefits
                            </Link>
                            <Link
                                href={"/#features"}
                                class="text-gray-600 hover:text-gray-800"
                            >
                                Features
                            </Link>
                            <Link
                                href={"/#pricing"}
                                class="text-gray-600 hover:text-gray-800"
                            >
                                Pricing
                            </Link>
                            <Link
                                href={"/#newsletter"}
                                class="text-gray-600 hover:text-gray-800"
                            >
                                Newsletter
                            </Link>
                        </nav>
                    </div>
                    <div class="w-full px-4 max-md:text-center">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                            CONTACT
                        </h2>
                        <nav class="">
                            <Link
                                href={"/#contact"}
                                class="text-gray-600 hover:text-gray-800"
                            >
                                Contact Me
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-row max-md:flex-col-reverse gap-3 max items-center justify-between w-full max-w-[1280px] mx-auto mb-10 px-3">
                <p className="text-center opacity-30">
                    Copyright © 2024 - All rights reserved
                </p>
                <div className="flex flex-row gap-8 max-sm:flex-col max-sm:gap-2 max-sm:items-center max-sm:mb-3">
                    <Link
                        href="/termsofservice"
                        className="btn-link text-neutral opacity-50 font-space"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        href="/privacypolicy"
                        className="btn-link text-neutral opacity-50 font-space"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/communityguidelines"
                        className="btn-link text-neutral opacity-50 font-space"
                    >
                        Community Guidelines
                    </Link>
                </div>
            </div>
        </footer>
    );
}
