import React from 'react';
import ContactLink from "./ContactLink";

const Contacts = () => {
    return (
        <div className="contact__links d-flex d-flex-column">
            <ContactLink contactTitle={"Amman, Jordan"} link={"#"} imgSrc={"/Asset/icons/location.png"}/>
            <ContactLink contactTitle={"0795876427"} link={"#"} imgSrc={"/Asset/icons/mobile.png"}/>
            <ContactLink contactTitle={"ibtehalamro11@gmail.com"} link={"mailto:ibtehalamro11@gmail.com"}
                         imgSrc={"/Asset/icons/email.png"}/>
            <ContactLink contactTitle={"GitHub portfolio"} link={"https://github.com/ibtehalamro"}
                         imgSrc={"/Asset/icons/github.png"}/>
            <ContactLink contactTitle={"Linked in"} link={"https://www.linkedin.com/in/ibtehal-amro/"}
                         imgSrc={"/Asset/icons/linkedin.png"}/>
        </div>
    );
};

export default Contacts;