import '../components/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/navbar'
import Sliders from '../components/caurosel';
import JoinUs from '../components/joinus';
import FooterContainer from '../containers/footer';
import Testimonial from '../components/testimonial';

function Home() {
  return (
    <div className="App Home">
     <Nav/> 
     <Sliders/>     
     <JoinUs/>    
     <Testimonial/>
     <FooterContainer/> 
    </div>
    
  );
}

export default Home;