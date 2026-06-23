import Logo from "@/components/common/Logo";
import React from "react";
import Container from "../Container";
import SearchInput from "./SearchInput";
import Icons from "./Icons";


const Topheader = () => {
  return (
    <div className=" bg-white py-5">
      <Container>
        <div className=" flex items-center gap-8.25 "> 
          <Logo />
          <SearchInput />
          <Icons/>
        </div>
      </Container>
    </div>
  );
};

export default Topheader;
