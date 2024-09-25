import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedBody from "../animations/AnimatedBody";
import React from "react";

const Footer = () => {
  return (
    <motion.section
      className=" h-[15vh] w-full  items-center justify-center bg-[#0E1016] pt-10  font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pb-0 lg:pt-6"
      initial="initial"
      animate="animate"
    ></motion.section>
  );
};

export default Footer;
