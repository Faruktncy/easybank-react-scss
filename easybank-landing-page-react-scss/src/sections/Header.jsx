import React from "react";
import Button from "../components/Button";

const Header = () => {
  return (
    <>
      <section className="intro">
        <img src="images/image-mockups.png" alt="phone mockup" />

        <div className="intro-content">
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button />
        </div>
      </section>
    </>
  );
};

export default Header;
