import { useRef } from "react";

export const FocusInput = () => {
  const inputRef = useRef(null);

  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Click on the Button to focus this input"
      />
      <button onClick={focusInput}>Click Here</button>
    </div>
  );
};
