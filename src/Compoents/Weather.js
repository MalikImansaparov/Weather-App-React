import React from 'react'
import '../App.css'

const Weather = props => (
    <div className='infoWeath'>
        {props.city &&
        <div>
            <p>Location :{props.city},{props.country}</p>
            <p>Temperature :{props.temp}</p>
            <p>Pressure :{props.sunrise}</p>
            <p>Sunset :{props.sunset}</p>
        </div>
        }
        <p className='error'>{props.error}</p>
    </div>
);
export default Weather