import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchText: ''};
    }

    onChange(event) {
        this.setState({searchText: event.target.value});
        this.props.onChange(event);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={(e) => this.onChange(e)} value={this.state.searchText}/>
            </div>
        );
    }
}