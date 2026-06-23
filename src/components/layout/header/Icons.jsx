import { UserRound, Heart, ShoppingBag, Menu } from "lucide-react";

const Icons = () => {
  return (
    <div className=" flex items-center gap-7.5 ml-auto">
      <button className=" size-5 text-secondary">
        <UserRound />
      </button>
       <button className=" size-5 text-secondary">
        <Heart />
      </button>
       <button className=" relative size-5 text-secondary">
        <ShoppingBag />
        <span className=" size-4 bg-primary text-[10px] font-medium text-white absolute -bottom-2.5 -right-2.5 rounded-full">3</span>
      </button>
       <button className=" size-5 text-secondary">
        <Menu />
      </button>
    </div>
  );
};

export default Icons;
