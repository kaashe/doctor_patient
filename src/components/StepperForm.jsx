import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const StepperForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    console.table('form data', formData);

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const handleNext = (data) => {
        setFormData({ ...formData, ...data });
        if (step < 3) setStep(step + 1);
        else navigate("/summary", { state: { formData } });
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <div className="grid grid-cols-3"><h1 className="text-2xl">Basic Info</h1></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <input
                                    {...register("name")}
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    {...register("filling_person")}
                                    type="email"
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Age</label>
                                <input
                                    {...register("age")}
                                    type="number"
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Gender</label>
                                <select
                                    {...register("gender")}
                                    className="border rounded w-full p-2"
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Person (if not the Patient)</label>
                                <input
                                    {...register("filling_person")}
                                    type="text"
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Phone Number</label>
                                <input
                                    {...register("phone_number")}
                                    type="tel"
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Address 1</label>
                                <input
                                    {...register("address1")}
                                    type="text"
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Address 2</label>
                                <input
                                    {...register("address2")}
                                    type="text"
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">City</label>
                                <input
                                    {...register("city")}
                                    type="text"
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">State</label>
                                <input
                                    {...register("State")}
                                    type="text"
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Zip</label>
                                <input
                                    {...register("Zip")}
                                    type="text"
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Date of Birth</label>
                                <input
                                    className="border rounded w-full p-2"
                                    type="date"
                                    placeholder="Date of Birth" {...register("DateofBirth", {})}
                                />
                            </div>

                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <div className="grid grid-cols-3 mb-4"><h1 className="text-2xl">Medical Info</h1></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                            <div>
                                <label className="block text-sm font-medium mb-1">Blood Group</label>
                                <select
                                    {...register("bloodGroup")}
                                    className="border rounded w-full p-2"
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Do you have any allergies?</label>
                                <select
                                    {...register("allergies")}
                                    className="border rounded w-full p-2"
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Do you have any drug allergies?</label>
                                <select
                                    {...register("allergies")}
                                    className="border rounded w-full p-2"
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Are you experiencing any of the following symptoms?
                                </label>
                                <div className="flex flex-col gap-2">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            {...register("symptoms.unexpectedWeightLoss")}
                                            className="form-checkbox rounded text-blue-500"
                                        />
                                        <span className="ml-2">Unexpected weight loss</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            {...register("symptoms.sleepIssues")}
                                            className="form-checkbox rounded text-blue-500"
                                        />
                                        <span className="ml-2">Sleep issues</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            {...register("symptoms.feelingNoHunger")}
                                            className="form-checkbox rounded text-blue-500"
                                        />
                                        <span className="ml-2">Feeling no hunger</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            {...register("symptoms.weakness")}
                                            className="form-checkbox rounded text-blue-500"
                                        />
                                        <span className="ml-2">Weakness</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    What is your sexuality?
                                </label>
                                <div className="flex flex-col gap-2">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            {...register("sexuality.Lesbian")}
                                            className="form-checkbox rounded text-blue-500"
                                        />
                                        <span className="ml-2">Lesbian</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            {...register("sexuality.Gay")}
                                            className="form-checkbox rounded text-blue-500"
                                        />
                                        <span className="ml-2">Gay</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            {...register("sexuality.Bisexuality")}
                                            className="form-checkbox rounded text-blue-500"
                                        />
                                        <span className="ml-2">Bisexuality</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            {...register("sexuality.Queer")}
                                            className="form-checkbox rounded text-blue-500"
                                        />
                                        <span className="ml-2">Queer</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            {...register("sexuality.Heterosexual")}
                                            className="form-checkbox rounded text-blue-500"
                                        />
                                        <span className="ml-2">Heterosexual</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Surgical History
                                </label>
                                <div className="flex flex-col gap-2">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            {...register("surgical.AppendixRemoval")}
                                            className="form-checkbox rounded text-blue-500"
                                        />
                                        <span className="ml-2">Appendix Removal</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            {...register("surgical.BreastLumpectomy")}
                                            className="form-checkbox rounded text-blue-500"
                                        />
                                        <span className="ml-2">Breast Lumpectomy</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            {...register("surgical.FacialSurgery")}
                                            className="form-checkbox rounded text-blue-500"
                                        />
                                        <span className="ml-2">Facial Surgery</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            {...register("surgical.Hysterectomy")}
                                            className="form-checkbox rounded text-blue-500"
                                        />
                                        <span className="ml-2">Hysterectomy</span>
                                    </label>

                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Previous Illness</label>
                                <input
                                    {...register("previousIllness")}
                                    className="border rounded w-full p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Duration</label>
                                <input
                                    {...register("previousDuration")}
                                    type="text"
                                    className="border rounded w-full p-2"
                                />
                            </div>
                            <div className="sm:col-span-2 lg:col-span-3">
                                <label className="block text-sm font-medium mb-1">Details</label>
                                <textarea
                                    {...register("previousDetails")}
                                    className="border rounded w-full p-2"
                                />
                            </div>

                        </div>

                        {/* freehale -sachet */}
                    </>
                );
            case 3:
                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Current Illness</label>
                            <input
                                {...register("currentIllness")}
                                className="border rounded w-full p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Symptoms Duration</label>
                            <input
                                {...register("currentDuration")}
                                type="text"
                                className="border rounded w-full p-2"
                            />
                        </div>
                        <div className="sm:col-span-2 lg:col-span-3">
                            <label className="block text-sm font-medium mb-1">Details</label>
                            <textarea
                                {...register("currentDetails")}
                                className="border rounded w-full p-2"
                            />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-violet-400 to-90% flex items-center justify-center p-4 sm:px-1"
        // style={{
        //     backgroundImage:
        //         "url('https://plus.unsplash.com/premium_photo-1664475455210-d06a88a4d3a4?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        // }}
        >
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-12 w-full max-w-4xl">
                <h1 className="text-2xl font-bold text-gray-700 mb-6">
                    Patient Information Form
                </h1>
                <form onSubmit={handleSubmit(handleNext)}>
                    {renderStep()}
                    <div className="mt-4 flex justify-between">
                        {step > 1 && (
                            <button
                                type="button"
                                className="bg-gray-500 text-white py-2 px-4 rounded"
                                onClick={() => setStep(step - 1)}
                            >
                                Back
                            </button>
                        )}
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded"
                        >
                            {step < 3 ? "Next" : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StepperForm;
