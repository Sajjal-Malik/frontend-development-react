import { motion } from "framer-motion";

const BouncingCircle = () => (
  <motion.div
    className="bg-red-500 rounded-full w-20 h-20"
    animate={{x: [0, 100, 200], y: [100, -100, 100]}}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  />
);

export default BouncingCircle;
