import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

function PassengerDetails () {
    const [data, setData] = useState({})
    const [passenger, setPassenger] = useState({}) 
    const {flightId} = useParams()
    const history = useHistory()
    useEffect(() => {
        axios.get("http://localhost:8080/flightservices/flights/"+flightId)
        .then(res => {
            setData(res.data)
        })
    },[])
    function handleSubmit (e) {
        e.preventDefault()
        passenger.flightId = flightId
        axios.post("http://localhost:8080/flightservices/reservation", passenger)
        .then(res => {
            history.push({
                pathname: "/confirmReservation/"+res.data.id
            })
        })
    }
    return (
        <div>
            <h2>Confirm Reservation</h2>
            <h2>Flight Details:</h2>
            Airline: {data.operatingAirlines}<br/>
            Departure City: {data.departureCity}<br/>
            Arrival City: {data.arrivalCity}<br/>
            Date Of Departure: {data.dateOfDeparture}<br/>
            <h2>Passenger Details:</h2>
            <form>
                First Name: <input type="text" name="passengerFirstName" onChange={(e) => {passenger.passengerFirstName = e.target.value}} /><br/>
                Last Name:  <input type="text" name="passengerLastName" onChange={(e) => {passenger.passengerLastName = e.target.value}} /><br/>
                Middle Name: <input type="text" name="passengerMiddleName" onChange={(e) => {passenger.passengerMiddleName = e.target.value}} /><br/>
                Email:  <input type="text" name="passengerEmail" onChange={(e) => {passenger.passengerEmail = e.target.value}} /><br/>
                Phone Number: <input type="text" name="passengerPhone" onChange={(e) => {passenger.passengerPhone = e.target.value}} /><br/>
                <button onClick={handleSubmit}>Confirm</button>
            </form>
        </div>
    )
}

export default PassengerDetails