import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom"; 
import Mask from '../../assets/img/Mask.svg'; 
import user from '../../assets/img/user.svg'; 
import Before from '../../assets/img/Before.svg'; 
import After from '../../assets/img/After.svg';
import ganteli from '../../assets/img/ganteli.svg';
import account from '../../assets/img/account.svg';
import logo from '../../assets/img/logo.svg';

const Profile = () => {
  const { name, logout } = useAuth();
  const navigate = useNavigate(); 

  const handleAccountClick = () => {
    navigate("/workout");
  };

  return (
    <div>
      <div className="flex items-center pl-60 mt-6 mb-6">
        <h1 className="text-4xl">Uni Workout</h1>
        <div className="flex space-x-10 pl-[55%]">
          <img src={ganteli} alt="ganteli" />
        
          <img src={account} alt="account" onClick={handleAccountClick} className="cursor-pointer" />
          <img src={logo} alt="" onClick={logout} />
        </div>
      </div>

      <div className="h-96 bg-cover" style={{ backgroundImage: `url(${Mask})` }}>
        <div></div>
        <div className="relative z-10 text-white text-center pt-10">
          <img src={user} alt="" className="mx-auto" />
          <h2 className="text-3xl mt-4">{name}</h2>
          
          <div className="mt-6">
  
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-24 space-x-16">
        <div className="text-center">
          <h3 className="text-xl mb-4">Before</h3>
          <img src={Before} alt="Before" className="w-auto h-auto" />
        </div>

        <div className="text-center">
          <h3 className="text-xl mb-4">After</h3>
          <img src={After} alt="After" className="w-auto h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
