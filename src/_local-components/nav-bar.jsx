"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
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
    <div className="flex z-50 justify-end w-[25%]">
      <NavContents />
      {navOpen ? <NavBody /> : ""}
    </div>
  );
};

export default NavBar;

// OTHER COMPONENTS UNDER THE NAVBAR

const NavContents = () => {
  const pathname = usePathname();
  // console.log(pathname);

  const { state, dispatch } = useContext(StateContext);
  const { navOpen } = state;
  const openNav = () => {
    dispatch({
      type: "toggleNav",
      payload: !navOpen,
    });
  };

  return (
    <nav className="md:flex hidden justify-end items-center relative w-[100%]">
      <Link
        href="/"
        className={`hidden md:flex ${pathname === "/" ? "active" : ""}`}
      >
        <p className="font-semibold mx-5">Home</p>
      </Link>
      <Link
        href="/articles"
        className={`hidden md:flex ${pathname !== "/" ? "active" : ""}`}
      >
        <p className="font-semibold">Posts</p>
      </Link>
      <div className="px-3 md:hidden flex">
        <NavProfileButton />
      </div>
    </nav>
  );
};

const NavBody = () => {

  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    { title: "All Posts", href: "/articles" },
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
    <button className="absolute right-1 top-0" onClick={openNav}>
      <Avatar />
    </button>
  );
};
