import Slider from "react-slick";
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from "../GlobalStyle";
import "./home.scss";
import { getPhysiotherapists } from "../PhysiotherapistInfo";
const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false
        }
      }
    ]
  };
  const physiotherapists = getPhysiotherapists();
  return (
    <>
      <Slider {...settings}>
        <div className="image-wrapper">
          <div className="textbox">
            <h2>Title 1</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <img src={process.env.PUBLIC_URL + '/image_18_to_6.png'} alt="slide 1"></img>
        </div>
        <div className="image-wrapper">
          <div className="textbox">
            <h2>Title 2</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <img src={process.env.PUBLIC_URL + '/image_18_to_6.png'} alt="slide 1"></img>
        </div>
        <div className="image-wrapper">
          <div className="textbox">
            <h2>Title 3</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <img src={process.env.PUBLIC_URL + '/image_18_to_6.png'} alt="slide 1"></img>
        </div>
      </Slider>
      <Container className="promo-section">
        <h2>Top Rated Local Physio Clinic in Booragoon & East Fremantle</h2>
        <div className="content">
          <p>Move Physiotherapy has an experienced physiotherapy and remedial massage team. We provide a premium yet affordable service to residents surrounding Booragoon and East Fremantle.</p>
          <p>For immediate pain relief, we provide professional, hands-on treatment including manipulative physiotherapy, remedial massage, sports physiotherapy and dry needling.</p>
          <p>We provide comprehensive assessments of your movement, with longer appointment times to truly assess areas of muscle tightness. We combine state of the art technology such as force platforms and dynamometers to objectively measure deficits in muscle strength and have a full rehab gym to take you through exercises to ensure you remain pain free.</p>
          <p>Our team can get you back to the activities you love in a timely and efficient manner, and empower you to ensure these injuries do not reoccur. </p>
        </div>
        <div className="video_wrapper">
          <iframe src="https://www.youtube.com/embed/pZxkV1nI1Bk" title="promo video"></iframe>
        </div>
      </Container>
      <div className="promo-section2">
        <Container>
          <div className="content">
            <h2>Why You Should Choose Us:</h2>
            <ul>
              <li>Discounted Standard and Extended Initial Appointments – Get a Good Understanding of Your Pain!</li>
              <li>Longer 30 minute follow up consultations</li>
              <li>Experienced Physiotherapy and Remedial Massage team</li>
              <li>Understand the root cause of your aches and pains</li>
              <li>Targeted rehabilitation of your injuries utilising our fully equipped gym setting</li>
              <li>Bulk Billing for DVA Patients (White and Gold Card)</li>
            </ul>
          </div>
        </Container>
      </div>
      <div className="our-services-title">
        <Container>
          <h2>Our Services</h2>
        </Container>
      </div>
      <div className="our-services-content">
        <Container>
          <div className="services">
            <div className="content">
              <img src={process.env.PUBLIC_URL + "gp.png"} alt="General Physiotherapy"></img>
              <h3>General Physiotherapy</h3>
              <p>General physiotherapy for chronic and acute conditions.</p>
            </div>
            <Link to="/services/general-physiotherapy" className="button">Learn more</Link>
          </div>
          <div className="services">
            <div className="content">
              <img src={process.env.PUBLIC_URL + "dn.png"} alt="Dry Needling"></img>
              <h3>Dry Needling</h3>
              <p>Acupuncture needles applied directly to muscular trigger points to reduce muscle tone and improve blood flow.</p>
            </div>
            <Link to="/services/dry-needling" className="button">Learn more</Link>
          </div>
          <div className="services">
            <div className="content">
              <img src={process.env.PUBLIC_URL + "er.png"} alt="Exercise Rehabilitation"></img>
              <h3>Exercise Rehabilitation</h3>
              <p>Individually tailored and supervised exercises utilising our fully equipped gym, to help you get moving again after injury or surgery.</p>
            </div>
            <Link to="/services/exercise-rehabilitation" className="button">Learn more</Link>
          </div>
          <div className="services">
            <div className="content">
              <img src={process.env.PUBLIC_URL + "sp.png"} alt="Sports Physiotherapy"></img>
              <h3>Sports Physiotherapy</h3>
              <p>Our physiotherapists have experience in a range of sports including Australian Rules Football, Gridiron, Netball and Basketball.</p>
            </div>
            <Link to="/services/sports-physiotherapy" className="button">Learn more</Link>
          </div>
          <div className="services">
            <div className="content">
              <img src={process.env.PUBLIC_URL + "mt.png"} alt="Massage Therapy"></img>
              <h3>Massage Therapy</h3>
              <p>Utilising a range of techniques to improve circulation, blood flow, reduce muscle tension and improve joint mobility.</p>
            </div>
            <Link to="/services/massage-therapy" className="button">Learn more</Link>
          </div>
          <div className="services">
            <div className="content">
              <img src={process.env.PUBLIC_URL + "paa.png"} alt="Physiotherapy After a Car Accident"></img>
              <h3>Physiotherapy After a Car Accident</h3>
              <p>Your step by step guide to claiming your insurance and receiving treatment after your car accident.</p>
            </div>
            <Link to="/services/massage-therapy" className="button">Learn more</Link>
          </div>
        </Container>
      </div>
      <div className="our-team-title">
        <Container>
          <h2>Our Team</h2>
        </Container>
      </div>
      <div className="our-team-content">
        <Container>
          <div className="members_wrapper {">
            {physiotherapists.map((physiotherapist, i) => {
              return(
                <div className="members" key={i}>
                  <img src={physiotherapist.photo} alt={physiotherapist.name}></img>
                  <h3>{physiotherapist.name}</h3>
                  <p>{physiotherapist.title}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;