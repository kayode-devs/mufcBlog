import NavBar, { NavButton, openNav } from "./nav-bar";
import Logo from "./logo";


const Header = () =>{
    return(
        <header className="relative md:flex w-[100%] bg-white p-2">
            <div className="flex justify-center md:hidden relative">
              <Logo />
              <div className="md:hidden">
                <NavButton />
              </div>
            </div>
            <NavBar />
          </header>
    )
}

export default Header;