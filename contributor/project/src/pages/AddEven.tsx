import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Building2,
  CheckCircle2,
  X,
} from "lucide-react";
import "./addEvent.css";

function App() {
  const [formData, setFormData] = useState({
    organization: "",
    eventDate: "",
    eventTime: "",
    location: "",
    email: "",
    specialRequirements: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const createLeaf = (i: number) => {
      const leaf = document.createElement("div");
      leaf.className = `leaf leaf-${i}`;
      leaf.textContent = "🍃";
      document.body.appendChild(leaf);
    };
    for (let i = 1; i <= 20; i++) {
      createLeaf(i);
    }
  }, []);

  return (
    <div className="min-h-screen leaf-background relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative">
        {showSuccess && (
          <div className="success-popup fixed top-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>Registration successful!</span>
            <button onClick={() => setShowSuccess(false)} className="ml-2">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-8 form-container">
          <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
            Add Event
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 bg-green-50 p-4 rounded-lg input-focus">
                <Building2 className="text-green-600 w-5 h-5" />
                <input
                  type="text"
                  name="organization"
                  placeholder="Organization Name"
                  required
                  className="flex-1 bg-transparent border-none focus:ring-0 placeholder-green-600/50"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 bg-green-50 p-4 rounded-lg input-focus">
                  <Calendar className="text-green-600 w-5 h-5" />
                  <input
                    type="date"
                    name="eventDate"
                    required
                    className="flex-1 bg-transparent border-none focus:ring-0 text-green-600"
                    value={formData.eventDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex items-center gap-2 bg-green-50 p-4 rounded-lg input-focus">
                  <Clock className="text-green-600 w-5 h-5" />
                  <input
                    type="time"
                    name="eventTime"
                    required
                    className="flex-1 bg-transparent border-none focus:ring-0 text-green-600"
                    value={formData.eventTime}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 bg-green-50 p-4 rounded-lg input-focus">
                <MapPin className="text-green-600 w-5 h-5" />
                <input
                  type="text"
                  name="location"
                  placeholder="Event Location"
                  required
                  className="flex-1 bg-transparent border-none focus:ring-0 placeholder-green-600/50"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center gap-2 bg-green-50 p-4 rounded-lg input-focus">
                <input
                  type="email"
                  name="email"
                  placeholder="Contact Email"
                  required
                  className="flex-1 bg-transparent border-none focus:ring-0 placeholder-green-600/50"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <textarea
                name="specialRequirements"
                placeholder="Special Requirements (Optional)"
                className="w-full bg-green-50 p-4 rounded-lg border-none focus:ring-1 focus:ring-green-500 placeholder-green-600/50 min-h-[100px] input-focus"
                value={formData.specialRequirements}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Register for Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
