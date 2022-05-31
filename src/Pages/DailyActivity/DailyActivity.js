
import './DailyActivity.css';

const DailyActivity = () => {
    return (
       <div className='container-fluid navbar-fixed-top'>
            <section class="daily-activity">
        <h2 className='title-icon'>Title 1</h2>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div class="col">
          <div class="circle1">
  <p class="content1"> <b className='icon-plan'>1 BN+ </b><br/> Daily Impression</p>
</div>
          </div>
          <div class="col">
          <div class="circle2">
  <p class="content2"> <b className='icon-plan'>$500K+ </b><br/> Paid</p>
</div>
          </div>
          <div class="col">
          <div class="circle3">
  <p class="content3"> <b className='icon-plan'>8K+ </b><br/> Global Publishers</p>
</div>
          </div>
        </div>
        </section>
       </div>
    );
};

export default DailyActivity;

