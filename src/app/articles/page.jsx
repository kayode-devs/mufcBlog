import Card from "@/_local-components/card";
import React from "react";

const BlogPosts = () => {
  return (
    <div className="w-[100%] relative h-[94vh] flex justify-center">
      <div className="absolute bottom-0 h-[90vh] overflow-scroll py-8 px-3 md:px-14 rounded-[20px] bg-bg w-[98%]">
        <div className="mb-5 md:ml-5">
            <h1 className="text-[1.2rem] text-center md:text-left font-bold">Latest Reads</h1>
        </div>
        <div className="custom-grid my-[2em]">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
