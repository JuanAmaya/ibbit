import CloudsForeground from "../components/Foreground/CloudsForeground";
import CloudButtonList from "../components/UI/Lists/CloudButtonList";
import SunAndMoon from "../components/UI/AnimatedSprites/SunAndMoon";

const MENU_LIST = [
  { name: "SUPER <br /> REAL ME", link: "/srm", strokeClass: "SRMStroke" },
  { name: "I'LL <br /> LIKE YOU", link: "ily", strokeClass: "ILYStroke" },
  { name: "bomb", link: "/bomb", strokeClass: "bombStroke" },
  { name: "members", link: "/members", strokeClass: "membersStroke" },
];

const GROUP_PHOTOS = [
  "./images/group/1-srm.jpg",
  "./images/group/1-ily.jpg",
  "./images/group/1-bomb.jpg",
  "./images/group/2-srm.jpg",
  "./images/group/2-ily.jpg",
  "./images/group/2-bomb.jpg",
  "./images/group/3-srm.jpg",
  "./images/group/3-ily.jpg",
  "./images/group/3-bomb.jpg",
];

export default function LandingPage() {
  return (
    <>
      <div className="min-lg:grid min-lg:grid-cols-2">
        <SunAndMoon imagesArr={GROUP_PHOTOS} />
        <CloudButtonList ButtonList={MENU_LIST} />
      </div>

      <CloudsForeground />
    </>
  );
}
