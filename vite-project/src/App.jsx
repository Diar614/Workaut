import React, { useState } from 'react';
import { BrowserRouter as AppRouter, Routes, Route, Navigate } from "react-router-dom"; 
import { useAuth } from "./context/AuthContext";
import RegistrationForm from "./components/auth/RegistrationForm"; 
import LoginForm from "./components/NotAuth/LoginForm"; 
import Profile from "./components/Profile/Profile";
import Workout from "./components/workout/Workout";
import CreateExercise from "./components/createExercise/CreateExersise"; 
import CreateWorkout from "./components/createWorkaut/CreateWorkaut";  
import './App.css';

const App = () => {
  const { isAuth } = useAuth(); 
  const [isLoginForm, setIsLoginForm] = useState(false);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm); 
  };

  return (
    <AppRouter>
      <Routes>
        <Route path="/" element={
          isAuth ? (
            <Navigate to="/profile" />
          ) : (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
              {!isLoginForm ? (
                <RegistrationForm toggleForm={toggleForm} /> 
              ) : (
                <LoginForm toggleForm={toggleForm} />
              )}
            </div>
          )
        } />

        <Route path="/profile" element={
          isAuth ? (
            <Profile />
          ) : (
            <Navigate to="/" /> 
          )
        } />

        <Route path="/workout" element={<Workout />} />
        <Route path="/create-exercise" element={<CreateExercise />} />
        <Route path="/create-workout" element={<CreateWorkout />} /> 
      </Routes>
    </AppRouter>
  );
};

export default App;
