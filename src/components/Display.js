import React, { useState, useEffect } from 'react';
import { EnergyList } from './EnergyList';
import axios from 'axios';

//functional component used to read data from the database, using react hooks

export function Display() {
  //using useState hook to set the list in records
  const [eList, setList] = useState([]);

  //react hook use effect to run code after the component has loaded, get data from backend 
  // handles errors 

  useEffect(() => {
    axios.get('http://localhost:4000/api/energy')
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //outputs records from the database using imported EnergyList Component 
  return (
    <div>
      <h3>Weekly Usage Records</h3>
      <EnergyList eList={eList} />
    </div>
  );
}

export default Display;