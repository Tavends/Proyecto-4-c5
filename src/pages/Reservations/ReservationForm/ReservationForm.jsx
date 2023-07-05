import { useFormik } from 'formik'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../../config/firestore.js'
//import "./contact-form.css"

export function ReservationForm() {
  const { handleSubmit, handleChange, values } = useFormik( {
    initialValues: {
      name: "",
      surname: "",
      tipoMesa: "",
      fechaReserva: "",
      horaReserva: ""
    },
    enableReinitialize: true,
    onSubmit: async function ( values ) {
      console.log( values )
      try {
        let objectData = {
                            'nombreCliente': values.name + ' ' + values.surname,
                            'tipoMesa': values.tipoMesa,
                            'fechaReserva': values.fechaReserva,
                            'horaReserva': values.horaReserva
        };
        const collectionRef = collection( db, 'Reservas' )
        const docRef = await addDoc( collectionRef, objectData )
        alert( "Document written with ID: " + docRef.id )
      } catch ( error ) {
        console.error( "Error adding document: ", error );
      }
    }
  } )
  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor='name'>Nombre</label>
      <input id='name' name='name' type="text" value={ values.name } onChange={ handleChange }></input>

      <label htmlFor='surname'>Apellido</label>
      <input id='surname' name='surname' type="text" value={ values.surname } onChange={ handleChange }></input>

      <label htmlFor='tipoMesa'>Tipo de mesa</label>
      <input id='tipoMesa' name='tipoMesa' type="text" value={ values.tipoMesa } onChange={ handleChange }></input>

      <label htmlFor='fechaReserva'>Fecha de reserva</label>
      <input id='fechaReserva' name='fechaReserva' type="date" value={ values.fechaReserva } onChange={ handleChange }></input>

      <label htmlFor='horaReserva'>Hora de reserva</label>
      <input id='horaReserva' name='horaReserva' type="time" value={ values.horaReserva } onChange={ handleChange }></input>

      <button type='submit'>Enviar</button>
    </form>
  )
}