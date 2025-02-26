import "./App.css";
import Body from "./component/Body";
import Explore from "./component/Explore";
import Help from "./component/Help";
import Homes from "./component/Homes";
import Navbar from "./component/navbar";

function App() {
  return (
    <div>
      {/* Navbar */}
      <div>
        <Navbar />
        <Body />
      </div>

      <div>
        <Explore />
      </div>

      <div>
        <Homes />
      </div>
      <div>
        <Help />
      </div>
    </div>
  );
}

export default App;
