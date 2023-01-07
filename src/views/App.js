import '../components/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/navbar'
import Sliders from '../components/caurosel';
import JoinUs from '../components/joinus';

function App() {
  return (
    <div className="App">
     <Nav/> 
     <Sliders/>     
     <JoinUs/>     
    </div>
    
  );
}

export default App;
