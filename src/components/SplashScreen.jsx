// SplashScreen.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Hide splash screen after 3 seconds
        setTimeout(() => {
            setIsVisible(false);
        }, 3000);
    }, []);

    const handleDoctorClick = () => {
        navigate("/login");
    };

    const handlePatientClick = () => {
        navigate("/patient");
    };

    console.log(isVisible, 'isVisible');

    return (
        <div className="min-h-screen px-2 bg-gradient-to-r from-blue-500 to-indigo-400 flex flex-col justify-center items-center text-white text-center">
            {isVisible ? <img src="./splash.svg" alt="" className="w-72 animate-bounce" /> :
                <>
                    <h1 className="text-3xl font-bold mb-4">Welcome to the Patient Onboarding</h1>
                    <p className="text-lg mb-6">Helps doctors speed up patient check-ins.</p>
                    <button
                        onClick={handleDoctorClick}
                        className="bg-white text-blue-500 px-6 py-2 rounded-lg mb-3"
                    >
                        Are you a doctor?
                    </button>
                    <button
                        onClick={handlePatientClick}
                        className="bg-white text-blue-500 px-6 py-2 rounded-lg"
                    >
                        Are you a patient?
                    </button>
                </>
            }
        </div>
    );
};

export default SplashScreen;
