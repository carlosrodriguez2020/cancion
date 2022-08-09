import React from "react";
import PropsType from "props-type";

const Properties = (props) => {
  return (
    <section>
      <h2>{props.porDefecto}</h2>
      <button
        onClick={() => {
          props.object.fun();
        }}
      >
        ALERT
      </button>
      <ul>
        <li>{props.number}</li>
        <li>{props.string}</li>
        <li>{props.array.join(", ")}</li>
        {/* <li>
          {props.array.map((element) => {
            element.props.array;
          })}
        </li> */}

        {/* <li>{props.object.map(`<li>
          {}  
        </li>`)}</li> */}
        <li>{props.object.student}</li>
        <li>{props.object.course}</li>
        <li>{props.object.youtuber}</li>

        <li>{props.boolean ? "true" : "false"}</li>

        {/* <li>{props.rcc}</li> */}
      </ul>

      <article className="text-center">
        <h2>Contador</h2>
        <h3>{props.contador}</h3>
      </article>
    </section>
  );
};
export default Properties;

Properties.defaultProps = {
  porDefecto: "react's props",
};

Properties.PropsType = {
  number: PropsType.number,
  string: PropsType.string,
  array: Properties.array,
};
