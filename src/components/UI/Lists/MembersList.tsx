import { StarNameButton } from "../Buttons/StarNameButton";
import styles from "./MembersList.module.css";

type MemberData = {
  id: number;
  name: string;
  strokeClass: string;
  starImg: string;
};

type MembersListProps = {
  MembersList: MemberData[];
  setActiveMember: (n: number) => void;
};

export default function MembersList({
  MembersList,
  setActiveMember,
}: MembersListProps) {
  return (
    <div className="w-full flex justify-center">
      <ul className={`${styles.membersOptions} mt-50 flex flex-col lg:mt-24`}>
        {MembersList.map((member, index) => (
          <li
            key={index}
            className={`${
              index === 0
                ? "-translate-x-12 md:-translate-x-30 lg:translate-y-2"
                : index === 1
                ? "translate-x-12 md:translate-x-30 lg:-translate-y-30"
                : index === 2
                ? "-translate-x-12 md:-translate-x-30 lg:-translate-y-15 lg:-translate-x-45"
                : index === 3
                ? "translate-x-12 md:translate-x-30 lg:-translate-y-52 lg:translate-x-45"
                : "-translate-x-12 md:-translate-x-30 lg:-translate-y-40 lg:translate-x-0"
            }`}
            onClick={() => setActiveMember(member.id)}
          >
            <StarNameButton
              name={member.name}
              strokeClass={member.strokeClass}
              starImg={member.starImg}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
