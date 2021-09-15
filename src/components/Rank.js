import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getImg } from "./getIcon";

function Rank(props) {
    const [hover, setHover] = useState(false);
    const str = props.rankDetails.split(":");
    const count = props.count;
    function hoverStart() {
        setHover(true);
    }
    function hoverEnd() {
        setHover(false);
    }
    let url;
    let rank;
    let mmr;

    if (str[0] === "Un-Ranked") {
        url = getImg("Unranked");
        mmr = str[1].trim();
        rank = str[0];
    } else {
        url = getImg(str[1]);
        let mmrarr = str[1].split("(");
        rank = mmrarr[0];
        mmr = mmrarr[1].split(")");
    }
    const rankAnim = {
        initial: { y: 50, opacity: 0 },
        final: { y: 0, opacity: 1, transition: { delay: 0.1 * count } },
        hover: function hv() {
            return {
                scale: 1.1,
                height: ["7em", "11em"],
                boxShadow: "10px 10px 2px 0px",
                transition: { duration: 0.3 },
            };
        },
        exit: {
            y: 50,
            opacity: 0,
            transition: { delay: 0.1 * count, duration: 0.7 },
        },
    };
    const mmrAnim = {
        initial: { y: -50, opacity: 0 },
        final: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.2 } },
        exit: { y: -50, opacity: 0, transition: { duration: 0.1 } },
    };
    return (
        <motion.div
            variants={rankAnim}
            initial="initial"
            animate="final"
            whileHover="hover"
            exit="exit"
            className="rank"
            onHoverStart={hoverStart}
            onHoverEnd={hoverEnd}
        >
            <img className="rank-img" src={url} alt={rank}></img>
            <div className="rank-text">
                <h3 className="rank-text-playlist">{str[0]}</h3>
                <h5 className="rank-text-rank">{rank}</h5>
                <AnimatePresence>
                    {hover ? (
                        <motion.h1
                            className="mmr"
                            variants={mmrAnim}
                            initial="initial"
                            animate="final"
                            style={{ fontSize: "2.5rem" }}
                            exit="exit"
                        >
                            <span className="mmr-text">MMR</span>
                            {mmr}
                        </motion.h1>
                    ) : (
                        ""
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default Rank;
