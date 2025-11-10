import StrokeText from "../StrokeText";
import styles from "./TrackList.module.css";

type TrackListProps = {
  tracks: string[];
  strokeClass: string;
};

export default function TrackList({ tracks, strokeClass }: TrackListProps) {
  return (
    <div className="relative flex justify-center h-fit py-30 lg:py-20 pointer-events-none z-0">
      <div
        className={`${styles.darkCloudSprite} pixelArt absolute scale-[14] md:scale-[18] z-0 top-1/2`}
      ></div>
      <ul className="w-full">
        {tracks.map((track, index) => (
          <li
            key={index}
            className="relative h-15 md:h-20 w-full flex justify-center text-center"
          >
            <span className="text-4xl md:text-5xl absolute">
              <StrokeText title={track} strokeClass={strokeClass} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
