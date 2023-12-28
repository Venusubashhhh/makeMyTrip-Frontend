import React, { useContext, useEffect } from 'react';
import MyComponent from './MyComponent';
import html2pdf from 'html2pdf.js'; // Make sure to import html2pdf
import { Flightcontext } from './App';
import axios from 'axios';
const Download = () => {
const{from,setfrom,to,setto,flightname,setflightname,arrtime,setarrtime,deptime,setdeptime,price,setprice,durationh,setdurationh,durationm,setdurationm,logo,setlogo,date,setdate,tax,settax,flightid,setflightid,bookingid,setbookingid,paymentid,setpaymentid}=useContext(Flightcontext)
useEffect(()=>{
axios.post('https://backend-mmt.onrender.com/summary',{paymentId:paymentid}).then((res)=>console.log(res)).catch((err)=>console.log(err))
},[])
    const convertToPdf = () => {
        const element = document.getElementById('tickett');
    
        html2pdf(element, { filename: 'downloaded-document.pdf', output: 'blob' })
            .then((pdfBlob) => {
                const blobUrl = URL.createObjectURL(pdfBlob);
    
                // Create an invisible link element
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = blobUrl;
                a.download = 'downloaded-document.pdf';
    
                // Append the link to the document body
                document.body.appendChild(a);
    
                // Trigger a click on the link
                a.click();
    
                // Remove the link from the document body after the click
                document.body.removeChild(a);
    
                // Clean up the Blob URL
                URL.revokeObjectURL(blobUrl);
            })
            .catch((error) => {
                console.error('Error creating PDF:', error);
            });
    };
    
    return (
        <div>
            <div style={{backgroundColor:'#e5eef4'}}>
  
   
    <style
      dangerouslySetInnerHTML={{
        __html:
          '\n      body {\n        text-align: center;\n                background: ;\n      }\n        h1 {\n          color: #88B04B;\n          font-family: "Nunito Sans", "Helvetica Neue", sans-serif;\n          font-weight: 900;\n          font-size: 40px;\n          margin-bottom: 10px;\n        }\n        p {\n          color: #404F5E;\n          font-family: "Nunito Sans", "Helvetica Neue", sans-serif;\n          font-size:20px;\n          margin: 0;\n      }\n      i {\n        color: #9ABC66;\n        font-size: 100px;\n        line-height: 200px;\n        margin-left:-15px;\n      }\n      .card {\n               padding: 60px;\n        border-radius: 4px;\n        box-shadow: 0 2px 3px #C8D0D8;\n        display: inline-block;\n        margin: 0 auto;\n   width:400px;   }\n    '
      }}
    />
 
      <div
        
      >
        <div style={{backgroundColor:'white',borderRadius:'100%',height:'200px',width:'200px',marginLeft:'43%'}}>
        <i className="checkmark">✓</i>
        </div>
        <h1 style={{color:'black',}}>Success</h1>
      <p>
     Ticket have been successfully booked <br></br>Happy Journey !!!
    
      </p>
      </div>
     


  </div>
  <div className="box" style={{marginTop:'180px'}}>
            
                
                <div className="ticket" id='tickett' style={{overflow:'hidden'}}>
                    <span className="airline">Postsnap</span>
                    <span className="airline airlineslip">Postsnap</span>
                    <span className="boarding">Boarding pass</span>
                    <div className="content">
                        <span className="jfk">LHR</span>
                        <span className="plane">
                            {/*?xml version="1.0" ?*/}
                            <svg
                                clipRule="evenodd"
                                fillRule="evenodd"
                                height={60}
                                width={60}
                                imageRendering="optimizeQuality"
                                shapeRendering="geometricPrecision"
                                textRendering="geometricPrecision"
                                viewBox="0 0 500 500"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g stroke="#222">
                                    <line
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeWidth={30}
                                        x1={300}
                                        x2={55}
                                        y1={390}
                                        y2={390}
                                    />
                                    <path
                                        d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
                                        fill="#222"
                                        strokeLinejoin="round"
                                        strokeWidth={10}
                                    />
                                </g>
                            </svg>
                        </span>
                        <span className="sfo">SFO</span>
                        <span className="jfk jfkslip">LHR</span>
                        <span className="plane planeslip">
                            {/*?xml version="1.0" ?*/}
                            <svg
                                clipRule="evenodd"
                                fillRule="evenodd"
                                height={50}
                                width={50}
                                imageRendering="optimizeQuality"
                                shapeRendering="geometricPrecision"
                                textRendering="geometricPrecision"
                                viewBox="0 0 500 500"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g stroke="#222">
                                    <line
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeWidth={30}
                                        x1={300}
                                        x2={55}
                                        y1={390}
                                        y2={390}
                                    />
                                    <path
                                        d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
                                        fill="#222"
                                        strokeLinejoin="round"
                                        strokeWidth={10}
                                    />
                                </g>
                            </svg>
                        </span>
                        <span className="sfo sfoslip">SFO</span>
                        <div className="sub-content">
                            <span className="watermark">Postsnap</span>
                            <span className="name">
                                PASSENGER NAME
                                <br />
                                <span>BLOGGS, Joe</span>
                            </span>
                            <span className="flight">
                                FLIGHT N°
                                <br />
                                <span>X3-65C3</span>
                            </span>
                            <span className="gate">
                                GATE
                                <br />
                                <span>11B</span>
                            </span>
                            <span className="seat">
                                SEAT
                                <br />
                                <span>45A</span>
                            </span>
                            <span className="boardingtime">
                                BOARDING TIME
                                <br />
                                <span>8:25PM ON AUGUST 2014</span>
                            </span>
                            <span className="flight flightslip">
                                FLIGHT N°
                                <br />
                                <span>X3-65C3</span>
                            </span>
                            <span className="seat seatslip">
                                SEAT
                                <br />
                                <span>45A</span>
                            </span>
                            <span className="name nameslip">
                                PASSENGER NAME
                                <br />
                                <span>BLOGGS, Joe</span>
                            </span>
                        </div>
                    </div>
                </div>
               
            </div>
            <div style={{backgroundColor:'#e5eef4'}}>
            <button onClick={convertToPdf} style={{backgroundColor:'transparent',color:'black',borderRadius:'20px',padding:'7px',marginTop:'1%'}}>Download Ticket</button>
            </div>
        </div>
    );
};

export default Download;
