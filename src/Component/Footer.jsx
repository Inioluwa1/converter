import React from "react";

function Footer() {
  let currentdate = new Date().getFullYear();
  return (
    <footer>
      <p> Copyright ⓒ {currentdate} </p>
    </footer>
  );
}

export default Footer;
