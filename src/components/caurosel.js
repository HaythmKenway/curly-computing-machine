import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function Sliders() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src=".\images\carousel1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Record on the go!!</h3>
          <p>Manage and recording your sales on the go</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src=".\images\carousel2.jpg"
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
          className="d-block w-100 h-50"
          src=".\images\carousel3.jpg"
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