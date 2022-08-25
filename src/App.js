import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import NavBar from './components/NavBar';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App(props) {

  return (
    <>
      <NavBar backgroundColor='black'/>
      <h2>Las ofertas de la semana</h2>
 
    </>
    /** 
   <div className='containeer'>
    <NavBar>        
    </NavBar>
    <h1>¡Hello React!</h1>
    <h2>Otra prueba</h2>
    <Saludo name="Gustavo" lastname="Romero"></Saludo>
    <Saludo name="Carla" lastname="Romero"></Saludo>
    <Saludo name="Franco" lastname="Romero"></Saludo>
   </div>*/
   
);
}

export default App;
