typescript
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fitnessGoal: '',
    experience: '',
    preferredTime: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 3;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const isStepValid = () => {
    if (currentStep === 1) {
      return formData.name && formData.email && formData.phone;
    }
    if (currentStep === 2) {
      return formData.fitnessGoal && formData.experience;
    }
    if (currentStep === 3) {
      return formData.preferredTime;
    }
    return false;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Welcome to Elevate!</h2>
            <p className="text-slate-600 text-lg mb-8">
              Thank you for your interest. Our team will contact you within 24 hours to schedule your complimentary fitness consultation.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  fitnessGoal: '',
                  experience: '',
                  preferredTime: ''
                });
              }}
              className="px-8 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-200"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Start Your Fitness Journey</h1>
          <p className="text-slate-600 text-lg">Join Elevate Fitness Studio and transform your life</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    currentStep >= step
                      ? 'bg-gradient-to-br from-emerald-400 to-teal-500 text-white'
                      : 'bg-slate-200 text-slate-400'
                  }`}>
                    {step}
                  </div>
                  {step < 3 && (
                    <div className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                      currentStep > step ? 'bg-gradient-to-r from-emerald-400 to-teal-500' : 'bg-slate-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-slate-600">
              <span>Personal Info</span>
              <span>Fitness Goals</span>
              <span>Schedule</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Personal Information</h2>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Fitness Goals */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Your Fitness Goals</h2>
                
                <div>
                  <label htmlFor="fitnessGoal" className="block text-sm font-medium text-slate-700 mb-2">
                    Primary Fitness Goal *
                  </label>
                  <select
                    id="fitnessGoal"
                    name="fitnessGoal"
                    value={formData.fitnessGoal}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 outline-none bg-white"
                  >
                    <option value="">Select your goal</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="endurance">Build Endurance</option>
                    <option value="flexibility">Improve Flexibility</option>
                    <option value="general">General Fitness</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-slate-700 mb-2">
                    Fitness Experience Level *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 outline-none bg-white"
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Schedule Preference */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Schedule Your Consultation</h2>
                
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-slate-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all duration-200 outline-none bg-white"
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (6am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 5pm)</option>
                    <option value="evening">Evening (5pm - 9pm)</option>
                  </select>
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold text-slate-800 mb-3">Your Information</h3>
                  <div className="space-y-2 text-sm text-slate-600">
                    <p><span className="font-medium">Name:</span> {formData.name}</p>
                    <p><span className="font-medium">Email:</span> {formData.email}</p>
                    <p><span className="font-medium">Phone:</span> {formData.phone}</p>
                    <p><span className="font-medium">Goal:</span> {formData.fitnessGoal}</p>
                    <p><span className="font-medium">Experience:</span> {formData.experience}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12 pt-8 border-t border-slate-200">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  currentStep === 1
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                Previous
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isStepValid()
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white hover:from-emerald-500 hover:to-teal-600 shadow-md hover:shadow-lg'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!isStepValid()}
                  className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isStepValid()
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white hover:from-emerald-500 hover:to-teal-600 shadow-md hover:shadow-lg'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  Start Your Journey
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}