import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './navbar'
import Sliders from './caurosel';
import joinUs from './joinus';

function App() {
  return (
    <div className="App">
     <Nav/> 
     <Sliders/>     
    <joinUs />
    </div>
    
  );
}

export default App;
