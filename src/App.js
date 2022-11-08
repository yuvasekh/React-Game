import { useEffect, useState } from "react";
import "./App.css";
import giffyimg from "./giffyimg.jfif";
import Player from "./Player";
function App() {
  const [gif, setgif] = useState();
  const [winner, setwinner] = useState("");
  const [who, setwho] = useState("player1");
  const [score, setscore] = useState(0);
  const [p1score, setp1score] = useState(0);
  const [p1Totalscore, setp1Totalscore] = useState(0);
  const [p2score, setp2score] = useState(0);
  const [p2Totalscore, setp2Totalscore] = useState(0);
  const [p1bcol, setp1bcol] = useState();
  const [p2bcol, setp2bcol] = useState();
  const [p1clabcol, setp1clabcol] = useState("card");
  const [p2clabcol, setp2clabcol] = useState("card2");
  useEffect(()=>
  {
    if(p1Totalscore>=50){
      document.getElementById("myBtn").disabled="true"
    document.getElementById("myBt").disabled="true"
    setwinner("player1 wins")
    setgif("gifid")
    }
    if(p2Totalscore>=50){
      document.getElementById("myBtn").disabled="true"
    document.getElementById("myBt").disabled="true"
    setwinner("player2 wins")
    setgif("gifid")
    }
  },[p1Totalscore,p2Totalscore])
  function holdi()
  {
    if(who=="player1")
    {
      var ca=p1score+p1Totalscore;
      setp1Totalscore(ca);
      setwho("player2")
      setp1bcol("p1colo")
      setp2bcol("bcolo")
      setp1score(0)    
}
  if(who=="player2")
  {
      var ca=p2score+p2Totalscore;
      setp2Totalscore(ca);
      setwho("player1")
      setp2bcol("p1colo")
      setp1bcol("bcolo")
      setp2score(0)
  }
  }
  function yuva() {
    var a = Math.floor(Math.random() * 6) + 1;
    setscore(a);
  if(p1Totalscore<=50)
  {
    if(who==="player1")
    {
      if(a!==6)
      {
        var cal=p1score+a;
        setp1score(cal)
      }
      else{
        setp1score(0)
        setwho("player2")
        setp1bcol("p1colo")
        setp2bcol("bcolo")
    }
    }
  }
 if(p2Totalscore<=50)
 {
    if(who==="player2")
    {
    
      if(a!==6)
      {
        var cal=p2score+a;
        setp2score(cal)
      }
      else{
        setp2score(0)
        setwho("player1")
        setp2bcol("p1colo")
        setp1bcol("bcolo")
      }
    }
  }
  }
  return (
    <div class="whole">
      <br></br>
      <br></br>
    <div class={p1clabcol} id={p1bcol}>
      <Player pTotalscore={p1Totalscore} pscore={p1score}/>
      </div>
      <div class="middle">
        <br></br>
        <br></br>
        <h1>Score : {score}</h1>
        <br></br>
        <button id="myBtn" onClick={yuva}>
          roll
        </button>
        <br></br>   <br></br>
        <button id="myBt" onClick={holdi}>
          hold
        </button>
        <br></br>
        <br></br>
        <center>
          <h1>{winner}</h1>

          <img id={gif} src={giffyimg}></img>
        </center>
      </div>
     <div class={p2clabcol} id={p2bcol}>
      <Player pTotalscore={p2Totalscore} pscore={p2score}/>
      </div>
    </div>
  );
}
export default App;
