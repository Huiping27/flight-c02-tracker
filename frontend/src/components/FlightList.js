import React from 'react';

function FlightList({ flights }) {
    return (
        <ul>
            {flights.map(flight => (
                <li key={flight._id}>{flight.departure} to {flight.arrival}: {flight.co2Emission} kg CO2</li>
            ))}
        </ul>
    );
}

export default FlightList;
