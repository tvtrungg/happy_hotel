import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);
// import React, { useEffect, useState} from 'react';
// import axios from 'axios';
// const Homesceen = () => {
 
//   const [data, setData] = useState([])

//   useEffect(() => {
//     const fetchData = async () =>{
 
//       try {
//         const {data: response} = (await axios.get('api/room/getAllRoom')).data;
//         setData(response);
//       } catch (error) {
//         console.error(error.message);
//       }
  
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//     <h1> Home Screen </h1>
//       <h1>they are {data.length} rooms</h1>

//     </div>
//   )
// }

// export default Homesceen;

// import '../assets/css/index.css';

// import Header from './components/Header';
// import Footer from './components/Footer';
// import HomeScreen from './screen/homescreen';
// import { BrowserRouter, Route, Link } from 'react-router-dom';

// function app(){
//     return (
//         <div className="app">
//             <Header/>
//             <BrowserRouter>
            
//             </BrowserRouter>
//         </div>
//     );
// }
// export default app;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
