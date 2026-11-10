import Logo from "@/components/common/Logo";
import React from "react";
import Container from "../Container";
import SearchInput from "./SearchInput";
import Icons from "./Icons";
import { Menu, X } from "lucide-react";

const Topheader = ({ menuOpen, onMenuToggle }) => {
  return (
    <div className=" bg-white py-2 ">
      <Container>
        <div className=" flex items-center gap-4 md:gap-8.25 ">
          <Logo />
          <SearchInput className=" hidden md:flex" />
          <Icons className=" sm:mr-2.5  flex" />
          <button
            type="button"
            onClick={onMenuToggle}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className=" size-5 text-secondary md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* mobile search (second row) */}
        <div className=" mt-4 md:hidden">
          <SearchInput className=" flex" />
        </div>
      </Container>
    </div>
  );
};

export default Topheader;
