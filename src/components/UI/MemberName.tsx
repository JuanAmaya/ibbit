import styles from "./MemberName.module.css";
import { useEffect, useState } from "react";
import StrokeText from "./StrokeText";
import { AnimatePresence } from "motion/react";
import { motion } from "framer-motion";

const nameVariants = {
  hidden: {
    y: "-50px",
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: "50px",
    opacity: 0,
  },
};

export default function MemberName({
  name,
  strokeClass,
}: {
  name: string;
  strokeClass: string;
}) {
  const [nameArr, setNameArr] = useState<string[]>([]);

  useEffect(() => {
    setNameArr(name.split(""));
  }, [name]);

  return (
    <h1 className={styles.nameContainer}>
      {nameArr.length > 1 ? (
        <AnimatePresence>
          <ul className="relative w-full" key={name}>
            {nameArr.map((char, index) => (
              <motion.li
                key={index}
                className={`absolute text-8xl lg:text-9xl ${
                  index === 0
                    ? "right-7/12 top-10 lg:right-auto "
                    : index === 1
                    ? "left-7/12 top-5 lg:left-48 lg:top-full"
                    : "left-5/12 top-30 md:left-1/2 md:-translate-x-1/2 lg:translate-0 lg:left-96 lg:top-10"
                }`}
                variants={nameVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <span className={styles.floating}>
                  <StrokeText title={char} strokeClass={strokeClass} />
                </span>
              </motion.li>
            ))}
          </ul>
        </AnimatePresence>
      ) : (
        <></>
      )}
    </h1>
  );
}
