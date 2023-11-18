import NavBar, { NavProfileButton, openNav } from "./nav-bar";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="relative md:flex justify-between w-[100%] bg-white py-2 md:px-[5em]">
      <div className="flex justify-center relative">
        <Logo />
        <div className="md:hidden">
          <NavProfileButton />
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
