import {LinkItem} from "./LinkItem";

export const LinkList = ({elements, title}) => {
    return (
        <nav className="panel">
            <p className="panel-heading">
                {title}
            </p>
            {elements.map(element => (
                <LinkItem element={element} />
            ))}
        </nav>
    )
}