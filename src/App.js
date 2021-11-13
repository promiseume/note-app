import Home from './Component/home';
import NoteLists from './Component/noteLists';
import { nanoid } from 'nanoid';
import { Route, Switch } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [notes , setNotes] = useState([{
    id: nanoid(),
    text:'This is  my note'
  },
  {
    id: nanoid(),
    text:'This is  my note'
  }]);
  return (
    <div>
       <NoteLists notes={notes}/>
     </div>
  );
}

export default App;
