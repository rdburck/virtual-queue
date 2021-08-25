import logo from './logo.svg';
import "materialize-css/dist/css/materialize.min.css"
import './App.css';
import NavBar from './Components/navBar';
import Form from './pages/form.js';
import Queue from './pages/queue.js';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Queue}/>
            <Route exact path="/new-customer" component={Form}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
