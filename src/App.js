import './sass/bulma-overrides.scss';
import {VerbList} from "./components/VerbList";
function App() {
  return (
    <div className="App">
        <div className="container">
            <div className="columns mt-5">
                <div className="column">
                    <VerbList/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
