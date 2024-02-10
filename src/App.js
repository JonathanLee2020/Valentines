import logo from './logo.svg';
import './App.css';
import { useState } from "react"
/* button functionality:
clicking no will generate 8 messages; the eight phrase will remove the no button

*/
function App() {
  const phrases = [
  "are you sure?", 
  "are you really sure?", 
  "are you really, really sure?",
  "please? uwu", 
  "pretty please?", 
  "if you keep saying no, It will make me very sad",
  "if you keep saying no, It will make me very very sad",
  "if you keep saying no, It will make me very very very sad",
  "Ok Babe, I'll stop asking, just enter the name of the person you are spending valentines with",
  "YOU RLY THOUGHT BABE",
  "Ok now watch me get rid of the no button 😈",
  ]
  const [url, setUrl] = useState("https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif")
  // const phrases = ["no", "please", "watch me get rid of the button"];
  const [agreed, setAgreed] = useState(false);
  const [isFinalStraw, setFinalStraw] = useState(false);
  const [objectionCount, setObjectionCount] = useState(0);
  function handleObjection() {
    console.log("no selected");
    setObjectionCount(objectionCount + 1);
    if (objectionCount === phrases.length - 1) {
      setFinalStraw(true);
      return;
    }
  }
  return (


    <div className="App">
      {/* <div className="container"> */}
      <div className="title__text">
        <h1>Will you be my Valentines?</h1>
      </div>
      <div className="container">

        <img
          className='rizz'
          src={url}
        />

        <div className="button__container">
          {!agreed ?
            <button className='yes'
              onClick={() => {
                console.log("clicked");
                setUrl("https://gifdb.com/images/high/milk-and-mocha-seeing-each-other-5uo3is4d1mnep5kj.gif");
                setAgreed(true)
              }
              }
              onMouseEnter={(() => {

              })}
            >Yes</button>
            :
            null
          }

          {!isFinalStraw ?
            <button className="no"
              onClick={handleObjection}
            >{phrases[objectionCount]}</button>
            :
            null
          }

        </div>
      </div>

    </div >
  );
}

export default App;
