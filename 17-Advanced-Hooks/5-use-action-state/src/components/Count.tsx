import { useActionState } from "react";

async function increment(previousState: number, formData: FormData) {
    console.log(formData.get("name"));
    return previousState + 1;
}

const Count = () => {

    const [state, formAction] = useActionState(increment, 0);

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-slate-900 text-slate-100 rounded-2xl shadow-2xl border border-slate-800 transition-all duration-300">
            <form className="flex flex-col gap-5">

                <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block">
                        Total Increments
                    </span>
                    <h1 className="text-5xl font-extrabold text-teal-400 tabular-nums tracking-tight">
                        {state}
                    </h1>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">
                        Visitor Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Please enter your name"
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    />
                </div>

                <button
                    formAction={formAction}
                    className="w-full mt-2 bg-teal-400 hover:bg-teal-300 active:bg-teal-500 text-slate-950 font-bold py-3 px-4 rounded-xl shadow-lg shadow-teal-500/10 transform active:scale-[0.99] transition-all duration-150 cursor-pointer text-center outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                    Increment
                </button>

            </form>
        </div>
    );
};

export default Count;