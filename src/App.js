import "./App.css";

import Nav from "./Nav";
import Card from "./cardComp";
function App() {
    return (
        <div className="App">
            <div className="fade-bg"></div>
            <Nav />
            <div className="container">
                <Card />
            </div>
        </div>
    );
}

export default App;
