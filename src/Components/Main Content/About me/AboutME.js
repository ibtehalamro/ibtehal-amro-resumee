import React from 'react';

const AboutMe = () => {
    return (
        <div className={"mainContent__left__aboutMe d-flex d-flex-column d-flex-center"}>

            <img className=" lg-icon " src={process.env.PUBLIC_URL + "/Asset/icons/profile.png"}
                 alt={"profile icon"}/>


            <h1 className={"about-me__name"}> IBTEHAL AMRO</h1>
            <h3 className={"about-me__job"}> Web Developer</h3>
        </div>
    );
};

export default AboutMe;