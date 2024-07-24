import Client from "@/core/Client";
import { EditIcon, TrashIcon } from "./Icons";

interface TableProps {
	clients: Client[];
	clientSelected?: (client: Client) => void;
	clientDeleted?: (client: Client) => void;
}

export default function Table(props: TableProps) {
	const showActions = props.clientSelected && props.clientDeleted;

	function renderHead() {
		return (
			<tr>
				<th className={`text-left p-4`}>Code</th>
				<th className={`text-left p-4`}>Name</th>
				<th className={`text-left p-4`}>Age</th>
				{showActions ? <th className={`p-4`}>Actions</th> : false}
			</tr>
		);
	}

	function renderActions(client: Client) {
		return (
			<td className={`flex justify-center`}>

				{/* Edit Button */}
                <button
                    onClick={() => props.clientSelected?.(client)}
					className={`
                            flex justify-center items-center
                            text-green-600 rounded-full p-2 m-1
                            hover:bg-purple-50
                    `}
				>
					{EditIcon}
				</button>
                
                {/* Delete Button */}
				<button
                    onClick={() => props.clientDeleted?.(client)}
					className={`
                            flex justify-center items-center
                            text-red-600 rounded-full p-2 m-1
                            hover:bg-purple-50
                    `}
				>
					{TrashIcon}
				</button>
			</td>
		);
	}

	function renderData() {
		return props.clients?.map((client, index) => {
			return (
				<tr
					key={client.id()}
					className={`
                        ${
							index % 2 === 0
								? "bg-gradient-to-r from-purple-200 to-purple-300"
								: "bg-gradient-to-r from-purple-100 to-purple-200"
						}`}
				>
					<td className={`text-left p-4`}>{client.id()}</td>
					<td className={`text-left p-4`}>{client.name()}</td>
					<td className={`text-left p-4`}>{client.age()}</td>
					{showActions ? renderActions(client) : false}
				</tr>
			);
		});
	}

	return (
		<table className={`w-full rounded-xl overflow-hidden`}>
			<thead
				className={`bg-gradient-to-r from-purple-500 to-purple-700
                text-gray-100`}
			>
				{renderHead()}
			</thead>
			<tbody>{renderData()}</tbody>
		</table>
	);
}
