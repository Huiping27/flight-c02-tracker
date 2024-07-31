import React from 'react';

const FlightList = ({ flights }) => {
  return (
    <div>
      <h2>Flight List</h2>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>{flight.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;
