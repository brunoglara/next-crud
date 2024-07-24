import { useLoading } from "@/context/LoadingContext";
import Title from "./Title"
import Loading from "./Loading";

interface LayoutProps {
    title: string,
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
    const {loading} = useLoading()
    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800 rounded-md`
        }>
            <Title title={props.title} />
            {
                loading ? 
                <Loading /> 
                : (
                <div className={`p-6`}>
                    {props.children}
                </div>
                )
            }
        </div>
    );
}

