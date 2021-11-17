import React from 'react'
import { FaTrashAlt }  from 'react-icons/fa'

export default function Notes( { id,text, handleDeleteNote} ) {
    return (
        <div className='note'>
           <span> {text }</span>
           <FaTrashAlt className='icon' onClick={() => handleDeleteNote(id)}/>
        </div>
    )
}
