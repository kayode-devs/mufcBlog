import { GetPosts } from "@/utils/apiCall";
import Image from "next/image";
import Link from "next/link";
import Card from "./card";

const CardsDisplay = async () => {
  const posts = await GetPosts();
  const slicedPosts = posts.slice(0, 3);

  return (
    <div className="custom-grid md:mt-[-5em] w-[90%]">
      {slicedPosts.map((post) => {
        const { title, author, date, images, comments, text_content, id } = post;
        return (
          <Link key={id} href={`articles/${id}`}>
            <Card title={title} thumbnail={images.bg} author={author} postDate= {date} />
          </Link>
        );
      })}
      <div className="overflow-hidden h-full ">
        <Image
          src="/image5.png"
          alt="display image"
          width={200}
          height={50}
          className=""
        />
      </div>
    </div>
  );
};

export default CardsDisplay;
