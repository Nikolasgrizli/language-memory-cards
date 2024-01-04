export default function ListItem(props){
    return (
        <li>
            <p>
            <strong>{props.title} </strong>
            <span className="description">{props.description}</span>
            </p>
        </li>
    )
}