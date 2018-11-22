const Room = (props) => {

    let className = "listitem room";

    if(props.isSelected) { className = className + " selected" }

    return (
        <div className={className}>
            <p>{props.room.name}</p>
        </div>
    )
};