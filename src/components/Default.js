import React from "react";

const Default = props => {
  return (
    <div className="container">
      <h1>404</h1>
      <h1>error</h1>
      <h2>page not found</h2>
      <h3>
        requested URL{" "}
        <span className="text-danger">{props.location.pathname}</span> was not
        found
      </h3>
    </div>
  );
};

export default Default;
