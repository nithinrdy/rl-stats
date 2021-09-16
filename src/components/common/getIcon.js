import Unranked from "../../rankIcons/Unranked.png";
import Bronze1 from "../../rankIcons/Bronze1.png";
import Bronze2 from "../../rankIcons/Bronze2.png";
import Bronze3 from "../../rankIcons/Bronze3.png";
import Silver1 from "../../rankIcons/Silver1.png";
import Silver2 from "../../rankIcons/Silver2.png";
import Silver3 from "../../rankIcons/Silver3.png";
import Gold1 from "../../rankIcons/Gold1.png";
import Gold2 from "../../rankIcons/Gold2.png";
import Gold3 from "../../rankIcons/Gold3.png";
import Platinum1 from "../../rankIcons/Platinum1.png";
import Platinum2 from "../../rankIcons/Platinum2.png";
import Platinum3 from "../../rankIcons/Platinum3.png";
import Diamond1 from "../../rankIcons/Diamond1.png";
import Diamond2 from "../../rankIcons/Diamond2.png";
import Diamond3 from "../../rankIcons/Diamond3.png";
import Champ1 from "../../rankIcons/Champ1.png";
import Champ2 from "../../rankIcons/Champ2.png";
import Champ3 from "../../rankIcons/Champ3.png";
import GC1 from "../../rankIcons/GC1.png";
import GC2 from "../../rankIcons/GC2.png";
import GC3 from "../../rankIcons/GC3.png";
import SSL from "../../rankIcons/SSL.png";

const ranks = {
    Unranked: Unranked,
    "Bronze I ": Bronze1,
    "Bronze II ": Bronze2,
    "Bronze III": Bronze3,
    "Silver I ": Silver1,
    "Silver II ": Silver2,
    "Silver III": Silver3,
    "Gold I ": Gold1,
    "Gold II ": Gold2,
    "Gold III": Gold3,
    "Platinum I ": Platinum1,
    "Platinum II ": Platinum2,
    "Platinum III": Platinum3,
    "Diamond I ": Diamond1,
    "Diamond II ": Diamond2,
    "Diamond III": Diamond3,
    "Grand Champion I ": GC1,
    "Grand Champion II ": GC2,
    "Grand Champion III": GC3,
    "Champion I ": Champ1,
    "Champion II ": Champ2,
    "Champion III": Champ3,
    "Supersonic Legend": SSL,
};

export const getImg = (prp) => {
    for (let rank in ranks) {
        if (prp.includes(rank)) {
            return ranks[rank];
        }
    }
};
