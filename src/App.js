import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from "react"
/* button functionality:
clicking no will generate 8 messages; the eight phrase will remove the no button

*/
function App() {
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
  "Ok Babe, I'll stop asking :((",
  "YOU RLY THOUGHT BABE",
  "installing mandatory update: emergency penguin protocol, codename: j.x12 ....😈",
  ]
  const catSources = [];
  const [url, setUrl] = useState("https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif")
  // const phrases = ["no", "please", "watch me get rid of the button"];
  const [agreed, setAgreed] = useState(false);
  const [isFinalStraw, setFinalStraw] = useState(false);
  const [objectionCount, setObjectionCount] = useState(0);
  const [isYesHovered, setYesHovered] = useState(false);
  const [isNoHovered, setNoHovered] = useState(false);
  const [isUpdating, setUpdate] = useState(false);

  const isInitialMount = useRef(true);

 
  function handleObjection() {
    console.log("no selected gaming");
    setObjectionCount(objectionCount + 1);
    if (objectionCount === phrases.length - 2) {
      console.log("about to delete no...")
      setUpdate(true);
      setTimeout(() => {
        setFinalStraw(true);
      }, 1000)
      return;
    }
  }

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


  
  
  return (


    <div className="App">
      {/* <div className="container"> */}
      <div className="title__text">
        {}
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
                onClick={() => {
                  console.log("clicked");
                  setUrl("https://gifdb.com/images/high/milk-and-mocha-seeing-each-other-5uo3is4d1mnep5kj.gif");
                  setAgreed(true)
                }
                }
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
                setNoHovered(true)}
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
