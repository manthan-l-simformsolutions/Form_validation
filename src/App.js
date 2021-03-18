import './App.css';
import FormValidation from './components/FormValidation';
import rocket from "./assets/rocket.png"
function App() {
  return (
    <>
      <div className="container2" >
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-5">
              <FormValidation />
            </div>
            <div className="col-md-7 my-auto">
              <img className="img-fluid w-100" src={rocket} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
