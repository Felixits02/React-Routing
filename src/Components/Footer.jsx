import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <div className="container">
          <p className="mb-0">
            {new Date().getFullYear()} ProManage. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
