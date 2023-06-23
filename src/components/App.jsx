import React from "react";
import Login from "./Login";

var isLoggedin = false;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {
        //  isLoggedin ? <h1>Hello</h1> : <Login />
        currentTime > 12 && <h1>Why are you still working</h1>
      }
    </div>
  );
}

export default App;
