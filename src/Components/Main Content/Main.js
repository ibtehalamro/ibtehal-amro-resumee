import React ,{forwardRef} from 'react';
import SectionWithTitle from "./Reusable Components/SectionWithTitle";
import ParagraphComponent from "./Reusable Components/ParagraphComponent";
import {
    careerObjects,
    education,
    graduationProject,
    graduationProjectLink, languages, softSkills,
    technicalSkills
} from "../../Constants/TextConstants";
import ListComponent from "./Reusable Components/ListComponent";
import SkillItem from "./Skills/SkillItem";

const Main =forwardRef ((props,ref) =>{

    const {
        careerObjectivesRef,
        graduationProjectRef,
        educationalBackgroundRef,
        technicalSkillsRef,
        softSkillsRef,
        languagesRef
    } = ref;

    return (
        <div   className="mainContent__right">

            <SectionWithTitle ref={careerObjectivesRef} title={"CAREER OBJECTIVES"}>

                <ParagraphComponent
                    text={careerObjects}/>
            </SectionWithTitle>

            <SectionWithTitle ref={graduationProjectRef} title={"GRADUATION PROJECT"}>

                <ParagraphComponent
                    text={graduationProject}/>
                <a href={graduationProjectLink}> Project Demo</a>
            </SectionWithTitle>

            <SectionWithTitle ref={educationalBackgroundRef} title={"EDUCATIONAL BACKGROUND"}>

                <ParagraphComponent text={education}/>
            </SectionWithTitle>

            <SectionWithTitle ref={technicalSkillsRef} title={"TECHNICAL SKILLS"}>

                <ListComponent class={"skill"}>

                    {technicalSkills.map(skill =>
                        <SkillItem key={skill} skillName={skill}/>
                    )}
                </ListComponent>

            </SectionWithTitle>

            <SectionWithTitle ref={softSkillsRef} title={"SOFT SKILLS"}>
                <ListComponent class={"skill"}>
                    {softSkills.map(skill =>
                        <SkillItem key={skill} skillName={skill}/>
                    )}
                </ListComponent>
            </SectionWithTitle>

            <SectionWithTitle ref={languagesRef} title={"LANGUAGES"}>
                <ListComponent class={"skill"}>
                    {languages.map(skill =>
                        <SkillItem key={skill} skillName={skill}/>
                    )}
                </ListComponent>
            </SectionWithTitle>


        </div>
    );
});

export default Main;