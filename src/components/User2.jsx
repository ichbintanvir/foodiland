import P4 from "../elements/Description/P4";
import P2 from "../elements/Description/P2";

const User2 = ({ userImg, name, data }) => {
  return (
    <div className="flex items-center gap-[16px]">
      <img
        src={userImg}
        alt={name}
        className="w-[40px] h-[40px] rounded-full object-fill"
      />
      <P4 className={` pr-3 border-r-2 border-black/10`}>{name}</P4>
      <P2>{data}</P2>
    </div>
  );
};

export default User2;
