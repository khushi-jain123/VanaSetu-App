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
            api_key: "QIfRYtShJ9NUbwpR6kuniLEzuFnEsycCDYVCq35EePKcXiWTxb", // Move this to an env variable in production!
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
            setDiseaseDetails(topDisease);
            console.log("Disease details:", topDisease);
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
            });
          } else {
            setPrediction("No diseases detected. Your plant appears healthy!");
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
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-green-50 focus:outline-none p-2.5"
            />
          </div>

          {image && (
            <div className="mb-6">
              <img
                src={URL.createObjectURL(image)}
                alt="Plant"
                className="max-w-md mx-auto h-auto rounded-md shadow-lg"
              />
            </div>
          )}

          <div className="flex justify-center mb-6">
            <button
              onClick={predictPlantHealth}
              className="w-full md:w-1/3 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors disabled:bg-green-400"
              disabled={!image || loading}
            >
              {loading ? "Processing..." : "Check Plant Health"}
            </button>
          </div>

          {prediction && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 p-6 bg-white rounded-lg shadow-md text-left"
              id="report-section"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-green-800">
                  Plant Health Report
                </h2>
                <button
                  onClick={generatePDF}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
                >
                  Save Report
                </button>
              </div>

              <div className="border-b border-gray-200 pb-4 mb-4">
                <p className="text-sm text-gray-500">
                  Report generated on: {reportDate}
                </p>
                <p className="text-lg font-medium">{prediction}</p>
              </div>

              {diseaseDetails && (
                <div>
                  <h3 className="text-xl font-semibold text-green-700 mb-2">
                    Disease Details
                  </h3>
                  <p className="text-gray-700">
                    <strong>Name:</strong> {diseaseDetails.name}
                  </p>
                  <p className="text-gray-700">
                    <strong>Description:</strong> {diseaseDetails.description}
                  </p>
                  <p className="text-gray-700">
                    <strong>Treatment:</strong> {diseaseDetails.treatment}
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TrackProgressPage;
