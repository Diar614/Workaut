import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext"; 

const LoginForm = ({ toggleForm }) => {
  const { login } = useAuth();

  const [email, setEmailInput] = useState("");
  const [password, setPasswordInput] = useState("");

  const handleLogin = () => {
    if (email && password) {
      const userToken = "some-jwt-token";
      const userName = "Diar"; 

      login(userToken, email, userName); 
    } else {
      alert(" Введите email и пароль.");
    }
  };

  return (
    <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl text-center mb-8">Вход в аккаунт</h1>

    <h1>Почта</h1>
     <input type="email"placeholder="Введите вашу почту"value={email}onChange={(e) => setEmailInput(e.target.value)}className="py-3 px-4 w-full border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"aria-label="Email"required/>
      <h1>Пароль</h1>
      <input type="password"placeholder="Введите ваш пароль"value={password}onChange={(e) => setPasswordInput(e.target.value)}className="py-3 px-4 w-full border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"aria-label="Пароль"required/>

      <div className="mt-6">
        <button onClick={handleLogin} className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md">
          Войти
        </button>
      </div>

      <p className="mt-6 text-center">
        Нету аккаунта?
        <span onClick={toggleForm} className="text-blue-700  ml-2">
          Создать
        </span>
      </p>
    </div> 
  );
};

export default LoginForm;
