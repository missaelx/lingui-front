// /* eslint-disable react-hooks/exhaustive-deps */
// import {getVerbs} from "../../store/reducers/verbs/verbsActions";
// import {useEffect} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import verbsData from '../../data/verbs.json';
// const ListVerbs = () => {
//     const dispatch = useDispatch();
//     const verbs = useSelector(state => state.verbs.verbs);
//
//     useEffect(() => {
//         dispatch(getVerbs());
//     }, []);
//
//     useEffect(() => {
//         console.log("verbs", verbsData)
//     }, [verbsData]);
//     return (<>
//         <div className="container">
//             <div className="columns">
//                 <div className="column">
//                     <h1 className={"is-1 title"}>Lista de verbos disponibles</h1>
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th>Verb</th>
//                                 <th>Preterite</th>
//                                 <th>Past participle</th>
//                                 <th>Translation</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {verbs.map(verb => (
//                                 <tr key={}>
//                                     <td>{verb.infinite}</td>
//                                     <td>{verb.preterite}</td>
//                                     <td>{verb.past_participle}</td>
//                                     <td>{verb.translation}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     </>)
// }
//
// export default ListVerbs;