interface ButtonProps {
    children: React.ReactNode
    bgcolor?: 'green' | 'blue' | 'gray'
    className?: string
    onClick?: () => void
}

export default function Button(props: ButtonProps) {
    const color = props.bgcolor ?? 'gray'
    return (
        <button 
            className={`
                bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-
                bg-gradient-to-r from-${color}-400 to-${color}-700
                text-white px-4 py-2 rounded-lg ${props.className}
            `}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}