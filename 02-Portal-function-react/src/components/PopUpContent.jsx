import { createPortal } from 'react-dom'

const PopUpContent = ({ copiedValue }) => {

    const styles = {
        backgroundColor: "red",
        borderRadius: "20px",
        padding: "10px",
    }

    return createPortal(
        <section>
            <div>{copiedValue && <h3 style={styles}>Text Copied to Clipboard</h3>}</div>
        </section>,
        document.querySelector("#popup-content")
    )

}

export default PopUpContent
