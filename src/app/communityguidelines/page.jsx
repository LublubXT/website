import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function CommunityGuidelines() {
    return (
        <div>
            <Navbar />
            <div className="font-space w-full max-w-[780px] mx-auto flex flex-col gap-8 px-10 max-sm:px-5">
                <h1 className="font-poppins text-4xl font-black mb-5 mt-10">
                    SparkToApp Community Guidelines
                </h1>
                <div>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 -ml-2 w-fit">
                        Welcome to the SparkToApp community!
                    </p>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 -ml-2 w-fit">
                        We aim to create a safe, inclusive, and respectful
                        environment for everyone. Please adhere to the following
                        guidelines:
                    </p>
                </div>
                <div>
                    <h2 className="font-poppins font-bold">
                        Respect for Others:
                    </h2>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 -ml-2 w-fit">
                        Be polite and considerate: Treat everyone with respect,
                        regardless of their background, opinions, or experience
                        level.
                    </p>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 -ml-2 w-fit">
                        Avoid harassment: Do not engage in any form of
                        harassment, including but not limited to: bullying,
                        discrimination, threats, or personal attacks.
                    </p>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 -ml-2 w-fit">
                        Respect privacy: Do not share personal information about
                        others without their consent.
                    </p>
                </div>
                <div>
                    <h2 className="font-poppins font-bold">
                        Appropriate Content:
                    </h2>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 -ml-2 w-fit">
                        Keep it relevant: Posts and comments should be related
                        to app development, idea sharing, or collaboration.
                    </p>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 -ml-2 w-fit">
                        Avoid offensive content: Refrain from posting content
                        that is offensive, hateful, or discriminatory.
                    </p>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 -ml-2 w-fit">
                        Respect intellectual property: Do not share or
                        distribute copyrighted material without proper
                        permission.
                    </p>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 -ml-2 w-fit">
                        No inappropriate or sexual content: This includes ideas,
                        ads, or any other form of content that is sexually
                        suggestive or inappropriate.
                    </p>
                </div>
                <div>
                    <h2 className="font-poppins font-bold">
                        Quality Contributions:
                    </h2>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 -ml-2 w-fit">
                        Be helpful: Share your knowledge and experience to help
                        others.
                    </p>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 -ml-2 w-fit">
                        Provide constructive feedback: Offer thoughtful and
                        helpful feedback on others&apos; ideas.
                    </p>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 -ml-2 w-fit">
                        Avoid spamming: Refrain from posting excessive or
                        irrelevant content.
                    </p>
                </div>
                <div>
                    <h2 className="font-poppins font-bold">
                        Reporting Issues:
                    </h2>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 -ml-2 w-fit">
                        Report violations: If you encounter any violations of
                        these guidelines, please report them to our moderation
                        team.
                    </p>
                </div>
                <div>
                    <h2 className="font-poppins font-bold">Enforcement:</h2>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 -ml-2 w-fit">
                        Consequences: Violations of these guidelines may result
                        in warnings, temporary bans, or permanent removal from
                        the community.
                    </p>
                </div>

                <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 -ml-2 w-fit">
                    By using SparkToApp, you agree to abide by these community
                    guidelines.
                </p>
                <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 -ml-2 w-fit">
                    Thank you for being a part of our community!
                </p>
            </div>
            <Footer />
        </div>
    );
}
