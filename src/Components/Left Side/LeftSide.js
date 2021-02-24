import React ,{forwardRef} from 'react';
import AboutMe from "../Main Content/About me/AboutME";
import SectionWithTitle from "../Main Content/Reusable Components/SectionWithTitle";
import Contacts from "../Main Content/Contact/Contacts";

const LeftSide =forwardRef ((props,ref) =>{
    const {
        homeRef
    } = ref;
    return (
        <div className={"mainContent__left"}>


            <div ref={homeRef}  >             <AboutMe />
            </div >

            <SectionWithTitle title={"CONTACTS"}>
                <Contacts/>
            </SectionWithTitle>


        </div>
    );
});

export default LeftSide;