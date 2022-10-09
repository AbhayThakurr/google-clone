import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "./Search";
function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home_headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppIcon />
          <Avatar />
        </div>
      </div>

      <div className="home_body">
        <img
          className="google_image"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home_body_inputContainer">
          <Search hideButtons />
        </div>
      </div>
    </div>
  );
}

export default Home;
