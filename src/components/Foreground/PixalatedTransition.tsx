import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { useBlocker } from "react-router-dom";

const pixelVariant = {
  initial: {
    opacity: 0,
  },
  open: (i: number) => ({
    opacity: 1,
    transition: { duration: 0, delay: i * 0.02 },
  }),
  closed: (i: number) => ({
    opacity: 0,
    transition: { duration: 0, delay: i * 0.02 },
  }),
};

export default function PixalatedTransition() {
  const [animationsCompleted, setAnimationsCompleted] = useState(0);
  const totalAnimations =
    Math.ceil(window.innerHeight / (window.innerWidth * 0.05)) * 20;

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      currentLocation.pathname !== nextLocation.pathname
  );

  useEffect(() => {
    if (
      animationsCompleted >= totalAnimations &&
      blocker.state === "blocked" &&
      blocker.proceed
    ) {
      setTimeout(() => {
        blocker.proceed?.();
        setAnimationsCompleted(0);
      }, 500);
    }
  }, [animationsCompleted, blocker]);

  console.log("blocker", blocker);

  const fisherShuffle = (a: any[]) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const memoizedData = useMemo(() => {
    const blockSize = window.innerWidth * 0.05;
    const amountOfBlocks = Math.ceil(window.innerHeight / blockSize);
    const columns = 20;

    const colors = [...Array(columns)].map(() =>
      [...Array(amountOfBlocks)].map(() => Math.floor(Math.random() * 5) + 1)
    );

    const columnDelays = [...Array(columns)].map(() =>
      fisherShuffle([...Array(amountOfBlocks)].map((_, i) => i))
    );

    return { columnDelays, colors, amountOfBlocks };
  }, []);

  const getBlocks = (columnIndex: number) => {
    return [...Array(memoizedData.amountOfBlocks)].map((_, i) => {
      const res = memoizedData.colors[columnIndex][i];
      return (
        <motion.div
          key={i}
          className={`${
            res === 1
              ? "bg-blue-iroha"
              : res === 2
              ? "bg-purple-moka"
              : res === 3
              ? "bg-red-yunah"
              : res === 4
              ? "bg-pink-wonhee"
              : "bg-yellow-minju"
          } h-[5vw] w-full`}
          variants={pixelVariant}
          initial="initial"
          animate={blocker.state === "blocked" ? "open" : "closed"}
          onAnimationComplete={() => {
            setAnimationsCompleted((prev) => prev + 1);
          }}
          custom={memoizedData.columnDelays[columnIndex][i]}
        ></motion.div>
      );
    });
  };

  return (
    <div className="flex h-screen overflow-hidden fixed inset-0 z-50 top-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div key={`column-${i}`} className="w-[5vw] h-full">
          {getBlocks(i)}
        </div>
      ))}
    </div>
  );
}
