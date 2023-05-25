import { Tab, Tabs } from 'react-bootstrap';
import { ListOfReservations } from './ListOfReservations/ListOfReservations.jsx';
import { ReservationForm } from './ReservationForm/ReservationForm.jsx';

export function Reservations() {
  return (
    <Tabs defaultActiveKey={ "reservaciones" } id="reservaciones-tabs" fill={ true }>
      <Tab eventKey={ "reservaciones" } title="Reservaciones" mountOnEnter={ true } unmountOnExit={ true }>
        <ListOfReservations title={ "Lista de reservaciones" }></ListOfReservations>
      </Tab>
      <Tab eventKey={ "reservar" } title="Reservar hora">
        <ReservationForm title={ "Formulario para reservar una hora" }></ReservationForm>
      </Tab>
    </Tabs>
  )
}