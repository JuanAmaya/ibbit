import styles from "./CoverStar.module.css";

type CoverStarProps = {
  title: string[];
  albumCover: string;
};

export default function CoverStar({ title, albumCover }: CoverStarProps) {
  return (
    <div className="h-[345px] md:h-[460px] flex justify-center items-center">
      <div
        className={`${
          title[0] === "SUPER"
            ? styles.SRMStar
            : title[0] === "I'LL"
            ? styles.ILYStar
            : styles.bombStar
        } pixelArt scale-[15] md:scale-[20]`}
      ></div>
      <div className="absolute w-full h-full flex justify-center items-center overflow-hidden">
        <img
          src={albumCover}
          alt="Super Real Me Cover"
          className="w-[106px] md:w-[141px] absolute z-0"
        />
      </div>
    </div>
  );
}
