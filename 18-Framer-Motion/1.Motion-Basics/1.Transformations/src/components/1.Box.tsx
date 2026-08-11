import { motion } from "framer-motion";

const Box = () => (
  <motion.div
    className="bg-blue-500 w-20 h-20"
    initial={{ x: -100 }}
    animate={{ x: 200, y: 200, rotate: 280 }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut"}}
  />
);

export default Box;
