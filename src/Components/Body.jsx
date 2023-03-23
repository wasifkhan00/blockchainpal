import React from "react";
import { Link } from "react-router-dom";

function Body() {
  return (
    <div className="pic">
      <h2>Welcome To The Empire Market </h2>
      <p>
      Familiarize yourself with 14 cryptocoins and it's overall yearly,monthly and weekly prices.
      </p>
      <p>
       Also get the total market capital and total volume of the cryptocoins 
      </p>
      <Link to="/dashboard" className="btn">
        Explore
      </Link>
    </div>
  );
}

export default Body;
