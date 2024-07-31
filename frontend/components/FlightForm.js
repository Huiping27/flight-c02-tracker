import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FlightForm from './components/FlightForm';
import FlightList from './components/FlightList';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

function App() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await api.get('/flights', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setFlights(response.data);
            } catch (error) {
                console.error('Error fetching flights:', error);
                // Optionally, set some error state to display a message to the user
            }
        };

        fetchFlights();
    }, []);

    return (
        <div>
            <h1>CO2 Emission Tracker</h1>
            <FlightForm setFlights={setFlights} />
            <FlightList flights={flights} />
        </div>
    );
}

export default App;
