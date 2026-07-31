type FormDataType = {
    name: string;
    email: string;
    password: string;
};

const Form = () => {
    const formAction = (formData: FormData) => {
        const userData: FormDataType = {
            name: (formData.get("name") as string) || "",
            email: (formData.get("email") as string) || "",
            password: (formData.get("password") as string) || "",
        };
        console.log(userData);
    };

    return (
        // Center the card on the page
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">

            {/* Beautiful bordered card container */}
            <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Create an Account
                </h2>

                <form action={formAction} className="flex flex-col gap-4">
                    {/* Name Field */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="••••••••"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-2 rounded-lg bg-black py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Form;
