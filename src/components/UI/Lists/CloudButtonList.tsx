import styles from "./CloudButtonList.module.css";
import CloudButton from "../Buttons/CloudButton";

type ButtonItem = {
  name: string;
  link: string;
  strokeClass: string;
};

type CloudButtonListProps = {
  ButtonList: ButtonItem[];
};

export default function CloudButtonList({ ButtonList }: CloudButtonListProps) {
  return (
    <ul
      className={`${styles.cloudOptions} pt-50 md:pt-64 mb-40 flex flex-col gap-12 overflow-y-visible min-lg:mb-0 min-lg:justify-center min-lg:py-4`}
    >
      {ButtonList.map((item, index) => (
        <li
          key={index}
          className={`${
            index === 0
              ? "-translate-x-9"
              : index === 1
              ? "translate-x-4"
              : index === 2
              ? "-translate-x-7"
              : "translate-x-8"
          }`}
        >
          <CloudButton
            title={item.name}
            link={item.link}
            strokeClass={item.strokeClass}
          />
        </li>
      ))}
    </ul>
  );
}
