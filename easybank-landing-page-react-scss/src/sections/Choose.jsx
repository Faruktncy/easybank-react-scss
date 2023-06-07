import React from "react";
import Feature from "../components/Feature";

const Choose = () => {
  return (
    <>
      <section className="choose">
        <div className="choose-desc">
          <h1>Why choose Easybank?</h1>
          <p>
            {" "}
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="feature-container">
          <Feature />
        </div>
      </section>
    </>
  );
};

export default Choose;
