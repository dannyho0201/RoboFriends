import React from 'react';

const Scroll = (props) => {
    // allow scroll for children
    return (
        <div
            style={{
                overflow: 'scroll',
                border: '5px solid black',
                height: '800px'
            }}
        >
            {props.children}
        </div>
    );
};

export default Scroll;
