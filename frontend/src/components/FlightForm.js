import React, { useState } from 'react';
import axios from 'axios';

function FlightForm({ setFlights }) {
    const [departure, setDeparture] = useState('');
    const [arrival, setArrival] = useState('');
    const [distance, setDistance] = useState('');
    const [flightClass, setFlightClass] = useState('economy');
    const [passengers, setPassengers] = useState(1);

    const addFlight = async () => {
        const token = localStorage.getItem('token');
        const response = await axios.post('/api/flights', {
            departure,
            arrival,
            distance,
            flightClass,
            passengers
        }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        setFlights(prevFlights => [...prevFlights, response.data]);
    };

    return (
        <div>
            <input placeholder="Departure" value={departure} onChange={e => setDeparture(e.target.value)} />
            <input placeholder="Arrival" value={arrival} onChange={e => setArrival(e.target.value)} />
            <input placeholder="Distance" value={distance} onChange={e => setDistance(e.target.value)} />
            <select value={flightClass} onChange={e => setFlightClass(e.target.value)}>
                <option value="economy">Economy</option>
                <option value="business">Business</option>
            </select>
            <input type="number" placeholder="Passengers" value={passengers} onChange={e => setPassengers(e.target.value)} />
            <button onClick={addFlight}>Add Flight</button>
        </div>
    );
}

export default FlightForm;
