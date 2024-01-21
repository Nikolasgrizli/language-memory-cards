import { Input } from "@material-tailwind/react";

type DefaultInputProps =  {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    name: string;
    placeholder: string;
    error: boolean
}


export default function DefaultInput({   ...props}: DefaultInputProps) {
    return (
        <Input
        variant="outlined"
        {...props}
        />
    );
}