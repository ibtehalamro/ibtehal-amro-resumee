import React from 'react';

const ContactLink = ({link, imgSrc, contactTitle}) => {
    return (

        <a href={link} className="contact__link" target="_blank" rel="noreferrer" >
            <img className=" sm-icon " src={process.env.PUBLIC_URL + imgSrc}
                 alt={contactTitle + " Contact"}/> {contactTitle}
        </a>
    );
};

export default ContactLink;