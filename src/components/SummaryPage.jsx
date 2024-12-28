import React from "react";
import { useLocation } from "react-router-dom";

const SummaryPage = () => {
    const location = useLocation();
    const { formData } = location.state;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Summary</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Age:</strong> {formData.age}</p>
            <p><strong>Previous Illness:</strong> {formData.previousIllness}</p>
            <p><strong>Previous Details:</strong> {formData.previousDetails}</p>
            <p><strong>Current Illness:</strong> {formData.currentIllness}</p>
            <p><strong>Current Details:</strong> {formData.currentDetails}</p>
        </div>
    );
};

export default SummaryPage;
