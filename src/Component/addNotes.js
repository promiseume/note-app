import React from 'react'
import { useState } from 'react';

export default function AddNotes({handleNote}) {
    const [addNote, setAddNote] = useState('');

     const handleChange = (e) =>{
      e.preventDefault();
      setAddNote(e.target.value);
     }

     const handleSubmit = () =>{
         if (addNote.length > 0){
            handleNote(addNote)
            setAddNote('');
         }
     }
    return (
        <div className='addNewnote'>
            <textarea placeholder='Add Note' rows="9" cols="50" value={addNote} onChange={handleChange}>
                </textarea>
                <div className='add-note'>
                <button onClick={handleSubmit}>Add</button>
                </div>
        </div>
    )
}
