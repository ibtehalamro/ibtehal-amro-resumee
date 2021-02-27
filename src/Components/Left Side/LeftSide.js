import React, {forwardRef,useRef} from 'react';
import AboutMe from "../Main Content/About me/AboutME";
import SectionWithTitle from "../Main Content/Reusable Components/SectionWithTitle";
import Contacts from "../Main Content/Contact/Contacts";

const LeftSide = forwardRef((props, ref) => {
    const {
        homeRef
    } = ref;
    const contactRef =useRef();
    return (
        <div className={"mainContent__left"}>


            <div ref={homeRef}>
                <AboutMe/>
            </div>

            <SectionWithTitle ref={contactRef} title={"CONTACTS"}>
                <Contacts/>
            </SectionWithTitle>


        </div>
    );
});

export default LeftSide;