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
    

     <p
            data-cy="departureDate"
            className="blackText font20 code lineHeight36 snipcss0-4-18-21 snipcss0-3-17-20"
          >
            <span className="font30 latoBlack snipcss0-5-21-22 snipcss0-4-20-21">
           
            </span>
            <span className="snipcss0-5-21-23 snipcss0-4-20-22">  {month}</span>
            <span className="shortYear snipcss0-5-21-24 snipcss0-4-20-23">
          {year}
            </span>
          </p>
          <p
            data-cy="departureDay"
            className="code snipcss0-4-18-25 snipcss0-3-17-24"
          >
          {day}
          </p>
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
