import logo from './logo.svg';
import './App.css';
import { useState } from "react"
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
  "pretty please🙏?", 
  "pretty pretty please🙏?", 
  "if you keep saying no, It will make me very sad",
  "if you keep saying no, It will make me very very sad",
  "if you keep saying no, It will make me very very very sad",
  "Ok Babe, I'll stop asking :((",
  "YOU RLY THOUGHT BABE",
  "Ok now watch me get rid of the no button 😈",
  ]
  const [url, setUrl] = useState("https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif")
  // const phrases = ["no", "please", "watch me get rid of the button"];
  const [agreed, setAgreed] = useState(false);
  const [isFinalStraw, setFinalStraw] = useState(false);
  const [objectionCount, setObjectionCount] = useState(0);
  const [isHovered, setHovered] = useState(false);
  function handleObjection() {
    console.log("no selected gaming");
    setObjectionCount(objectionCount + 1);
    if (objectionCount === phrases.length - 1) {
      setFinalStraw(true);
      return;
    }
  }

  const yesButtonStyle = {
    backgroundColor: isHovered ? "#FF033E" : "#FF033E",
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
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
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >Yes🥰</button>
              :
              null
            }
          </div>

          {!isFinalStraw && !agreed ?
            <button 
            //   onMouseEnter={setHovered(true)}
            //   onMouseLeave={setHovered(false)}
              className="no"
              // style={buttonStyle}
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
