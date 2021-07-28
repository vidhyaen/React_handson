import React from "react";
function Footer() {
  var cyear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>Copyright@{cyear}</p>
      </footer>
    </div>
  );
}
export default Footer;
