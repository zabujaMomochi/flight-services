import React, {useState, useEffect, Component} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

import {Link} from 'react-router-dom'

function RowCreater ({item}) {
    return (
        <tr>
            <td>{item.operatingAirlines}</td>
            <td>{item.departureCity}</td>
            <td>{item.arrivalCity}</td>
            <td>{item.estimatedDepartureTime}</td>
            <td><Link to={'/passengerDetails/'+item.id}>Select</Link></td>
        </tr>
    )
}



function DisplayFlights () {
    const [flightData, setFlightData] = useState([])
    const {from} = useParams()
    const {to} = useParams()
    const {departureDate} = useParams()
    useEffect(() => {
        axios.get("http://localhost:8080/flightservices/flights?from="+from+"&to="+to+"&departureDate="+departureDate)
        .then(res => {
            setFlightData(res.data)
            /*const data = res.data
            data.forEach(element => {
                flightData.push(element)
            })
            console.log(flightData)
            */
        })
    },[])
    return (
        <div>
            <h2>Flights:</h2>
            <table>
                <thead>
                    <th>Airlines</th>
                    <th>Departure City</th>
                    <th>Arrival City</th>
                    <th>Departure Date and Time</th>
                </thead>
                <tbody>
                    {
                       flightData.map(flight => <RowCreater item={flight} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DisplayFlights