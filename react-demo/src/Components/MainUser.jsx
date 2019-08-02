import React, {Component} from 'react';
import User from "./User";
import axios from 'axios';
// import DisplayUser from "./DisplayUser";

export default class MainUser extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => this.setState({users: res.data}));
    }

    render() {

        return (
            <div className="MainUser">
                <div className="row">
                    {
                        this.state.users.map((user, index) =>
                            <div className="col-md-4" key={index}>
                                <User key={index} name={user.name} email={user.email} phone={user.phone}
                                      website={user.website} allDetails={user}/>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}