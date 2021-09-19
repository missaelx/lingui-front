export const VerbList = ({verbs}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Verb</th>
                <th>Preterite</th>
                <th>Past participle</th>
                <th>Translation</th>
            </tr>
            </thead>
            <tbody>
            {verbs.map(verb => (
                <tr key={verb.id}>
                    <td>{verb.infinite}</td>
                    <td>{verb.preterite}</td>
                    <td>{verb.past_participle}</td>
                    <td>{verb.translation}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}