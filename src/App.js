import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home></Home>
      </Route>

      <Route exact path="/stuff">
        <h3>This is Stuff!</h3>
        <a href="/">Go to home</a>
      </Route>

{/*
      <Route>
        <Redirect to="/"/>
      </Route>
*/}
    </BrowserRouter>
  );
}

export default App;
