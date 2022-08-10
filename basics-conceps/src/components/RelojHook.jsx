import React, { useState, useEffect } from "react";
const RelojHook = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;
    if (visible) {
      temporizador = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }
    return () => {
      // fase desmontaje
      clearInterval(temporizador);
    };
  }, [visible]);
  function Reloj({ hora }) {
    return <h3>{hora}</h3>;
  }
  return (
    <div>
      {visible && <Reloj hora={hora} />}
      <button onClick={() => setVisible(true)}>Iniciar</button>
      <button onClick={() => setVisible(false)}>Detener</button>
    </div>
  );
};

export default RelojHook;
