import { useFormik } from 'formik'

import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../../config/firestore.js'
import "./contact-form.css"
export function ContactForm() {
  const { handleSubmit, handleChange, values } = useFormik( {
    initialValues: {
      name: "",
      surname: "",
      email: "",
      contactReason: ""
    },
    enableReinitialize: true,
    onSubmit: async function ( values ) {
      console.log( values )
      try {
        const collectionRef = collection( db, 'Contactos' )
        const docRef = await addDoc( collectionRef, values )
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

      <label htmlFor='email'>Correo</label>
      <input id='email' name='email' type="email" value={ values.email } onChange={ handleChange }></input>

      <label htmlFor='contactReason'>Motivo</label>
      <textarea id='contactReason' name='contactReason' value={ values.contactReason } onChange={ handleChange }></textarea>

      <button type='submit'>Enviar</button>
    </form>
  )
}