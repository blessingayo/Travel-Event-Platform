import React from "react";
import Navbar from "../homePage/Navbar";
import "./homePage.css"
import MailList from "../../components/mailList/MailList";
import Search from "../../components/searchComponents/Search";
import Header from "../homePage/Header"



const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Search />
      <MailList />
    </div>
  );
};

export default HomePage;
