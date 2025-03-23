import React, { useState } from "react";
import { Trees as Tree, User, MapPin, Leaf } from "lucide-react";
import "./addTreeform.css";

function App() {
  const [formData, setFormData] = useState({
    image: "",
    location: "",
    benefit: "",
    description: "",
    planterName: "",
    planterType: "individual",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 relative overflow-hidden">
      {/* Success Popup */}
      {showPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-bounce">
          <div className="flex items-center gap-2">
            <Tree className="w-6 h-6" />
            <p className="font-medium">Tree added successfully! 🌱</p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-90">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Tree className="w-8 h-8 text-green-600" />
            <h1 className="text-3xl font-bold text-green-800">Add Trees</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload */}
            <div>
              <label className="block text-green-700 font-medium mb-2">
                Tree Image
              </label>
              <div className="border-2 border-dashed border-green-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="tree-image"
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                />
                <label htmlFor="tree-image" className="cursor-pointer">
                  <div className="flex flex-col items-center">
                    <Tree className="w-12 h-12 text-green-500 mb-2" />
                    <span className="text-green-600">
                      Click to upload tree image
                    </span>
                    <span className="text-sm text-green-500">
                      (PNG, JPG up to 10MB)
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Location */}
            <div className="tree-location">
              {/* Tree Location Label */}
              <label className="text-lg font-semibold block mb-2">
                Tree Location
              </label>

              {/* Google Map Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119270.56240586024!2d77.67934360009859!3d20.904067449303778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4a67774bc15%3A0x3c7b3f78ca4f9635!2sAmravati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1742680711610!5m2!1sen!2sin"
                width="100%"
                height="450"
                className="border rounded-lg shadow-md"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Benefits */}
            <div>
              <label className="block text-green-700 font-medium mb-2">
                <Leaf className="w-4 h-4 inline-block mr-2" />
                Major Benefit
              </label>
              <select
                className="w-full px-4 py-2 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                onChange={(e) =>
                  setFormData({ ...formData, benefit: e.target.value })
                }
              >
                <option value="">Select primary benefit</option>
                <option value="air">Air Purification</option>
                <option value="soil">Soil Conservation</option>
                <option value="wildlife">Wildlife Habitat</option>
                <option value="food">Food Production</option>
                <option value="shade">Shade Provision</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-green-700 font-medium mb-2">
                Description
              </label>
              <textarea
                className="w-full px-4 py-2 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                rows={4}
                placeholder="Add any additional details about the tree..."
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            {/* Planter Information */}
            <div className="space-y-4">
              <label className="block text-green-700 font-medium mb-2">
                <User className="w-4 h-4 inline-block mr-2" />
                Planter Information
              </label>
              <div className="flex gap-4">
                <input
                  type="text"
                  className="flex-1 px-4 py-2 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your name"
                  onChange={(e) =>
                    setFormData({ ...formData, planterName: e.target.value })
                  }
                />
                <select
                  className="flex-1 px-4 py-2 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  onChange={(e) =>
                    setFormData({ ...formData, planterType: e.target.value })
                  }
                >
                  <option value="individual">Individual</option>
                  <option value="ngo">NGO</option>
                  <option value="social-worker">Social Worker</option>
                  <option value="organization">Organization</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <Tree className="w-5 h-5" />
              Add Tree
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
