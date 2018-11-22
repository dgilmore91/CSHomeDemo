class MoveResidentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            resident_id: 0,
            room_id: 0,
            residents: [],
            rooms: []
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onRoomSelect = this.onRoomSelect.bind(this);
        this.onResidentSelect = this.onResidentSelect.bind(this);
    }

    componentDidUpdate(prevProps){
        if (this.props.rooms !== prevProps.rooms){
            this.setState({rooms: this.props.rooms});
        }
        if (this.props.residents !== prevProps.residents){
            this.setState({residents: this.props.residents})
        }
    }

    generateRoomOptions() {
        return this.state.rooms.map((room) => {return <option key={room.id} value={room.id}>{room.name}</option>})
    }

    generateResidentOptions() {
        return this.state.residents.map((resident) => {
            return (
                <option key={resident.id} value={resident.id}>
                    {resident.first_name + ' ' + resident.last_name}
                </option>
            )
        });
    }

    onFormSubmit(e) {
        this.props.moveResident(this.state.resident_id, this.state.room_id);
        this.setState({resident_id: 0, room_id: 0});
        e.preventDefault();
    }

    onResidentSelect(e) {
        this.setState({resident_id: e.target.value})
    }

    onRoomSelect(e) {
        this.setState({room_id: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} >

                <select value={this.state.resident_id} onChange={this.onResidentSelect}>
                    <option value={0}>Select a resident</option>
                    {this.generateResidentOptions()}
                </select>

                <select value={this.state.room_id} onChange={this.onRoomSelect}>
                    <option value={0}>Select a room</option>
                    {this.generateRoomOptions()}
                </select>

                <button>Move</button>
            </form>
        )
    }

}