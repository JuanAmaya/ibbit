import styles from "./StrokeText.module.css";

type StrokeTextProps = {
  title: string;
  strokeClass: string;
};

export default function StrokeText({ title, strokeClass }: StrokeTextProps) {
  return (
    <>
      <span
        className={styles[strokeClass]}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <span
        className={styles.fill}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </>
  );
}
