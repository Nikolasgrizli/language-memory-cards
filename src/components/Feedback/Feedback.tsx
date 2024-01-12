import DefaultInput from "../DefaultInput/DefaultInput";
import { Select, Option } from "@material-tailwind/react";
import Button from "../Button/Button";
type FeedbackProps = {
    message: string;
}

export default function Feedback({ message }: FeedbackProps) {
    return (
        <div className="container">
            <p>{message}</p>
            <form action="">
                <h3 className="text-3xl">Feedback form</h3>
                <div className="mb-4">
                    <DefaultInput  label="Name" value="" onChange={() => { }} type="text" name="name" placeholder="Enter your name" />
                </div>
                <div className="mb-4">
                    <Select label="Reason feedback" placeholder="Select">
                        <Option>Reason 1 - that's you</Option>
                        <Option>Reason 2 - that's me</Option>
                        <Option>Reason 3 - that are all your friends</Option>
                    </Select>
                </div>
                <div className="mb-4">
                    <Button className={'w-full'} isActive="" btnClick={() => {}}>
                            Feedback
                        </Button>
                </div>
            </form>
        </div>
    );
}