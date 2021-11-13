import React from 'react'
import Notes from './notes'
import AddNotes from './addNotes'

export default function NoteLists({ notes }) {
    return (
        <div>
       {notes.map((note) => <Notes id={note.id} text={note.text}/>)}
       <AddNotes/>
        </div>
    )
}
