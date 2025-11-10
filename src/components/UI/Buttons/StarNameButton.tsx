import { useEffect, useState } from "react";
import StrokeText from "../StrokeText";

type StarNameButtonProps = {
  name: string;
  strokeClass: string;
  starImg: string;
};

export function StarNameButton({
  name,
  starImg,
  strokeClass,
}: StarNameButtonProps) {
  const [nameArr, setNameArr] = useState<string[]>([]);

  useEffect(() => {
    const splitName = name.split("");

    if (splitName.length > 2) {
      splitName.splice(2, 1);
    }

    setNameArr(splitName);
  }, [name]);

  return (
    <div className="relative h-[144px] w-[136px] hover:scale-105 transition-transform duration-300 overflow-visible md:scale-120 md:hover:scale-130">
      <span className="absolute z-10 w-full left-0 text-center top-0">
        {nameArr.length > 0 &&
          nameArr.map((name, index) => (
            <span
              key={index}
              className={`${
                index === 0 ? "top-5" : "top-21"
              } absolute text-5xl left-1/2 -translate-x-1/2`}
            >
              <StrokeText title={name} strokeClass={strokeClass} />
            </span>
          ))}
      </span>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <img
          src={starImg}
          alt="Yunah star"
          className="pixelArt origin-center transform scale-[8]"
        />
      </div>
    </div>
  );
}
