import './Button.css';
import {Button as Btn} from "@material-tailwind/react";

export default function Button({children, isActive, className, ...props}) {
    // It is normal way to check an existing property?
    // const propsics = {...props};
    // const hasDisabled = propsics.hasOwnProperty('disabled');
    // if(hasDisabled ){
    //     if(propsics['disabled'] === true){
    //         className += ' fffdd'
    //         console.log(className)
    //     } else {
    //         className.replace(' fffdd', '')
    //     }
    // }
    return <Btn

    {...props}
    className={isActive ? 'btn btn_active '+className : 'btn '+className}>
        {children}
        </Btn>
}