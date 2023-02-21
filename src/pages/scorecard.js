
import React, { useEffect,useState } from 'react'
import {api} from "../api";
import "../App.css"
const Scorecard = () => {

  const [refree, setrefree] = useState([])
  const [ump1, setump1] = useState([])
  const [ump2, setump2] = useState([])
  const [umptv, setumptv] = useState([])
  
  
  
  useEffect(()=>{
    api().then((data)=>{
      
      
      console.log("temperatreeee",data)
      setrefree(data.results.fixture.match_title)
      setump1(data.results.fixture.venue)
      setump2(data.results.fixture.start_date)
      setumptv(data.results.fixture.end_date)
      
    }).catch()
    ;

  },[]);
  return (
    <div>
      <div class='card'>
        <h1>scorecard</h1>
      <p>{refree}</p> 
      <p>{ump1}</p>
      <p>{ump2}</p>
      <p>{umptv}</p>
      </div>
    </div>
  )
}

export default Scorecard