import {VerbBox} from "../../components/VerbBox";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import verbs from "../../data/verbs.json";
import {useRef, useState} from "react";
import {toast} from "react-toastify";
import {VerbsCardStats} from "../../components/VerbsCardStats";

export const VerbsCards = () => {
    const practicePreterite = useSelector(state => state.verbs.practicePreterite);
    const practicePastParticiple = useSelector(state => state.verbs.practicePastParticiple);

    const preteriteAnswerRef = useRef();
    const pastParticipleAnswerRef = useRef();

    //randomize the array. Don't use on large arrays
    const [currentGameVerbs, setCurrentGameVerbs] = useState( () => verbs.map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value))
    const [currentGameVerbIndex, setCurrentGameVerbIndex] = useState(0);

    const [omittedVerbsCount, setOmittedVerbsCount] = useState(0);
    const [correctAswersCount, setCorrectAswersCount] = useState(0);
    const [wrongAswersCount, setWrongAswersCount] = useState(0);

    if(!practicePreterite && !practicePastParticiple){
        return (
            <div className="notification is-danger">
                There was an error loading the module. Please <Link to={"/verbs"}>go back</Link> and try again.
            </div>
        )
    }
    const loadNextQuestion = () => {
        if(practicePastParticiple){
            pastParticipleAnswerRef.current.value = "";
        }
        if(practicePreterite){
            preteriteAnswerRef.current.value = "";
            preteriteAnswerRef.current.focus()
        } else {
            pastParticipleAnswerRef.current.focus();
        }
        if(currentGameVerbIndex + 1 < currentGameVerbs.length){
            setCurrentGameVerbIndex(currentGameVerbIndex + 1);
        } else {
            finishGame();
        }
    }

    const finishGame = () => {
        toast.success("You have completed all the verbs. Congratulations");
    }
    const onOmitClick = (event) => {
        event.preventDefault();
        setOmittedVerbsCount(omittedVerbsCount + 1);
        loadNextQuestion();
    }

    const onRestartClick = (event) => {
        event.preventDefault();
        preteriteAnswerRef.current.value = "";
        pastParticipleAnswerRef.current.value = "";
        setCurrentGameVerbs(verbs.map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value))
        setCurrentGameVerbIndex(0);
        setOmittedVerbsCount(0);
        setCorrectAswersCount(0);
        setWrongAswersCount(0);
        toast.success("Counters reseted. Question shuffled. Happy learning :)")
    }

    const onShowAnswerClick = (event) => {
        event.preventDefault();
        alert("Showing the answer in the console, sorry, we are coding");
        console.log("preterite",currentGameVerbs[currentGameVerbIndex].preterite)
        console.log("past participle",currentGameVerbs[currentGameVerbIndex].past_participle)

        setOmittedVerbsCount(omittedVerbsCount + 1);
    }

    const onVerifyAnswer = (event) => {
        event.preventDefault();
        let currentVerb = currentGameVerbs[currentGameVerbIndex];
        let result = true;
        if(practicePreterite){
            let userResponsePreterite = preteriteAnswerRef.current.value;
            userResponsePreterite = userResponsePreterite.trim();
            userResponsePreterite = userResponsePreterite.toLowerCase();
            if(!currentVerb.preterite.split("/").includes(userResponsePreterite)){
                toast.error("The preterite form of the verb was wrong");
                console.log(`"${currentVerb.preterite}" was expected but "${userResponsePreterite}" was recieved`);
                result = false;
            }
        }
        if(practicePastParticiple){
            let userResponsePastParticiple = pastParticipleAnswerRef.current.value;
            userResponsePastParticiple = userResponsePastParticiple.trim();
            userResponsePastParticiple = userResponsePastParticiple.toLowerCase();
            if(!currentVerb.past_participle.split("/").includes(userResponsePastParticiple)){
                toast.error("The past participle form of the verb was wrong");
                console.log(`"${currentVerb.past_participle}" was expected but "${userResponsePastParticiple}" was recieved`);
                result = false;
            }
        }
        if(!result) {
            setWrongAswersCount(wrongAswersCount + 1);
        } else {
            setCorrectAswersCount(correctAswersCount + 1);
            toast.success("Correct!!! 😊")
        }
        loadNextQuestion()
    }


    return (<>
        <h1 className={"title is-1"}>100 most used verbs <small className={"is-small has-text-grey"}>practice</small></h1>
        <div className="container">
            <div className="columns">
                <div className="column is-one-third">
                    <VerbsCardStats
                        omittedVerbsCount={omittedVerbsCount}
                        correctAswersCount={correctAswersCount}
                        wrongAswersCount={wrongAswersCount}
                    />
                    <VerbBox
                        title={"Current verb"}
                        content={currentGameVerbs[currentGameVerbIndex].infinite}
                        onOmitHandler={onOmitClick}
                        onRestartHandler={onRestartClick}
                        onShowAnswerHandler={onShowAnswerClick}
                    />
                </div>
                <div className="column">
                    <div className="box">
                        <article className="media">
                            <div className="media-content">
                                <div className="content">
                                    <p className={"content"}><strong>Write the correct form of the verb in the left side</strong></p>
                                    <div id="forms" className={"block"}>
                                        {practicePreterite && (
                                            <div className="field">
                                                <label className="label">Preterite</label>
                                                <div className="control">
                                                    <input className="input" type="text" ref={preteriteAnswerRef}/>
                                                </div>
                                            </div>
                                        )}
                                        {practicePastParticiple && (
                                            <div className="field">
                                                <label className="label">Past participle</label>
                                                <div className="control">
                                                    <input className="input" type="text" ref={pastParticipleAnswerRef}/>
                                                </div>
                                            </div>
                                        )}
                                        <div className="block">
                                            <button className="button is-primary" onClick={onVerifyAnswer}>Verify</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </>)
}