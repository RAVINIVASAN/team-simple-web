import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="hero text-center text-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 5 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <h1 className="display-4 fw-bold">Building Modern Web Solutions</h1>
        <p className="lead">Clean • Professional • Scalable</p>
      </div>
    </motion.section>
  );
}

export default Hero;