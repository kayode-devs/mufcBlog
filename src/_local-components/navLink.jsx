import React from "react";
import Link from "next/link";

const NavLink = ({ href, title, icon }) => {


  const Icon = ({icon}) =>{
    return(
      <div className="mx-2">
        {icon}
      </div>
    )
  }

  return (
    <Link href={href} className="">
      <div className="hover:border-secondary hover:border-[1px] hover:text-secondary hover:border-solid hover:border-opacity-[0.2] p-3 flex justify-center items-center my-3">
      <Icon icon={icon} />
        {title}
      </div>
    </Link>
  );
};

export default NavLink;
