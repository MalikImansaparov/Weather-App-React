import React from 'react'
import '../App.css'

const Form = (props) => (
    <form onSubmit={props.weatherMethod}>
        <input text='text' name='city' placeholder='Enter city name'/>&nbsp;
        <button>Receive</button>
    </form>
)
export default Form