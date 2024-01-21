import { useState, useRef } from "react"

export default function CheckRef(){
    const input = useRef();
    const [show, setShow] = useState(false);

    function handleKeyDown(e){
        if(e.key === 'Enter'){
            setShow(true)
        }
    }

    return (
        <div className="container">
            <h3 className="text-3xl text-green-300">Input value {show && input.current.value}</h3>
            <input
            ref={input}
            onKeyDown={handleKeyDown}
            type="text" />
        </div>
    )
}