import Home from './Component/home';
import NoteLists from './Component/noteLists';
import { nanoid } from 'nanoid';
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from 'react';
import Search from './Component/search';

function App() {
  const [notes , setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
 
useEffect(() =>{
  const savedNote = JSON.parse(localStorage.getItem('react-notes-app-data'));
  if(savedNote){
    setNotes(savedNote)
  }
},[])

  useEffect(() =>{
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
  },[notes])


    const addNewNote = (text) =>{
        const newNote ={
          id:nanoid,
          text:text
        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes)
    };
    const deleteNote =(id) =>{
     setNotes(notes.filter((note)=> note.id !== id));
    }

  return (
    <>
    <Search handleSearch={setSearchText}/>
    <div className='container'>
       <NoteLists
        notes={notes.filter((note) => note.text.toString().toLowerCase().includes(searchText))} 
        addNote={addNewNote}
        deleteNote={deleteNote}/>
     </div>
     </>
  );
}

export default App;
