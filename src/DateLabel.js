import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Data4,Data6 } from './Search';
const DateLabel = () => {
  const[depaturedate,setdepaturedate]=useState('')
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
const{setStartDate}=useContext(Data4);
const {day,setday,year,setyear,month,setmonth,flag4,setflag4}=useContext(Data6)

  

  // const toggleDatePicker = () => {
  //   setShowDatePicker(!showDatePicker);
  // };

  const handleDateChange = date => {
    setSelectedDate(date);
    const datee = new Date(date);
    const year = datee.getFullYear();
    const month = ('0' + (datee.getMonth() + 1)).slice(-2); 
    const day = ('0' + datee.getDate()).slice(-2);
    const formattedDate = `${year}-${month}-${day}`;
  setStartDate(formattedDate);
  setflag4(!flag4);
    // setShowDatePicker(false);
   
  };
  const formatDate = (date) => {
    const options = {
      weekday: 'long',
      year: '2-digit',
      month: 'short',
      day: 'numeric',
    };
  
    const formattedDate = date.toLocaleDateString(undefined, options);
  
    // Extracting day, month, and year
    const [dayy, monthh, yearr] = formattedDate.split(', ');
    setday(dayy);
    setmonth(monthh);
    setyear(yearr);
  
    console.log({ selectedDate });
  
    // Splitting the day into individual digits
    const dayDigits = dayy.split('').map((digit, index) => (
      <span key={index} className="dayDigit">{digit}</span>
    ));
  
    const optionsDay = { weekday: 'long' };
    const formattedDay = date.toLocaleDateString(undefined, optionsDay);
    const [dayInLetters] = formattedDay.split(',');

   
    return (
      <>
    
 
   
     </>
    );
  };

  return (
    <div>
    
       { flag4 && <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          withPortal
        />}
   
    </div>
  );
};

export default DateLabel;
