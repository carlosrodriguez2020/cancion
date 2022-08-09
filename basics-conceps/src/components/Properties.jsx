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
        <hr />
        <li>
          {props.array.map((element, index) => (
            <span key={index}>{element}</span>
          ))}
        </li>
        <li>
          {Object.entries(props.object).map((el, index) => {
            if (typeof el[1] === "string")
              // console.log(">>>>>>>>", typeof el[1]);
              return (
                <p key={index}>
                  {el[0]}:{el[1]}
                </p>
              );
          })}
        </li>
        <hr />
        <li>{props.object.student}</li>
        <li>{props.object.course}</li>
        <li>{props.object.youtuber}</li>

        <li>{props.boolean ? "true" : "false"}</li>

        <li>{props.rcc}</li>
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
