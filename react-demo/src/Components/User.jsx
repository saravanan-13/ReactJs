import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class User extends Component {

    render() {
        return (
           <div>
               <div className="card" style={{width: 18 + 'rem'}}>
                   <div className="card-body">
                       <h5 className="card-title">{this.props.name}</h5>
                       <p className="card-text">{this.props.email}</p>
                       <p className="card-text">{this.props.phone}</p>
                       <p className="card-text">{this.props.website}</p>
                      <Link to={`/users/${this.props.allDetails.id}`}>
                          <button className="btn btn-primary">
                              Get Details
                          </button>
                      </Link>
                   </div>
               </div>

           </div>
        );
    }
}