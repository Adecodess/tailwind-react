import React from "react";
import imgOne from "../images/post1.jpg";
import imgTwo from "../images/post2.jpg";
import imgThree from "../images/post3.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={imgOne} alt="food" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2 capitalize">vegetarian</h2>
          <p className="mb-2 capitalize">veggies,delicious, and nutritious</p>
          <span>&#x20A6;10,000</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={imgTwo} alt="food" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2 capitalize">egg muffins</h2>
          <p className="mb-2 capitalize">crispy,delicious, and nutritious</p>
          <span>&#x20A6;50,000</span>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={imgThree}
          alt="food"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2 capitalize">Beef</h2>
          <p className="mb-2 capitalize text-center">
            well cooked,seasoned,delicious, and nutritious
          </p>
          <span>&#x20A6;100,000</span>
        </div>
      </div>
    </>
  );
};

export default Content;
