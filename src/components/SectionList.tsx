import ListItem from "./ListItem"

import { ways} from '../data.ts'

export default function SectionList() {
  return (
    <section>
        <h3>Target of this trainee project:</h3>
        <ul>

        {ways.map((way, index) => <ListItem key={index} {...way}></ListItem>)}

        </ul>
    </section>
    )
}