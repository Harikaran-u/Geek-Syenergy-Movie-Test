import {BrowserRouter, Route, Switch} from 'react-router-dom'

import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import Movies from './components/Movies/Movies'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/movies" component={Movies} />
    </Switch>
  </BrowserRouter>
)

export default App
