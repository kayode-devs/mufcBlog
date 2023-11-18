import Card from "@/_local-components/card";
import Image from "next/image";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <div className="w-[100%] min-h-[30%]  relative flex flex-col items-center justify-center">
      <div className="md:absolute left-8 top-0 p-4 font-semibold follow "><h3>TOP STORIES</h3></div>  
        <div className="bg-zinc-100 w-[90%] md:overflow-visible overflow-scroll flex justify-center rounded-[20px] p-5">
        <div className="custom-grid md:mt-[-5em] w-[90%]">
            <Card />
            <Card />
            <Card />
            <div className="overflow-hidden h-full">
            <Image src="/image5.png" alt="display image" width={200} height={50}/>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="md:mx-16 mx-6 mb-[4em] md:flex justify-between items-center">
      <p className=" md:flex my-2 follow h-fit hidden text-xs">Follow us</p>

      <div className="flex md:justify-around justify-center items-center flex-col md:flex-row">
        <div className="flex justify-center">
          <h1 className="md:text-[10rem] lg:text-[15rem] text-center text-[5rem] text-primary font-black">
            mufc
          </h1>
        </div>

        <div className="md:text-left max-w-[95%] text-justify md:w-[30%] md:mt-[10em]">
          <div className="mt-[2em]">
            <h3 className="text-2xl p-3 font-medium">Old Trafford</h3>
            <p className="text-sm p-3">
              Theatre of dreams! We preach it, we shout it, we sing it. It is
              who we are! Week in and week out. Manchester united, our Culture!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
