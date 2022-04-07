import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import Container from './components/Container';
import Projects from './components/Projects';
import { projectsData } from './components/Projects/data';
import { Form } from './components/Form';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <GlobalStyle />
    <Navbar />
    <Container />
    <Projects heading='Conheça meus projetos' data={projectsData}/>
    <Form />
    <Footer />
    </Router>
  );
}

export default App;