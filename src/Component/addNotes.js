import React from 'react'
import { useState } from 'react';

export default function AddNotes() {
    const [addNote, setAddNote] = useState('');
     handleChange
    return (
        <div>
            <textarea placeholder='Add Note' rows="9" cols="50">
            </textarea>
            <button>Add</button>
        </div>
    )
}
