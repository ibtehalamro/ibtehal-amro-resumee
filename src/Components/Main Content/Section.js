import React,{forwardRef} from 'react';

const Section =  forwardRef(({ onBackClick, name,section}, ref)  => {
// const Section = ({className}) => {
    return (
        <section ref={ref} className={name} id={section}>
            section{section}
        </section>
    );
});

