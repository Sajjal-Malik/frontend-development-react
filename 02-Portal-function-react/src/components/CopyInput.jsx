import { useState } from "react"
import PopUpContent from "./PopUpContent";

const CopyInput = () => {

    const [inputValue, setInputValue] = useState('');
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(inputValue)
            .then(() => {
                setCopied(true);
                console.log("Text Copied successfully to Clipboard");
                setTimeout(() => setCopied(false), 3000); // 3 seconds timeout
            })
            .catch((err) => {
                console.log("Copying Text failed due to: ", err);
            })
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button onClick={handleCopy}>Copy Value</button>
            <PopUpContent copiedValue={copied} />
        </div>
    )
}

export default CopyInput
