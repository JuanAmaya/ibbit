import AlbumTitle from "../components/UI/AlbumTitle";
import BackButtonCloud from "../components/UI/Buttons/BackButtonCloud";
import CoverStar from "../components/UI/AnimatedSprites/CoverStar";
import Rainbow from "../components/UI/AnimatedSprites/Rainbow";
import TrackList from "../components/UI/AnimatedSprites/TrackList";
import { AlbumCloudsForeground } from "../components/Foreground/CloudsForeground";

type AlbumPageProps = {
  title: string[];
  strokeClass: string;
  tracks: string[];
  year: number;
  albumCover: string;
};

export default function AlbumPage({
  title,
  strokeClass,
  tracks,
  year,
  albumCover,
}: AlbumPageProps) {
  return (
    <>
      <div className="lg:flex lg:justify-between lg:flex-row-reverse lg:w-full lg:mx-auto lg:px-4 lg:flex-wrap">
        <BackButtonCloud />
        <AlbumTitle title={title} strokeClass={strokeClass + "Title"} />
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:items-center">
        <div className="flex justify-center">
          <CoverStar title={title} albumCover={albumCover} />
        </div>
        <TrackList tracks={tracks} strokeClass={strokeClass} />
      </div>
      <Rainbow year={year} strokeClass={strokeClass} />
      <AlbumCloudsForeground />
    </>
  );
}
