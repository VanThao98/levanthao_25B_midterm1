import React from "react";
import { ALL_PNV_TEACHERS } from "./teachers.js";

// NO change to perform here...
export function User({ props }) {
  return (
    <div id="user" data-testid="user">
      <h2>
        {props.firstName} {props.lastName}{" "}
      </h2>
      <p> {props.title}</p>
    </div>
  );
}

function App() {
  const allteacher = ALL_PNV_TEACHERS;
  return (
    <div id="app">
      <h1>PNV Team !!</h1>
      <p>Here are some PNV trainers and educators, do you know them?</p>
      {allteacher.map((expert)=>
      (
        <User
          props={expert}         
        />
      ))
      }
    </div>
  );
}

export default App;

