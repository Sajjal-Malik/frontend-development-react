import FormButton from "./FormButton";

function Form() {
    const myAction = async (formData: FormData) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const newPost = {
            title: formData.get("name") as string,
            email: formData.get("email") as string,
        };

        console.log(newPost);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <form action={myAction} className="space-y-5">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                        Name:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        type="text"
                        id="name"
                        name="name"
                        required
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                        Email:
                    </label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                </div>

                <FormButton />
            </form>
        </div>
    );
}

export default Form;
