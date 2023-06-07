import React from "react";

const latestArticle = [
  {
    id: 0,
    image: "images/image-currency.jpg",
    imageAlt: "currency",
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    para: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    id: 1,
    image: "images/image-restaurant.jpg",
    imageAlt: "resturant",
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    para: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    id: 2,
    image: "images/image-plane.jpg",
    imageAlt: "plane",
    author: "By Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    para: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    id: 3,
    image: "images/image-confetti.jpg",
    imageAlt: "confetti",
    author: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    para: "  After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  },
];

const Article = () => {
  return (
    <>
      {latestArticle.map((e) => {
        const { id, image, imageAlt, author, title, para } = e;
        return (
          <div key={id} className="articleCard">
            <img src={image} alt={imageAlt} />
            <div className="articleInfo">
              <p>{author}</p>
              <h2>{title}</h2>
              <h4>{para}</h4>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Article;
