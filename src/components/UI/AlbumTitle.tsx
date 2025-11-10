import styles from "./AlbumTitle.module.css";
import StrokeText from "./StrokeText";

type AlbumTitleProps = {
  title: string[];
  strokeClass: string;
};

export default function AlbumTitle({ title, strokeClass }: AlbumTitleProps) {
  return (
    <ul
      className={`${styles.titleContainer} relative h-fit my-12 lg:w-auto lg:flex lg:gap-72 lg:my-5`}
    >
      {title.map((word, index) => (
        <li className="relative h-20 lg:h-10 lg:w-auto" key={index}>
          <span
            className={`absolute text-5xl lg:text-6xl md:text-6xl ${
              index % 2 !== 0
                ? "left-1/2 lg:left-auto lg:top-full"
                : "right-1/2 lg:right-auto"
            }`}
          >
            <StrokeText title={word} strokeClass={strokeClass} />
          </span>
        </li>
      ))}
    </ul>
  );
}
