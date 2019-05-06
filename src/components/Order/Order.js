import React from 'react';

const order = ( props ) => {
    
    return (
        <div>Order {props.match.params.id}</div>
    );
}

export default order;
