import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import FindFlights from './components/FindFlights';
import DisplayFlights from './components/DisplayFlights';
import PassengerDetails from './components/PassengerDetails';
import ConfirmReservation from './components/ConfirmReservation';
import StartCheckIn from './components/StartCheckIn'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={FindFlights} />
        <Route path="/displayFlights/:from/:to/:departureDate" component={DisplayFlights} />
        <Route path="/passengerDetails/:flightId" component={PassengerDetails} />
        <Route path="/confirmReservation/:reservationId" component={ConfirmReservation}/>
        <Route path="/checkIn" component={StartCheckIn} />
      </Switch>
    </div>
  );
}

export default App;
