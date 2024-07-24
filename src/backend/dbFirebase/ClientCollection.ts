import Client from "@/core/Client";
import { db } from "../configFirebase";
import { addDoc, collection, deleteDoc, doc, DocumentData, DocumentSnapshot, getDoc, getDocs, setDoc } from "firebase/firestore";

interface FirebaseClientData {
    name: string;
    age: number;
    id: string | null;
}

const clientCollection = 'clients'

export default class ClientCollection {

    async saveOrUpdateClient(client:Client): Promise<Client> {
        let clientRef;
        const clientData = this.toFirebase(client)
    
        if (client.id()) {
            // Update
            clientRef = doc(db, 'clients', client.id() as string);
            await setDoc(clientRef, clientData);
        } else {
            // Add
            clientRef = await addDoc(collection(db, 'clients'), clientData);
            client.setId(clientRef.id);
        }
    
        const docSnap = await getDoc(clientRef);
    
        if (!docSnap.exists()) {
            throw new Error('Failed to retrieve the saved or updated client.');
        }
    
        return this.fromFirebase(docSnap)
    }

    async deleteClient(client: Client): Promise<void> {
        return await deleteDoc(doc(db, clientCollection, client.id() as string))
    }

    async getAllClient() : Promise<Client[]> {
        const querySnapshot = await getDocs(collection(db, 'clients'));
        const clients: Client[] = [];

        querySnapshot.docs.map(doc => {
            clients.push(this.fromFirebase(doc))
    })

        return clients;
    }

    private toFirebase(client: Client) {
        return {
            name: client.name(),
            age: client.age(),
            id: client.id(),
        };
    }

    private fromFirebase(doc: DocumentSnapshot<DocumentData>): Client {
        const data = doc.data() as FirebaseClientData;
        return new Client(data.name, data.age, doc.id);
    }

}