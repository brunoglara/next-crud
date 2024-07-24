interface LoadingProps {
    
}

export default function Loading(props: LoadingProps) {
    return (
        <div className="flex items-center justify-center">
            <img src="/spinner.gif" alt="Loading..." className="w-24 h-24" />
        </div>
    );
};