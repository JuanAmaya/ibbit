import { useEffect, useState } from "react";
import styles from "./SunAndMoon.module.css";

type SunProps = {
  imagesArr: string[];
  isSun?: boolean;
};

export default function SunAndMoon({ imagesArr, isSun }: SunProps) {
  const [showSun, setShowSun] = useState(true);

  useEffect(() => {
    if (isSun === false) {
      setShowSun(false);
    } else {
      setShowSun(true);
    }
  }, [isSun]);

  return (
    <div
      className={` ${
        showSun ? "mt-50 md:mt-72" : "mt-20 md:mt-50"
      } mx-auto flex justify-center min-lg:items-center lg:mt-20 pointer-events-none`}
    >
      <div
        className={`flex items-center w-max h-max scale-[15] md:scale-[20] min-lg:scale-[25] relative ${styles.sunBanner}`}
      >
        <div
          className={`${
            showSun ? styles.sunSprite : styles.moonSprite
          } pixelArt`}
        ></div>
        <div className={styles.groupSlider}>
          {imagesArr.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Illit group photo"
              className={`${showSun ? styles.groupPic : styles.memberPic}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
