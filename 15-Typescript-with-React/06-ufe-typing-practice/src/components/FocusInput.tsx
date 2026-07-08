import { useRef } from "react";

const FocusInput = () => {

    const inputField = useRef<HTMLInputElement>(null);
    const handleFocus = () => {
        inputField.current?.focus();
    }
    return (
        <div>
            <form>
                <input type="text" name="" id="" placeholder="Click button to focus..." ref={inputField} />
                <button type="button" onClick={handleFocus}>Focus</button>
            </form>


        </div>
    )
}

export default FocusInput;
