import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Content from "./HomeComponents/Content";
import Footer from "./HomeComponents/Footer";
import LeftNavBar from "./HomeComponents/LeftNavBar";
import UpNavBar from "./HomeComponents/UpNavBar";

function App() {
  return (
    <div className="App">
      <div className="container-fluid-sm">
        <div className="row">
          <LeftNavBar />
          <div className="col" style={{ backgroundColor:"white" }}>
            <UpNavBar />
            <Content /> 
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
