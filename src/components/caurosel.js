import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './../image/carousel1.jpg'
import image2 from './../image/carousel2.jpg'
import image3 from './../image/carousel3.jpg'
const slides = [
  {
    image: image1,
    alt: 'First slide',
    caption: {
      title: 'Boost your productivity',
      description: 'Record on the go!! Manage and recording your sales on the go'
    }
  },
  {
    image: image2,
    alt: 'Second slide',
    caption: {
      title: 'Boost your productivity',
      description: 'Say good bye to old Ledgers, get your stuffs organised into our cool new databases.'
    }
  },
  {
    image: image3,
    alt: 'Third slide',
    caption: {
      title: 'Acess Data across teams',
      description: 'Collaboratively acess your database over the internet'
    }
  }
];

function Sliders() {
  return (
    <section className='section1'>
      <Carousel className='carousel-main'>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className='d-block w-80'
              src={slide.image}
              style={{ height: '75vh', width: '80vw' }}
              alt={slide.alt}
            />
            <Carousel.Caption>
              <h3>{slide.caption.title}</h3>
              <p>{slide.caption.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default Sliders;
