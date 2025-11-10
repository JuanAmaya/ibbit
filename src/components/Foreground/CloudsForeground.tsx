import styles from "./CloudsForeground.module.css";

export default function CloudsForeground() {
  return (
    <div className="pixelArt absolute w-full pointer-events-none">
      <img
        src="./sprites/1-cloud-bg.png"
        alt="Cloud"
        className={`${styles.slide1} absolute scale-[7] md:scale-[8] lg:scale-[10] right-8/12 lg:left-1/12 -top-[950px] md:-top-[980px] lg:-top-40`}
      />
      <img
        src="./sprites/4-cloud-bg.png"
        alt="Cloud"
        className={`${styles.slide2} absolute scale-[6] md:scale-[7] lg:scale-[8] right-3/12 md:right-4/12 lg:left-4/12 -top-[920px] md:-top-[950px] lg:-top-30`}
      />
      <img
        src="./sprites/3-cloud-bg.png"
        alt="Cloud"
        className={`${styles.slide4} absolute scale-[6] lg:scale-[6] lg:block right-3/12 md:right-5/12 lg:right-0 -top-10 lg:-top-45`}
      />
      <img
        src="./sprites/1-cloud-bg.png"
        alt="Cloud"
        className={`${styles.slide5} absolute scale-[8] hidden md:block md:right-2/12 lg:right-[50px] -top-35 lg:top-2`}
      />
      <img
        src="./sprites/2-cloud-bg.png"
        alt="Cloud"
        className={`${styles.slide3} absolute scale-[8] md:scale-[10] right-8/12 lg:right-5/12 -top-30 lg:top-0`}
      />
    </div>
  );
}

export function AlbumCloudsForeground() {
  return (
    <div className="pixelArt absolute w-full pointer-events-none hidden lg:block z-20">
      <img
        src="./sprites/2-cloud-bg.png"
        alt="Cloud"
        className={`${styles.slide1} absolute scale-[10] right-10/12 -top-56`}
      />
      <img
        src="./sprites/3-cloud-bg.png"
        alt="Cloud"
        className={`${styles.slide2} absolute scale-[8] right-2/12 -top-48`}
      />
    </div>
  );
}

export function MembersCloudsForeground() {
  return (
    <div className="pixelArt absolute w-full pointer-events-none">
      <img
        src="./sprites/1-cloud-bg.png"
        alt="Cloud"
        className={`${styles.slide1} absolute scale-[6] md:scale-[9] lg:scale-[10] right-1/3 lg:left-4/12 -top-[1050px] lg:-top-[400px]`}
      />
      <img
        src="./sprites/2-cloud-bg.png"
        alt="Cloud"
        className={`${styles.slide2} absolute scale-[6] md:scale-[9] lg:scale-[11] right-7/12 lg:left-2/12 -top-[1000px] lg:-top-[450px]`}
      />
      <img
        src="./sprites/3-cloud-bg.png"
        alt="Cloud"
        className={`${styles.slide5} absolute hidden lg:block lg:scale-[8] lg:left-1/12 lg:-top-[300px]`}
      />
      <img
        src="./sprites/4-cloud-bg.png"
        alt="Cloud"
        className={`${styles.slide3} absolute scale-[6] md:scale-[8] lg:scale-[6] right-8/12 lg:right-1/12 -top-25 lg:-top-[450px]`}
      />
      <img
        src="./sprites/3-cloud-bg.png"
        alt="Cloud"
        className={`${styles.slide4} absolute scale-[5] md:scale-[7] right-3/12 lg:right-4/12 -top-45 lg:-top-[320px]`}
      />
      <img
        src="./sprites/2-cloud-bg.png"
        alt="Cloud"
        className={`${styles.slide5} absolute hidden lg:block lg:scale-[9] lg:right-1/12 lg:-top-[270px]`}
      />
    </div>
  );
}
