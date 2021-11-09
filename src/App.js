import Home from './Component/home';
import NoteLists from './Component/noteLists';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="noteList" component={NoteLists} />
      </Switch>
     </div>
  );
}

export default App;
