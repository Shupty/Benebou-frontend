import React from "react";

const ContentCard = ({ item}) => {

     const { svgIcon, name, description } = item;
  return (
      <div className="flex items-center gap-4 py-6 md:py-12.5">
      <div>{svgIcon}</div>
      <div>
        <h5 className="text-[16px] font-medium text-primary-black mb-1">{name} </h5>
        <h4 className="text-[15px] font-normal text-primarygray">
          {description}
        </h4>
      </div>
    </div>
  );
};

export default ContentCard;
