import {VerbList} from "../../VerbList";

export const ModalVerbCardCompleted = ({wrongVerbs}) => {

    return (<>
        <div className="content">
            <p className="block"><strong>You have completed all the verbs. Congratulations 🎉</strong></p>
            {(wrongVerbs.length > 0) && (<>
                <p className="block">You should review the following verbs:</p>
                <div className="block">
                    <VerbList verbs={wrongVerbs} />
                </div>
            </>)}

        </div>
    </>)
}