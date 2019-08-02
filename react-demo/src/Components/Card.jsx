import React, {Component} from 'react';
import '../Css/Card.css';

export default class Card extends Component {

    render() {

        return <div className="card" style={{width: 18 + 'rem'}}>
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.body}</p>
                <button className="btn btn-primary" onClick={() => this.props.cardButton(this.props)}>Remove me
                </button>
            </div>
        </div>;
    }
}