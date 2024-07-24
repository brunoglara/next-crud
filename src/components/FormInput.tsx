interface FormInputProps {
    text:string;
    type?:"text" | "number"
    value: any
    readOnly?: boolean
    onChange?: (value: any) => void
    className?: string
}

export default function FormInput(props: FormInputProps) {
    return (
        <div className={`
        flex flex-col ${props.className}`}>
            <label className={`mb-2`}>
                {props.text}
            </label>
            <input 
                value = {props.value} 
                type = {props.type ?? "text"} 
                readOnly = {props.readOnly ?? false}
                onChange={e => props.onChange?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100 px-4 py-2
                    ${props.readOnly ? '' : 'focus:bg-white'}
                    `}
            />
        </div>
    );
}