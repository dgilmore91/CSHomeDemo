const Resident = (props) =>  {

    let className = "listitem resident";

    if(props.isSelected) { className = className + " selected" }

    return (
            <div className={className}>
                <p>{props.resident.first_name} {props.resident.last_name}</p>
                <button onClick={() => props.deleteResident(props.resident.id)}>Delete</button>
            </div>
    );
};