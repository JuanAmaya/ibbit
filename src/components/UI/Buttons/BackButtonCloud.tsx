import styles from "./BackButtonCloud.module.css";
import { Link } from "react-router-dom";

export default function BackButtonCloud() {
  return (
    <Link to={"/"}>
      <div
        className={`${styles.floatAnimation} h-[138px] flex items-center justify-center relative z-10 lg:w-[150px]`}
      >
        <div
          className={`${styles.arrowCloudSprite} pixelArt scale-[6] hover:scale-[6.5]`}
        />
      </div>
    </Link>
  );
}
