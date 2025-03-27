import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const TrackProgressPage: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [diseaseDetails, setDiseaseDetails] = useState<any>(null);
  const [reportDate, setReportDate] = useState<string>("");
  const navigate = useNavigate();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setImage(file);
      setPrediction(null);
      setDiseaseDetails(null);
    }
  };

  const predictPlantHealth = async () => {
    if (image) {
      setLoading(true);

      try {
        const now = new Date();
        setReportDate(now.toLocaleString());

        const reader = new FileReader();
        reader.readAsDataURL(image);

        reader.onloadend = async () => {
          const base64Image = reader.result?.toString().split(",")[1];

          if (!base64Image) {
            throw new Error("Failed to convert image to base64");
          }

          const data = {
            api_key: "rDQ1vAEtJzVEbZv95FFNFkWYcHxZqAAY0PXRQuyo11pZHkZEez",
            images: [base64Image],
            modifiers: ["crops_fast", "similar_images"],
            language: "en",
            disease_details: [
              "cause",
              "common_names",
              "classification",
              "description",
              "treatment",
              "url",
            ],
          };

          console.log("Sending request to Plant.id API...");

          const response = await axios.post(
            "https://api.plant.id/v2/health_assessment",
            data
          );

          console.log("API Response:", response.data);

          if (response.data?.health_assessment?.diseases?.length > 0) {
            const topDisease = response.data.health_assessment.diseases[0];
            setPrediction(
              `Detected: ${topDisease.name} (${(
                topDisease.probability * 100
              ).toFixed(2)}% confidence)`
            );
            setDiseaseDetails({
              ...topDisease,
              futureCare: [
                "Regular monitoring of symptoms",
                "Maintain optimal watering schedule",
                "Ensure proper light conditions",
                "Apply recommended treatments",
                "Monitor surrounding plants",
              ],
              preventiveMeasures: [
                "Maintain good air circulation",
                "Avoid overwatering",
                "Regular cleaning of plant area",
                "Proper spacing between plants",
                "Regular inspection for early detection",
              ],
            });
          } else if (response.data?.suggestions?.length > 0) {
            const suggestion = response.data.suggestions[0];
            setPrediction(
              `Detected: ${suggestion.name} (${(
                suggestion.probability * 100
              ).toFixed(2)}% confidence)`
            );
            setDiseaseDetails({
              name: suggestion.name,
              description: suggestion.description,
              treatment: suggestion.treatment,
              futureCare: [
                "Regular monitoring",
                "Maintain optimal growing conditions",
                "Follow standard care practices",
                "Document any changes",
                "Seasonal maintenance",
              ],
              preventiveMeasures: [
                "Regular health checks",
                "Proper watering routine",
                "Adequate sunlight exposure",
                "Clean growing environment",
                "Balanced nutrition",
              ],
            });
          } else {
            setPrediction("No diseases detected. Your plant appears healthy!");
            setDiseaseDetails({
              name: "Healthy Plant",
              description: "Your plant shows no signs of disease or stress.",
              treatment: "Continue with regular maintenance and care.",
              futureCare: [
                "Maintain current care routine",
                "Regular watering as needed",
                "Proper sunlight exposure",
                "Seasonal fertilization",
                "Regular pruning when needed",
              ],
              preventiveMeasures: [
                "Monitor for any changes",
                "Maintain clean environment",
                "Proper ventilation",
                "Regular soil health checks",
                "Balanced nutrition",
              ],
            });
          }
        };
      } catch (error: any) {
        console.error(
          "Error predicting plant health:",
          error.response ? error.response.data : error.message
        );
        setPrediction("Error in plant identification. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const generatePDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold text-green-800 mb-4">
            Track Your Plant's Health
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Upload an image of your plant to check its health status and detect
            any diseases.
          </p>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Upload plant image
            </label>
            <div className="mt-2 flex justify-center rounded-lg border-2 border-dashed border-green-300 px-6 py-10">
              <div className="text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                />
                <p className="mt-2 text-xs text-gray-500">
                  PNG, JPG up to 10MB
                </p>
              </div>
            </div>
          </div>

          {image && (
            <div className="mb-6">
              <img
                src={URL.createObjectURL(image)}
                alt="Plant"
                className="max-w-md mx-auto h-auto rounded-lg shadow-lg object-contain"
              />
            </div>
          )}

          <div className="flex justify-center mb-6">
            <button
              onClick={predictPlantHealth}
              className="w-full md:w-1/3 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors disabled:bg-green-400 disabled:cursor-not-allowed shadow-md"
              disabled={!image || loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Check Plant Health"
              )}
            </button>
          </div>

          {prediction && diseaseDetails && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 p-6 bg-white rounded-xl shadow-lg text-left"
              id="report-section"
            >
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <div>
                  <h2 className="text-2xl font-bold text-green-800">
                    Plant Health Report
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Report generated on: {reportDate}
                  </p>
                </div>
                <button
                  onClick={generatePDF}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center shadow-md"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Save Report
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">
                      Diagnosis
                    </h3>
                    <div className="space-y-4">
                      <p className="text-lg font-medium text-gray-800">
                        {prediction}
                      </p>
                      <p className="text-gray-700">
                        {diseaseDetails.description}
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">
                      Treatment Plan
                    </h3>
                    <p className="text-gray-700">{diseaseDetails.treatment}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">
                      Future Care
                    </h3>
                    <ul className="space-y-2">
                      {diseaseDetails.futureCare.map(
                        (care: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <svg
                              className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-gray-700">{care}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">
                      Preventive Measures
                    </h3>
                    <ul className="space-y-2">
                      {diseaseDetails.preventiveMeasures.map(
                        (measure: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <svg
                              className="w-5 h-5 text-green-600 mr-2 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-gray-700">{measure}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TrackProgressPage;
