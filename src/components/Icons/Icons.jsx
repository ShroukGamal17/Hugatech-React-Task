import React from "react";
import "./icons.css";
import {
  SiLandrover,
  SiTiktok,
  SiMyanimelist,
  SiTrustedshops,
} from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";

const Icons = () => {
  return (
    <div className="text-secondary justify-content-around icon">
      <h2>
        <SiLandrover />
      </h2>
      <h2>
        <SiMyanimelist />
      </h2>
      <h2>
        <SiTrustedshops />
      </h2>
      <h2>
        <RiLinkedinFill />
      </h2>
      <h2>
        <SiTiktok />
      </h2>
    </div>
  );
};
export default Icons;
