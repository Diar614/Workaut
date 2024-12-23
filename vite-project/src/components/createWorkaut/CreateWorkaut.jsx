import React from "react";
import ganteli from "../../assets/img/ganteli.svg";
import account from "../../assets/img/account.svg";
import logo from "../../assets/img/logo.svg";
import Fons from "../../assets/img/Fons.svg";

const CreateWorkaut = () => {
  return (
    <div>
      <div className="flex items-center pl-60 mt-3 mb-3">
        <h1 className="text-4xl">UniWorkout</h1>
        <div className="flex space-x-10 pl-[50%]">
          <img src={ganteli} alt="" />
          <img src={account} alt="" />
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="w-full">
        <img src={Fons} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default CreateWorkaut;
