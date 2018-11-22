class RoomList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            rooms: [],
            selectedRoom: 0
        };
    }

    componentDidUpdate(prevProps){
        if (this.props.rooms !== prevProps.rooms){
            this.setState({rooms: this.props.rooms});
        }

        if (this.props.selectedRoom !== prevProps.selectedRoom){
            this.setState({selectedRoom: this.props.selectedRoom})
        }
    }

    render(){
        return (
            <div className="list roomlist">
                {
                    this.state.rooms.map((room) => {
                        return (
                            <div  key={room.id} onClick={(e) => this.props.onRoomSelected(room.id)} >
                                <Room room={room} isSelected={this.state.selectedRoom === room.id} />
                            </div>
                        )
                    })
                }
            </div>
        )

    }
}

