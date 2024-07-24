import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LoadingProvider } from "../context/LoadingContext";
import { TypeFormProvider } from "../context/typeFormContext";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<LoadingProvider>
			<TypeFormProvider>
				<Component {...pageProps} />
			</TypeFormProvider>
		</LoadingProvider>
	);
}
