import Button from "./Button/Button.tsx"
import { useState } from "react"
import { DifferencesType } from "../types.ts"
import { differences } from "../data.ts"

export default function SectionTabs() {
    const [tabs, setTabs] = useState<keyof DifferencesType | null>(null);

    const textBelow = tabs ? differences[tabs as keyof DifferencesType] : 'Just press the buttons';

    function handleClick(type: keyof DifferencesType | null) {
        setTabs(type);
    }


    return (
        <section>
            <div className="container">

                <Button onClick={() => handleClick('way')} isActive={tabs === 'way'}>
                way
                </Button>
                <Button onClick={() => handleClick('easy')} isActive={tabs === 'easy'}>
                easy
                </Button>
                <Button onClick={() => handleClick('program')} isActive={tabs === 'program'}>
                program
                </Button>

                <p>{textBelow}</p>

            </div>
        </section>
    )
}