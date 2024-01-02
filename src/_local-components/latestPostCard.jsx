import Image from "next/image";

const LatestPostCard = ({ postTitle, thumbnail, author }) => {
  return (
    <div className="w-[100%] max-w-[18em]  bg-white h-[12em] my-3 rounded-md">
      <div className="h-[70%] w-full bg-zinc-400 relative">
        <Image
          src={`/${thumbnail}`}
          alt="cover photo"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-3">
        <div className="">
          <p className="text-[1.1rem] font-semibold">{postTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default LatestPostCard;
