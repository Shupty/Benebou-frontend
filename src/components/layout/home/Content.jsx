import React from "react";
import Container from "../Container";
import ContentCard from "./ContentCard";

const Content = () => {
  return (
    <section className="bg-[#F7F5EE]">
      <Container>
        <div className="flex justify-between">
          {Array.from({ length: 4 }).map((_, index) => (
            <ContentCard key={index}/>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Content;
