import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './pages/navbar';
import App from "./pages/newhome";
import Official from './pages/official';
import Scorecard from './pages/scorecard';
import Stats from "./pages/stats"
import Team from "./pages/team"


import { BrowserRouter, Routes, Route } from "react-router-dom";






// export default function App1() {
  
//   return (
//     // <BrowserRouter>
//     //   <Navbar/>
//     //   <Routes>
          
//     //       <Route path="/" element={<Summary />} />
//     //       {/* <Route path="/official" element={<Official />} />
//     //       <Route path="/score" element={<Scorecard />} />
//     //       <Route path="/stats" element={<Stats />} />
//     //       <Route path="/team" element={<Team />} /> */}
          
           
          
          
          
          
          
          

          
   
          
          
          
//     //   </Routes>
      
//     // </BrowserRouter>
      
//  );
// // }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
