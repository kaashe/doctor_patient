import React, { useState } from "react";

const DoctorPage = () => {
    // Sample patient data
    const [patients] = useState([
        {
            id: 1,
            name: "John Doe",
            age: 29,
            gender: "Male",
            bloodGroup: "O+",
            symptoms: {
                unexpectedWeightLoss: true,
                sleepIssues: false,
                feelingNoHunger: true,
                weakness: false,
            },
            detailedDescription: "Patient has been experiencing mild fever and nausea.",
        },
        {
            id: 2,
            name: "Jane Smith",
            age: 34,
            gender: "Female",
            bloodGroup: "A-",
            symptoms: {
                unexpectedWeightLoss: false,
                sleepIssues: true,
                feelingNoHunger: false,
                weakness: true,
            },
            detailedDescription: "Patient reports severe headaches and fatigue.",
        },
    ]);

    const [activeAccordion, setActiveAccordion] = useState(null);
    const symptomICD10Mapping = {
        unexpectedWeightLoss: "R63.4",
        sleepIssues: "G47.0",
        feelingNoHunger: "R63.0",
        weakness: "R53.1",
    };
    // Function to toggle accordion
    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500 p-6">
            <h1 className="text-2xl font-bold text-center text-white mb-6">Patient Records</h1>
            <div className="max-w-4xl mx-auto space-y-4">
                {patients.map((patient) => (
                    <div key={patient.id} className="bg-white shadow rounded-md">
                        <div
                            className="flex justify-between items-center p-4 cursor-pointer"
                            onClick={() => toggleAccordion(patient.id)}
                        >
                            <h2 className="text-lg font-medium">{patient.name}</h2>
                            <span className="text-lg font-bold text-gray-500">
                                {activeAccordion === patient.id ? "-" : "+"}
                            </span>
                        </div>
                        {activeAccordion === patient.id && (
                            <div className="p-4 border-t border-gray-200">
                                <p><strong>Age:</strong> {patient.age}</p>
                                <p><strong>Gender:</strong> {patient.gender}</p>
                                <p><strong>Blood Group:</strong> {patient.bloodGroup}</p>
                                <p>
                                    <strong>Symptoms:</strong>{" "}
                                    {Object.entries(patient.symptoms)
                                        .filter(([key, value]) => value)
                                        .map(
                                            ([key]) =>
                                                `${key
                                                    .replace(/([A-Z])/g, " $1")
                                                    .toLowerCase()} (ICD-10: ${symptomICD10Mapping[key]})`
                                        )
                                        .join(", ") || "None"}
                                </p>
                                <p><strong>Detailed Description:</strong> {patient.detailedDescription}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorPage;
