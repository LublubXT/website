import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Page() {
    return (
        <div>
            <Navbar />
            <div className="font-space w-full max-w-[780px] mx-auto flex flex-col gap-8 px-10 max-sm:px-5">
                <h1 className="font-poppins text-4xl font-black mb-5 mt-10">
                    Terms and Conditions
                </h1>
                <div>
                    <h2 className="font-poppins font-bold">1. Introduction</h2>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 ml-2 w-fit">
                        By using SparkToApp, you agree to be bound by these
                        terms and conditions.
                    </p>
                </div>
                <div>
                    <h2 className="font-poppins font-bold">2. User Accounts</h2>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 ml-2 w-fit">
                        You must create an account to use SparkToApp.
                    </p>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 ml-2 w-fit">
                        You are responsible for maintaining the security of your
                        account and password.
                    </p>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 ml-2 w-fit">
                        You agree not to share your account information with
                        others.
                    </p>
                </div>
                <div>
                    <h2 className="font-poppins font-bold">
                        3. Intellectual Property
                    </h2>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 ml-2 w-fit">
                        All content on SparkToApp, including ideas, designs, and
                        code, is protected by copyright and other intellectual
                        property laws.
                    </p>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 ml-2 w-fit">
                        You may not reproduce, modify, distribute, or otherwise
                        use any content from SparkToApp without our prior
                        written permission.
                    </p>
                </div>
                <div>
                    <h2 className="font-poppins font-bold">
                        4. User-Generated Content
                    </h2>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 ml-2 w-fit">
                        You may submit ideas to SparkToApp.
                    </p>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 ml-2 w-fit">
                        By submitting an idea, you grant us a non-exclusive,
                        worldwide, royalty-free license to use, reproduce,
                        modify, adapt, publish, and distribute your idea for any
                        purpose.
                    </p>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 ml-2 w-fit">
                        You represent and warrant that you have all necessary
                        rights to submit your idea and that it does not violate
                        any third-party rights.
                    </p>
                </div>
                <div>
                    <h2 className="font-poppins font-bold">
                        5. Developer Responsibilities
                    </h2>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 ml-2 w-fit">
                        Developers are responsible for their own actions and the
                        quality of their work.
                    </p>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 ml-2 w-fit">
                        Developers agree to comply with all applicable laws and
                        regulations.
                    </p>
                </div>
                <div>
                    <h2 className="font-poppins font-bold">
                        6. Payment and Refunds
                    </h2>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 ml-2 w-fit">
                        We may charge fees for certain services.
                    </p>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 ml-2 w-fit">
                        Our refund policy is subject to change.
                    </p>
                </div>
                <div>
                    <h2 className="font-poppins font-bold">
                        7. Disclaimer of Warranties
                    </h2>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 ml-2 w-fit">
                        SparkToApp is provided &quot;as is&quot; without
                        warranties of any kind.
                    </p>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 ml-2 w-fit">
                        We do not guarantee the success or profitability of any
                        app ideas.
                    </p>
                </div>
                <div>
                    <h2 className="font-poppins font-bold">
                        8. Limitation of Liability
                    </h2>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 ml-2 w-fit">
                        In no event shall we be liable for any indirect,
                        incidental, special, or consequential damages arising
                        out of or in connection with your use of SparkToApp.
                    </p>
                </div>
                <div>
                    <h2 className="font-poppins font-bold">9. Governing Law</h2>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 ml-2 w-fit">
                        These Terms and Conditions shall be governed by and
                        construed in accordance with the laws of the State of
                        Tennessee, USA.
                    </p>
                </div>
                <div>
                    <h2 className="font-poppins font-bold">
                        10. Changes to Terms
                    </h2>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 ml-2 w-fit">
                        We may update these Terms and Conditions from time to
                        time.
                    </p>
                    <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 ml-2 w-fit">
                        Your continued use of SparkToApp after changes are made
                        constitutes your acceptance of the updated terms.
                    </p>
                </div>
                <p className="rounded-lg hover:bg-base-200/75 duration-200 p-1 px-2 w-fit">
                    Your continued use of SparkToApp after changes are made
                    constitutes your acceptance of the updated terms.
                </p>
            </div>
            <Footer />
        </div>
    );
}
