import React from 'react';
import './home.css'

function Home() {
  return (
    <div className='Home'>
        <div className='poster'>
            <div id='head'><h1>We Sell Hydroponic<br/> Product</h1></div>
        </div>
        <div className='imgposter'><img src="https://static.wixstatic.com/media/da6885_8f2064e94804451cacd6baf93521d25c~mv2.jpg/v1/fill/w_859,h_483,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Homepage-banner-2.jpg" alt="img"/></div>
        <div className='poster2'>
            <div id='marg'>
              <span>CHECKUT OUT OUR</span>
              <h3>SOCIAL MEDIA</h3>
              <span id='center'>SEE OUR PRODUCT</span>
            </div>
        </div>
        <div className='videodiv'>
           <iframe width="672" height="379" src="https://www.youtube.com/embed/3ykMamezlG8" title="Barton Breeze featured in Scroll.in and DW program - Eco India" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className='secondimg'>
          <div>
            <img src="https://static.wixstatic.com/media/da6885_a58626fd5bcd43d78fd391c30ba44d0c~mv2.jpg/v1/crop/x_0,y_0,w_657,h_1080/fill/w_306,h_503,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Pure-just-pure-2a.jpg" alt="img"  />
            <img src="https://static.wixstatic.com/media/da6885_30821508ab3549a097361bb7612dac79~mv2.jpg/v1/crop/x_0,y_0,w_667,h_1080/fill/w_310,h_502,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Pure-just-pure-a.jpg" alt="img"  />
            <img src="https://static.wixstatic.com/media/da6885_a8aac04a74704aed80d81461e647eb49~mv2.jpg/v1/crop/x_0,y_0,w_673,h_1080/fill/w_309,h_496,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Pure-just-pure-3a.jpg" alt="img"  />
          </div>
          <div><img src="https://static.wixstatic.com/media/da6885_c08252d319164895a848194e4314e7c2~mv2.png/v1/fill/w_465,h_465,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/water-insta-3.png" alt="img"/></div>
        </div>
    </div>
  )
}

export default Home