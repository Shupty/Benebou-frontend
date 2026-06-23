import Link from "next/link";
import Container from "../Container";
import React from "react";

const Navbar = () => {
  const navData = [
    {
      id: 1,
      name: "HOME",
      link: "/",
    },
    {
      id: 2,
      name: "SHOP",
      link: "/shop",
    },
    {
      id: 3,
      name: "COLLECTION",
      link: "/collection",
    },
    {
      id: 4,
      name: "JOURNAL",
      link: "/journal",
    },
    {
      id: 5,
      name: "LOOKBOOK",
      link: "/lookbook",
    },
    {
      id: 6,
      name: "PAGES",
      link: "/pages",
    },
  ];

  return (
    <nav className=" bg-primary pt-5.25 pb-3.75 ">
      <Container>
        <div className=" flex items-center justify-between ">

        <ul className=" flex items-center gap-11 ">
          {navData?.map((navList) => (
            <li key={navList.id} className="list-item">
              <Link href={`${navList.link}`}>{navList.name}</Link>
            </li>
          ))}
        </ul>
         <div className="flex items-center gap-5 text-white font-medium text-sm">
            <button className="cursor-pointer">SPECIAL OFFER</button>
            <button className="cursor-pointer">PURCHASE THEME</button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
