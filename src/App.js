import "./App.css";
import Nav from "./Nav";
import Card from "./cardComp";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import CardDetails from "./CardDetails";
const stripePromise = loadStripe(
    "pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
);

function App() {
    const options = {
        clientSecret: "{{CLIENT_SECRET}}",
    };

    return (
        <>
            <BrowserRouter>
                <div className="App">
                    <Nav />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <div className="container">
                                    <Card />
                                </div>
                            }
                        ></Route>
                        <Route
                            exact
                            path="/detail/:id"
                            element={<CardDetails />}
                        ></Route>

                        <Route
                            exact
                            path="/payment"
                            element={
                                <Elements
                                    stripe={stripePromise}
                                    options={options}
                                >
                                    <CheckoutForm />
                                </Elements>
                            }
                        ></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
