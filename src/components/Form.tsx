import { useState } from "react";
import FormInput from "./FormInput";
import Client from "@/core/Client";
import Button from "./Button";

interface FormProps {
    client: Client
    cancelForm? : () => void
    clientChanged? : (client: Client) => void
}

export default function Form(props: FormProps) {
    const [name, setName] = useState(props.client?.name() ?? '')
    const [age, setAge] = useState(props.client?.age() ?? 0)

    const id = props.client?.id()

    return (
        <div>
            {
                id ? (
                    <FormInput 
                        text="Code" 
                        value={id} 
                        readOnly
                        className="mb-4"
                    />
                ) : false
            }
            <FormInput 
                text="Name" 
                value={name} 
                onChange={setName}
                className="mb-4"
            />
            <FormInput 
                text="Age" 
                type="number" 
                value={age} 
                onChange={setAge} 
            />

            <div className={`flex justify-end mt-7`}>
                <Button className="mr-2" onClick={props.cancelForm}>Cancel</Button>
                <Button 
                    bgcolor="blue" 
                    onClick={() => props.clientChanged?.(new Client(name, age, id))}>
                        {id ? 'Update' : 'Save'}
                </Button>
            </div>
        </div>
    );
}