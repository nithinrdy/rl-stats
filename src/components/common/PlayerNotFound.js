import React from "react";
import { motion } from "framer-motion";

const styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "auto",
};

const emoticonAnim = {
    initial: { y: -30, opacity: 0 },
    final: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { y: -30, opacity: 0, transition: { duration: 0.8 } },
};
const infoAnim = {
    initial: { y: 50, opacity: 0 },
    final: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { y: 50, opacity: 0, transition: { duration: 0.8 } },
};

function PlayerNotFound() {
    return (
        <motion.div style={styles}>
            <motion.h1
                style={{
                    fontFamily: "sans-serif",
                    margin: "1em",
                    fontSize: "3rem",
                }}
                variants={emoticonAnim}
                initial="initial"
                animate="final"
                exit="exit"
            >
                ¯\_(ツ)_/¯
            </motion.h1>
            <motion.h2
                variants={infoAnim}
                initial="initial"
                animate="final"
                exit="exit"
            >
                No matching players found.
            </motion.h2>
        </motion.div>
    );
}

export default PlayerNotFound;
