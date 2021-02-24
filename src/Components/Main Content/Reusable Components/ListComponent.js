import React from 'react';

const ListComponent = (props) => {
    return (
        <ul className={props.class}>
            {
                props.children
            }
        </ul>
    );
};

export default ListComponent;