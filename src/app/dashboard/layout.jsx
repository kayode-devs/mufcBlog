import Header from "../../_local-components/header";
import RightSidebar from "../../_local-components/right-sidebar";
import SideBar from "../../_local-components/side-bar";

export default function DashbaordLayout({ children }) {
  return (
    <main className="flex w-screen">
      <SideBar />
      <div className="md:w-[78%] w-[100%]">
        <div className="">
          <Header />
        </div>
        <div className="w-[100%] h-[90vh] flex">
          <div className=" md:w-[77%] w-[100%] bg-bg overflow-scroll">
            {children}
          </div>
          <RightSidebar />
        </div>
      </div>
    </main>
  );
}
