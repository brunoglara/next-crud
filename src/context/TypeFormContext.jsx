import { createContext, useState, useContext } from "react";

const TypeFormContext = createContext();

export function TypeFormProvider({ children }) {
	// State to hold the type of the form (table or form)
	const [type, setType] = useState("table");

	const showTable = () => {
		setType("table");
	};

	const showForm = () => {
		setType("form");
	};

	return (
		<TypeFormContext.Provider
			value={{
				typeForm: type === "form",
				typeTable: type === "table",
				showTable,
				showForm,
			}}
		>
			{children}
		</TypeFormContext.Provider>
	);
}

export function useTypeForm() {
	return useContext(TypeFormContext);
}
