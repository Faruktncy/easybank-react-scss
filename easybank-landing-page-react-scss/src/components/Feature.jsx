import React from "react";

const feature = [
  {
    id: 0,
    icon: "images/icon-online.svg",
    iconAlt: "online",
    title: "Online Banking",
    para: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    id: 1,
    icon: "images/icon-budgeting.svg",
    iconAlt: "budgeting",
    title: "Simple Budgeting",
    para: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    id: 2,
    icon: "images/icon-onboarding.svg",
    iconAlt: "onboarding",
    title: "Fast Onboarding",
    para: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    id: 3,
    icon: "images/icon-api.svg",
    iconAlt: "api",
    title: "Open API",
    para: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const Feature = () => {
  return (
    <>
      {feature.map((e) => {
        const { id, icon, iconAlt, title, para } = e;
        return (
          <div key={id} className="features">
            <img src={icon} alt={iconAlt} />
            <h2>{title}</h2>
            <p>{para}</p>
          </div>
        );
      })}
    </>
  );
};

export default Feature;
