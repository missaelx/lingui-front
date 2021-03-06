import {useRef} from "react";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import * as actions from '../../store/Actions';
import {Link, useHistory} from "react-router-dom";
import {Breadcrumb} from "../../components/ui/Breadcrumb";

export const VerbsIndex = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const checkPreterite = useRef();
    const checkPastParticiple = useRef();

    const onStartClick = (event) => {
        event.preventDefault();
        if((!checkPreterite.current.checked) && (!checkPastParticiple.current.checked)){
            toast.error("Select at least one verb form to practice");
            return;
        }

        dispatch({type: actions.SET_PRACTICE_PRETERITE, payload: checkPreterite.current.checked})
        dispatch({type: actions.SET_PRACTICE_PAST_PARTICIPLE, payload: checkPastParticiple.current.checked})

        history.push("/verbs/cards");

    }
    return (<>
        <div className="block">
            <div className="block">
                <Breadcrumb elements={[
                    {
                        label: "Home",
                        to: "/"
                    },{
                        label: "Verbs",
                        to: "/verbs"
                    },
                ]} />
            </div>
        </div>
        <h1 className={"is-1 title block"}>100 most used verbs</h1>
        <h2 className={"is-2 subtitle block"}>Flash cards</h2>
        <div className="card">
            <div className="card-content">
                <form className="content">
                    <p className="block"><strong>Chose the subjects to study</strong></p>
                    <div className="block">
                        <label className="checkbox mr-2">
                            <input type="checkbox" className={"mr-1"} ref={checkPreterite}/>
                                Preterite
                        </label>
                        <label className="checkbox mr-2">
                            <input type="checkbox" className={"mr-1"} ref={checkPastParticiple}/>
                                Past participle
                        </label>
                    </div>
                    <div className="block">
                        <button onClick={onStartClick} className={"button is-primary"}>Start</button>
                    </div>
                </form>
            </div>
        </div>
        <p className="mt-3 help block">We'll show you a card so you'll need to fill with the right verb form.</p>
        <h2 className={"is-2 subtitle block"}>Reference</h2>
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <p className="block"><strong>Review the list of verbs</strong></p>
                    <div className="block">
                        <Link to={"/verbs/list"} className={"button is-primary"}>Show</Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
}