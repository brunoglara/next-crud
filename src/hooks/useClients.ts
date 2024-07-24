import ClientCollection from "@/backend/dbFirebase/ClientCollection";
import { useLoading } from "@/context/LoadingContext";
import { useTypeForm } from "@/context/typeFormContext";
import Client from "@/core/Client";
import { useEffect, useState } from "react";

export default function useClients() {
    // State to hold the type of the form (table or form)
	// State to hold the selected client
	const [client, setClient] = useState<Client>(Client.emptyClient());
	const [clients, setClients] = useState<Client[]>([]);
	const {setLoading} = useLoading()

    const { showForm, showTable} = useTypeForm()

	const dbFirebase = new ClientCollection();

	useEffect(() => {
		getClientsFromDB();
	}, []);

	async function getClientsFromDB() {
		setLoading(true);

		const dbClients = await dbFirebase.getAllClient();
		setClients(dbClients);

		showTable();

		setLoading(false);
	}
	/**
	 * Event handler for when a client is selected to edit.
	 */
	function handleEditClientButton(client: Client) {
		// Set the selected client
		setClient(client);
		// Switch the form type to "form"
		showForm();
	}

	/**
	 * Event handler for when a client is deleted.
	 */
	async function saveOrEditClient(client: Client) {
		await dbFirebase.saveOrUpdateClient(client);
		getClientsFromDB();
	}

	async function deleteClient(client: Client) {
		await dbFirebase.deleteClient(client);
		getClientsFromDB();
	}

	/**
	 * Event handler for when a new client is going to be added.
	 */
	function handleNewClientButton() {
		setClient(Client.emptyClient());
		showForm();
	}
    return {
        saveOrEditClient,
        handleNewClientButton,
        deleteClient,
        handleEditClientButton,
        client,
        clients,

    }
}