import SunAndMoon from "../components/UI/AnimatedSprites/SunAndMoon";
import BackButtonCloud from "../components/UI/Buttons/BackButtonCloud";
import MemberName from "../components/UI/MemberName";
import MembersList from "../components/UI/Lists/MembersList";
import { MembersCloudsForeground } from "../components/Foreground/CloudsForeground";
import { useState } from "react";

const MEMBERS_DATA = [
  {
    id: 0,
    name: "왕희",
    strokeClass: "wonheeStroke",
    starImg: "./sprites/star-wonhee.png",
    profileImgs: [
      "./images/members/Wonhee/1-wonhee.jpg",
      "./images/members/Wonhee/2-wonhee.jpg",
      "./images/members/Wonhee/3-wonhee.jpg",
    ],
  },
  {
    id: 1,
    name: "민주",
    strokeClass: "minjuStroke",
    starImg: "./sprites/star-minju.png",
    profileImgs: [
      "./images/members/Minju/1-minju.jpg",
      "./images/members/Minju/2-minju.jpg",
      "./images/members/Minju/3-minju.jpg",
    ],
  },
  {
    id: 2,
    name: "이로하",
    strokeClass: "irohaStroke",
    starImg: "./sprites/star-iroha.png",
    profileImgs: [
      "./images/members/Iroha/1-iroha.jpg",
      "./images/members/Iroha/2-iroha.jpg",
      "./images/members/Iroha/3-iroha.jpg",
    ],
  },
  {
    id: 3,
    name: "모카",
    strokeClass: "mokaStroke",
    starImg: "./sprites/star-moka.png",
    profileImgs: [
      "./images/members/Moka/1-moka.jpg",
      "./images/members/Moka/2-moka.jpg",
      "./images/members/Moka/3-moka.jpg",
    ],
  },
  {
    id: 4,
    name: "윤아",
    strokeClass: "yunahStroke",
    starImg: "./sprites/star-yunah.png",
    profileImgs: [
      "./images/members/Yunah/1-yunah.jpg",
      "./images/members/Yunah/2-yunah.jpg",
      "./images/members/Yunah/3-yunah.jpg",
    ],
  },
];

export default function MembersPage() {
  const [activeMember, setActiveMember] = useState(0);

  return (
    <>
      <div>
        <div className="lg:flex lg:justify-between lg:flex-row-reverse lg:w-full lg:mx-auto lg:px-4 lg:flex-wrap h-96 lg:h-20">
          <BackButtonCloud />
          <MemberName
            name={MEMBERS_DATA[activeMember].name}
            strokeClass={`${MEMBERS_DATA[activeMember].strokeClass}Title`}
          />
        </div>
        <div className="mb-50 lg:grid lg:grid-cols-2">
          <SunAndMoon
            imagesArr={MEMBERS_DATA[activeMember].profileImgs}
            isSun={false}
          />
          <MembersList
            MembersList={MEMBERS_DATA}
            setActiveMember={setActiveMember}
          />
        </div>
        <MembersCloudsForeground />
      </div>
    </>
  );
}
