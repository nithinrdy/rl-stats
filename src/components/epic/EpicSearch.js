import React, { useState } from "react";
import RankContainer from "../common/RankContainer";
import "../../App.css";
import { motion } from "framer-motion";

export default function EpicSearch() {
    const [name, setName] = useState("");
    const [toSend, setSend] = useState("");
    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSend(name);
    }

    const buttonAnim = {
        initial: { y: 50, opacity: 0 },
        final: { y: 0, opacity: 1, transition: { duration: 0.8 } },
        hover: function hv() {
            return {
                scale: 1.05,
                boxShadow: "3px 3px 1px 0px",
                transition: { duration: 0.05 },
            };
        },
        tap: function tap() {
            return {
                scale: 0.95,
                transition: {
                    duration: 0.03,
                },
            };
        },
    };
    const inputAnim = {
        initial: { y: -50, opacity: 0 },
        final: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    };
    return (
        <div id="main">
            <motion.h1 variants={inputAnim} initial="initial" animate="final">
                <strong>Enter your Epic Player ID</strong>
            </motion.h1>
            <form id="form">
                <motion.input
                    type="text"
                    placeholder="This field is not case-sensitive"
                    onChange={handleChange}
                    id="input"
                    variants={inputAnim}
                    initial="initial"
                    animate="final"
                ></motion.input>
                <motion.button
                    type="submit"
                    id="submit"
                    onClick={handleSubmit}
                    variants={buttonAnim}
                    initial="initial"
                    animate="final"
                    whileHover="hover"
                    whileTap="tap"
                >
                    Submit
                </motion.button>
            </form>
            <RankContainer user={toSend} />
        </div>
    );
}
