import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Data4 } from './Search';
const DateLabel = () => {
  const[depaturedate,setdepaturedate]=useState('')
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
const{setStartDate}=useContext(Data4);


  

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateChange = date => {
    setSelectedDate(date);
    const datee = new Date(date);
    const year = datee.getFullYear();
    const month = ('0' + (datee.getMonth() + 1)).slice(-2); 
    const day = ('0' + datee.getDate()).slice(-2);
    const formattedDate = `${year}-${month}-${day}`;
  setStartDate(formattedDate);
    setShowDatePicker(false);
  };
  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);

    // Splitting the formatted date to extract year, month, and day
    const [dayMonth, year] = formattedDate.split(', ');
    const [day, month] = dayMonth.split(' ');
    

    console.log({selectedDate})

    return (
      <>
      <p style={{fontSize:'20px'}}> {month} {year}</p>
     <p>{day}</p>
     </>
    );
  };

  return (
    <div>
      <label onClick={toggleDatePicker}>{selectedDate ? formatDate(selectedDate) : 'Select Date'}</label>
      {showDatePicker && (
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          withPortal
        />
      )}
    </div>
  );
};

export default DateLabel;
