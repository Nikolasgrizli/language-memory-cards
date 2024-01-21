import ListItem from "../ListItem.tsx"
import {styled} from 'styled-components'
import { ways} from '../../data.ts'

const SectionsContainer = styled.section`
    color: green;
`

export default function SectionList() {
  return (
    <SectionsContainer>
      <div className="container">
        <h3>Target of this trainee project:</h3>
        <ul>

        {ways.map((way, index) => <ListItem key={index} {...way}></ListItem>)}

        </ul>

      </div>
    </SectionsContainer>
    )
}