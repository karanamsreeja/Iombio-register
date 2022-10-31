import React from 'react';
import {Box,Grid, Button} from '@mui/material';
import img1 from "../common/images/sens1.png"
import img2 from "../common/images/sens2.png"
import img3 from "../common/images/sens3.png"
import img4 from "../common/images/sens4.png";
import  kit from "../common/images/iom-sample.png";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import AnimatedText from 'react-animated-text-content';

const options = {
  loop: true,
  margin: 0,
  responsiveClass: true,
  nav: true,
  dots: true,
  autoplay: true,
  // navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  smartSpeed: 1000,
  // autoplayTimeout={3000} ,
  // autoplaySpeed={2000},
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 5,

      }
  },
};

function Home() {
  return (
   <div className='register-page'>
       <div className=' register-bg'>
       <OwlCarousel className='owl-theme' loop margin={0}  dots={0} items={1} autoplay={true} autoplayTimeout={10000} autoplaySpeed={2000}>
    <div class='item'><div className='bg1'><div className='animate1'>
    An easy home test initiates your journey. iom analyzes your stool sample for bacterial fingerprints. Your unique gut microbiome,  your lifestyle, your environment and more.  </div>  </div></div>
    <div class='item'> <div className='bg2'>
      <div style={{width:"300px",height:'auto',color:' #002060'}}>
    <AnimatedText
  type="chars" // animate words or chars
  animation={{
    x: '200px',
    y: '-20px',
    scale: 1.1,
    ease: 'ease-in-out',
  }}
  animationType="float"
  interval={0.06}
  duration={0.6}
  tag="p"
  className="animated-paragraph"
  includeWhiteSpaces
  threshold={0.1}
  rootMargin="20%"
>
We take your health seriously, and it reflects in the way we do things at Iom. Using a 3 step process, we are able to provide you with a journey that is specific to you alone.
</AnimatedText></div>
       </div>
        </div> 


    <div class='item'> <div className='bg3'>
    <div class="line">
    <h2 class='lineUp'>iom’s Health Journey has impacted the lives of our users! Hear it from them on their personal health journey</h2>
  </div>

      {/* <div className='animate3'>iom’s Health Journey has impacted the lives of our users! Hear it from them on their personal health journey.</div> */}
      </div></div>
    <div class='item'> <div className='bg4'><div className='animate4 '>Search for eager philosopher on Google and it thinks you’ve made a spelling mistake.</div></div></div>
    {/* <div style={{}}>

    </div> */}


    </OwlCarousel>
       </div>
    
       <div className='section sens'>
          <h1 className='headding mt0'>Improve Your SEnS: Sleep, Energy, Stress</h1>
          
          <div >

          <Grid container spacing={2}>
              <Grid item    xl={3} lg={3} md={3} sm={6} xs={12} >
              <Box className="sens-cards"  sx={{ boxShadow: 3,p: 1,with:'100%',textAlign:'center', bgcolor:"#fff", borderRadius: 2}}>
              <div className="img-center">        <img src={img1} alt="" /></div>
              <h4 className="sub-headding m0">Meet Your Microbiome:</h4>
        
              <p className="f14 m50">send a sample,Know the Bacteria in your Gut-your Microbiome</p>
            </Box>
              </Grid>
              <Grid  item  xl={3} lg={3} md={3} sm={6} xs={12}>
              <Box className="sens-cards"  sx={{ boxShadow: 3,p: 1,with:'100%',textAlign:'center', bgcolor:"#fff", borderRadius: 2}}>
              <div className="img-center">        <img src={img2} alt="" /></div>
              <h4 className="sub-headding m0">Know its Impact:</h4>
              <p className="f14 m50">Know how the  gut bacteria impact your SLEEP, ENERGY and STRESS levels -SEnS.</p>
            </Box>
              </Grid>
              <Grid  item xl={3} lg={3} md={3} sm={6} xs={12}>
              <Box className="sens-cards"  sx={{ boxShadow: 3,p: 1,with:'100%',textAlign:'center',bgcolor:"#fff", borderRadius: 2}}>
              <div className="img-center">        <img src={img3} alt="" /></div>
              <h4 className="sub-headding m0">Make it Work for You:</h4>
              <p className="f14 m50">Use Iom AI to tell you the best bacterial levels for your Performance</p>
            </Box>
              </Grid>
              <Grid  item xl={3} lg={3} md={3} sm={6} xs={12}>
              <Box className="sens-cards"  sx={{ boxShadow: 3,p: 1,with:'100%',textAlign:'center',bgcolor:"#fff", borderRadius: 2}}>
              <div className="img-center">        <img src={img4} alt="" /></div>
              <h4 className="sub-headding m0">Edit to Ace your SEnS:</h4>
              <p className="f14 m50">Recruit your bacteria through the right food customised to Ace Performance</p>
            </Box>
              </Grid>
            
            </Grid>
          
          </div>
          

       </div>
       <div className='section works'>
       <h1 className='headding mt0'>How Does it Works</h1>
       <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    // date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<DownloadForOfflineIcon style={{ height:"50px",width:"50px"}}/>}
  >
    <h3 className="vertical-timeline-element-title">Download the app</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
    {/* <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p> */}
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="after 10 days"
    // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon= {<img src={kit} style={{ height:"50px",width:"50px",borderRadius:'50%'}}/>}
   
  >
    <h3 className="vertical-timeline-element-title">Order the kit</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
    <p>The Kit Comes equipped for ease of use and hygiene</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="after 15 days"
    // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<LocalShippingRoundedIcon style={{ height:"50px",width:"50px"}}/>}
  >
    <h3 className="vertical-timeline-element-title">Schedule sample pick</h3>
    {/* {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
   {/* <p></p> */}
    </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="after 25 days"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Receive Report</h3>
    {/* {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
     <p>Know the bacteria impacting your Sleep, Energy and Stress. Iom also tells you what the optimum levels of your bacteria should be </p> 
 
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="after 30 days"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Schedule Expert Consult</h3>
    {/* {/* <h4 className="vertical-timeline-element-subtitle">Online Course</h4> */}
  <p> The Ayurvedic Consult provides a holistic  solution that is MEDIATED BY YOUR MICROBIOME</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    // date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Your customized Plans</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Certification</h4> */}
    <p>The Ayurvedic Consult considers, contemplates and combines all inputs to  evolves  into a Custom-Made Meal Plan.</p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    // icon={<StarIcon />}
     date="after 60 days"
  />
</VerticalTimeline>

       <div>

       </div>
       </div>
       <div className='section enables'>
       <h1 className='headding mt0'>What can Iom Enables</h1>
  
       <div class="thought">I Want to Sleep Better</div>

       <OwlCarousel className='owl-theme' loop  items={4}  {...options}>
    <div class='item'>
    <div class="talk-bubble tri-right round btm-left">
  <div class="talktext">
    <p>I Want to Sleep Better</p>
  </div>
</div>
    </div>
    <div class='item'>
    <div class="talk-bubble tri-right round btm-left">
  <div class="talktext">
    <p>I Want to be more energetic</p>
  </div>
</div>
    </div>
    <div class='item'>
    <div class="talk-bubble tri-right round btm-left">
  <div class="talktext">
    <p>feel less Fatigue</p>
  </div>
</div>
    </div>
    <div class='item'>
    <div class="talk-bubble tri-right round btm-left">
  <div class="talktext">
    <p>I Want Fewer Night Awakening</p>
  </div>
</div>
    </div>
    <div class='item'>
    <div class="talk-bubble tri-right round btm-left">
  <div class="talktext">
    <p>I Want to do More in a day</p>
  </div>
</div>
    </div>
    <div class='item'>
    <div class="talk-bubble tri-right round btm-left">
  <div class="talktext">
    <p>Manage Stress Well</p>
  </div>
</div>
    </div>
    <div class='item'>
    <div class="talk-bubble tri-right round btm-left">
  <div class="talktext">
    <p>Be more Productive</p>
  </div>
</div>
    </div>
    <div class='item'>
    <div class="talk-bubble tri-right round btm-left">
  <div class="talktext">
    <p>Manage Low Days Better</p>
  </div>
</div>
    </div>
    <div class='item'>
    <div class="talk-bubble tri-right round btm-left">
  <div class="talktext">
    <p>I Want to Feel Less Anxious</p>
  </div>
</div>
    </div>
    <div class='item'>
    <div class="talk-bubble tri-right round btm-left">
  <div class="talktext">
    <p>I Want to Sleep Longer</p>
  </div>
</div>
    </div>
    <div class='item'>
    <div class="talk-bubble tri-right round btm-left">
  <div class="talktext">
    <p>I Want Better Health</p>
  </div>
</div>
    </div>
  
</OwlCarousel>

       </div>
       <div className='section plans'>
       <h1 className='headding mt0'>Our Plans</h1>
       
       <Grid container spacing={2}>
              <Grid item    xl={6} lg={6} md={6} sm={6} xs={12} >
              <Box   sx={{ boxShadow: 3,p: 1,textAlign:'center',maxWidth:'300px', m: "0 auto", bgcolor:"#002060", borderRadius: 2}}>
           <h1>Know</h1>
           <p>Get a complete landscape mapping of your gut microbiome.
        
<ul style={{textAlign:'left'}}>
  <li>Metabolism,</li>
  <li>Immunity and Systemic performance</li>
  <li>Sleep</li>
  <li>Cognitive Efficiency</li>
  <li>Emotional Well-Being.
</li>
</ul>

           </p>
           
           <h1 className='mb0' style={{color:'#E1AB3B'}}>Rs. 7,999*</h1>
           <sub style={{color:"#fff",fontSize:"12px"}}>*including GST</sub>


             </Box>
             </Grid>
             <Grid item    xl={6} lg={6} md={6} sm={6} xs={12} >
              <Box   sx={{ boxShadow: 3,p: 1,textAlign:'center',maxWidth:'300px', m: "0 auto", bgcolor:"#002060", borderRadius: 2}}>
           <h1>Perform</h1>
           <p>Add that razor edge to your performance by improving your Sleep quality.</p>
          <ul style={{textAlign:'left'}}>
            <li>learning about the presence and impact of bacteria</li>
            <li>specialist consultations</li>
            <li>Ayurvedic constitution analysis</li>
            <li>personalised food charts`</li>
          </ul>
         
           <h1 className='mb0' style={{color:'#E1AB3B'}}>Rs. 15,999*</h1>
           <sub style={{color:"#fff",fontSize:"12px"}}>*including GST</sub>


             </Box>
             </Grid>
             </Grid>
             <div>
             <Button variant="contained"  style={{backgroundColor:'#E1AB3B',marginTop:'10px'}}>Order Now</Button>

             </div>
       </div>
       <div className='contact' style={{padding:'5px 2%'}}>
       <h2 className='m0' style={{textAlign:'center'}}>Have questions? </h2>
       <Grid container style={{textAlign:'center',alignItems:'center',paddingBottom:'16px'}}>
        <Grid item    xl={3} lg={3} md={3} sm={0}  xs={0} >   </Grid>
        <Grid item    xl={3} lg={3} md={3} sm={6} xs={12} >   <p  className='mb0'><LocalPhoneIcon className='contact-icons'/>+91-9945647072</p></Grid>
        <Grid item     xl={3} lg={3} md={3} sm={6} xs={12}>  <p  className='mb0'><MailIcon className='contact-icons'  />better@iombio.com</p> </Grid>  
        <Grid item    xl={3} lg={3} md={3}sm={0}  xs={0} >   </Grid>
      </Grid>   
       </div>
   </div>
  )
}

export default Home;