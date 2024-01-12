import './Button.css';
import {Button as Btn} from "@material-tailwind/react";

export default function Button({children, btnClick, isActive, className}) {
    return <Btn onClick={btnClick} className={isActive ? 'btn btn_active '+className : 'btn '+className}>{children}</Btn>
}