"use client";

import React, { useContext } from "react";
// import Link from "next/link";
import { StateContext } from "../utils/context";
import Avatar from "./avatar";
import NavLink from "./navLink";



const NavBar = () => {
  const { state, isAuth, setIsAuth, dispatch } = useContext(StateContext);
  const { navOpen } = state;
  const openNav = () => {
    dispatch({
      type: "toggleNav",
      payload: !navOpen,
    });
  };


  return (
    <div className="flex w-[25%]">
        {isAuth ? <NavOnAuth /> : <NavOnVist />}
      {navOpen ? <NavBody /> : ""}
    </div>
  );
};

export default NavBar;


// OTHER COMPONENTS UNDER THE NAVBAR

const NavOnVist = () => {
  return <nav className="hidden md:flex">On Visit</nav>;
};


const NavOnAuth = () => {
  const { state, isAuth, setIsAuth, dispatch } = useContext(StateContext);
  const { navOpen } = state;
  const openNav = () => {
    dispatch({
      type: "toggleNav",
      payload: !navOpen,
    });
  };

  return (
    <nav className="md:flex hidden justify-between items-center relative w-[100%]">
      <div>Dan Precious</div>
      <div className="px-3">
      <NavProfileButton />
      </div>
    </nav>
  );
};

const NavBody = () => {
  const navLinks = ["Profile", "Settings", "Theme", ""];

  const navItems = [
    {
      title: "Profile",
      href: "/dashboard",
    },
    { title: "Settings", href: "/dashboard/settings" },
    { title: "Theme", href: "/dashboard/docs" },
    { title: "How to use", href: "/dashboard/docs" },
  ];
  return (
    <ul className="w-[100%] absolute md:right-[] rounded-[4px] right-0  z-50 min-w-[5em] max-w-[14em] top-12 bg-zinc-50">
      <div className="text-left">
        {navItems.map(({ title, href }, index) => (
          <NavLink key={index} title={title} href={href} />
        ))}
      </div>
    </ul>
  );
};

export const NavProfileButton = () => {
  const { dispatch, state } = useContext(StateContext);
  const { navOpen } = state;
  const openNav = () => {
    dispatch({
      type: "toggleNav",
      payload: !navOpen,
    });
  };
  return (
    <button
      className="absolute right-1 top-0"
      onClick={openNav}
    >
      <Avatar />
    </button>
  );
};
