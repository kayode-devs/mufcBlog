import Image from "next/image";

const Card = ({title, category, url, author, postDate, thumbnail}) => {
    const modifiedTitle = title.length > 18 ? title.slice(0,24) + "..." : title;
  return (
    <div className="min-w-[10rem] hover:scale-110 duration-500 drop-shadow-lg md:w-[16em] w-[15em] h-[18rem] mx-2 rounded-[12px] overflow-hidden">
      <div className={`h-[65%] relative`}>
      <Image
              src={`/${thumbnail}`}
              alt="cover photo"
              layout="fill"
              objectFit="cover"
            />
      </div>
      <div className="h-[35%] bg-white px-1 flex flex-col">
        <p className="font-semibold p-2 text-lg">{modifiedTitle}</p>
        <p className="text-xs px-2 self-end">{author}</p>
      </div>
    </div>
  );
};

export default Card;
