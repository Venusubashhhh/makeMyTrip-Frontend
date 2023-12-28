import React from 'react'
import MyComponent from './MyComponent'
import { html2pdf } from 'html2pdf.js';
import Download from './Download';
function FlightSuccess() {
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
    <div style={{backgroundColor:'#e5eef4'}}>
    {/* <MyComponent/> */}
   
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
     

    
{/*   
  <Download/> */}
  </div>
  )
}

export default FlightSuccess