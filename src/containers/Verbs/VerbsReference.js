import verbsData from '../../data/verbs.json';
import {VerbList} from "../../components/VerbList";
import {Breadcrumb} from "../../components/ui/Breadcrumb";
export const VerbsReference = () => {

    return (<>
        <div className="block">
            <Breadcrumb elements={[
                {
                    label: "Home",
                    to: "/"
                },{
                    label: "Verbs",
                    to: "/verbs"
                },{
                    label: "Reference",
                    to: "/verbs/list"
                },
            ]} />
        </div>
        <div className="box block">

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