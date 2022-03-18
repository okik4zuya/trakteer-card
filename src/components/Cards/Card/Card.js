import FollowButton from "./FollowButton/FollowButton";
import Konten from "./Konten/Konten";
import Menu from "./Menu/Menu";
import Sosmed from "./Sosmed/Sosmed";

export default function Card(props) {
  const { cover, profilPic } = props;

  return (
    <>
      <div className="relative  min-w-[220px] w-[95vw] xs:w-[310px] min-h-[260px] pb-2 rounded-lg bg-white shadow-lg">
        <div className="h-[92px] rounded-t-lg overflow-hidden ">
          <img className="object-cover h-[92px] w-full " src={cover} />
        </div>
        <div>
          <img
            className="object-cover absolute h-[84px] w-[84px] rounded-full border-[5px] border-white w-full top-[57px] left-[21px] "
            src={profilPic}
          />
        </div>
        <FollowButton />
        <Menu />
        <div className="mt-[55px] ml-[16px] mr-[32px]">
          <Konten props={props} />
        </div>
        <div className="mt-[20px] mb-[10px]">
          <Sosmed props={props} />
        </div>
      </div>
    </>
  );
}
