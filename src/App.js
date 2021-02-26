import './Main.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LeftNavBar from "./HomeComponents/LeftNavBar";
import UpNavBar from "./HomeComponents/UpNavBar";
import Footer from "./HomeComponents/Footer";
import Content from "./HomeComponents/Content";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <LeftNavBar/>

          <div className="col-md-9" style={{ backgroundColor: "white" }}>
            <UpNavBar/>
            <Content/>
          </div>
          <Footer/>

        </div>
      </div>
    </div>
  );
}

export default App;
