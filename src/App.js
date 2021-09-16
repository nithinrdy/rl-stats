import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import SteamSearch from "./components/steam/SteamSearch";
import EpicSearch from "./components/epic/EpicSearch";
import PSSearch from "./components/ps/PSSearch";
import XboxSearch from "./components/xb/XboxSearch";

function App() {
    return <SteamSearch />;
}

export default App;
