import './App.css';
import { useState } from "react"
import mochaRizz from "./assets/mocha rizz.gif"

// no images
import huhCat from "./assets/huh cat.gif"
import judgementalCat from "./assets/judgemental cat.gif"
import sadMeowCat from "./assets/sad meowing cat.gif"
import baseBanana from "./assets/banana cat.webp"
import bananaCatCrying1 from "./assets/banana cat crying.gif"
import bananaCatCrying2 from "./assets/banana-cat-crying more.gif"
import pleaseCat from "./assets/pleasecat.gif"
import shakingfootcat from "./assets/shakingFootCat.gif"
import sadPringlesCat from "./assets/sad pringles cat.gif"
import chosoCat from "./assets/choso cat.gif"
import dancingCat from "./assets/dancingcat.gif"

// yes images
import happyCat from "./assets/happy cat.gif"
import kissCat from "./assets/kiss-kitty.gif"
import mochaHug from "./assets/mocha hugging milk.gif"




import smugDog from "./assets/smug dog.gif"

/* button functionality:
clicking no will generate 8 messages; the eight phrase will remove the no button

*/
function App() {
  const noImages = [
    huhCat, 
    baseBanana, 
    bananaCatCrying1, 
    bananaCatCrying2, 
    shakingfootcat, 
    pleaseCat,
    pleaseCat,
    sadPringlesCat,
    judgementalCat,
    chosoCat,
    dancingCat
  ]
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
    "BABEEE i'm side eyeing you right nowwww",
    "Ok Babe, I'll stop asking you 🙁",
    "YOU RLY THOUGHT BABE 😤",
    "EMERGENCY PROTOCOL: installing mandatory update...😈",
  ]
  // const yesImages = [happyCat, kissCat];
  const [agreed, setAgreed] = useState(false);
  const [isFinalStraw, setFinalStraw] = useState(false);
  const [objectionCount, setObjectionCount] = useState(0);
  const [isYesHovered, setYesHovered] = useState(false);
  const [isNoHovered, setNoHovered] = useState(false);
  const [isUpdating, setUpdate] = useState(false);
  const [url, setUrl] = useState(mochaRizz)
  const [noText, setNoText] = useState("No😤")
  const yesButtonStyle = {
    backgroundColor: isYesHovered ? "#E31837" : "#FF033E",
    transform: isYesHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'background-color 0.2s ease, transform 0.2s ease',
  }

  const noButtonStyle = {
    backgroundColor: isNoHovered ? "#FFC0CB" : "#FFC0CB",
    transform: isNoHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'background-color 0.2s ease, transform 0.2s ease',
  }





  function handleObjection() {
    if (objectionCount > phrases.length - 2) return;
    setObjectionCount((prev) => prev + 1);
       setUrl(noImages[objectionCount])
    if (objectionCount === phrases.length - 2) {
      setUpdate(true);
      setUrl(smugDog);
      
      setTimeout(() => {
        setFinalStraw(true);
        setUrl(mochaRizz)
      }, 2500)
      return;
    } 
  }

  function handleYesClick() {
    setUrl(mochaHug);
    setAgreed(true)
  }







  return (

    <div className="App">
      <img src="./assets/happy cat.gif" alt="" />
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
