class DataView extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            residents: [],
            rooms: [],
            selectedRoom: 0
        };

        this.fetchResidentList = this.fetchResidentList.bind(this);
        this.fetchRoomList = this.fetchRoomList.bind(this);
        this.fetchResidentsForRoom = this.fetchResidentsForRoom.bind(this);
        this.addRoom = this.addRoom.bind(this);
        this.addResident = this.addResident.bind(this);
        this.moveResident = this.moveResident.bind(this);
        this.deleteResident = this.deleteResident.bind(this);
    }

    componentDidMount(){
        this.fetchRoomList();
        this.fetchResidentList();
    }

    fetchRoomList(){
        fetch('/api/room.json')
            .then((response) => {return response.json()})
            .then((data) => {this.setState({ rooms: data }) });
    }

    fetchResidentList(){
        if(this.state.selectedRoom === 0){
            fetch('/api/resident.json')
                .then((response) => {return response.json()})
                .then((data) => {this.setState({ all_residents: data, residents: data }) });
        }else{
            this.fetchResidentsForRoom(this.state.selectedRoom)
        }

    }

    fetchResidentsForRoom(id){
        this.setState({selectedRoom: id});
        fetch('/api/room/' + id + '/residents')
            .then((response) => {return response.json()})
            .then((data) => {this.setState({residents: data })});
    }

    addResident(first_name, last_name, room_id){
        let body = JSON.stringify({resident: {first_name: first_name, last_name: last_name, room_id: room_id} });

        fetch('http://localhost:3000/api/resident', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        })
            .then((response) => { return response.json()} )
            .then(()=>{ this.fetchResidentList() })
    }

    moveResident(id, room_id){
        let body = JSON.stringify({resident: {room_id: room_id} });

        fetch('http://localhost:3000/api/resident/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        })
            .then((response) => { return response.json()} )
            .then(()=>{ this.fetchResidentList() })
    }

    deleteResident(id){
        fetch('http://localhost:3000/api/resident/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => { return response.json()} )
            .then(()=>{ this.fetchResidentList() })
    }

    addRoom(name){
        let body = JSON.stringify({room: {name: name} });

        fetch('http://localhost:3000/api/room', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        })
            .then((response) => { return response.json()} )
            .then(()=>{ this.fetchRoomList() })
    }

    render(){
        return (
            <div className="dataview">
                <div className="formcontainer">
                    <AddResidentForm
                        addResident={this.addResident}
                        rooms={this.state.rooms}/>
                    <MoveResidentForm
                        moveResident={this.moveResident}
                        rooms={this.state.rooms}
                        residents={this.state.all_residents}/>
                    <AddRoomForm addRoom={this.addRoom}/>
                </div>
                <div className="listcontainer">
                    <RoomList
                        rooms={this.state.rooms}
                        selectedRoom={this.state.selectedRoom}
                        onRoomSelected={this.fetchResidentsForRoom}/>
                    <ResidentList
                        residents={this.state.residents}
                        rooms={this.state.rooms}
                        moveResident={this.moveResident}
                        deleteResident={this.deleteResident} />
                </div>
            </div>
        )
    }
}