import React from 'react';

const SkillItem = ({skillName}) => {
    return (
        <li className="skill__item">
            {skillName}
        </li>
    );
};

export default SkillItem;