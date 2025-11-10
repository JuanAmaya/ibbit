import { Link } from "react-router-dom";
import styles from "./CloudButton.module.css";
import StrokeText from "../StrokeText";

type CloudButtonPros = {
  title: string;
  link: string;
  strokeClass: string;
};

export default function CloudButton({
  title,
  link,
  strokeClass,
}: CloudButtonPros) {
  return (
    <Link to={link} className={`${styles.cloudButton} relative transition-all`}>
      <img
        src="./sprites/cloud.png"
        alt="Cloud sprite"
        className="absolute scale-[8] pixelArt"
      />
      <span className="absolute text-3xl text-center">
        <StrokeText title={title} strokeClass={strokeClass} />
      </span>
    </Link>
  );
}
