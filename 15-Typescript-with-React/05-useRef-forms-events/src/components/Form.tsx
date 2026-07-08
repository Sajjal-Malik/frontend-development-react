import { useRef, useState } from "react"

type formData = {
    userName: string;
    email: string;
    password: string;
};

const Form = () => {
    const [submittedData, setSubmittedData] = useState<formData>({
        userName: '',
        email: '',
        password: ''
    });

    const userName = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);


    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        const nameVal = userName.current!.value;
        const emailVal = email.current!.value;
        const passwordVal = password.current!.value;

        setSubmittedData({
            userName: nameVal,
            email: emailVal,
            password: passwordVal,
        });

        console.log(nameVal);
        console.log(emailVal);
        console.log(passwordVal);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" id="" placeholder="Enter your name" ref={userName} />
                <input type="email" name="" id="" placeholder="Enter your email" ref={email} />
                <input type="password" name="" id="" placeholder="Enter your password" ref={password} />
                <button type="submit">Submit</button>
            </form>

            <section>
                <h2>User's Name is: {submittedData.userName}</h2>
                <h2>User's Email is: {submittedData.email}</h2>
                <h2>User's password is: {submittedData.password}</h2>
            </section>
        </div>
    )
}

export default Form
