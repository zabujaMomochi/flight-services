import React, {useState, useEffect} from 'react'
import axios from 'axios'


function StartCheckIn () {
    var id
    const [reservation, setReservation] = useState({})
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    function handleSubmit() {
       
        axios.get("http://localhost:8080/flightservices/reservations/"+id)
        .then(res => {
            setReservation(res.data)
            setShow(true)
        })
    }
    function handleCheckIn() {
        reservation.checkedIn = true
        const updateData = {
            reservationId: reservation.id,
            checkIn: reservation.checkedIn,
            numberOfBags: reservation.numberOfBags
        }
        axios.put("http://localhost:8080/flightservices/reservations",updateData)
        .then(res => {
            setShow2(true)
        })
    }
    console.log(reservation)
    return (
        <div>
            <h2>Enter Reservation ID:</h2>
            <input type="text" onChange={(e) => {id = e.target.value}} />
            <button onClick={handleSubmit}>Submit</button>
            {show && /*
               Object.keys(reservation).map((key) => {
                   return <h3>{key} : {reservation[key]}</h3>
               })
            */
               <div>
                   <h3>ID: {reservation.id}</h3>
                   <h3>Flight Number: {reservation.flight.flightNumber}</h3>
                   <h3>Passenger Name: {reservation.passenger.firstName} {reservation.passenger.lastName}</h3>
                   <b>Number Of Bags:</b><input type="text" onChange={(e)=>{reservation.numberOfBags=e.target.value}} /><br/>
                   <button onClick={handleCheckIn}>Check In</button>
               </div>
            }
            {show2 &&
                <h2>Check In Complete. Thank you!</h2>
            }
        </div>
    )
}

export default StartCheckIn