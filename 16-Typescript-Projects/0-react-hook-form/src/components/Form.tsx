import { useForm, type SubmitHandler } from "react-hook-form"

interface FormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<FormData>()

    const passwordValue = watch("password");

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name"
                        {...register('name', { required: "Name is required!" })}
                    />
                    {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email"
                        {...register("email", {
                            required: "Email address is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email format",
                            },
                        })}
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters",
                            },
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message: "Password must contain at least one letter and one number",
                            },
                        })}
                    />
                    {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        {...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: (value) =>
                                value === passwordValue || "The passwords do not match",
                        })}
                    />
                    {errors.confirmPassword && (
                        <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
                    )}
                </div>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Form"}
                </button>
            </form>
        </div>
    )
}

export default Form
