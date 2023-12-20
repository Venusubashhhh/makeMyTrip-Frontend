import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Route,Routes } from 'react-router';
import Home from './Home';
import Mytrips from './Mytrips';
import Offers from './Offers';
import Accounts from './Accounts';
import Box from './Box';
import Footer from './Footer';
import Search from './Search';
import {Sel} from './Sel';
import New from './New';
import Buttonsel from './Buttonsel';
import DateLabel from './DateLabel';
import Slider from './Sliderr';
import ImageSlider from './SimpleSlider';
import Flights from './Flights';
import Trains from './Trains';
import Hotels from './Hotels';
import CardSlider from './SimpleSlider';
import SimpleSlider from './SimpleSlider';
import SimpleSlider2 from './SimpleSlider2';
import SimpleSlider3 from './SampleSlider3';
import { createContext, useEffect, useState } from 'react';
import CheckBoxComponent from './CheckBoxComponent';
import Login from './Login';
import Otp from './Otp';
import Password from './Password';
import Sample from './Sample';
import Otpsuccess from './Otpsuccess';
import Profile from './Profile';
export const Flight=createContext();
export const Signup=createContext()
function App() {
const [flights,setflights]=useState([]);
const [sign,setsign]=useState(false);
useEffect(()=>{
  console.log('app.js',flights)
  

},[flights])
useEffect(()=>{
  console.log(sign)
  

},[sign])
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Flight.Provider value={{setflights,sign,setsign}}><Home/></Flight.Provider>}></Route> 
  <Route path='/mytrips' element={<Mytrips/>}></Route> 
  <Route path='/offers' element={<Offers/>}></Route>
  <Route path='/accounts' element={<Accounts/>}></Route>
  <Route path='/flights' element={<Flight.Provider value={{flights}}><Flights/></Flight.Provider>}></Route>
  <Route path='/trains' element={<Trains/>}></Route>
  <Route path='/hotels' element={<Hotels/>}></Route>
</Routes>
    </div>
  );
}

export default App;
