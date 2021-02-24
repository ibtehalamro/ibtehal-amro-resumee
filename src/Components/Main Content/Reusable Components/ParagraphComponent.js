import React from 'react';

const ParagraphComponent = (props) => {
    return (
        <article className={"section__articleText"}>

            {props.text}

        </article>
    );
};

export default ParagraphComponent;