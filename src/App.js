import './sass/bulma-overrides.scss';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {VerbsIndex} from "./containers/Verbs/VerbsIndex";
import {Home} from "./containers/Home/Home";
import {VerbsCards} from "./containers/Verbs/VerbsCards";
import {VerbsReference} from "./containers/Verbs/VerbsReference";
import {ModalContainer} from "./components/ui/Modal/ModalContainer";

const ContentToRender = () => {

    return (
        <Router>
            <Switch>
                <Route path="/verbs/list" component={VerbsReference} exact />
                <Route path="/verbs/cards" component={VerbsCards} exact />
                <Route path="/verbs" component={VerbsIndex} exact />
                <Route path="/" component={Home} exact />
            </Switch>
        </Router>
    )
}

function App() {
  return (
    <div className="App section">
        <div className="container">
            <div className="columns">
                <div className="column">
                    <ContentToRender/>
                </div>
            </div>
        </div>
        <ModalContainer/>
        <ToastContainer />
    </div>
  );
}

export default App;
