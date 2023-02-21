import React from 'react'

export const api =()=>{
    const url = `https://api.cricapi.com/v1/cricScore?apikey=187a341e-7169-49f1-bbc8-b0d7a68f2516`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e0c5a88ba9msh4e62ab63556fc5dp193248jsn7b0a67754ae0',
            'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
        }
    };

    return fetch(url).then((response)=>response.json()).catch((e) => console.log(e))
    // return fetch('https://cricket-live-data.p.rapidapi.com/match/2432999', options)
	// .then(response => response.json())
	// // .then(response => console.log(response.results.fixture.id))
	// .catch(err => console.error(err));
}

