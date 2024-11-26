import "./App.css";
import Body from "./component/Body";
import Navbar from "./component/navbar";

function App() {
  return (
    <div>
      {/* Navbar */}
      <div>
        <Navbar />
        <Body />
      </div>

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
