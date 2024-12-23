import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ganteli from "../../assets/img/ganteli.svg";
import account from "../../assets/img/account.svg";
import logo from "../../assets/img/logo.svg";
import Fon from "../../assets/img/Fon.svg";
import chest from "../../assets/img/chest.svg";
import shoulders from "../../assets/img/shoulders.svg";
import biceps from "../../assets/img/biceps.svg";
import legs from "../../assets/img/legs.svg";
import hit from "../../assets/img/hit.svg";

const CreateExersise = () => {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null); 

  const handleAccountClick = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    navigate("/");
  };

  const handleCreateWorkout = () => {
    navigate("/create-workout");
  };


  const handleImageClick = (imageName) => {
    setSelectedImage(imageName); 
  };

  return (
    <div>
      <div className="flex items-center pl-60 mt-3 mb-3">
        <h1 className="text-4xl">UniWorkout</h1>
        <div className="flex space-x-10 pl-[50%]">
          <img src={ganteli} alt="" />
          <img src={account} alt="" onClick={handleAccountClick} />
          <img src={logo} alt="logo" onClick={handleLogout} />
        </div>
      </div>
      <div className="w-full">
        <img src={Fon} alt="" className="w-full" />
      </div>

      <div className="flex flex-col justify-center items-center space-y-4 pt-6">
        <h1>Название</h1>
        <input className="py-3 px-8 w-3/4 max-w-lg border-2 border-blue-500"placeholder="Введите название упражнения"/>
        <h1>Количество повторений</h1>
        <input className="py-3 px-8 w-3/4 max-w-lg border-2 border-blue-500"placeholder="Введите кол-во повторений"/>
      </div>

      <div className="flex justify-center pt-11 space-x-6">
        <img src={chest}alt="Chest" className={`cursor-pointer ${selectedImage === "chest" ? "border-4 border-blue-500" : ""}`} onClick={() => handleImageClick("chest")}/>
        <img  src={shoulders} alt="Shoulders"className={`cursor-pointer ${selectedImage === "shoulders" ? "border-4 border-blue-500" : "" }`} onClick={() => handleImageClick("shoulders")} />
        <img   src={biceps} alt="Biceps" className={`cursor-pointer ${  selectedImage === "biceps" ? "border-4 border-blue-500" : "" }`}onClick={() => handleImageClick("biceps")} />
        <img
          src={legs}
          alt="Legs"
          className={`cursor-pointer ${
            selectedImage === "legs" ? "border-4 border-blue-500" : ""
          }`}
          onClick={() => handleImageClick("legs")}
        />
        <img
          src={hit}
          alt="Hit"
          className={`cursor-pointer ${
            selectedImage === "hit" ? "border-4 border-blue-500" : ""
          }`}
          onClick={() => handleImageClick("hit")}
        />
      </div>

      <div className="flex flex-col justify-center items-center space-y-4 pt-16">
        <button
          onClick={handleCreateWorkout}
          className="w-3/4 max-w-lg py-2 px-4 bg-blue-600 text-white rounded-lg"
        >
          Создать
        </button>
      </div>
    </div>
  );
};

export default CreateExersise;
