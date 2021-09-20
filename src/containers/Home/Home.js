import {LinkList} from "../../components/ListOfLinks/LinkList";

const modules = [
    {
        title: "100 most used verbs",
        url: "/verbs",
        enabled: true,
    },{
        title: "Pronouns",
        url: "/pronouns",
        enabled: false,
    },{
        title: "Swearwords",
        url: "/swearwords",
        enabled: false,
    },{
        title: "150 most used words",
        url: "/words",
        enabled: false,
    },{
        title: "20 most used expressions",
        url: "/expressions",
        enabled: false,
    },{
        title: "Present, past, future (simple)",
        url: "/tenses",
        enabled: false,
    },{
        title: "Connectors and prepositions",
        url: "/conectors-prepositions",
        enabled: false,
    },{
        title: "Question words",
        url: "/question-words",
        enabled: false,
    },
];
export const Home = () => {
    return (<>
        <h1 className={"is-1 title block"}>Lingüi</h1>
        <h4 className={"is-4 subtitle block"}>Learn the 20% and execute the 80% </h4>
        <p className="block">It is assumed that with the effort of learning 20% you can solve 80% of the problems. So I summarized in these modules some basic knowledge of the language. Hopefully it will serve you.</p>

        <LinkList elements={modules} title={"Modules"}/>
    </>)
}