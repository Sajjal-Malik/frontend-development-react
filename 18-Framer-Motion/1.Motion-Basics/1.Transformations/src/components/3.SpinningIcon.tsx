import { motion } from "framer-motion";
import image from '../assets/Macbook-pro-2020-M1.jpg';

const SpinningIcon = () => (
  <motion.img
    src={image}
    className="w-20 h-20"
    initial={{ x: 0, y: 0 }}
    animate={{ x: 50, y: 50, rotate: 360 }}
    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
  />
);

export default SpinningIcon;
;
