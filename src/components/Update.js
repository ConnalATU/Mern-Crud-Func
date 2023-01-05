import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../App.css';

//functional component to update a record in the database
// uses react hooks to set state and use effect to run code after component has started
//uses useParms to get ID from router dom
//uses useNaviagate to navigate back to page on succesful update from router dom

export function Update() {
  let { id } = useParams();

  const [week, setWeek] = useState('');
  const [amount, setAmount] = useState('');
  const [company, setCompany] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    // get the data to be updated
    axios.get('http://localhost:4000/api/energy/' + id)

      .then((response) => {
        setWeek(response.data.week);
        setAmount(response.data.amount);
        setCompany(response.data.company);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    //stops default form action happenening, lets axios handle it instead.
    event.preventDefault();

    //uses Axios to send a PUT request to the backend server to update the data in db
    axios.put('http://localhost:4000/api/energy/' + id, { week, amount, company })
      .then((response) => {
        console.log(response.data);
        //reloads page by navigate back using router dom
        navigate('/display');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //form to update/edit data
  return (
    <div className="wrapper">
      <div className="form-group">
        <form onSubmit={handleSubmit}>
          <label htmlFor="week">Week:</label>
          <input
            className="form-control"
            type="number"
            id="week"
            value={week}
            onChange={(event) => setWeek(event.target.value)}
          />
          <br />
          <label htmlFor="amount">Amount:</label>
          <input
            className="form-control"
            id="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
          <br />
          <label htmlFor="company">Company:</label>
          <input
            className="form-control"
            required="required"
            type="text"
            id="company"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
          <br />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
