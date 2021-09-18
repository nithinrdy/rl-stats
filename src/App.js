import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/Home";
import SteamSearch from "./components/steam/SteamSearch";
import EpicSearch from "./components/epic/EpicSearch";
import PSSearch from "./components/ps/PSSearch";
import XboxSearch from "./components/xb/XboxSearch";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/steam" exact component={SteamSearch} />
                <Route path="/epic" exact component={EpicSearch} />
                <Route path="/ps" exact component={PSSearch} />
                <Route path="/xbox" exact component={XboxSearch} />
            </Switch>
        </Router>
    );
}

export default App;
