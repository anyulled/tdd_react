/**
 * Created by anyulled on 27/11/16.
 */
import React from "react";

export class BeerListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: []
        };
        this.addItem = this.addItem.bind(this);
    }

    addItem(name) {
        this.setState({
            beers: [].concat(this.state.beers).concat([name])
        });
    }

    render() {
        return <div>
            <InputArea onSubmit={this.addItem}/>
            <BeerList items={this.state.beers}/>
        </div>
    }
}

export class InputArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.setText = this.setText.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    setText(event) {
        this.setState({
            text: event.target.value
        });
    }

    handleClick() {
        this.props.onSubmit(this.state.text);
    }

    render() {
        return (<div>
            <input value={this.state.text} onChange={this.setText} type="text"/>
            <button onClick={this.handleClick}>Add</button>
        </div>);

    }
}

InputArea.PropTypes = {
    onSubmit: React.PropTypes.func.isRequired
};

export class BeerList extends React.Component {
    render() {
        return this.props.items ? (
            <ul>
                {this.props.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        ) : null;
    }
}

BeerList.PropTypes = {
    items: React.PropTypes.array.isRequired
};