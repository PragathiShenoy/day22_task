import React from "react";

const Header = () => {
  const scrollToBottom = () => {
    const bottomOfContent = document.getElementById("bottom");
    window.scrollTo({
      top: bottomOfContent.offsetTop,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <div className="header d-flex justify-content-between align-items-center">
        <div className="card-header text-bold">Featured</div>
        <button className="btn btn-primary" onClick={scrollToBottom}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
