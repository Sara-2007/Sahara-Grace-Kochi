import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import Axios from "axios"

import MainContent from "./components/MainContent"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Switch>
                <Route path="//" exact>
                    <Header />
                    <MainContent />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>

            <Footer />
        </BrowserRouter>
    )
}

export default App
