import React, {Component} from 'react';
import Card from "./Card";

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            desc: "",
            allPhones: [],
            filterPhones: []
        };
    };

    handleTitle = (event) => {
        this.setState({title: event.target.value});
    };
    handleDesc = (event) => {
        this.setState({desc: event.target.value});
    };

    createPhone = () => {
        this.setState({
            allPhones: this.state.allPhones.filter(phone => phone.name !== this.state.title).concat({
                name: this.state.title,
                desc: this.state.desc
            })
        });
        this.setState({
            filterPhones: this.state.filterPhones.filter(phone => phone.name !== this.state.title).concat({
                name: this.state.title,
                desc: this.state.desc
            })
        });
    };

    filterPhone = ({title, body}) => {
        this.setState({filterPhones: this.state.allPhones.filter(phone => phone.name !== title)});
    };

    render() {

        return (
            <div className="Main">
                <h2>Main</h2>

                <form>
                    Title :
                    <input type="text" name="title" value={this.state.title} onChange={this.handleTitle}/> <br/><br/>
                    Description :
                    <input type="text" name="desc" value={this.state.desc} onChange={this.handleDesc}/> <br/><br/>

                    <input type="button" value="SUBMIT" onClick={this.createPhone}/> <br/><br/>
                </form>

                <div className="row">
                    {
                        this.state.filterPhones.map((phone, index) =>
                            <div className="col-md-4" key={index}>
                                <Card key={index} title={phone.name} body={phone.desc} cardButton={this.filterPhone}/>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}