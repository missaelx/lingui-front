import {Link} from "react-router-dom";

export const Breadcrumb = ({elements}) => {

    return (
        <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
                {elements.map((element, i) => {
                    if (i !== element.length - 1)
                        return <li key={i}><Link to={element.to}>{element.label}</Link></li>
                    else
                        return <li className="is-active"><a href="/#" aria-current="page">{element.label}</a></li>
                    }

                )}
            </ul>
        </nav>
    )
}