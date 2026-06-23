import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from 'lucide-react';

const SearchInput = () => {
    const items = [
  { label: "Men", value: "Men" },
  { label: "Women", value: "Women" },
  { label: "Children", value: "Children" },
]
  return (
    <div className=" w-136 h-12.5 relative flex items-center">
      <input
        className=" w-full h-full rounded-sm pl-5 text-white bg-secondary"
        type="text"
        placeholder="Search product..."
      />
      <div className=" absolute right-4 flex items-center gap-4.25">
        <Select items={items}>
          <SelectTrigger className="w-25 border-none">
            <span className= " text-sm font-normal leading-6 text-white ">
                <SelectValue  placeholder="All Category" />
            </span>
            
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      <button className="text-white">
         <Search />
      </button>
      </div>
    </div>
  );
};

export default SearchInput;
