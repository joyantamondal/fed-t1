

// import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';

const Slider = () => {
    return (
        <Carousel variant="dark" >
  <Carousel.Item>
  <div class="row d-flex align-items-center">
  <h1 className='text-center mb-5 title-position'>Title 1</h1>
  <div class="col-lg-5">
                   <img src="https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/e/7521/files/2014/05/art-auction-10e3hqz.jpg" class="d-block w-100 slide-img" alt="..."/>
                </div>
                <div class="col-lg-7">
                  <h2>Natural Art</h2>
                  <h5>
                  Lorem Ipsum is simply 
                  </h5>
                </div>
               
              </div> 
  </Carousel.Item>
  <Carousel.Item>
  <div class="row d-flex align-items-center">
  <h1 className='text-center mb-5 title-position'>Title 2</h1>
  <div class="col-lg-5">
                   <img src="https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/e/7521/files/2014/05/art-auction-10e3hqz.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="col-lg-7">
                  <h2>Natural Art</h2>
                  <h5>
                  Lorem Ipsum is simply 
                  </h5>
                </div>
               
              </div> 
  </Carousel.Item>
  <Carousel.Item>
  <div class="row d-flex align-items-center">
  <h1 className='text-center mb-5 title-position'>Title 3</h1>
  <div class="col-lg-5">
                   <img src="https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/e/7521/files/2014/05/art-auction-10e3hqz.jpg" class="d-block w-100" alt="..."/>
                </div>
                <div class="col-lg-7">
                  <h2>Natural Art</h2>
                  <h5>
                  Lorem Ipsum is simply 
                  </h5>
                </div>
               
              </div> 
  </Carousel.Item>
</Carousel>
    );
};

export default Slider;