import CustomButton from "@/_local-components/button";
import CommentSecton from "@/_local-components/commentSecton";
import RightSidebar from "@/_local-components/right-sidebar";
import { GetPosts } from "@/utils/apiCall";
import Image from "next/image";

const UniqueBlog = async ({params: {articles}}) => {

    const posts = await GetPosts()
    
    const uniquePost = posts[articles - 1];
    const {title, author, date, images, comments, text_content} = uniquePost;
    
  
  return (
    <div className="w-[100%] relative h-[93vh] flex justify-center">
      <div className="absolute bottom-0 flex justify-center h-[92vh] overflow-scroll py-8 px-2 md:px-5 rounded-[20px] bg-zinc-50 w-[98%]">
       
        <div className="md:w-[60%] overflow-scroll w-[100%] mt-5 md:px-7">
          <div className="w-full mb-5 relative bg-white h-[40%] bg">
            <Image
              src={`/${images.bg}`}
              alt="cover photo"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="flex justify-between"></div>
          <div className="mb-5 bg-white px-5 py-2">
            <div>
              <h1 className="text-[1.5rem] md:w-[70%] py-2 font-bold">
                {title ? title : ""}
              </h1>
            </div>
            <div>
              <p className="py-2">By {author ? author : ""}</p>
              <p className="text-xs">Published {date ? date : ""}</p>
            </div>
          </div>
          <div className="text-sm text-justify p-5">
            {text_content ? text_content : ""}
          </div>
 
          <div className="w-full flex md:justify-end md:px-3 justify-center">
            <div className="flex">
            <CustomButton text="Previous Post" />
            <CustomButton text="Next Post" />
            </div>
          </div>
          
          <div className=" w-[100%] p-3 mt-10 bg-white">
          <div className="p-3">
            <p className="my-3 font-semibold">Leave a comment</p>
            <div className="my-3">
              <textarea name="" id="" rows={7} className="w-[100%] outline-none border-solid border-[1px] p-2 border-red-100 resize-none max-h-[20%]"></textarea>
            </div>
            <div className="flex justify-end">
              <CustomButton text="Post comment" className='bg-neutral-800'/>
            </div>
          </div>
          <CommentSecton comments={comments} />
          </div>
        </div>
       <RightSidebar posts={posts} />

      </div>
    </div>
  );
};


export default UniqueBlog;

