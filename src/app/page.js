import CardsDisplay from "@/_local-components/cardsDisplay";
import Hero from "@/_local-components/hero";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <div className="w-[100%] min-h-[25%]  relative flex flex-col items-center justify-center">
        <div className="md:absolute left-8 top-0 p-4 font-semibold follow ">
          <h3 className="font-extrabold">TOP STORIES</h3>
        </div>
        <div className="bg-zinc-100 w-[90%] md:overflow-visible overflow-scroll flex justify-center rounded-[20px] p-5">
          <CardsDisplay />
        </div>
      </div>
    </div>
  );
};

export default Home;
