import React from "react";
import Image from "next/image";

export default function BenefitCard({ title, text, dev, img }) {
    return (
        <div
            className={
                dev
                    ? "border border-accent border-opacity-25 rounded-xl p-6 hover:shadow-xl duration-200 hover:shadow-accent/20 relative group cursor-pointer bg-white"
                    : "border border-secondary border-opacity-25 rounded-xl p-6 hover:shadow-xl duration-200 hover:shadow-secondary/20 relative group cursor-pointer bg-white"
            }
        >
            <Image
                src={img}
                alt="icon"
                className={
                    dev
                        ? "p-3 rounded-full w-[55px] h-[55px] shadow-accent/50 shadow-lg bg-accent absolute -top-8 -left-8 opacity-0 duration-200 animate-bounce group-hover:opacity-100"
                        : "p-3 rounded-full w-[55px] h-[55px] shadow-secondary/50 shadow-lg bg-secondary absolute -top-8 -left-8 opacity-0 duration-200 animate-bounce group-hover:opacity-100"
                }
            />
            <h4 className="font-bold mb-1 text-lg">{title}</h4>
            <p className="font-space">{text}</p>
        </div>
    );
}
