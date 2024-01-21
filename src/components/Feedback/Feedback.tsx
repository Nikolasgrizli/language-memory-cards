import DefaultInput from "../DefaultInput/DefaultInput";
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import Button from "../Button/Button";
type FeedbackProps = {
    message: string;
}

export default function Feedback({ message }: FeedbackProps) {
    // const [name, setName] = useState('');
    // const [hasError, setHasError] = useState(false);
    // const [reason, setReason] = useState('');

    const [form, setForm] = useState({
        name: '',
        hasError: false,
        reason: 'error'
    })


    function HandleNameChange (e){
        // setName(e.target.value);
        // setHasError(e.target.value.trim().length === 0)

        setForm((state) => ({
            ...state,
            name: e.target.value,
            hasError: e.target.value.trim().length === 0
        }))

    }

    return (
        <div className="container">
            <p>{message}</p>
            <form action="">
                <h3 className="text-3xl">Feedback form</h3>
                <div className="mb-4">
                    <DefaultInput
                    label="Name"
                    value={form.name}
                    onChange={HandleNameChange}
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    error={form.hasError}
                    />
                </div>
                <div className="mb-4">
                    <Select label="Reason feedback" placeholder="Select" onChange={(e)=> setForm((state) => ({...state, reason: e})) }>
                        <Option value="error">Reason 1 - that's you</Option>
                        <Option value="help">Reason 2 - that's me</Option>
                        <Option value="change">Reason 3 - that are all your friends</Option>
                    </Select>
                </div>
                <div className={'mb-4 ' + form.hasError ? 'cursor-not-allowed' : ''}>
                    <Button
                    className={'w-full'}
                    isActive={!form.hasError}
                    onClick={() => {}}
                    disabled={form.hasError}
                    >
                        Feedback
                    </Button>
                </div>
            </form>

            <pre>
               {JSON.stringify(form,null,2)}
            </pre>
        </div>
    );
}