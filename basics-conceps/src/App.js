import "./App.css";
import Properties from "./components/Properties";
import RCComponent from "./components/RCComponent";
import RFComponent from "./components/RFComponent";
function App() {
  return (
    <div>
      <RCComponent msj="I'm a component of react" />
      <RFComponent msj="I'm a component of react" />
      <Properties
        string="this is a string"
        number={123}
        array={[1, 2, 3]}
        object={{
          course: "react",
          youtuber: "Jon Mircha",
          Student: "Carlos Rodriguez",
        }}
      />
    </div>
  );
}

export default App;
