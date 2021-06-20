import React from "react";
import "./App.css";
// import Swal from 'sweetalert2';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Notfound from "./components/Notfound";
import Adduser from "./components/users/Adduser";

function App() {
  // const btnHandel = () => {
  //   // Swal.fire({
  //   //   position: "center",
  //   //   icon: "success",
  //   //   title: "Your work has been saved",
  //   //   showConfirmButton: false,
  //   //   timer: 2000,
  //   // });

  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire(
  //         'Deleted!',
  //         'Your file has been deleted.',
  //         'success'
  //       )
  //     }
  //   });
  // };

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contact" component={Contact}></Route>
                <Route exact path="/user/add" component={Adduser}></Route>
                <Route component={Notfound}></Route>
              </Switch>
              {/* <button className="btn btn-success" onClick={btnHandel}>
                Alert
              </button> */}
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
