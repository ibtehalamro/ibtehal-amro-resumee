import React, {forwardRef, useLayoutEffect, useState} from 'react';

const SectionWithTitle = forwardRef((props, ref) => {

    const [show, doShow] = useState(false) // ...etc

    // useLayoutEffect(() => {
    //     let options = {
    //         rootMargin: "0px",
    //         threshold: 0.15
    //     };
    //
    //     const callback = (entries) => {
    //          entries.forEach(entry => {
    //             const {target} = entry;
    //             target.classList.add("withjs");
    //
    //
    //
    //             if (entry.intersectionRatio >= 0.15) {
    //                 target.classList.add("is-visible");
    //              } else {
    //                 target.classList.remove("is-visible");
    //              }
    //         });
    //     };
    //
    //     const observer = new IntersectionObserver(callback, options);
    //
    //     if (ref !== null)
    //         observer.observe(ref.current);
    //
    //
    // }, []);

    return (
        <div ref={ref} className={(show ? " showScroll " : "") + "section d-flex d-flex-column "}>
            <h1 className="section__title"> {props.title}</h1>
            {props.children}
        </div>
    );
});

export default SectionWithTitle;