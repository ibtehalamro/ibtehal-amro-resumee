import React,{forwardRef} from 'react';

const SectionWithTitle = forwardRef ((props,ref) => {
    return (
        <div ref={ref} className="section d-flex d-flex-column">
            <h1 className="section__title"> {props.title}</h1>
                {props.children}
        </div>
    );
});

export default SectionWithTitle;