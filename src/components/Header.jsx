import React, { useState } from "react";
const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  return (
    <div className="flex justify-between border-2">
      <div className="h-20 w-28">
        <img
          src="https://penji.co/wp-content/uploads/2022/08/11.Foodigy-logo.jpg"
          alt="logo"
        />
      </div>
      <div className="px-10 py-8">
        <ul className="flex flex-row gap-10">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="Login"
            onClick={() =>
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login")
            }
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
