"use client";
import React, { use } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const items = [
  { label: "Men", value: "Men" },
  { label: "Women", value: "Women" },
  { label: "Children", value: "Children" },
];

const viewItems = [
  2, 3, 4
];

const SortAndView = () => {
  const handleViewItems = (view) => {
    alert(`You selected ${view} items to view`);
  }
  return (
    <div className="flex items-center gap-10">
      <div>
        <Select items={items}>
          <SelectTrigger className="w-25 border-none ">
            <span className=" text-sm font-normal leading-6  ">
              <SelectValue placeholder="All Category" />
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
      </div>
      <div>
        <ul className="flex items-center gap-4 text-sm font-normal leading-6">
          <li>
            <button>VIEW</button>
          </li>
         { viewItems.map((item) => (
            <li key={item}>
              <button className=" cursor-pointer " onClick={()=> handleViewItems(item)}>{item}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SortAndView;

 
