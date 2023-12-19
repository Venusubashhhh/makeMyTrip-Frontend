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
import { createContext, useState } from 'react';
const Flight=createContext();
function App() {
const [flight,setflight]=useState([]);

  return (
    <div className="App">
<Routes>
  <Route path='/' element={<Flight.Provider value={{setflight}}><Home/></Flight.Provider>}></Route>
  <Route path='/mytrips' element={<Mytrips/>}></Route> 
  <Route path='/offers' element={<Offers/>}></Route>
  <Route path='/accounts' element={<Accounts/>}></Route>
  <Route path='/flights' element={<Flights/>}></Route>
  <Route path='/trains' element={<Trains/>}></Route>
  <Route path='/hotels' element={<Hotels/>}></Route>
</Routes>


    </div>
  );
}

export default App;
