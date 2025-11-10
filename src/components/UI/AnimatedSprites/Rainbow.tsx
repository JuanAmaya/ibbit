import styles from "./Rainbow.module.css";
import StrokeText from "../StrokeText";

type RainbowProps = {
  year: number;
  strokeClass: string;
};

export default function Rainbow({ year, strokeClass }: RainbowProps) {
  return (
    <div
      className={`${styles.rainbowContainer} relative h-[160px] md:h-[192px] flex justify-center items-center`}
    >
      <div
        className={`${styles.raibowSprite} pixelArt scale-[10] md:scale-[12] absolute z-0`}
      />
      <div className="text-5xl md:text-6xl absolute z-10 top-1/5">
        <StrokeText
          title={year.toString()}
          strokeClass={strokeClass + "Title"}
        />
      </div>
    </div>
  );
}
