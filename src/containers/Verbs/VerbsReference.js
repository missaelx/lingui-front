import verbsData from '../../data/verbs.json';
import {VerbList} from "../../components/VerbList";
export const VerbsReference = () => {

    return (<>
        <div className="box">

            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h1 className={"is-1 title"}>List of available verbs</h1>
                        <VerbList verbs={verbsData} />
                    </div>
                </div>
            </div>
        </div>
    </>)
}