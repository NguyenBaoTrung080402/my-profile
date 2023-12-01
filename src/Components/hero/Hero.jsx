import "./hero.scss"
import { motion } from "framer-motion"

const contextVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}
const SliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    },
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="imageContainer">
                <img className="avatar" src="/it-me-removebg.png" alt="it-me" />
            </div>
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={contextVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={contextVariants}>FULLSTACK DEVELOPER</motion.h2>
                    <motion.h1 variants={contextVariants}>Web Developer and UI Designer</motion.h1>
                    <motion.div variants={contextVariants} className="buttons">
                        <motion.button variants={contextVariants}>See the Latest Works</motion.button>
                        <motion.button variants={contextVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={contextVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div
                variants={SliderVariants}
                initial="initial"
                animate="animate"
                className="slidingTextContainer"
            >
                Writer Content Creator Influencer
            </motion.div>

        </div>
    )
}

export default Hero