
import React, { useEffect,useState } from 'react'
import {api} from "./api";
import "./App.css"
const App = () => {

  const [ascore, setascore] = useState([])
  const [hscore, sethscore] = useState([])
  const [status, setstatus] = useState([])
  const [toss, settoss] = useState([])
  
  
  
  useEffect(()=>{
    api().then((data)=>{
      
      
      console.log("newwwwwwwwwwwwwwwwwwwwwww",(data))
      setascore(data.results.live_details.match_summary.away_scores)
      sethscore(data.results.live_details.match_summary.home_scores)
      setstatus(data.results.live_details.match_summary.status)
      settoss(data.results.live_details.match_summary.toss)
      
    }).catch()
    ;

  },[]);
  return (
    <div>
      <div class='card'>

      <p>{status}</p>
      <p>{toss}</p>
      <p>{ascore}</p> 
      <p>{hscore}</p>
      </div>
    </div>
  )
}

export default App