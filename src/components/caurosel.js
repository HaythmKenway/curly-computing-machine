import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './../image/carousel1.jpg'
import image2 from './../image/carousel2.jpg'
import image3 from './../image/carousel3.jpg'



function Sliders() {
  return (
    <Carousel className='carousel-main'>
      <Carousel.Item >
        <img
          className="d-block w-80"
          src={image1}
          style={{ height: '80vh',width:'80vw' }}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Record on the go!!</h3>
          <p>Manage and recording your sales on the go</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80"
          src={image2}
          style={{ height: '80vh',width:'80vw' }}
          alt="Second slide"
          
        />

        <Carousel.Caption>
          <h3>Boost your productivity</h3>
          <p>Say good bye to old Ledgers, get your stuffs organised into our cool new databases.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80 "
          src={image3}
          style={{ height: '80vh',width:'80vw' }}

          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Acess Data across teams</h3>
          <p>
            Collaboratively acess your database over the internet      </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliders;