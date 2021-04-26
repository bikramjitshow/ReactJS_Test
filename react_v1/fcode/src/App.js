import "./App.css";
import Swal from "sweetalert2";
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'


import Cards from "./components/Cards";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Home from "./components/Home";
import Notfound from "./components/Notfound";

function App() {
  const btnHandel = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <Switch>
                <Route exact path='/'>
                  <Home></Home>
                </Route>
                <Route path='/about'>
                  <About></About>
                </Route>
                <Route path='/contact'>
                  <Contact></Contact>
                </Route>
                <Route path='/courses'>
                  <Courses></Courses>
                </Route>
                <Route path="*">
                  <Notfound></Notfound>
                </Route>
              </Switch>

              {/* <Cards></Cards> */}
              {/* <button className="btn btn-success" onClick={btnHandel}>
              Click me
            </button> */}
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
