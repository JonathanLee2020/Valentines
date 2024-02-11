import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from "react"
import mochaRizz from "./assets/mocha rizz.gif"

// no images
import huhCat from "./assets/huh cat.gif"
import judgementalCat from "./assets/judgemental cat.gif"
import sadMeowCat from "./assets/sad meowing cat.gif"
import baseBanana from "./assets/banana cat.webp"
import bananaCatCrying1 from "./assets/banana cat crying.gif"
import bananaCatCrying2 from "./assets/banana-cat-crying more.gif"
import pleaseCat from "./assets/pleasecat.gif"

// yes images
import happyCat from "./assets/happy cat.gif"
import kissCat from "./assets/kiss-kitty.gif"
import mochaHug from "./assets/mocha hugging milk.gif"




import smugDog from "./assets/smug dog.gif"

/* button functionality:
clicking no will generate 8 messages; the eight phrase will remove the no button

*/
function App() {
  const noImages = [huhCat, sadMeowCat, ]
  const phrases = [
    "No😤",
    "are you sure?",
    "are you really sure?",
    "are you really, really sure?",
    "please? uwu🥺",
    "pretty please🙏",
    "pretty pretty please🙏",
    "if you keep saying no, It will make me very sad",
    "if you keep saying no, It will make me very very sad",
    "Ok Babe, I'll stop asking you 🙁",
    "YOU RLY THOUGHT BABE 😤",
    "installing mandatory update j.x12: emergency protocol: penguin 😈🐧",
  ]
  const yesImages = [happyCat, kissCat];
  const [agreed, setAgreed] = useState(false);
  const [isFinalStraw, setFinalStraw] = useState(false);
  const [objectionCount, setObjectionCount] = useState(0);
  const [isYesHovered, setYesHovered] = useState(false);
  const [isNoHovered, setNoHovered] = useState(false);
  const [isUpdating, setUpdate] = useState(false);
  const [url, setUrl] = useState(mochaRizz)
  // const phrases = ["no", "please", "watch me get rid of the button"];
  const yesButtonStyle = {
    backgroundColor: isYesHovered ? "#FF033E" : "#FF033E",
    transform: isYesHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'background-color 0.2s ease, transform 0.2s ease',
  }

  const noButtonStyle = {
    backgroundColor: isNoHovered ? "#eec0c8" : "##FFC0CB",
    transform: isNoHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'background-color 0.2s ease, transform 0.2s ease',
  }





  function handleObjection() {
    console.log("no selected gaming");
    if (objectionCount === phrases.length - 2 && isUpdating === false) {
      console.log("about to delete no...")
      setUpdate(true);
      setUrl(smugDog);
      setTimeout(() => {
        setFinalStraw(true);
        setUrl(mochaRizz)
      }, 3000)
      return;
    } else if (isUpdating === true) return
    else{
       setObjectionCount(objectionCount + 1);
    }
  }

  function handleYesClick() {
    console.log("clicked");
    setUrl(mochaHug);
    setAgreed(true)
  }







  return (

    <div className="App">
      {/* <img src={bananaCatCrying1} alt="" /> */}
      <img src="./assets/happy cat.gif" alt="" />
      {/* <div className="container"> */}
      <div className="title__text">
        { }
        <h1>
          {!agreed ? "Will you be my Valentines?" : "YAYYYY"}
        </h1>
      </div>
      <div className="container">

        <img
          className='rizz'
          src={url}

        />

        <div className="button__container">
          <div>
            {!agreed ?
              <button
                className="yes"
                style={yesButtonStyle}
                onClick={handleYesClick}
                onMouseEnter={() => setYesHovered(true)}
                onMouseLeave={() => setYesHovered(false)}
              >Yes🥰</button>
              :
              null
            }
          </div>

          {!isFinalStraw && !agreed ?
            <button
              onMouseEnter={() => {
                setNoHovered(true)
              }
              }
              onMouseLeave={() => setNoHovered(false)}
              className="no"
              style={noButtonStyle}
              onClick={handleObjection}
            >{phrases[objectionCount]}</button>
            :
            null
          }

        </div>
        <div className="subtext">
          <h2>{agreed ? "looking forward to the best day ever hehe" : null}</h2>

        </div>
      </div>

    </div >
  );
}

export default App;
