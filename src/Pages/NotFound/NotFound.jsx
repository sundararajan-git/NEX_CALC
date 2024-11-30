import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  console.log(location);
  return <div>NotFound</div>;
};

export default NotFound;
