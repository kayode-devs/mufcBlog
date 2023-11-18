import CustomButton from "@/_local-components/button";
import LeftSideBar from "@/_local-components/left-side-bar";
import Image from "next/image";

const UniqueBlog = () => {
  return (
    <div className="w-[100%] relative h-[94vh] flex justify-center">
      <div className="absolute bottom-0 flex justify-center h-[92vh] overflow-scroll py-8 px-2 md:px-7 rounded-[20px] bg-zinc-50 w-[98%]">
       <LeftSideBar />
        <div className="md:w-[60%] overflow-scroll w-[100%] py-3 md:px-10">
          <div className="w-full mb-5 bg-white h-[40%]">
            <Image
              src="/cover1.png"
              alt="cover photo"
              width={200}
              height={100}
            />
          </div>

          <div className="flex justify-between"></div>
          <div className="mb-5 bg-white px-5 py-2">
            <div>
              <h1 className="text-[1.5rem] md:w-[70%] py-2 font-bold">
                Manchester United Coach, Erik Ten Hag to leave the club On
                Monday
              </h1>
            </div>
            <div>
              <p className="py-2">By Chidinma Ngozi Azam</p>
              <p className="text-xs">Published 2 November, 2023</p>
            </div>
          </div>
          <div className="text-sm text-justify p-5">
            <span className="text-[5em] font-bold">Lo</span>rem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            quam voluptatibus ipsam, facere deserunt rem voluptatum qui quidem.
            Nobis modi quas quidem tenetur commodi? Molestias delectus quasi
            fugit corrupti architecto quam rem adipisci unde illum, autem nisi
            porro eaque cum ab! Neque aliquam quam magnam laudantium veniam
            inventore explicabo dignissimos pariatur? <br /> Modi temporibus animi
            tenetur atque sed, quas vel non dolores totam ipsum illum ipsa
            aperiam error laboriosam ipsam doloremque, perferendis natus
            exercitationem ratione, voluptas iusto nulla reiciendis? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ducimus recusandae
            adipisci nam autem facilis <br /> <br /> deleniti alias laboriosam iste, quae
            dicta esse necessitatibus, harum excepturi animi perspiciatis sequi
            beatae quasi. Rerum necessitatibus voluptas, et doloribus ut unde
            culpa architecto est fugit exercitationem earum odio reiciendis
            nihil pariatur, incidunt voluptatibus, magnam sit adipisci explicabo
            iusto? At officiis dicta minus quia quidem dolor expedita unde
            consequuntur praesentium placeat fugiat tenetur recusandae sapiente
            vero, obcaecati ut! Qui illo dolorum corporis dolores eaque.
          </div>

          <div className="w-full flex md:justify-end md:px-3 justify-center">
            <div className="flex">
            <CustomButton text="Previous Post"/>
            <CustomButton text="Next Post"/>
            </div>
          </div>
          
          <div className=" w-[100%] p-3 mt-10 bg-white">
          <div className="p-3">
            <p className="my-3 font-semibold">Leave a comment</p>
            <div className="my-3">
              <textarea name="" id="" rows={7} className="w-[100%] outline-none border-solid border-[1px] border-red-100 resize-none max-h-[20%]"></textarea>
            </div>
            <div className="flex justify-end">
              <CustomButton text="Post comment"/>
            </div>
          </div>
          </div>
        </div>
        <div className="w-[20%] md:flex hidden">right</div>
      </div>
    </div>
  );
};

export default UniqueBlog;
