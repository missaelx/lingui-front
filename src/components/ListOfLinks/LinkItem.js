import {Link} from "react-router-dom";

export const LinkItem = ({element}) => {
    return (
        <Link to={element.url} className="panel-block">
                    <span className="panel-icon">
                      <i className="fas fa-book" aria-hidden="true"/>
                    </span>
            {element.title}
        </Link>
    )
}