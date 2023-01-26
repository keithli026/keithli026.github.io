import React, { useEffect, useRef, useState, useReducer } from 'react'
import { Container } from "../GlobalStyle";
import Breadcrumb from "../components/Breadcrumb";
import "./conditions.scss";
const Conditions = () => {
  const dot = useRef([]);
  const shiningDot = useRef([]);
  const textBox = useRef([]);
  const list = [...Array(3).keys()];
  const initialState = {
    dot0: false,
    dot1: false,
    dot2: false,
    dot3: false,
    dot4: false,
    dot5: false,
    dot6: false,
    dot7: false
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "dot0":
        return { dot0: !state.dot0, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false };
      case "dot1":
        return { dot0: false, dot1: !state.dot1, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false };
      case "dot2":
        return { dot0: false, dot1: false, dot2: !state.dot2, dot3: false, dot4: false, dot5: false, dot6: false, dot7: false };
      case "dot3":
        return { dot0: false, dot1: false, dot2: false, dot3: !state.dot3, dot4: false, dot5: false, dot6: false, dot7: false };
      case "dot4":
        return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: !state.dot4, dot5: false, dot6: false, dot7: false };
      case "dot5":
        return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: !state.dot5, dot6: false, dot7: false };
      case "dot6":
        return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: !state.dot6, dot7: false };
      case "dot7":
        return { dot0: false, dot1: false, dot2: false, dot3: false, dot4: false, dot5: false, dot6: false, dot7: !state.dot7 };
      default:
        return initialState;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const showDetails = (index) => (element) => {
    dispatch({type: `dot${index}`});
  }
  const resetDotsState = () => {
    for(let i = 0; i < dot.current.length; i++) {
      dot.current[i].classList.remove("hide")
      shiningDot.current[i].classList.remove("show");
      textBox.current[i].classList.remove("show");
    }
  }
  useEffect(() => {
    let isStageChanged = false;
    for(let x in state) {
      if(state[x]) {
        isStageChanged = true;
        let i = x.slice(3);
        resetDotsState();
        dot.current[i].classList.add("hide")
        shiningDot.current[i].classList.add("show");
        textBox.current[i].classList.add("show");
      }
    }
    if(!isStageChanged) {
      resetDotsState();
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
          {list.map(x => (
            <>
              <div className="dots" id={`dot${x}`} ref={el => dot.current[x] = el} onClick={showDetails(x)}>
                <img src={process.env.PUBLIC_URL + '/dot.png'} alt={`dot${x}`}></img>
              </div>
              <div className="shining_dots" id={`shining_dot${x}`} ref={el => shiningDot.current[x] = el} onClick={showDetails(x)}>
                <img src={process.env.PUBLIC_URL + '/shining_dot.png'} alt={`shining_dot${x}`}></img>
              </div>
              <div className='textboxs' id={`box${x}`} ref={el => textBox.current[x] = el} onClick={showDetails(x)}>
                <div className='title'>Title</div>
                <div className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
              </div>
            </>
          ))}
        </div>
      </Container>
    </>

  )
}

export default Conditions