import React from 'react';
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            filteredItems: []
        };
    }

    componentWillMount() {
        const items = [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ];
        this.setState({
            items: items,
            filteredItems: items
        });
    }

    onChange(event) {
        let filteredItems = this.state.items;
        filteredItems = filteredItems.filter((item) => {
            return (item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
        });
        this.setState({
            filteredItems: filteredItems
        });
    }

    render() {
        return (
            <div>
                <SearchBar onChange={(e) => this.onChange(e)}/>
                <ProductTable items={this.state.filteredItems}/>
            </div>
        );
    }
}