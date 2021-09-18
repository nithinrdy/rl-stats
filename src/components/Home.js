import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Home() {
    return (
        <div>
            <h1>Pick a Platform</h1>
            <Link to="/steam">Steam</Link>
            <Link to="/epic">Epic</Link>
            <Link to="/ps">PS</Link>
            <Link to="/xbox">Xbox</Link>
        </div>
    );
}

export default Home;
