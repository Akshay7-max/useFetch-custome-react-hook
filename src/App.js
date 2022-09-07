import React, { useState, useEffect } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import User from "./User";

const App = () => {

  return (
    <>
      <div className="main-container">
        <div>
          <h1>React Hook and Context API</h1>
          <User />
        </div>
      </div>
    </>
  );
};

export default App;
