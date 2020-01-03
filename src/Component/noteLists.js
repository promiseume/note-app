import React from 'react'
import Notes from './notes'
import AddNotes from './addNotes'


export default function NoteLists({ notes, addNote, deleteNote }) {
    return (
        <div className='note-lists'>
       {
       notes.map((note) => <Notes id={note.id}
        text={note.text}
        handleDeleteNote={deleteNote}
        />)
        }
       <AddNotes handleNote={addNote} />
        </div>
    )
}
