import React from "react";
import Heading from "../../common/Heading";
import "./price.css";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <>
      <section className="price padding">
        <div className="container">
          <Heading
            title="Select Your Package"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida, dolor sed rhoncus pulvinar"
          />
          <PriceCard />
        </div>
      </section>
    </>
  );
};

export default Price;
