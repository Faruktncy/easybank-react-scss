import React from "react";
import Header from "../sections/Header";
import Choose from "../sections/Choose";
import Blog from "../sections/Blog";
import Footer from "../sections/Footer";
import Navbar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <Header />
        <Choose />
        <Blog />
      </main>
      <Footer />
    </>
  );
};
export default Home;
