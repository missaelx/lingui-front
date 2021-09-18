import {LinkList} from "../../components/ListOfLinks/LinkList";

const modules = [
    {
        title: "100 most used verbs",
        url: "/verbs"
    },{
        title: "Pronouns",
        url: "/pronouns"
    },{
        title: "Swearwords",
        url: "/swearwords"
    },{
        title: "150 most used words",
        url: "/words"
    },{
        title: "20 most used expressions",
        url: "/words"
    },{
        title: "Present, past, future (simple)",
        url: "/tenses"
    },{
        title: "Connectors and prepositions",
        url: "/conectors-prepositions"
    },{
        title: "Question words",
        url: "/question-words"
    },
];
export const Home = () => {
    return (
        <LinkList elements={modules} title={"Modulos"}/>
    )
}