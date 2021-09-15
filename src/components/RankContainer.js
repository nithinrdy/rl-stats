import axios from "axios";
import React, { useState, useEffect } from "react";
import Rank from "./Rank";
import PlayerNotFound from "./PlayerNotFound";
import { motion, AnimatePresence } from "framer-motion";

export default function Something(props) {
    const [formatted, setFormatted] = useState([]);
    const [loading, setLoading] = useState(false);
    const [invalid, setInvalid] = useState(false);
    useEffect(() => {
        if (props.user !== "") {
            setLoading(true);
        }
        setFormatted([]);
        let arr = props.user.split("/");
        let id =
            arr[arr.length - 1] !== ""
                ? arr[arr.length - 1]
                : arr[arr.length - 2];
        axios
            .get(`https://api.yannismate.de/rank/steam/${id}`)
            .then((res) => {
                if (res.data === `Player not found. ${id} (STEAM)`) {
                    setInvalid(true);
                    setFormatted(["Invalid username. No such player found."]);
                } else {
                    setInvalid(false);
                    setFormatted(res.data.split(" | "));
                }
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            })
            .catch((err) => console.log("Done f-ed up"));
    }, [props.user]);

    let loadAnim = {
        initial: { opacity: 0 },
        final: {
            opacity: 1,
            transition: {
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
        exit: { opacity: 0 },
    };
    let i = 0;

    return (
        <div id="stats">
            <AnimatePresence exitBeforeEnter>
                {loading ? (
                    <motion.div
                        key="load"
                        variants={loadAnim}
                        initial="initial"
                        animate="final"
                        exit="exit"
                        style={{ fontSize: "7rem" }}
                    >
                        ...
                    </motion.div>
                ) : invalid ? (
                    <PlayerNotFound />
                ) : (
                    formatted.map((elem) => {
                        i++;
                        if (elem !== "") {
                            return (
                                <Rank rankDetails={elem} count={i} key={i} />
                            );
                        }
                        return "";
                    })
                )}
            </AnimatePresence>
        </div>
    );
}
