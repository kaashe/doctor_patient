import React from "react";
import {  useNavigate } from "react-router-dom";

const SummaryPage = () => {
    const navigate = useNavigate();
    const formData  = JSON.parse(localStorage.getItem('formData'));
    console.log('formmm',formData);

    return (
        <div className="min-h-screen bg-gradient-to-r  from-blue-500 to-indigo-400 flex justify-center items-center px-4 py-8">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full text-gray-800">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Patient Summary
                </h2>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Name:</span>
                        <span>{formData.name || "N/A"}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="font-semibold">Age:</span>
                        <span>{formData.age || "N/A"}</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <span className="font-semibold">Previous Illness:</span>
                        <p className="bg-indigo-50 px-3 py-2 rounded-md">
                            {formData.previousIllness || "N/A"}
                        </p>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <span className="font-semibold">Previous Details:</span>
                        <p className="bg-indigo-50 px-3 py-2 rounded-md">
                            {formData.previousDetails || "N/A"}
                        </p>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <span className="font-semibold">Current Illness:</span>
                        <p className="bg-indigo-50 px-3 py-2 rounded-md">
                            {formData.currentIllness || "N/A"}
                        </p>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <span className="font-semibold">Current Details:</span>
                        <p className="bg-indigo-50 px-3 py-2 rounded-md">
                            {formData.currentDetails || "N/A"}
                        </p>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <button
                        onClick={() => navigate('/patient')}
                        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-indigo-500 transition duration-300"
                    >
                        Start Over
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SummaryPage;
