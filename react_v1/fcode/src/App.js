import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Swal from "sweetalert2";

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
      <Header></Header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <Cards></Cards>
            <button className="btn btn-success" onClick={btnHandel}>
              Click me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
