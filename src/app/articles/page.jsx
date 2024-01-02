import Card from "@/_local-components/card";
import { GetPosts } from "@/utils/apiCall";
import Link from "next/link";
import React from "react";

const BlogPosts = async () => {
  // fetch first of a particlular day to use as news for the day.
  const posts = await GetPosts()
  const dayPost = posts[4];
  const dayPostContent =  dayPost.text_content.slice(0, 300)
  console.log(dayPostContent);
  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      <div
        className="h-[77vh] w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${dayPost.images.bg})` }}
      >
        <div className="z-[100] absolute bottom-5 md:max-w-[40em] p-3 text-center md:text-left md:right-5 text-white">
          <h1 className="md:text-[5rem] text-[3rem] font-bold">
            News for today!
          </h1>
          <p>
          {dayPostContent}
          </p>
        </div>
        <div className="absolute top-0 h-full w-full bg-black opacity-70 z-10"></div>
      </div>
      <div className="py-8 px-3 md:px-14 rounded-[20px] bg-slate-50 w-[98%]">
        <div className="mb-5 md:ml-5">
          <h1 className="text-[1.2rem] text-center md:text-left font-bold">
            Latest Reads
          </h1>
        </div>
        <PostCollection />
      </div>
    </div>
  );
};

export default BlogPosts;

const PostCollection = async () => {
  let posts = await GetPosts();
  // console.log(posts)
  const titles = ["Title 1", "Title 2", "Title 3", "Title 4", "Title 5"];

  return (
    <div className="custom-grid my-[2em]">
      {posts ? (
        posts.map((post, index) => {
          const { id, title, text_content, images, author, date, comments } =
            post;
          return (
            <Link key={id} href={`articles/${id}`}>
              <Card
                title={title}
                author={author}
                postDate={date}
                thumbnail={images.bg}
              />
            </Link>
          );
        })
      ) : (
        <div>error</div>
      )}
    </div>
  );
};
