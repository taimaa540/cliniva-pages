"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function AccountSetupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentSubStep, setCurrentSubStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    console.log("Form data:", formData);
    if (currentStep < 8) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 p-6">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <span className="text-xl font-semibold text-gray-900">
            Cliniva SYS
          </span>
        </div>

        {/* Account Setup Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <User
              className={`w-5 h-5 ${
                currentStep === 1 ? "text-blue-500" : "text-green-500"
              }`}
            />
            <span
              className={`font-medium ${
                currentStep > 1 ? "text-green-500" : "text-blue-500"
              }`}
            >
              Account Setup
            </span>
          </div>

          {/* Step 1 */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep === 2
                    ? "bg-blue-500 text-white"
                    : currentStep > 2
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                1
              </div>
              <span
                className={`font-medium ${
                  currentStep === 2
                    ? "text-blue-900"
                    : currentStep > 2
                    ? "text-green-500"
                    : "text-gray-600"
                }`}
              >
                Fill in Company Details
              </span>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full ${
                    currentStep === 3
                      ? "bg-[blue]"
                      : currentStep > 3
                      ? "bg-[green]"
                      : "bg-[gray]"
                  } flex items-center justify-center text-xs font-medium text-white
                   `}
                ></div>
                <span
                  className={`text-sm font-medium ${
                    currentStep === 3
                      ? "text-blue-900"
                      : currentStep > 3
                      ? "text-green-500"
                      : "text-gray-600"
                  }`}
                >
                  Company Overview
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-xs font-medium text-white ${
                    currentStep === 4
                      ? "bg-[blue]"
                      : currentStep > 4
                      ? "bg-[green]"
                      : "bg-[gray]"
                  }`}
                ></div>
                <span
                  className={`text-sm font-medium ${
                    currentStep === 4
                      ? "text-blue-900"
                      : currentStep > 4
                      ? "text-green-500"
                      : "text-gray-600"
                  } `}
                >
                  Contact Details
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-xs font-medium text-white ${
                    currentStep === 5
                      ? "bg-[blue]"
                      : currentStep > 5
                      ? "bg-[green]"
                      : "bg-[gray]"
                  }
                   `}
                >
                </div>
                <span className={`text-sm font-medium ${
                    currentStep === 5
                      ? "text-blue-900"
                      : currentStep > 5
                      ? "text-green-500"
                      : "text-gray-600"
                  }`}>Legal Details</span>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          {/* <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep === 2
                    ? "bg-teal-500 text-white"
                    : currentStep > 2
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                2
              </div>
              <span
                className={`font-medium ${
                  currentStep === 2
                    ? "text-gray-900"
                    : currentStep > 2
                    ? "text-blue-500"
                    : "text-gray-600"
                }`}
              >
                Fill in Complex Details
              </span>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-xs font-medium text-white ${getSubStepDotColor(
                    2,
                    1
                  )}`}
                >
                  1
                </div>
                <span
                  className={`text-sm font-medium ${getSubStepColor(2, 1)}`}
                >
                  Complex Overview
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-xs font-medium text-white ${getSubStepDotColor(
                    2,
                    2
                  )}`}
                >
                  2
                </div>
                <span
                  className={`text-sm font-medium ${getSubStepColor(2, 2)}`}
                >
                  Contact Details
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-xs font-medium text-white ${getSubStepDotColor(
                    2,
                    3
                  )}`}
                >
                  3
                </div>
                <span
                  className={`text-sm font-medium ${getSubStepColor(2, 3)}`}
                >
                  Working Schedule
                </span>
              </div>
            </div>
          </div> */}

          {/* Step 3 */}
          {/* <div>
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep === 3
                    ? "bg-teal-500 text-white"
                    : currentStep > 3
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                3
              </div>
              <span
                className={`font-medium ${
                  currentStep === 3
                    ? "text-gray-900"
                    : currentStep > 3
                    ? "text-blue-500"
                    : "text-gray-600"
                }`}
              >
                Fill in Clinic Details
              </span>
            </div>
            <div className="ml-9 space-y-2">
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-xs font-medium text-white ${getSubStepDotColor(
                    3,
                    1
                  )}`}
                ></div>
                <span
                  className={`text-sm font-medium ${getSubStepColor(
                    3,
                    1
                  )} font-medium ${
                    currentStep === 3
                      ? "text-gray-900"
                      : currentStep > 3
                      ? "text-blue-500"
                      : "text-gray-600"
                  }`}
                >
                  Clinic Overview
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-xs font-medium text-white ${getSubStepDotColor(
                    3,
                    2
                  )}`}
                ></div>
                <span
                  className={`text-sm font-medium ${getSubStepColor(3, 2)}`}
                >
                  Working Schedule
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Back Button */}
        <div className="mb-6">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm">Back to Choosing Plan Page</span>
          </button>
        </div>

        {/* Page Title */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">
          Create Your Account
        </h1>

        {/* Form */}
        <div className="max-w-2xl">
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Email Field */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email*
              </Label>
            </div>

            {/* Username Field */}
            <div className="space-y-2">
              <Label
                htmlFor="username"
                className="text-sm font-medium text-gray-700"
              >
                User Name*
              </Label>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password*
              </Label>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-700"
              >
                Confirm Password*
              </Label>
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-end">
            <Button
              onClick={handleNext}
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 font-medium"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
