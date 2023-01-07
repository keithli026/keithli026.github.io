import React, { useEffect, useRef, useState } from 'react'
import { Container } from "../GlobalStyle";
import Breadcrumb from "../components/Breadcrumb";
import "./conditions.scss";
const Conditions = () => {
  const shiningDot = useRef(null);
  const textBox = useRef(null);
  const [open, setOpen] = useState(false);
  const showDetails = () => {
    setOpen(!open);
  }
  useEffect(()=> {
    // console.log(open);
    if(open) {
      shiningDot.current.classList.add("show");
      textBox.current.classList.add("show");
    } else {
      shiningDot.current.classList.remove("show");
      textBox.current.classList.remove("show");
    }
  });
  return (
    <>
      <Container>
        <Breadcrumb />
        <div className="bodychart">
          <div className='image_wrapper'>
          <img src={process.env.PUBLIC_URL + '/bodychart.png'} alt="body chart"></img>
          </div>
          <div className="dots" id="dot1" onClick={showDetails}>
            <img src={process.env.PUBLIC_URL + '/dot.png'} alt="dot"></img>
          </div>
          <div className="shining_dots" id="shining_dot1" ref={shiningDot} onClick={showDetails}>
            <img src={process.env.PUBLIC_URL + '/shining_dot.png'} alt="shinging dot"></img>
          </div>
          <div className='textboxs' id="box1" ref={textBox} onClick={showDetails}>
            <div className='title'>Title</div>
            <div className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
          </div>
        </div>
      </Container>
    </>

  )
}

export default Conditions