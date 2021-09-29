import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Home() {
    return (
        <div id="home-div">
            <div>
                <h1>Pick a Platform</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Link to="/steam" className="home-links">
                    Steam
                </Link>
                <Link to="/epic" className="home-links">
                    Epic
                </Link>
                <Link to="/ps" className="home-links">
                    PS
                </Link>
                <Link to="/xbox" className="home-links">
                    Xbox
                </Link>
            </div>
        </div>
    );
}

export default Home;
