import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faQuestion, faSync} from '@fortawesome/free-solid-svg-icons'

export const VerbBox = ({
        title,
        content,
        onOmitHandler = () => {},
        onShowAnswerHandler = () => {},
        onRestartHandler = () => {},
        }) => {
    return (
        <div className="card block">
            <header className="card-header">
                <p className="card-header-title is-justify-content-center">
                    {title}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <p className={"is-size-3 has-text-centered"}><strong>{content}</strong></p>
                </div>
            </div>
            <footer className="card-footer">
                <a href="/#" className="card-footer-item" onClick={onRestartHandler}>
                    <span className={"mr-1"}>Restart</span>
                    <span className="icon is-small">
                        <FontAwesomeIcon icon={faSync} />
                    </span>
                </a>
                <a href="/#" className="card-footer-item" onClick={onShowAnswerHandler}>
                    <span className={"mr-1"}>Show answer</span>
                    <span className="icon is-small">
                        <FontAwesomeIcon icon={faQuestion} />
                    </span>
                </a>
                <a href="/#" className="card-footer-item" onClick={onOmitHandler}>
                    <span className={"mr-1"}>Omit</span>
                    <span className="icon is-small">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                </a>
            </footer>
        </div>
    )

}