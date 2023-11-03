"use client";

import React, { useContext } from "react";
import SearchBar from "./search";
import Link from "next/link";
import { StateContext } from "../utils/context";
import Avatar from "./avatar";
import NavLink from "./navLink";

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
    <ul className="w-[100%] absolute md:right-[] rounded-[20px] right-0  z-50 min-w-[5em] max-w-[14em] top-12 bg-zinc-50">
      <div className="text-left">
        {navItems.map(({ title, href }, index) => (
          <NavLink key={index} title={title} href={href} />
        ))}
      </div>
    </ul>
  );
};

export const NavButton = () => {
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
      className="flex justify-self-end absolute right-1 top-0"
      onClick={openNav}
    >
      v
    </button>
  );
};

const NavBar = () => {
  const { state, isAuth, setIsAuth, dispatch } = useContext(StateContext);
  const { navOpen } = state;
  const openNav = () => {
    dispatch({
      type: "toggleNav",
      payload: !navOpen,
    });
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
      <nav className="flex justify-evenly items-center relative w-[100%]">
        <div>Dan Precious</div>
        <div className="px-3">
          <button><Avatar onClick={openNav} /></button>
        </div>
        <NavButton />
      </nav>
    );
  };

  const NavOnVist = () => {
    return <nav className="hidden md:flex">On Visit</nav>;
  };

  return (
    <div className="flex md:justify-between px-2 w-[100%] md:px-0 py-1 md:w-[100%]">
      <div className="md:w-[76%] flex w-[100%]">
        <SearchBar />
      </div>
      <div className="hidden justify-evenly relative md:flex w-[23%]">
        {isAuth ? <NavOnAuth /> : <NavOnVist />}
      </div>
      {navOpen ? <NavBody /> : ""}
    </div>
  );
};

export default NavBar;
