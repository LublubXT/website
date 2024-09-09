import "./globals.css";
import { Poppins, Space_Grotesk } from "next/font/google";
// import sparktoapplogoblue from "./sparktoapplogoblue.png";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
    title: "SparkToApp - Post and Find App Ideas with Ease",
    description:
        "SparktoApp is the best place to post and find app ideas. App idea owners can post app ideas that would fix their problem, or other people's problems. For developers looking for their next app project, SparkToApp is the best place to find your next project. Join now to discover your next project!",
    keywords:
        "app ideas, post app ideas, developers, ideas, idea owners, find app ideas, find app ideas fast, easily find app ideas, find app ideas to build",
};

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    variable: "--font-poppins",
});

const space_grotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-space-grotesk",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <script
                    async
                    src="http://localhost:3000/tracker.js"
                    data-ackee-server="http://localhost:3000"
                    data-ackee-domain-id="bc899ea5-7587-4f50-8d96-9d9875127e0a"
                ></script>
                {/* <link
                    rel="icon"
                    href={sparktoapplogoblue}
                    type="image/png"
                    sizes="32x32"
                /> */}
            </head>

            <body
                className={`${poppins.variable} ${space_grotesk.variable} font-sans`}
            >
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
