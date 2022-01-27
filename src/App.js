import "./App.css";

import Nav from "./Nav";
import Card from "./cardComp";
function App() {
    return (
        <div className="App">
            <Nav />
            <div className="cards-container">
                <Card />
            </div>
        </div>
    );
}

export default App;
