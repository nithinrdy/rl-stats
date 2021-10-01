import React from "react";
import { Link } from "react-router-dom";
function Home() {
    return (
        <div id="home-div">
            <div style={{ marginBottom: "5em" }}>
                <h1>Pick a Platform</h1>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                }}
            >
                <Link to="/steam" className="home-links">
                    Steam
                </Link>
                <Link to="/epic" className="home-links">
                    Epic
                </Link>
                <Link to="/ps" className="home-links">
                    PlayStation
                </Link>
                <Link to="/xbox" className="home-links">
                    Xbox
                </Link>
            </div>
        </div>
    );
}

export default Home;
