import { motion } from "framer-motion";

const loaderVariants = {
    animationOne: {
        x: [-70, 70],
        y: [0, -50],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.6,
            },
            y: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.3,
                ease: "easeOut",
            },
        },
    },
};

const dotVariant = {
    animate: {
        y: [0, 20, 20, 0],
        x: [40, 40, 0, 0], 
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 0.8, 1],
        },
    },
};

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader-content">
                <motion.div
                    className="loader-ball"
                    variants={loaderVariants}
                    animate="animationOne"
                ></motion.div>
                <div className="loading">
                    Loading
                    <div style={{ display: "inline-flex", width: "80px", position: "relative" }}>
                        <motion.span
                            animate={{
                                x: [0, 40, 40],
                                transition: {
                                    duration: 1.5,
                                    repeat: Infinity,
                                    times: [0, 0.8, 1],
                                },
                            }}
                        >
                            .
                        </motion.span>
                        <motion.span
                            animate={{
                                x: [0, 40, 40],
                                transition: {
                                    duration: 1.5,
                                    repeat: Infinity,
                                    times: [0, 0.8, 1],
                                },
                            }}
                        >
                            .
                        </motion.span>
                        <motion.span
                            animate="animate"
                            variants={dotVariant}
                            style={{ position: "absolute", right: 40 }} 
                        >
                            .
                        </motion.span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
