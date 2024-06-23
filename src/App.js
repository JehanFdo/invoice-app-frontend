import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import Home from "./Home";
import NavBar from "./component/common/NavBar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import ViewInvoice from "./component/invoice/ViewInvoice";
import CreateInvoice from "./component/invoice/CreateInvoice";
import EditInvoice from "./component/invoice/EditInvoice";

function App() {
    return (
        <main className="container mt-5">
            <Router>
                <NavBar/>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home/>}>
                    </Route>
                    <Route
                        exact
                        path="/view-invoice"
                        element={<ViewInvoice/>}>
                    </Route>
                    <Route
                        exact
                        path="/create-invoice"
                        element={<CreateInvoice/>}>
                    </Route>
                    <Route
                        exact
                        path="/edit-invoice/:id"
                        element={<EditInvoice/>}>
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}

export default App;
