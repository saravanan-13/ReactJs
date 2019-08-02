import React, {Component} from 'react';
import axios from "axios";

export default class DisplayUser extends Component {

    constructor(props) {
        super(props);
        this.state = {user: {}};
    }

    componentDidMount() {
            const {id} = this.props.match.params;
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => this.setState({user: res.data}));
    }

    render() {
        return (
            <div className="card" style={this.props.style}>
                <h1>{this.state.user.name}</h1>
                <div className="card-body">
                    <h5 className="card-title">Id : {this.state.user.id}</h5>
                    <p className="card-text">Phone : {this.state.user.phone}</p>
                    <p className="card-text">Email : {this.state.user.email}</p>
                    <p className="card-text">Website : {this.state.user.website}</p>
                    <div>
                        <h5>Address</h5>
                        {
                            this.state.user.address ?
                            <p className="card-text">Suite : {this.state.user.address.suite}</p> : <p> No Address</p>
                        }
                        {this.state.user.address ?
                            <p className="card-text">Street : {this.state.user.address.street}</p> : <p> No Address</p>}
                        {this.state.user.address ? <p className="card-text">City : {this.state.user.address.city}</p> :
                            <p> No Address</p>}
                        {this.state.user.address ?
                            <p className="card-text">Zipcode : {this.state.user.address.zipcode}</p> :
                            <p> No Address</p>}
                    </div>

                </div>
            </div>
        );
    }
}
