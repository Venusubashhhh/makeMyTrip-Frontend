import * as React from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useContext } from 'react';
import { Data3 } from './Search';
export default function Buttonsel() {
  const [alignment, setAlignment] = React.useState(0);
  const [alignment1, setAlignment1] = React.useState('');
  const [alignment2, setAlignment2] = React.useState(0);
  const [alignment22, setAlignment22] = React.useState(0);
  const {flag5,setflag5,settotalmembers,setclasss}=useContext(Data3);
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log(alignment);
  };
  const handleChange1 = (event, newAlignment) => {
    setAlignment1(newAlignment);
    console.log(alignment1);
  };
  const handleChange2 = (event, newAlignment) => {
    setAlignment2(newAlignment);
    console.log(alignment2);
  };
  const handleChange22 = (event, newAlignment) => {
    setAlignment22(newAlignment);
    console.log(alignment22);
  };
  const children22 = [
    <ToggleButton value={1} key="1">
   1
    </ToggleButton>,
    <ToggleButton value={2} key="2">
   2
    </ToggleButton>,
    <ToggleButton value={3} key="3">
     3
    </ToggleButton>,
    <ToggleButton value={4} key="4">
    4
    </ToggleButton>,
    <ToggleButton value={5} key="5">
    5
    </ToggleButton>,
    <ToggleButton value={6} key="6">
    6
    </ToggleButton>,
    <ToggleButton value={7} key="9+">
    6+
    </ToggleButton>,
  ];

  const children2 = [
    <ToggleButton value={1} key="1">
   1
    </ToggleButton>,
    <ToggleButton value={2} key="2">
   2
    </ToggleButton>,
    <ToggleButton value={3} key="3">
     3
    </ToggleButton>,
    <ToggleButton value={4} key="4">
    4
    </ToggleButton>,
    <ToggleButton value={5} key="5">
    5
    </ToggleButton>,
    <ToggleButton value={6} key="6">
    6
    </ToggleButton>,
    <ToggleButton value={7} key="9+">
    6+
    </ToggleButton>,
  ];

  const children1 = [
    <ToggleButton value="Economy" key="Economy/Premium Economy">
   Economy/Premium Economy
    </ToggleButton>,
    <ToggleButton value="Premium Economy" key="Premium Economy">
   Premium Economy
    </ToggleButton>,
    <ToggleButton value="Business" key="">
     Business
    </ToggleButton>,
  
  ];

  const children = [
    <ToggleButton value={1} key="1">
   1
    </ToggleButton>,
    <ToggleButton value={2} key="2">
   2
    </ToggleButton>,
    <ToggleButton value={3} key="3">
     3
    </ToggleButton>,
    <ToggleButton value={4} key="4">
    4
    </ToggleButton>,
    <ToggleButton value={5} key="5">
    5
    </ToggleButton>,
    <ToggleButton value={6} key="6">
    6
    </ToggleButton>,
    <ToggleButton value={7} key="7">
    7
    </ToggleButton>,
    <ToggleButton value={8} key="8">
    8
    </ToggleButton>,
    <ToggleButton value={9} key="9">
    9
    </ToggleButton>,
    <ToggleButton value={10} key="9+">
    9+
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };
  const control1 = {
    value: alignment1,
    onChange: handleChange1,
    exclusive: true,
  };
  const control2 = {
    value: alignment2,
    onChange: handleChange2,
    exclusive: true,
  };
  const control22 = {
    value: alignment22,
    onChange: handleChange22,
    exclusive: true,
  };
  return (
    <>
    { <div style={{backgroundColor:'#ffffff',width:'600px',height:'380px',marginTop:'5%',paddingTop:'10px',zIndex:'5'}} className='buttonsel'>
    <Stack spacing={1} alignItems="center">
      <div className="fltTravellers gbTravellers snipcss-BfyPO" >
  <div className="appendBottom20 snipcss0-0-0-1">
    <p data-cy="adultRange" className="latoBold font12 grayText appendBottom10 snipcss0-0-0-1 snipcss0-1-1-2 tether-element-attached-top tether-element-attached-center tether-target-attached-top tether-target-attached-center">
      ADULTS (12y +)
    </p>
    <p className="appendTop5 greyText snipcss0-1-1-2 snipcss0-2-2-3">
      on the day of travel
    </p>
    <p>
    </p>
    <ul className="guestCounter font12 darkText gbCounter snipcss0-1-1-4">
    <ToggleButtonGroup {...control} aria-label="Medium sizes">
        {children}
      </ToggleButtonGroup>
    
    </ul>
    <div className="makeFlex appendBottom25 snipcss0-1-1-16" style={{marginTop:'30px'}}>
      <div className="makeFlex column childCounter snipcss0-2-16-17">
        <p data-cy="childrenRange" className="latoBold font12 grayText appendBottom10 snipcss0-3-17-18">
          CHILDREN (2y - 12y )
        </p>
        <p className="appendTop5 greyText snipcss0-4-18-19">
          on the day of travel
        </p>
        <p>
        </p>
        <ul className="guestCounter font12 darkText gbCounter snipcss0-3-17-20">
        <ToggleButtonGroup {...control22} aria-label="Medium sizes">
        {children22}
      </ToggleButtonGroup>
        </ul>
      </div>
      <div className="makeFlex column pushRight infantCounter snipcss0-2-16-29" style={{marginLeft:'40px'}}>
        <p data-cy="infantRange" className="latoBold font12 grayText appendBottom10 snipcss0-3-29-30">
          INFANTS (below 2y)
        </p>
        <p className="appendTop5 greyText snipcss0-4-30-31">
          on the day of travel
        </p>
        <p>
        </p>
        <ul className="guestCounter font12 darkText gbCounter snipcss0-3-29-32">
        <ToggleButtonGroup {...control2} aria-label="Medium sizes">
        {children2}
      </ToggleButtonGroup>
        </ul>
      </div>
    </div>
    <p data-cy="chooseTravelClass" className="latoBold font12 grayText appendBottom10 snipcss0-1-1-41" style={{marginTop:'30px'}}>
      CHOOSE TRAVEL CLASS
    </p>
    <ToggleButtonGroup {...control1} aria-label="Medium sizes">
        {children1}
      </ToggleButtonGroup>
  </div>
  <div className="right makeFlex hrtlCenter">
    <div>
    </div>
    <button type="button" data-cy="travellerApplyBtn" className="primaryBtn btnApply pushRight" style={{padding:'5px',marginTop:'330px',marginLeft:'-350px'}}
    onClick={()=>{
 
   settotalmembers(alignment+alignment22+alignment2)
   setclasss(alignment1);
   setflag5(false);
    }}
    >
      APPLY
    </button>
  </div>
</div>



    </Stack>
    </div>}
    </>
  );
}
