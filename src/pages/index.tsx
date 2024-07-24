import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/Client";
import Button from "@/components/Button";
import Form from "@/components/Form";
import { useEffect, useState } from "react";
import ClientCollection from "@/backend/dbFirebase/ClientCollection";
import { useLoading } from "@/context/LoadingContext";
import useClients from "@/hooks/useClients";
import { useTypeForm } from "@/context/typeFormContext";

const inter = Inter({ subsets: ["latin"] });

/**
 * Home page component
 *
 * Renders a table of clients and a form to add new clients.
 * Switches between table and form view based on the typeForm state.
 */
export default function Home() {
	// Personal Client Hook
	const {
		saveOrEditClient,
		deleteClient,
		handleEditClientButton,
		handleNewClientButton,
		clients,
		client,
	} = useClients();

	const { typeForm, typeTable, showTable } = useTypeForm();

	return (
		<div
			className={`
        flex  h-screen
        justify-center items-center
        bg-gradient-to-tr from-blue-500 to-purple-500 text-white`}
		>
			<Layout title="Register">
				{typeTable && (
					// Table view
					<>
						{/* Add button to switch to form view */}
						<div className={`flex justify-end`}>
							<Button
								className="mb-4"
								bgcolor="green"
								onClick={handleNewClientButton}
							>
								New Client
							</Button>
						</div>
						{/* Table of clients */}
						<Table
							clients={clients}
							clientSelected={handleEditClientButton}
							clientDeleted={deleteClient}
						/>
					</>
				)}
				{typeForm && (
					// Form view
					<Form
						clientChanged={saveOrEditClient}
						cancelForm={() => showTable()}
						client={client}
					/>
				)}
			</Layout>
		</div>
	);
}
