import React from "react";

function Footer() {
  const hours = new Date().getHours();
  console.log(hours);
  const open = 12;
  const closed = 22;
  const isOpen = hours >= open && hours <= closed;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closes={closed} />
      ) : (
        <p>
          We're happy to Welcome you between{open}:00 and {closed}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closes }) {
  return (
    <div className="order">
      <p>We're open untill {closes}:00. come visit us or order online</p>
      <button className="btn">order</button>
    </div>
  );
}

export default Footer;
