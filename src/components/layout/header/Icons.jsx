import { UserRound, Heart, ShoppingBag } from "lucide-react";
import HeaderCart from "./HeaderCart";
import HeaderLogin from "./HeaderLogin";

const Icons = ({ className }) => {
  return (
    <div className={`${className} flex items-center gap-7.5 ml-auto`}>
      <HeaderLogin />
      <button className=" size-5 text-secondary">
        <Heart className="size-5" />
      </button>
      <HeaderCart />
    </div>
  );
};

export default Icons;
