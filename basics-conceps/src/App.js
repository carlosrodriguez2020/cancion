import { useState } from "react";
import "./App.css";
import Listas from "./components/Listas";
import Properties from "./components/Properties";
import RCComponent from "./components/RCComponent";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RFComponent from "./components/RFComponent";
import StateRCC from "./components/StateRCC";
function App() {
  const [contador, setContador] = useState(0);
  const aumentar = () => {
    setContador(contador + 1);
    console.log(contador);
  };
  return (
    <div className="App">
      <RCComponent msj="I'm a component of react" />
      <RFComponent msj="I'm a component of react" />
      <Properties
        contador={contador}
        string="this is a string"
        number={123}
        array={[1, 2, 3]}
        object={{
          course: "react",
          youtuber: "Jon Mircha",
          student: "Carlos Rodriguez",
          fun: () => alert("Fuuuusioon!"),
        }}
        rcc={
          <RCComponent mensj="Soy un componente de Clase enviado como props" />
        }
        boolean={true}
      />
      <button onClick={() => aumentar()}>Increment</button>
      <StateRCC />
      <RenderizadoCondicional />
      <Listas />
    </div>
  );
}

export default App;
