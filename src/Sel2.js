import React, { useContext, useState } from 'react'
import { Data2 } from './Search'
import axios from 'axios'
export function Sel2() {
  const [city,setcity]=useState('Coimbatore')
  const[airport,setairport]=useState('Coimbatore Airport')
  const[country,setcountry]=useState('India');
  const [val,setval]=useState('');
  const [cities,setcities]=useState([{
    _id: "65796afd8eacced983fcf208",
    city: "Anaa",
    airport: "Anaa Airport",
    country: "French Polynesia",
    __v: 0
    },
    {
    _id: "65796afd8eacced983fcf209",
    city: "El Tarf",
    airport: "El Mellah Airport",
    country: "Algeria",
    __v: 0
    },
    ,])
 const{settocity,settoairport,settocountry,flag1,setflag1}=useContext(Data2);

  const fetch=()=>{
 axios.get('https://backend-mmt.onrender.com/getCities').then((res)=>{
  
 const filteredData = res.data.map(obj => {
  if ( obj.city.toLowerCase().startsWith( val.toLowerCase())) {

    return obj;
  }
}
)
console.log(filteredData);
setcities(filteredData)

 }).catch((e)=>console.log(e))
  }
  return (
    <div style={{width:"350px",height:'200px',zIndex:'4',backgroundColor:'white'}}>
      <input
  type="text"
  autoComplete="off"
  aria-autocomplete="list"
  aria-controls="react-autowhatever-1"
  className="react-autosuggest__input react-autosuggest__input--open react-autosuggest__input--focused snipcss-ZZVNJ style-hGNcM"
  placeholder="From"
  defaultValue=""
  id="style-hGNcM"
  value={val}
  onChange={(e)=>setval(e.target.value)}
  onKeyUp={fetch}
/>
<ul style={{height:'250px',overflowY:'scroll'}}>
        {cities.map((obj, index) => 
        {
          if(obj!=undefined)
          return (
          <li role="option" id="react-autowhatever-1-section-0-item-0" aria-selected="false" className="react-autosuggest__suggestion react-autosuggest__suggestion--first snipcss-vqZvW" data-section-index="0" data-suggestion-index="0" key={obj.city} 
         >
          <div className="makeFlex hrtlCenter" onClick={()=>{
        setairport(obj.airport)
        setcity(obj.city)
        setcountry(obj.country)
        settoairport(obj.airport)
        settocity(obj.city)
        settocountry(obj.country)
        setflag1(!flag1)}}>
            <img className="icLocAlt appendRight8" src="https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/ic-flight-onward.png" alt="icon"/>
            <div className="calc60">
              <p className="font14 appendBottom5 blackText">
                {obj?.city}-{obj?.country}
              </p>
              <p className="font12 greyText appendBottom3">
               {obj?.airport}
              </p>
            </div>
            <div className="pushRight font14 lightGreyText latoBold">
              CJB
            </div>
          </div>
        </li>
        )})}
      </ul>

    </div>
  )
}

export default Sel2