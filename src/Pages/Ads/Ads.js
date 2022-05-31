
import more from '../../Assets/more.png';
import './Ads.css';
import './AdsJquery.js';

<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
const Ads = () => {
    return (
    


 <div class="container ads">
        <div class="row">
        <div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
        </div>

        <div align="center">
            <button class="btn btn-default filter-button btn-custom shadow bg-white" data-filter="all">POP-UNDER</button>
            <button class="btn btn-default filter-button btn-custom shadow bg-white" data-filter="banner">BANNER AD</button>
            <button class="btn btn-default filter-button btn-custom shadow bg-white" data-filter="native">NATIVE</button>
            <button class="btn btn-default filter-button btn-custom shadow bg-white" data-filter="skim">SKIM</button>
        </div>
        <br/>



        <section class="gallery_product container pt-3 filter all">
        
          
        <div class="row d-flex align-items-center">
        <div class="col-lg-5 ads-img">
             <img src="https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/e/7521/files/2014/05/art-auction-10e3hqz.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="col-lg-7">
            <h2 className='ads-sub-title'>POP-UNDER</h2>
            <p>
            This is one of the most popular ads. After user’s click, this
ad opens landing page in behind. So, the user experience is
not hampered much.
            </p>
            <br/>
            <a className='learn-more'>Learn More <img className='more-icon' src={more}/> </a>
          </div>
          
        </div>  
  
</section> 

<section class="gallery_product container pt-3 filter banner">
        
          
        <div class="row d-flex align-items-center">
        <div class="col-lg-5 ads-img">
             <img src="https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/e/7521/files/2014/05/art-auction-10e3hqz.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="col-lg-7">
            <h2 className='ads-sub-title'>BANNER AD</h2>
            <p>
            Choose between the available banner formats. Highly
effective ad for visibility.
            </p>
            <br/>
            <a className='learn-more'>Learn More <img className='more-icon' src={more}/> </a>
          </div>
          
        </div>  
  
</section>  
<section class="gallery_product  pt-3 filter native">
        
          
        <div class="row d-flex align-items-center">
        <div class="col-lg-5 ads-img">
             <img src="https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/e/7521/files/2014/05/art-auction-10e3hqz.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="col-lg-7">
            <h2 className='ads-sub-title'>NATIVE</h2>
            <p>
            Ad format with the image and the title, that perfectly fits into
the content of the site. <br/>Native ads are placed in the most visible areas of the page
and, thus, this format shows good results and the level of
interaction.
            </p>
            <br/>
            <a className='learn-more'>Learn More <img className='more-icon' src={more}/> </a>
          </div>
          
        </div>  
  
</section> 
<section class="gallery_product container pt-3 filter skim">
        
          
        <div class="row d-flex align-items-center">
        <div class="col-lg-5 ads-img">
             <img src="https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/e/7521/files/2014/05/art-auction-10e3hqz.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="col-lg-7">
            <h2 className='ads-sub-title'>SKIM</h2>
            <p>
            SKIM" is a link that a publisher inserts on a specific site
element, and after clicking on it, an advertisement appears
to the user. <br/>SKIM gives 100% control of your sold traffic amount, higher
CR to advertisers and CPM rates to publishers.
            </p>
            <br/>
            <a className='learn-more'>Learn More <img className='more-icon' src={more}/> </a>
          </div>
         
        </div>  
  
</section> 

          
        </div>
    </div>


    );
};

export default Ads;