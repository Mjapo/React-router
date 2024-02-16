import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Contatos from './pages/contatos/Contatos';
import Cursos from  './pages/cursos/cursos';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/Contatos" element={<Contatos />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Cursos" element={<Cursos />} />

            </Routes>
        </Router>
    );
}

export default App;
