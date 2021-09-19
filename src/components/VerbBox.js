import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const VerbBox = ({title, content, onOmitHandler = () => {}}) => {

    let m = (
        <div className="box">
            <article className="media">
                <div className="media-content">
                    <div className="content has-text-centered is-size-3">
                        <p>
                            {title}
                            <br/>
                            <strong>{content}</strong>
                        </p>
                    </div>
                    <nav>
                        <div className="level-right">
                            <button onClick={onOmitHandler} className="level-item is-text button" aria-label="omitir">
                                <span>Omitir</span>
                                <span className="icon is-small">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                            </button>
                        </div>
                    </nav>
                </div>
            </article>
        </div>
    )

    return (
        <div className="card">
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
                <a href="#" className="card-footer-item">Edit</a>
                <a href="#" className="card-footer-item">Delete</a>
            </footer>
        </div>
    )

}