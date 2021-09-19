import {VerbBox} from "../../components/VerbBox";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import verbs from "../../data/verbs.json";
import {useState} from "react";

export const VerbsCards = () => {
    const practicePreterite = useSelector(state => state.verbs.practicePreterite);
    const practicePastParticiple = useSelector(state => state.verbs.practicePastParticiple);

    //randomize the array. Don't use on large arrays
    const currentGameVerbs = verbs.map((value) => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)
    const [currentGameVerbIndex, setCurrentGameVerbIndex] = useState(0);

    const [omittedVerbsCount, setOmittedCount] = useState(0);
    const [correctAswersCount, setCorrectAswersCount] = useState(0);
    const [wrongAswersCount, setWrongAswersCount] = useState(0);

    if(!practicePreterite && !practicePastParticiple){
        return (
            <div className="notification is-danger">
                There was an error loading the module. Please <Link to={"/verbs"}>go back</Link> and try again.
            </div>
        )
    }

    const onOmitClick = (event) => {
        event.preventDefault();
        setCurrentGameVerbIndex(currentGameVerbIndex + 1);

    }


    return (<>
        <h1 className={"title is-1"}>100 most used verbs <small className={"is-small has-text-grey"}>practice</small></h1>
        <div className="container">
            <div className="columns">
                <div className="column is-one-third">
                    <VerbBox title={"Current verb"} content={currentGameVerbs[currentGameVerbIndex].infinite} onOmitHandler={onOmitClick} />
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
                                                    <input className="input" type="text"/>
                                                </div>
                                            </div>
                                        )}
                                        {practicePastParticiple && (
                                            <div className="field">
                                                <label className="label">Past participle</label>
                                                <div className="control">
                                                    <input className="input" type="text"/>
                                                </div>
                                            </div>
                                        )}
                                        <div className="block">
                                            <button className="button is-primary">Verify</button>
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