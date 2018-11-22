class ResidentList extends React.Component {

    render() {
        return (
            <div className="list residentlist">
                {
                    this.props.residents.map((resident) => {
                        return (
                            <Resident key={resident.id}
                                      resident={resident}
                                      rooms={this.props.rooms}
                                      deleteResident={this.props.deleteResident}
                                      moveResident={this.props.moveResident}/>
                        )
                    })
                }

            </div>
        );
    }
}



