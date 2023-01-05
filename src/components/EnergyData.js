import React from "react";
import Card from 'react-bootstrap/Card'; //importing bootsrap card
import { Link } from 'react-router-dom';
import axios from 'axios';



//functional component to display bootstrap cards with database data
// uses props to pass data between components
// link from react router dom links to update component which allows user to edit records


export function EnergyData(props) {


  //function to delete data from database using axios and id
  //function called on button click below
  //passes id as argument 
  function deleteRecord(id) {
    axios.delete('http://localhost:4000/api/energy/' + id)
      .then(res => {
        console.log(res.data);
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      {/* Card imported from bootstrap           */}

      {/* Displaying data from mongodb           */}
      <Card style={{ float: 'left', width: '18rem' }}>
        <Card.Title>Week</Card.Title>
        <Card.Header>{props.entry.week}</Card.Header>
        <Card.Title> Usage</Card.Title>
        <Card.Header>{props.entry.amount} </Card.Header>
        <Card.Title> Company</Card.Title>
        <Card.Header>{props.entry.company} </Card.Header>
        <Card.Title> Date</Card.Title>
        <Card.Header>{props.entry.date} </Card.Header>
        {/* link imported by router dom, to update the item with id using props           */}
        <Link to={"/Update/" + props.entry._id} className="btn btn-dark">Edit</Link>
        {/* delete with function on click using id with props       */}
        <button onClick={() => deleteRecord(props.entry._id)}>Delete</button>

      </Card>
    </div>
  );
}