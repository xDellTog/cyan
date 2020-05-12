import React from 'react';

export default class CustomForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('A name was submitted: ' + this.state.value);
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label> Name: </label>
                <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}