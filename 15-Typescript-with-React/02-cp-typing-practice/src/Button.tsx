
type ButtonProps = {
    label: string;
    onClick(): void;
    disabled: boolean;
};

const Button = (props: ButtonProps) => {
    return (
        <div>
            <button onClick={props.onClick} disabled={props.disabled}>{props.label}</button>
        </div>
    )
}

export default Button
