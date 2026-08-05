import { useFormStatus } from "react-dom";

const FormButton = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg shadow transition duration-200 ease-in-out cursor-pointer disabled:cursor-not-allowed text-center"
        >
            {pending ? "Submitting..." : "Submit"}
        </button>
    );
};

export default FormButton;
