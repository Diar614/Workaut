import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const RegistrationForm = ({ toggleForm }) => {
  const { login } = useAuth(); 
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [name, setName] = useState(""); 

  const handleRegistration = () => {
    if (email && password && name) {
      const userToken = "some-jwt-token";
      const userName = name; 
      login(userToken, email, userName); 
      navigate("/profile");
    } else {
      alert("Заполните все поля!"); 
    }
  };

  return (
    <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl text-center mb-8">Регистрация</h1>
       <h1>Имя</h1>
      <input
        type="text"
        placeholder="Введите ваше имя"value={name}onChange={(e) => setName(e.target.value)}className="py-3 px-4 w-full border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"/>
            <h1>Почта</h1>
      <input
        type="email"
        placeholder="Введите вашу почту"
        value={email}onChange={(e) => setEmail(e.target.value)}className="py-3 px-4 w-full border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"/>
     <h1>Пароль</h1>
      <input
        type="password"
        placeholder="Введите ваш пароль"
        value={password} onChange={(e) => setPassword(e.target.value)}className="py-3 px-4 w-full border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />

      <div className="mt-6">
        <button onClick={handleRegistration}className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md" >
          Создать аккаунт
        </button>
      </div>

      <h1 className="mt-6 flex justify-center">
        Уже есть аккаунт?{" "}
        <span onClick={toggleForm}className="text-blue-700 ml-2">
          Войти
        </span>
      </h1>
    </div>
  );
};

export default RegistrationForm;
