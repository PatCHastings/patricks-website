import "./parallax.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Snowfall from "react-snowfall";

const Parallax = ({ type, toggleSection }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "700%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "technologies"
            ? "linear-gradient(180deg, rgb(22, 112, 248), rgb(183, 236, 245))"
            : "linear-gradient(180deg, rgb(22, 112, 248), rgb(0, 37, 94)",
      }}
    >
      {type === "technologies" && <Snowfall />}
      <motion.h1 style={{ y: yText }}>
        {type === "technologies" ? "Front End" : "Back End"}
      </motion.h1>
      {type === "technologies" ? (
        <motion.div className="topIceBerg"></motion.div>
      ) : (
        <motion.div className="bottomIceBerg"></motion.div>
      )}
      <motion.div
        className="clouds"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "technologies" ? "/clouds-transp.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
