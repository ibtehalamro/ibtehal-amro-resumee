import './App.scss';
import Header from "./Components/Header";
import {BrowserRouter} from "react-router-dom";

import React, {useRef} from 'react';
import LeftSide from "./Components/Left Side/LeftSide";
import Main from "./Components/Main Content/Main";

function App(props) {

    const homeRef = useRef();
    const careerObjectivesRef = useRef();
    const graduationProjectRef = useRef();
    const educationalBackgroundRef = useRef();
    const technicalSkillsRef = useRef();
    const softSkillsRef = useRef();
    const languagesRef = useRef();



    return (
        <div className="App">

            <BrowserRouter>
                <Header refs={[homeRef,careerObjectivesRef,
                    graduationProjectRef,
                    educationalBackgroundRef,
                    technicalSkillsRef,
                    softSkillsRef,
                    languagesRef]} />

                <main className={"mainContent d-grid bodySize"}>
                    <LeftSide ref={{homeRef}}/>

                    <Main ref={{
                        careerObjectivesRef,
                        graduationProjectRef,
                        educationalBackgroundRef,
                        technicalSkillsRef,
                        softSkillsRef,
                        languagesRef
                    }}
                    />


                </main>

            </BrowserRouter>

        </div>
    );
}

export default App;
