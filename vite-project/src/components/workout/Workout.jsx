import React from 'react';
import { useNavigate } from 'react-router-dom';
import ganteli from '../../assets/img/ganteli.svg';
import account from '../../assets/img/account.svg';
import logo from '../../assets/img/logo.svg';
import model from '../../assets/img/model.svg';
import box from '../../assets/img/box.svg';

const Workout = () => {
  const navigate = useNavigate(); 

  const handleAccountClick = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    navigate("/");
  };

  const handleCreateExercise = () => {
    navigate("/create-exercise"); 
  };

  return (
    <div className="relative">
      <div className="flex items-center pl-60 mt-3 mb-3">
        <h1 className="text-4xl">UniWorkout</h1>
        <div className="flex space-x-10 pl-[50%]">
          <img src={ganteli} alt="" />
          <img src={account} alt="" onClick={handleAccountClick} />
          <img src={logo} alt="" onClick={handleLogout} />
        </div>
      </div>

      <div className="flex pt-20 bg-black text-white">
        <div className="pl-[15%] max-w-[50%]">
          <h1 className="text-[60px]">TRANSFORM YOUR LIFE WITH FITLIFE STUDIO</h1>
          <h2 className="text-[20px] pt-16">
            Join FitLife Studio Today and Experience Expert Training,
            Personalized Programs, and a Supportive Community to Achieve Your
            Fitness Goals.
          </h2>
        </div>
        <img className="pl-[150px] max-w-[35%]" src={model} alt="" />
      </div>

      <h1 className="text-[38px] pt-16 flex justify-center ">Workouts</h1>
      
      <div className="flex justify-center items-center pt-16">
        <img className='' src={box} alt="" />
      </div>

      <h1 className=' text-[48px] flex justify-center pt-10'>Здесь пусто!</h1>

      <h1 className=' text-[32px] flex justify-center pt-10 text-blue-600 'onClick={handleCreateExercise}  >
        Создать тренировку
      </h1>
    </div>
  );
};

export default Workout;
