import React, { useState } from 'react';
import axios from 'axios';


//functional component to add data to the database then return a predcition of next weeks electricity usage, using machine learning

//function to add items to database, using useState react hook to set state
export function Add() {
  const [prediction, setPrediction] = useState('');
  const [week, setWeek] = useState('');
  const [amount, setAmount] = useState('');
  const [company, setCompany] = useState('');
  const [date, setDate] = useState('');

  //function to handle the submit process
  const handleSubmit = (event) => {
    event.preventDefault();

    // Axios sends a POST request to the server, this will send the data to the backend, the backend will add to the database
    // Then machine learning is prefomred on all the data recorded in the database, plus this new record
    // Reponse is then sent back to frontend to display prediction for next weeks usage 
    // error handling is used if there is a problem
    axios.post('http://billbusterapi.azurewebsites.net/api/energys', { week, amount, company, date })
      .then(response => {
        alert("Thank you, your data has been submitted, click OK to get next weeks usage prediction");
        //sets prediction from response without decimal places
        setPrediction(response.data.prediction.toFixed(0));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //form for user to enter data, prediction will be displayed on response from the server
  //calulation is then done on the prediction to calculate cost at average unit rate
  return (
    <div className='wrapper'>
      <div className="form-group">
        <form onSubmit={handleSubmit}>
          <label htmlFor="week">Week:</label>
          <input
            className="form-control"
            required="required"
            type="number"
            id="week"
            value={week}
            onChange={(event) => setWeek(event.target.value)}
          />
          <br />
          <label htmlFor="amount">Amount:</label>
          <input
            className="form-control"
            required="required"
            type="number"
            id="amount"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
          <br />
          <label htmlFor="company">Company:</label>
          <input
            className="form-control"
            required="required"
            type="string"
            id="company"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
          <br />
          <label htmlFor="date">Date:</label>
          <input
            className="form-control"
            required="required"
            type="date"
            id="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
          <br />
          <input type="submit" value="Add Usage" />
          <br />
          <br />
          <p>Predicted Usage For Next Week = {prediction} units, amount is +/- last week </p>
          <p>Cost of Useage Based On Average Unit Rate € {prediction * 0.44} </p>
        </form>
      </div>
    </div>
  );
}

export default Add;
