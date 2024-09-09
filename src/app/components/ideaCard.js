"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function IdeaCard({ uparrow, num, title, open }) {
    const [number, setNumber] = useState(num);
    const [voted, setVoted] = useState(false);

    const vote = () => {
        if (!voted) {
            setNumber(number + 1);
            setVoted(true);
        }
    };

    return (
        <div className="rounded-xl overflow-hidden border border-secondary border-opacity-20 flex flex-row bg-white hover:scale-105 duration-200 min-w-[450px] max-sm:min-w-full">
            <button
                className={
                    voted
                        ? "flex flex-col p-8 justify-center items-center bg-white cursor-not-allowed opacity-50"
                        : "flex flex-col p-8 justify-center items-center bg-secondary bg-opacity-25 hover:bg-secondary hover:bg-opacity-50 duration-200 cursor-pointer"
                }
                onClick={vote}
            >
                <Image src={uparrow} alt="arrow" width={24} height={24} />
                <p className="font-space text-sm">{number}</p>
            </button>
            <div className="p-5 py-4 font-space">
                <div className="flex flex-row gap-4 items-center">
                    <p className="opacity-50 text-sm">09/04/2024</p>
                    <div
                        className={
                            open
                                ? "badge badge-secondary badge-sm"
                                : "badge badge-accent badge-sm"
                        }
                    >
                        {open ? "Open" : "Closed"}
                    </div>
                </div>
                <div className="mt-3">
                    <h2 className="font-poppins font-bold text-xl mb-1">
                        {title}
                    </h2>
                    <p className="font-space text-sm">
                        This is the app idea description.
                    </p>
                </div>
            </div>
        </div>
    );
}
