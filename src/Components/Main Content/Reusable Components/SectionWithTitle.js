import React, {forwardRef, useLayoutEffect, useState} from 'react';

const SectionWithTitle = forwardRef((props, ref) => {

    const [show, doShow] = useState(false) // ...etc

    useLayoutEffect(() => {
        let options = {
            rootMargin: "0px",
            threshold: 0.15
        };

        const callback = (entries) => {
            entries.forEach(entry => {
                const {target} = entry;

                if (entry.intersectionRatio >= 0.15) {
                    target.classList.add("is-visible");
                    console.log("added on "+props.title)
                } else {
                    target.classList.remove("is-visible");
                    console.log("removed on "+props.title)

                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        if (ref !== null)
            observer.observe(ref.current);


        // if(ref!==null){
        //     console.log("ref:"+props.title , ref)
        //     const topPosition = ref.current.getBoundingClientRect().top;
        //     const onScroll = () => {
        //         const scrollPosition = window.scrollY + window.innerHeight;
        //         if (topPosition < scrollPosition) {
        //             // trigger animation
        //             doShow(true)
        //             console.log("section scroll",props.title)
        //         }else{
        //             doShow(false)
        //         }
        //     };
        //
        //     window.addEventListener("scroll", onScroll); return () => {
        //         doShow(false)
        //
        //         window.removeEventListener("scroll", onScroll);
        //     }
        // }


    }, []);

    return (
        <div ref={ref} className={(show ? " showScroll " : "") + "section d-flex d-flex-column "}>
            <h1 className="section__title"> {props.title}</h1>
            {props.children}
        </div>
    );
});

export default SectionWithTitle;