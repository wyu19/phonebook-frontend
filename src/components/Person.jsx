
const Person = (props) => {
    const p = props.person
    return (
        <div>
            <p>
                {p.name} {p.number} <button onClick={props.delete}>Delete</button> 
            </p> 
        </div>
    )
}


export default Person