class AddResidentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            rooms: [],
            room_id: 0
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onRoomSelect = this.onRoomSelect.bind(this);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
    }

    componentDidUpdate(prevProps){
        if (this.props.rooms !== prevProps.rooms){
            this.setState({rooms: this.props.rooms});
        }
    }

    generateRoomOptions() {
        return this.state.rooms.map((room) => {return <option key={room.id} value={room.id}>{room.name}</option>})
    }

    onFormSubmit(e) {
        this.props.addResident(this.state.first_name, this.state.last_name, this.state.room_id);
        this.setState({first_name: "", last_name: "", room_id: 0});
        e.preventDefault();
    }

    onFirstNameChange(e) {
        this.setState({first_name: e.target.value})
    }

    onLastNameChange(e) {
        this.setState({last_name: e.target.value})
    }

    onRoomSelect(e) {
        this.setState({room_id: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} >
                <input
                    placeholder="First Name"
                    type="text"
                    value={this.state.first_name}
                    onChange={this.onFirstNameChange}
                />
                <input
                    placeholder="Last Name"
                    type="text"
                    value={this.state.last_name}
                    onChange={this.onLastNameChange}
                />

                <select value={this.state.room_id} onChange={this.onRoomSelect}>
                    <option value={0}>Select a room</option>
                    {this.generateRoomOptions()}
                </select>

                <button>Add Resident</button>
            </form>
        )
    }

}