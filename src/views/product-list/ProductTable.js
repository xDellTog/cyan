import React from 'react';
import ProductRow from './ProductRow.js';

export default function ProductTable(props) {
    return (
        <div>
            {props.items.map((product, productId) => (
                <div key={productId}>
                    <ProductRow name={product.name} price={product.price}/>
                </div>
            ))}
        </div>
    );
}