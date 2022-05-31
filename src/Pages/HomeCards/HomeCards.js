
import customer from '../../Assets/customer-service.png';
import megaphone from '../../Assets/megaphone.png';
import send from '../../Assets/send.png';
import './HomeCards.css';

const HomeCards = () => {
    return (
        <section class="HomeCards-section">
        <h2 className='title-icon'>Here will be a text</h2>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div class="col">
            <div class="card HomeCards border-0 h-100">
                <span className='icon-outside shadow'>
              <img src={megaphone} class="icon-img" alt="img-1"/>
                </span>
              <div class="card-body m-auto">
              <p class="card-text text-center">Text 1</p>
                <button className='icon-click-btn'>Hello 1</button>
              </div>
           
            </div>
          </div>
          <div class="col">
            <div class="card HomeCards border-0 h-100">
                <span className='icon-outside shadow'>
              <img src={send} class="icon-img" alt="img-1"/>
                </span>
              <div class="card-body m-auto">
              <p class="card-text text-center">Text 2</p>
                <button className='icon-click-btn'>Hello 2</button>
              </div>
           
            </div>
          </div>
          <div class="col">
            <div class="card HomeCards border-0 h-100">
                <span className='icon-outside shadow'>
              <img src={customer} class="icon-img" alt="img-1"/>
                </span>
              <div class="card-body m-auto">
              <p class="card-text text-center">Text 3</p>
                <button className='icon-click-btn'>Hello 3</button>
              </div>
           
            </div>
          </div>
        </div>
        </section>
    );
};

export default HomeCards;

