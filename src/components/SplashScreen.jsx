// SplashScreen.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcMindMap } from "react-icons/fc";
import { FcComboChart } from "react-icons/fc";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserInjured } from "react-icons/fa";

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
            {isVisible ? <FcMindMap className="text-9xl animate-pulse"/> :
                <>
                    <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">Patient Onboarding <FcComboChart className="text-white text-5xl"/></h1>
                    <p className="text-lg mb-6">Helps doctors speed up patient check-Ins</p>
                    <button
                        onClick={handleDoctorClick}
                        className="bg-white text-blue-500 px-6 py-2 rounded-lg mb-3 justify-between flex items-center gap-3"
                    >
                        Doctor? <FaUserDoctor className="text-3xl"/>
                    </button>
                    <button
                        onClick={handlePatientClick}
                         className="bg-white text-blue-500 px-6 py-2 rounded-lg mb-3 justify-between flex items-center gap-3"
                    >
                         Patient? <FaUserInjured className="text-3xl"/>
                    </button>
                </>
            }
        </div>
    );
};

export default SplashScreen;
