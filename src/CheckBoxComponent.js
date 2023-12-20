// import React, { useState } from 'react';

// const MuiCheckBoxComponent = () => {
//     const [sliderValue, setSliderValue] = useState(50);

//   const handleSliderChange = (event, newValue) => {
//     setSliderValue(newValue);
//   };

//   const [checkboxes, setCheckboxes] = useState({
//     option1: false,
//     option2: false,
//     option3: false,
//     option4:false,
//     // Add more options as needed
//   });

//   const handleCheckboxChange = (event) => {
//     const { name, checked } = event.target;
//     setCheckboxes({ ...checkboxes, [name]: checked });
//   };

//   return (
//     <div style={{backgroundColor:'white',width:'350px',paddingTop:'30px'}}>
//      <div style={{marginLeft:'30px',}}>
//      <p className="filtersHeading appendBottom15">Popular Filters</p>
     
//       <FormControlLabel
//         control={
//           <Checkbox
//             checked={checkboxes.option1}
//             onChange={handleCheckboxChange}
//             name="option1"
//           />
//         }
//         label="Non Stop"
//       />
//       <br />
//       <FormControlLabel
//         control={
//           <Checkbox
//             checked={checkboxes.option2}
//             onChange={handleCheckboxChange}
//             name="option2"
//           />
//         }
//         label="1 Stop"
//       />
//       <br />
//       <FormControlLabel
//         control={
//           <Checkbox
//             checked={checkboxes.option3}
//             onChange={handleCheckboxChange}
//             name="option3"
//           />
//         }
//         label="AfterNoon Depature"
//       />
//          <br />
//        <FormControlLabel
//         control={
//           <Checkbox
//             checked={checkboxes.option3}
//             onChange={handleCheckboxChange}
//             name="option3"
//           />
//         }
//         label="Morning Depature"
//       />
// <p className="filtersHeading appendBottom15">One way slider</p>
// <div style={{ width: 300 }}>
//       <Typography id="mui-slider" gutterBottom>
      
//       </Typography>
//       <Slider
//         aria-labelledby="mui-slider"
//         value={sliderValue}
//         onChange={handleSliderChange}
//         valueLabelDisplay="auto"
//         min={10000}
//         max={50000}
//       />
//       <Typography>
//         Value: {sliderValue}
//       </Typography>
//     </div>
//     </div>
//       {/* Add more checkboxes using FormControlLabel */}
     
//       <div className="filtersOuter snipcss-5RcnG">
//   <p className="filtersHeading appendBottom15">Depature at New Delhi</p>
//   <div>
//     <div className="timeSlotsOuter">
//       <div className="appendBottom12 filterTimeSlots snipcss0-0-0-1">
//         <span
//           className="appendBottom2 checkBlockIcon snipcss0-1-1-2 style-bqPoi"
//           id="style-bqPoi"
//         ></span>
//         <div className="boldFont snipcss0-1-1-3">
//           Before
//           <b className="snipcss0-2-3-4">6</b>
//           AM
//         </div>
//       </div>
//       <div className="appendBottom12 filterTimeSlots ">
//         <span
//           className="appendBottom2 checkBlockIcon style-6qYEa"
//           id="style-6qYEa"
//         ></span>
//         <div className="boldFont">
//           <b>6</b>
//           AM -<b>12</b>
//           PM
//         </div>
//       </div>
//       <div className="appendBottom12 filterTimeSlots ">
//         <span
//           className="appendBottom2 checkBlockIcon style-V8VIx"
//           id="style-V8VIx"
//         ></span>
//         <div className="boldFont">
//           <b>12</b>
//           PM -<b>6</b>
//           PM
//         </div>
//       </div>
//       <div className="appendBottom12 filterTimeSlots ">
//         <span
//           className="appendBottom2 checkBlockIcon style-AhKaE"
//           id="style-AhKaE"
//         ></span>
//         <div className="boldFont">
//           After
//           <b>6</b>
//           PM
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// <div className="filtersOuter snipcss-5RcnG">
//   <p className="filtersHeading appendBottom15">Arrival at New Delhi</p>
//   <div>
//     <div className="timeSlotsOuter">
//       <div className="appendBottom12 filterTimeSlots snipcss0-0-0-1">
//         <span
//           className="appendBottom2 checkBlockIcon snipcss0-1-1-2 style-bqPoi"
//           id="style-bqPoi"
//         ></span>
//         <div className="boldFont snipcss0-1-1-3">
//           Before
//           <b className="snipcss0-2-3-4">6</b>
//           AM
//         </div>
//       </div>
//       <div className="appendBottom12 filterTimeSlots ">
//         <span
//           className="appendBottom2 checkBlockIcon style-6qYEa"
//           id="style-6qYEa"
//         ></span>
//         <div className="boldFont">
//           <b>6</b>
//           AM -<b>12</b>
//           PM
//         </div>
//       </div>
//       <div className="appendBottom12 filterTimeSlots ">
//         <span
//           className="appendBottom2 checkBlockIcon style-V8VIx"
//           id="style-V8VIx"
//         ></span>
//         <div className="boldFont">
//           <b>12</b>
//           PM -<b>6</b>
//           PM
//         </div>
//       </div>
//       <div className="appendBottom12 filterTimeSlots ">
//         <span
//           className="appendBottom2 checkBlockIcon style-AhKaE"
//           id="style-AhKaE"
//         ></span>
//         <div className="boldFont">
//           After
//           <b>6</b>
//           PM
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//     </div>
//   );
// };

// export default MuiCheckBoxComponent;
