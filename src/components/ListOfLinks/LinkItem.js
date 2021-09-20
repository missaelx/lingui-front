import {Link} from "react-router-dom";
import {toast} from "react-toastify";

export const LinkItem = ({element}) => {
    const onClickElementDisabled = (event) => {
        event.preventDefault();
        toast("Lo siento, aún no termino de programarlo 😟. Pronto estará listo 😁")
    }
    if(!element.enabled){
        return (
            <a href="/#" className="panel-block" onClick={onClickElementDisabled}>
                    <span className="panel-icon">
                      <i className="fas fa-book" aria-hidden="true"/>
                    </span>
                {element.title}
            </a>
        )
    }
    return (
        <Link to={element.url} className="panel-block">
                    <span className="panel-icon">
                      <i className="fas fa-book" aria-hidden="true"/>
                    </span>
            {element.title}
        </Link>
    )
}