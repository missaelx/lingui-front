import {LinkItem} from "./LinkItem";

export const LinkList = ({elements, title}) => {
    return (
        <nav className="panel">
            <p className="panel-heading">
                {title}
            </p>
            {elements.map((element, i) => (
                <LinkItem key={i} element={element} />
            ))}
        </nav>
    )
}