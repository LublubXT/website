"use client";

import React, { useState } from "react";

export default function DevBadgeCard() {
    const [showEmail, setShowEmail] = useState(false);

    return (
        <div className="w-full min-w-[1000px] border rounded-xl bg-white p-6 flex flex-row justify-between items-center">
            <div className="flex flex-col gap-3">
                <div className="badge badge-secondary font-space">
                    Developer
                </div>
                <p className="font-space">John Doe has posted 3 ideas.</p>
            </div>
            <div className="flex flex-row-reverse items-center gap-3">
                <button
                    className="btn"
                    onClick={() => setShowEmail(!showEmail)}
                >
                    {showEmail ? "x" : "Show Email"}
                </button>
                <p className={showEmail ? "font-space" : "hidden"}>
                    johndoe@email.com
                </p>
            </div>
        </div>
    );
}
