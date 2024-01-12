import { Input } from "@material-tailwind/react";

type DefaultInputProps = {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    name: string;
    placeholder: string;
}


export default function DefaultInput({ label, value, onChange, type, name, placeholder}: DefaultInputProps) {
    return (
        <Input
        variant="outlined"
        type={type}
        name={name}
        label={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}/>
    );
}