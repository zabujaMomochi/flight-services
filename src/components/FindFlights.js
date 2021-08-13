import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'


function FindFlights () {
    var from;
    var to;
    var departureDate;
    const history = useHistory()
    function handleSubmit () {
        history.push({
            pathname: "/displayFlights"+"/"+from+"/"+to+"/"+departureDate
        })
    }
    return (
        <div>
            <h2>Already Booked? want to checkIn?</h2>
            <Link to="/checkIn">Check In</Link>
            <h2>Find Flights:</h2>
            <form>
                From: <input type="text" name="from" onChange={(e) => {from=e.target.value}} />
                To: <input type="text" name="To" onChange={(e) => {to=e.target.value}} />
                Departure Date: <input type="text" name="departureDate" onChange={(e) => {departureDate=e.target.value}} />
                <button onClick={handleSubmit}>Search</button>
            </form>
        </div>
    )
}

export default FindFlights