import React from 'react';

export default function ProductRow(props) {
    return (
        <div>
            <p>{props.name}{props.price}</p>
        </div>
    );
}