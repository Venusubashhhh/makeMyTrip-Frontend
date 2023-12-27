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
import { createContext, useContext, useEffect, useState } from 'react';
import CheckBoxComponent from './CheckBoxComponent';
import Login from './Login';
import Otp from './Otp';
import Spinner from 'react-bootstrap/Spinner';
import Password from './Password';
import Sample from './Sample';
import Otpsuccess from './Otpsuccess';
import Profile from './Profile';
import Booking from './Booking';
import Seatbooking from './Seatbooking';
import SizesExample from './SizesExample';
export const Flight=createContext();
export const Flightss=createContext();
export const Signup=createContext()
export const Otpp=createContext();
export const Emailcontext=createContext();
export const Flightcontext=createContext();
function App() {
const [flights,setflights]=useState([]);
const [sign,setsign]=useState(false);
const [passflag,setpassflag]=useState(false);
const[confirmflag,setconfirmflag]=useState(false);
const [username,setusername]=useState('');
const[email,setemail]=useState('')
const[otpflag,setotpflag]=useState(false);
const [logo,setlogo]=useState();
const[from,setfrom]=useState();
const[to,setto]=useState();
const[flightname,setflightname]=useState();
const[arrtime,setarrtime]=useState();
const[deptime,setdeptime]=useState();
const[price,setprice]=useState()
const[durationh,setdurationh]=useState();
const[durationm,setdurationm]=useState();
const[date,setdate]=useState();
const[flightid,setflightid]=useState("")
const[tax,settax]=useState();
const[bookingid,setbookingid]=useState();
useEffect(()=>{
  console.log('app.js',flights)
  

},[flights])
useEffect(()=>{
  console.log(sign)
  

},[sign])
useEffect(()=>{
  console.log(username)
  

},[username])
  return (
    <div className="App">
    
      <Flightcontext.Provider value={{from,setfrom,to,setto,flightname,setflightname,arrtime,setarrtime,deptime,setdeptime,price,setprice,durationh,setdurationh,durationm,setdurationm,logo,setlogo,date,setdate,tax,settax,flightid,setflightid,bookingid,setbookingid}}>
      <Emailcontext.Provider value={{email,setemail,username}}>
 <Routes>
  <Route path='/' element={<Flight.Provider value={{setflights,sign,setsign,passflag,setpassflag,confirmflag,setconfirmflag,username,setusername}}>  <Otpp.Provider value={{otpflag,setotpflag}}> <Home/> </Otpp.Provider> </Flight.Provider>}></Route> 
  <Route path='/mytrips' element={<Mytrips/>}></Route> 
  <Route path='/offers' element={<Offers/>}></Route>
  <Route path='/accounts' element={<Accounts/>}></Route>
  <Route path='/flights' element={<Flightss.Provider value={{flights}}><Flights/></Flightss.Provider>}></Route>
  <Route path='/trains' element={<Trains/>}></Route>
  <Route path='/hotels' element={<Hotels/>}></Route>
  <Route path='/profile' element={<Profile/>}></Route>
  <Route path='/booking' element={<Booking/>}/>
  <Route path='/seatbooking' element={<Seatbooking/>}/>
</Routes> 

</Emailcontext.Provider>
</Flightcontext.Provider>
{/* <SizesExample/> */}
{/* <Seatbooking/> */}

    </div>
  );
}

export default App;
