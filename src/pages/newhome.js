
import React, { useEffect, useState } from 'react'
import { api } from "../api";
import "../App.css"
const Home = () => {

    //   const [ascore, setascore] = useState([])
    //   const [hscore, sethscore] = useState([])
    //   const [status, setstatus] = useState([])
    //   const [toss, settoss] = useState([])
    const [data, setdata] = useState([])


      useEffect(()=>{
        api().then((data)=>{


          console.log("newwwwwwwwwwwwwwwwwwwwwww",(data))
        //   setascore(data.results.live_details.match_summary.away_scores)
        //   sethscore(data.results.live_details.match_summary.home_scores)
        //   setstatus(data.results.live_details.match_summary.status)
        //   settoss(data.results.live_details.match_summary.toss)
          setdata(data.data)

        }).catch()
        ;

      },[]);

    return (
        <div>
            <h1 class='heading'> Cricket App</h1>
            <div class='card'>
                <div class="carding">
                    <div class="image">
                        <img srcSet='https://g.cricapi.com/img/teams/616-637928917956919054.png' />
                        <p class="vs"> VS</p>
                        <img srcSet='https://g.cricapi.com/img/teams/616-637928917956919054.png' />

                    </div>
                    <div class="image-text">
                        <p>team1</p>
                        <p class="vs2"> VS</p>
                        <p>team2</p>
                    </div>
                    <p><b>Match : </b> t20</p>
                    <p> <b>Date and Time :</b> 2023-02-25T09:00:00</p>

                    <p><b>status : </b> Status</p>



                </div>

                {/* <p>{status}</p>
      <p>{toss}</p>
      <p>{ascore}</p> 
      <p>{hscore}</p> */}
                {data.map((i) => (
                    <div class="carding">
                        <div class="image">
                            <img srcSet={i.t1img} />
                            <p class="vs"> VS</p>
                            <img srcSet={i.t2img} />

                        </div>
                        <div class="image-text">
                            <p>{i.t1}</p>
                            <p class="vs2"> VS</p>
                            <p>{i.t2}</p>
                        </div>
                        <p><b>Match : </b> {i.matchType}</p>
                        <p> <b>Date and Time :</b> {i.dateTimeGMT}</p>

                        <p><b>status : </b> {i.status}</p>



                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home