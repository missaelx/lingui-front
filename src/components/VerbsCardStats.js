export const VerbsCardStats = ({omittedVerbsCount, correctAswersCount, wrongAswersCount}) => {
    return (
        <div className="card block">
            <footer className="card-footer">
                <span className="card-footer-item has-text-danger">Wrong {wrongAswersCount}</span>
                <span className="card-footer-item has-text-grey">Omitted {omittedVerbsCount}</span>
                <span className="card-footer-item has-text-success-dark">Correct {correctAswersCount}</span>
            </footer>
        </div>
    )
}