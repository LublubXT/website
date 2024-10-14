import Image from "next/image";
import sparktoapplogo from ".//sparktoapplogo.svg";
import underline from ".//underline.png";
import IdeaCard from "./components/ideaCard";
import uparrow from ".//uparrow.svg";
import tryit from ".//tryit.svg";
import me from ".//me.png";
import curvearrow from ".//curve-arrow.svg";
import BenefitCard from "./components/benefitCard";
import money from ".//tabler-icon-brand-cashapp.svg";
import bulb from ".//tabler-icon-bulb.svg";
import check from ".//tabler-icon-circle-check.svg";
import hammer from ".//tabler-icon-hammer.svg";
import mood from ".//tabler-icon-mood-look-up.svg";
import search from ".//tabler-icon-search.svg";
import user from ".//tabler-icon-user.svg";
import group from ".//tabler-icon-users-group.svg";
import hoveroverme from ".//hoveroverme.svg";
import DevBadgeCard from "./components/devBadgeCard";
import AdCard from "./components/adCard";
import checkDark from ".//check-dark.svg";
import checkLight from ".//check-light.svg";
import menu from ".//menu.svg";
import Navbar from "./components/navbar";
import close from ".//close.svg";
import Footer from "./components/footer";
import Link from "next/link";

export default function Home() {
    return (
        <div className="font-poppins">
            <Navbar />
            <div
                className="px-10 max-sm:px-5 w-full py-32 pt-24 max-md:pt-12"
                id="home"
            >
                <div className="w-full max-w-[1280px] mx-auto flex flex-row max-lg:flex-col gap-24 justify-between items-center">
                    <div className="">
                        <h1 className="font-black font-poppins text-[64px] max-sm:text-5xl max-sm:leading-[56px] max-w-[600px]">
                            <span className="text-secondary">Find</span> and
                            post{" "}
                            <span className="text-secondary">app ideas</span>{" "}
                            <span className="relative">
                                with ease{" "}
                                <Image
                                    src={underline}
                                    alt="underline"
                                    width={350}
                                    height={6}
                                    className="absolute right-1 -bottom-4"
                                ></Image>
                            </span>
                            .
                        </h1>
                        <p className="font-space text-base max-w-[315px] mt-5">
                            Where ideas become reality. Post app ideas, and find
                            new projects.
                        </p>
                        <div className="mt-10 flex flex-row gap-5">
                            <Link
                                href={"https://app.sparktoapp.com/signup"}
                                className="btn btn-secondary font-space shadow-lg shadow-secondary/50"
                            >
                                Get Started
                            </Link>
                            <Link
                                href={"/#about"}
                                className="btn btn-secondary font-space btn-ghost"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="bg-secondary bg-opacity-10 h-full rounded-2xl w-5/12 max-lg:w-9/12 max-md:w-full flex flex-col gap-3 relative">
                        <Image
                            src={tryit}
                            alt="try it image"
                            className="absolute -left-24 z-[1000000] max-md:-left-16 max-sm:hidden"
                        />
                        <div className="w-full flex flex-col gap-5 overflow-hidden p-6">
                            <IdeaCard
                                uparrow={uparrow}
                                num={56}
                                title={"App Idea 1"}
                                open={true}
                            />
                            <IdeaCard
                                uparrow={uparrow}
                                num={40}
                                title={"App Idea 2"}
                                open={false}
                            />
                            <IdeaCard
                                uparrow={uparrow}
                                num={38}
                                title={"App Idea 3"}
                                open={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="px-10 max-sm:px-5 w-full py-32 bg-darkaccent"
                id="about"
            >
                <div className="w-full mx-auto max-w-[1280px] flex flex-row justify-center gap-24 max-md:flex-col max-md:gap-12">
                    <Image
                        src={me}
                        alt="image of me"
                        className="w-[144px] object-cover rounded-xl"
                    />
                    <div className="flex flex-col gap-10 w-full max-w-[655px]">
                        <h1 className="text-5xl leading-tight font-poppins font-bold text-white max-sm:text-4xl">
                            &quot;
                            <span className="text-accent">
                                I was struggling to find app ideas
                            </span>
                            , so I built SparkToApp.&quot;
                        </h1>
                        <p className="font-space text-white">
                            - Caleb J. Gross -
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-10 max-sm:px-5 w-full py-32 pb-12">
                <div className="w-full mx-auto max-w-[1280px] flex flex-col items-center gap-16 max-sm:gap-10">
                    <h2 className="font-space text-2xl relative text-center max-w-[474px]">
                        <Image
                            src={curvearrow}
                            alt="curve arrow"
                            className="absolute top-4 -left-24 max-sm:hidden"
                        />
                        <span className="font-bold">
                            Watch how the app works
                        </span>
                        , and how you can use it to your advantage.
                    </h2>
                    <button className="btn btn-secondary font-space shadow-lg shadow-secondary btn-lg hidden max-sm:block">
                        Watch Video
                    </button>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/nQf1KyendS0?si=OzCLcPrD2mX2PCNr"
                        title="YouTube video player"
                        frameborder="0"
                        className="rounded-xl w-full max-w-[786px] h-[442px] max-sm:hidden"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <div className="px-10 max-sm:px-5 w-full py-32" id="benefits">
                <div className="w-full mx-auto max-w-[1280px] flex flex-col items-center gap-20">
                    <div className="flex flex-col gap-5 items-center">
                        <h2 className="font-bold text-neutral text-5xl text-center">
                            Benefits for everyone!
                        </h2>
                        <p className="max-w-[445px] font-space text-center">
                            Whether you are a software developer, or an author,
                            you can find value in this app.
                        </p>
                    </div>
                    <div className="w-full mx-auto max-w-[1000px] flex flex-row gap-5 max-md:flex-col">
                        <div className="flex flex-col items-center gap-8 bg-accent/10 p-5 rounded-xl">
                            <h3 className="font-bold font-poppins text-center text-2xl mt-5">
                                For Developers
                            </h3>
                            <div className="flex flex-col gap-4 relative">
                                <Image
                                    src={hoveroverme}
                                    alt="hover over me"
                                    className="absolute -left-24 z-[999999999] max-lg:hidden"
                                />
                                <BenefitCard
                                    title={"Streamlined Project Hunt"}
                                    text={
                                        "Ditch the endless brainstorming! SparkToApp curates a vibrant marketplace overflowing with real-world app ideas submitted by users facing genuine problems. Find projects that align with your skills and interests, eliminate the guesswork, and get building faster."
                                    }
                                    dev={true}
                                    img={search}
                                />
                                <BenefitCard
                                    title={"Build Software that Matters"}
                                    text={
                                        "Stop spinning your wheels on projects with limited impact. SparkToApp connects you with users who crave solutions. Build software that addresses real-world problems and makes a positive difference."
                                    }
                                    dev={true}
                                    img={hammer}
                                />
                                <BenefitCard
                                    title={"Stay Inspired & Up-to-Date"}
                                    text={
                                        "SparkToApp exposes you to a constant stream of innovative app ideas, keeping you inspired and informed about the latest trends in the app development space."
                                    }
                                    dev={true}
                                    img={mood}
                                />

                                <BenefitCard
                                    title={"Build Apps, Get Paid"}
                                    text={
                                        "Skip the brainstorming and connect with ideas that people already want to use. SparkToApp focuses on user needs, so you can build apps with high income potential through in-app purchases, subscriptions, or high user engagement."
                                    }
                                    dev={true}
                                    img={money}
                                />
                                <div className="bg-accent border border-accent/25 rounded-xl p-5 shadow-xl shadow-accent/50">
                                    <p className="font-space font-bold text-xl">
                                        As a token of appreciation, consider
                                        offering the idea owner free use of the
                                        completed app.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-8 bg-secondary/10 rounded-xl p-5 h-fit">
                            <h3 className="font-bold font-poppins text-center text-2xl mt-5">
                                For Idea Owners
                            </h3>
                            <div className="flex flex-col gap-4">
                                <BenefitCard
                                    title={"Potential for App Ownership"}
                                    text={
                                        "While SparkToApp doesn't guarantee development, successful app ideas might lead to negotiations where the original idea owner becomes a part-owner or receives a free-for-life plan."
                                    }
                                    dev={false}
                                    img={user}
                                />
                                <BenefitCard
                                    title={"Reach a Wide Audience"}
                                    text={
                                        "By posting your idea on SparkToApp, you'll expose it to a community of developers actively seeking new projects."
                                    }
                                    dev={false}
                                    img={group}
                                />
                                <BenefitCard
                                    title={"Bring Your Idea to Life"}
                                    text={
                                        "If you have an app idea, and it would solve a problem that you face, or that other people face, post it! Maybe it will get built, and you will have a solution to your problem."
                                    }
                                    dev={false}
                                    img={bulb}
                                />
                                <BenefitCard
                                    title={"Validate Your App Idea"}
                                    text={
                                        "SparkToApp is a valuable tool for validating your app idea before investing significant time and resources into development. By gauging interest from potential users and developers, you can reduce the risk of creating an app that fails to resonate with the market."
                                    }
                                    dev={false}
                                    img={check}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="px-10 max-sm:px-5 w-full py-32 max-md:pt-12"
                id="features"
            >
                <div className="w-full mx-auto max-w-[1280px] flex flex-col items-center gap-16 max-sm:gap-10">
                    <div className="w-full flex flex-col items-center gap-5">
                        <h2 className="font-bold text-neutral text-5xl text-center">
                            Features that empower!
                        </h2>
                        <p className="max-w-[445px] font-space text-center">
                            Features built to help you succeed.
                        </p>
                    </div>
                    <div className="grid grid-flow-col grid-cols-3 max-md:grid-cols-1 max-md:grid-rows-5 max-lg:grid-cols-2 max-lg:grid-rows-3 grid-rows-2 w-full gap-5">
                        <div className="w-full col-span-1 row-span-2 bg-secondary max-lg:row-span-2 max-md:row-span-1 overflow-hidden rounded-xl p-7 flex flex-col justify-between gap-5">
                            <div className="flex flex-col gap-2">
                                <h4 className="font-bold text-white font-poppins text-xl">
                                    Upvote Ideas
                                </h4>
                                <p className="text-white/75 font-space">
                                    If you think that an idea is great, or would
                                    be very useful and helpful, then you can
                                    give an upvote to help the idea rise to the
                                    top.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <IdeaCard
                                    uparrow={uparrow}
                                    num={56}
                                    title={"App Idea 1"}
                                    open={true}
                                />
                                <div className="flex flex-col gap-2 max-md:hidden">
                                    <IdeaCard
                                        uparrow={uparrow}
                                        num={40}
                                        title={"App Idea 2"}
                                        open={false}
                                    />
                                    <IdeaCard
                                        uparrow={uparrow}
                                        num={38}
                                        title={"App Idea 3"}
                                        open={true}
                                    />
                                    <IdeaCard
                                        uparrow={uparrow}
                                        num={32}
                                        title={"App Idea 4"}
                                        open={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 row-span-1 grid grid-flow-col max-md:grid-flow-row max-md:col-span-1 max-md:row-span-2 max-lg:grid-flow-col gap-5 max-lg:col-span-2 max-lg:row-span-1">
                            <div className="w-full col-span-1 row-span-1 overflow-hidden bg-accent rounded-xl p-7 flex flex-col justify-between gap-5">
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-bold text-white font-poppins text-xl">
                                        Developer Badge
                                    </h4>
                                    <p className="text-white/75 font-space">
                                        If you purchased a developer plan, then
                                        you will get a developer badge.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <DevBadgeCard />
                                </div>
                            </div>
                            <div className="w-full col-span-1 row-span-1 overflow-hidden bg-accent rounded-xl p-7 flex flex-col justify-between gap-5">
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-bold text-white font-poppins text-xl">
                                        Contact Users VIA Email
                                    </h4>
                                    <p className="text-white/75 font-space">
                                        If you have a developer plan, you have
                                        the option to reveal the users public
                                        email, if they have one.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 items-end">
                                    <DevBadgeCard />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 row-span-1 grid grid-flow-col max-md:grid-flow-row max-md:col-span-1 max-md:row-span-2 max-lg:grid-flow-row gap-5 max-lg:col-span-1 max-lg:row-span-2">
                            <div className="w-full col-span-1 row-span-1 overflow-hidden bg-secondary rounded-xl p-7 flex flex-col justify-between gap-5">
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-bold text-white font-poppins text-xl">
                                        Post Ads
                                    </h4>
                                    <p className="text-white/75 font-space">
                                        Post ads to bring more traffic to your
                                        site.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <AdCard />
                                </div>
                            </div>

                            <div className="w-full col-span-1 row-span-1 overflow-hidden bg-secondary rounded-xl p-7 flex flex-col justify-between gap-5">
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-bold text-white font-poppins text-xl">
                                        Ad Analytics
                                    </h4>
                                    <p className="text-white/75 font-space">
                                        Get basic, but useful information
                                        regarding your ads.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 items-end">
                                    <AdCard />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="font-space font-bold text-neutral text-2xl max-w-[635px] mx-auto text-center">
                        Lots more features coming, like{" "}
                        <span className="text-accent">built-in chat</span>,{" "}
                        <span className="text-accent">
                            community leader board
                        </span>
                        , developer profile,
                        <span className="text-accent"> community badges</span>,
                        and <span className="text-accent">more</span>!
                    </h1>
                </div>
            </div>
            <div
                className="px-10 max-sm:px-5 w-full py-32 bg-neutral"
                id="pricing"
            >
                <div className="w-full mx-auto max-w-[1280px] flex flex-col items-center gap-16 max-sm:gap-10">
                    <div className="w-full flex flex-col items-center gap-5">
                        <h2 className="font-bold text-white text-5xl text-center">
                            Simple Pricing
                        </h2>
                        <p className="max-w-[445px] font-space text-center text-white/50">
                            Gone with monthly plans, and bring in lifetime
                            plans.
                        </p>
                    </div>
                    <div className="w-full mx-auto max-w-[760px] flex flex-row gap-5 max-md:flex-col">
                        <div className="p-7 w-full bg-white rounded-xl flex flex-col gap-10 justify-between">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <p className="font-space text-neutral/30 text-xl">
                                        Basic Plan
                                    </p>
                                    <h3 className="font-bold text-4xl text-neutral">
                                        Free
                                    </h3>
                                </div>
                                <hr />
                                <div className="flex flex-col gap-2 font-space">
                                    <p className="font-bold font-space">
                                        Includes:
                                    </p>
                                    <div className="flex flex-row items-center gap-2">
                                        <Image src={checkDark} alt="check" />
                                        <p>Post unlimited app ideas</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                        <Image src={checkDark} alt="check" />
                                        <p>Upvote app ideas</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                        <Image src={checkDark} alt="check" />
                                        <p>Get contacted by developers</p>
                                    </div>
                                </div>
                            </div>
                            <Link
                                href={"https://app.sparktoapp.com/signup"}
                                className="btn btn-neutral font-space w-full"
                            >
                                Get Started
                            </Link>
                        </div>
                        <div className="p-7 w-full bg-secondary shadow-xl shadow-secondary/50 rounded-xl flex flex-col gap-10 justify-between">
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <p className="font-space text-white/30 text-xl">
                                        Developer Plan
                                    </p>
                                    <h3 className="font-bold text-4xl text-white">
                                        $10.99 lifetime
                                    </h3>
                                </div>
                                <hr />
                                <div className="flex flex-col gap-2 text-white font-space">
                                    <p className="font-bold font-space">
                                        Includes:
                                    </p>
                                    <div className="flex flex-row items-center gap-2">
                                        <Image src={checkLight} alt="check" />
                                        <p>Post unlimited app ideas</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                        <Image src={checkLight} alt="check" />
                                        <p>Upvote app ideas</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                        <Image src={checkLight} alt="check" />
                                        <p>Get contacted by developers</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-2 font-bold">
                                        <Image src={checkLight} alt="check" />
                                        <p>Post Ads</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-2 font-bold">
                                        <Image src={checkLight} alt="check" />
                                        <p>Contact other users</p>
                                    </div>
                                </div>
                            </div>
                            <Link
                                href={"https://app.sparktoapp.com/signup"}
                                className="btn btn-white font-space w-full"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="px-10 max-sm:px-5 w-full py-32 bg-secondary"
                id="contact"
            >
                <div className="w-full mx-auto max-w-[1280px]">
                    <div className="w-full flex flex-col items-center gap-5">
                        <h2 className="font-bold text-white text-5xl text-center">
                            Get in touch
                        </h2>
                        <p className="max-w-[445px] font-space text-center text-white/50">
                            Have any questions or feature ideas, please let me
                            know!
                        </p>
                    </div>
                    <form
                        action="https://submit-form.com/T7EZcoror"
                        className="flex flex-col w-full max-w-[550px] mx-auto"
                    >
                        <label
                            for="name"
                            className="mt-5 text-white font-space mb-1"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="input input-md font-space bg-opacity-20 text-white placeholder-white/50"
                            required=""
                        />
                        <label
                            for="email"
                            className="mt-5 text-white font-space mb-1"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="input input-md font-space bg-opacity-20 text-white placeholder-white/50"
                            required=""
                        />
                        <label
                            for="message"
                            className="mt-5 text-white font-space mb-1"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="input input-md min-h-40 font-space bg-opacity-20 text-white placeholder-white/50"
                            required=""
                        ></textarea>
                        <button type="submit" className="btn btn-white mt-5">
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <div
                id="newsletter"
                className="px-5 flex flex-col gap-5 items-center py-32 pb-16"
            >
                <div>
                    <h1 className="font-bold text-center text-5xl">
                        Join My Newsletter!
                    </h1>
                    <p className="font-space max-w-[450px] mx-auto mt-5 mb-7 opacity-75 text-center">
                        I talk about building and launching SaaS apps, and my
                        journey as a SaaS developer.
                    </p>
                </div>
                <div>
                    <iframe
                        src="https://embeds.beehiiv.com/20191b83-a539-43b5-ae0b-f147c87f27f1?slim=true"
                        data-test-id="beehiiv-embed"
                        height="52"
                        frameborder="0"
                        scrolling="no"
                        style={{
                            margin: 0,
                            borderRadius: 0,
                            backgroundColor: "transparent",
                        }}
                    ></iframe>
                    <p className="opacity-75 text-center mt-2 font-space">
                        Powered by{" "}
                        <a
                            className="btn btn-xs btn-accent"
                            href="https://www.beehiiv.com?via=Caleb-Gross"
                        >
                            Beehiiv
                        </a>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
