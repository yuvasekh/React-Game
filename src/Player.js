import "./App.css";
export default function Player(props)
{
    return(
      <div>
        <br></br>
        <br></br>
        <h1>Total Score</h1>
        <br></br>
        <h1>{props.pTotalscore}</h1>
        <br></br>
        <h1>Current Score</h1>
        <br></br>
        <h1>{props.pscore} </h1>
      </div>
    )
}