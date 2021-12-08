import React from "react";
import { useStateValue } from "../providers/StateProvider";

const Header = () => {
  const [{ user }, disptach] = useStateValue();
  return (
    <>
      <div className="header">
        <h3>Header Section</h3>
      </div>
    </>
  );
};

export default Header;
