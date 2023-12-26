import React from 'react'
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
function Seatbooking() {
  const [alignment, setAlignment] = React.useState();
  const [alignment1, setAlignment1] = React.useState();
  const [alignment2, setAlignment2] = React.useState();
  const handleChange2 = (event, newAlignment) => {
    setAlignment2(newAlignment);
    console.log(alignment2);
  };
  const children2 = [
    <ToggleButton value={'A3'} key="2">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhElEQVR4nO2RywnAIBBE52RPWkEqy6dNwVjGhoABMejqxpAcfDC3dZ86wOABCsAGYAdAmTgAS5htZi0sTjNLBC4c1oUZE72kmet2vebeF6ioVC8QeK70XKkc1aXHpRqBQHOlpwulHVDu3GcCqsx/BRxD0O+LrKBYyuTcdWPqJLFh1wBVHPrbsh4HlQxQAAAAAElFTkSuQmCC"></img>
    </ToggleButton>,
   ]
    const control2 = {
      value: alignment2,
      onChange: handleChange2,
      exclusive: true,
    };

    const [alignment3, setAlignment3] = React.useState();
    const handleChange3 = (event, newAlignment) => {
      setAlignment3(newAlignment);
      console.log(alignment3);
    };
    const children3 = [
      <ToggleButton value={'A4'} key="2">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhElEQVR4nO2RywnAIBBE52RPWkEqy6dNwVjGhoABMejqxpAcfDC3dZ86wOABCsAGYAdAmTgAS5htZi0sTjNLBC4c1oUZE72kmet2vebeF6ioVC8QeK70XKkc1aXHpRqBQHOlpwulHVDu3GcCqsx/BRxD0O+LrKBYyuTcdWPqJLFh1wBVHPrbsh4HlQxQAAAAAElFTkSuQmCC"></img>
      </ToggleButton>,
     ]
      const control3 = {
        value: alignment3,
        onChange: handleChange3,
        exclusive: true,
      };

  const handleChange1 = (event, newAlignment) => {
    setAlignment1(newAlignment);
    console.log(alignment1);
  };
  const children1 = [
    <ToggleButton value={'A2'} key="1">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhElEQVR4nO2RywnAIBBE52RPWkEqy6dNwVjGhoABMejqxpAcfDC3dZ86wOABCsAGYAdAmTgAS5htZi0sTjNLBC4c1oUZE72kmet2vebeF6ioVC8QeK70XKkc1aXHpRqBQHOlpwulHVDu3GcCqsx/BRxD0O+LrKBYyuTcdWPqJLFh1wBVHPrbsh4HlQxQAAAAAElFTkSuQmCC"></img>
    </ToggleButton>,
   ]
    const control1 = {
      value: alignment1,
      onChange: handleChange1,
      exclusive: true,
    };
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log(alignment);
  };
  const children = [
    <ToggleButton value={'A1'} key="1">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhElEQVR4nO2RywnAIBBE52RPWkEqy6dNwVjGhoABMejqxpAcfDC3dZ86wOABCsAGYAdAmTgAS5htZi0sTjNLBC4c1oUZE72kmet2vebeF6ioVC8QeK70XKkc1aXHpRqBQHOlpwulHVDu3GcCqsx/BRxD0O+LrKBYyuTcdWPqJLFh1wBVHPrbsh4HlQxQAAAAAElFTkSuQmCC"></img>
    </ToggleButton>,
   ]
    const control = {
      value: alignment,
      onChange: handleChange,
      exclusive: true,
    };


  const [alignment6, setAlignment6] = React.useState();
  const [alignment4, setAlignment4] = React.useState();
  const [alignment5, setAlignment5] = React.useState();
  const handleChange5 = (event, newAlignment) => {
    setAlignment5(newAlignment);
    console.log(alignment5);
  };
  const children5 = [
    <ToggleButton value={'A6'} key="2">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhElEQVR4nO2RywnAIBBE52RPWkEqy6dNwVjGhoABMejqxpAcfDC3dZ86wOABCsAGYAdAmTgAS5htZi0sTjNLBC4c1oUZE72kmet2vebeF6ioVC8QeK70XKkc1aXHpRqBQHOlpwulHVDu3GcCqsx/BRxD0O+LrKBYyuTcdWPqJLFh1wBVHPrbsh4HlQxQAAAAAElFTkSuQmCC"></img>
    </ToggleButton>,
   ]
    const control5 = {
      value: alignment5,
      onChange: handleChange5,
      exclusive: true,
    };

    const [alignment7, setAlignment7] = React.useState();
    const handleChange7 = (event, newAlignment) => {
      setAlignment7(newAlignment);
      console.log(alignment3);
    };
    const children7 = [
      <ToggleButton value={'A8'} key="2">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhElEQVR4nO2RywnAIBBE52RPWkEqy6dNwVjGhoABMejqxpAcfDC3dZ86wOABCsAGYAdAmTgAS5htZi0sTjNLBC4c1oUZE72kmet2vebeF6ioVC8QeK70XKkc1aXHpRqBQHOlpwulHVDu3GcCqsx/BRxD0O+LrKBYyuTcdWPqJLFh1wBVHPrbsh4HlQxQAAAAAElFTkSuQmCC"></img>
      </ToggleButton>,
     ]
      const control7 = {
        value: alignment7,
        onChange: handleChange7,
        exclusive: true,
      };

  const handleChange6 = (event, newAlignment) => {
    setAlignment6(newAlignment);
    console.log(alignment6);
  };
  const children4 = [
    <ToggleButton value={'A5'} key="1">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhElEQVR4nO2RywnAIBBE52RPWkEqy6dNwVjGhoABMejqxpAcfDC3dZ86wOABCsAGYAdAmTgAS5htZi0sTjNLBC4c1oUZE72kmet2vebeF6ioVC8QeK70XKkc1aXHpRqBQHOlpwulHVDu3GcCqsx/BRxD0O+LrKBYyuTcdWPqJLFh1wBVHPrbsh4HlQxQAAAAAElFTkSuQmCC"></img>
    </ToggleButton>,
   ]
  
  const handleChange4 = (event, newAlignment) => {
    setAlignment4(newAlignment);
    console.log(alignment);
  };
  const control4 = {
    value: alignment4,
    onChange: handleChange4,
    exclusive: true,
  };
  const children6 = [
    <ToggleButton value={'A1'} key="1">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhElEQVR4nO2RywnAIBBE52RPWkEqy6dNwVjGhoABMejqxpAcfDC3dZ86wOABCsAGYAdAmTgAS5htZi0sTjNLBC4c1oUZE72kmet2vebeF6ioVC8QeK70XKkc1aXHpRqBQHOlpwulHVDu3GcCqsx/BRxD0O+LrKBYyuTcdWPqJLFh1wBVHPrbsh4HlQxQAAAAAElFTkSuQmCC"></img>
    </ToggleButton>,
   ]
    const control6 = {
      value: alignment6,
      onChange: handleChange6,
      exclusive: true,
    };
  return (
    <div style={{backgroundColor:'white',height:'600px',width:'1000px',overflowY:'scroll'}}>
        <div style={{backgroundColor:'skyblue',paddingLeft:'32%'}}>
            <img src='https://jsak.mmtcdn.com/flights/assets/media/ic_flightSmallFront.1e0e0ad4.png' style={{width:'300px'}}></img>
            <div style={{backgroundColor:'white',width:'300px',height:'300px'}}>
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" style={{display:'flex',paddingTop:'20px'}}>
                <ul className="guestCounter font12 darkText gbCounter snipcss0-1-1-4">
    <ToggleButtonGroup {...control} aria-label="Small sizes">
        {children}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control1} aria-label="Small sizes">
        {children1}
      </ToggleButtonGroup>
      
    
    </ul>
    <ul style={{marginLeft:'106px'}}>
    <ToggleButtonGroup {...control2} aria-label="Small sizes">
        {children2}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control3} aria-label="Small sizes">
        {children3}
      </ToggleButtonGroup>
    </ul>
                </div>
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" style={{display:'flex',marginTop:'20px'}}>
                <ul className="guestCounter font12 darkText gbCounter snipcss0-1-1-4">
    <ToggleButtonGroup {...control4} aria-label="Small sizes">
        {children4}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control5} aria-label="Small sizes">
        {children5}
      </ToggleButtonGroup>
      
    
    </ul>
    <ul style={{marginLeft:'106px'}}>
    <ToggleButtonGroup {...control6} aria-label="Small sizes">
        {children6}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control7} aria-label="Small sizes">
        {children7}
      </ToggleButtonGroup>
    </ul>
                </div>
                
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" style={{display:'flex',marginTop:'20px'}}>
                <ul className="guestCounter font12 darkText gbCounter snipcss0-1-1-4">
    <ToggleButtonGroup {...control4} aria-label="Small sizes">
        {children4}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control5} aria-label="Small sizes">
        {children5}
      </ToggleButtonGroup>
      
    
    </ul>
    <ul style={{marginLeft:'106px'}}>
    <ToggleButtonGroup {...control6} aria-label="Small sizes">
        {children6}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control7} aria-label="Small sizes">
        {children7}
      </ToggleButtonGroup>
    </ul>
                </div>
                
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups" style={{display:'flex',marginTop:'20px'}}>
                <ul className="guestCounter font12 darkText gbCounter snipcss0-1-1-4">
    <ToggleButtonGroup {...control4} aria-label="Small sizes">
        {children4}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control5} aria-label="Small sizes">
        {children5}
      </ToggleButtonGroup>
      
    
    </ul>
    <ul style={{marginLeft:'106px'}}>
    <ToggleButtonGroup {...control6} aria-label="Small sizes">
        {children6}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control7} aria-label="Small sizes">
        {children7}
      </ToggleButtonGroup>
    </ul>
                </div>
                
            </div>
            <img src='https://jsak.mmtcdn.com/flights/assets/media/ic_flightSmallTail.aa15f774.png' style={{width:'300px'}}></img>
        </div>
    </div>
  )
}

export default Seatbooking