import Link from "next/link";
import React from "react";
import LatestPostCard from "./latestPostCard";

const RightSidebar = ({ posts }) => {
  let dummyData = [
    { id: "1", title: "Blog Post Title 1" },
    { id: "2", title: "Blog Post Title 2" },
    { id: "3", title: "Blog Post Title 3" },
    { id: "4", title: "Blog Post Title 4" },
    { id: "5", title: "Blog Post Title 5" },
  ];
  return (
    <div className="hidden md:grid w-[25%] rounded-[10px] ">
      <div className="flex justify-between items-center px-4">
        <h3 className="text-[1.1rem] font-bold">Latest Posts</h3>
        <Link href="../articles">
          <p className="font-bold text-xs">See more</p>
        </Link>
      </div>
      <div className="grid place-items-center overflow-y-scroll">
        {posts.map((post) => {
          const { title, author, date, images, comments, text_content, id } =
            post;
          const modifiedTitle =
            title.length > 18 ? title.slice(0, 20) + "..." : title;

          return (
            <Link href={`articles/${id}`} className="w-full flex justify-center">
              <LatestPostCard
                key={id}
                postTitle={modifiedTitle}
                author={author}
                thumbnail={images.bg}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RightSidebar;
