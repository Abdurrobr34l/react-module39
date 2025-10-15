import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by <Link to={"https://github.com/Abdurrobr34l"} target="_blank" className="text-md font-bold text-blue-600 hover:text-blue-400">Abdur Rob</Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
