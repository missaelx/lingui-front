import {VerbList} from "../../VerbList";

export const ModalVerbAnswer = ({verb}) => {
    return (<>
        <div className="content">
            <p className="block"><strong>The last verb was: </strong></p>
            <div className="block">
                <VerbList verbs={[verb]} />
            </div>
        </div>
    </>)
}