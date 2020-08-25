import React from "react";
 import  {Avatar} from "@material-ui/core"
const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
          <Avatar className="Avatar" src={user.photoURL}></Avatar>
      </div>
      <div className="header__search"></div>
      <div className="header_right"></div>
    </div>
  );
};

export default Header;
