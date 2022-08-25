import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App(props) {

  return (
    <>
      <NavBar/>
      <h2>Las ofertas de la semana</h2>
      <ItemListContainer/>
 
    </>
);
}

export default App;
