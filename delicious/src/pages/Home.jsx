import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import Desert from "../components/Desert";
import {motion} from "framer-motion"
import  Category  from "../components/Category"
import  Search  from "../components/Search"


export const Home = () =>{
    return(
        <div>
        <Search/>
        <Category/>
        <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <Popular/>
            <Veggie/>
            <Desert/>
        </motion.div>
        </div>
    );
}