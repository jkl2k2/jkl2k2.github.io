import './App.css';
import Nav from './Nav.js';
import Home from './Home.js';
import Projects from './Projects.js';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
