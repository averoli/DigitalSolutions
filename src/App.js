
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import s from './App.module.css';
import NavBar from "./components/menuHeader/navBar/NavBar";


const App = () => {
    return (
        <div className={s.root}>
            <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" />
                    <Route path="/services" />
                    <Route path="/contact" />
                </Routes>
        </div>
    );
}

export default App;
