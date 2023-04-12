import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer className="Footer">
          <a href="https://github.com/shirinrz/weather-react-main/tree/master/src">
            Open-Source code
          </a>{" "}
          by Shirin Razi
        </footer>
      </div>
    </div>
  );
}

export default App;
