"use client";

import React, { useEffect, useState } from "react";

export default function AdCard() {
    const [views, setViews] = useState(20);
    const [clicks, setClicks] = useState(3);
    const [viewsPerDay, setViewsPerDay] = useState(views / 3);
    const [clicksPerDay, setClicksPerDay] = useState(clicks / 3);
    const [viewstoclicks, setViewstoclicks] = useState(clicks / views);

    useEffect(() => {
        const interval = setInterval(() => {
            setViews(views + 1);
            setViewsPerDay(Math.round((views + 3) / 3));
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, [views]);

    useEffect(() => {
        const interval = setInterval(() => {
            setClicks(clicks + 1);
            setClicksPerDay(Math.round((clicks + 1) / 3));
            setViewstoclicks(Math.round((clicks / views) * 100));
            // console.log(Math.round((clicks / views) * 100));
        }, 1200);

        return () => {
            clearInterval(interval);
        };
    }, [clicks]);

    return (
        <div className="min-w-[1000px] rounded-xl bg-white flex flex-row gap-2 justify-between">
            <div className="flex flex-row ">
                <div className="p-10 flex flex-row items-center justify-center h-full">
                    <p className="font-space text-secondary text-2xl">AD</p>
                </div>
                <div className="flex flex-col gap-1 justify-center">
                    <p className="font-space text-sm opacity-50 mb-2">
                        09/04/2024
                    </p>
                    <h3 className="font-poppins text-2xl font-bold text-secondary">
                        SparkToApp
                    </h3>
                    <p className="font-space text-sm">
                        Find and post app ideas with ease.
                    </p>
                </div>
            </div>
            <div>
                <div className="bg-secondary/10 p-3 px-5 flex flex-col items-end">
                    <p className="font-space">
                        <span className="font-bold">{views}</span> views
                    </p>
                    <p className="font-space">
                        <span className="font-bold">{clicks}</span> clicks
                    </p>
                    <p className="font-space">
                        <span className="font-bold">~{viewsPerDay}</span>{" "}
                        views/day
                    </p>
                    <p className="font-space">
                        <span className="font-bold">~{clicksPerDay}</span>{" "}
                        clicks/day
                    </p>
                    <p className="font-space">
                        <span className="font-bold">{viewstoclicks}%</span>{" "}
                        views to clicks
                    </p>
                </div>
                <div className="bg-secondary/30 p-3 px-5 flex flex-col items-end">
                    <p className="font-space">17/30 days left</p>
                </div>
            </div>
        </div>
    );
}
