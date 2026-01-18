import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return (
        <div>
            <Link to={props.path} className='px-4 py-2 customBg rounded-md text-white'>{props.title}</Link>
        </div>
    )
}

export default Button 
