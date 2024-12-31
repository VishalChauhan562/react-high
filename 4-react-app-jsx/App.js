import React from "react";
import ReactDOM from "react-dom/client";

// react-element
const element = <div>Hello Element</div>;

// multiple line element

const element1 = (
        <div>
          <li>Man</li>
          <li>Woman</li>
        </div>
      );


// react-component
const Comp = () => <div>Hello Component</div>;


// component-composition

const Cc = () => <div>{element}</div>;

// multiple line component

const Comp2 = () => {
  return <div>
    <li>Man-comp</li>
    <li>Woman-comp</li>
    <Cc/>
  </div>;
};

// All

const MainComp = () => {
  return (
    <>
      <h3>react-element</h3>
      {element}
      <h3>multiple line element</h3>
      {element1}
      <h3>react-component</h3>
      <Comp/>
      <h3>component-composition</h3>
      <Cc/>
      <h3>multiple line component</h3>
      <Comp2/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainComp/>);
