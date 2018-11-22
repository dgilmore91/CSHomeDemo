const AddRoomForm = (props) => {

    let formFields = {};

    return (
        <form
            onSubmit={ (e) => {
                e.preventDefault();
                props.addRoom(formFields.name.value);
                e.target.reset();
            }}
        >
            <input ref={input => formFields.name = input} placeholder='Room Name'/>
            <button>Add Room</button>
        </form>
    )
};