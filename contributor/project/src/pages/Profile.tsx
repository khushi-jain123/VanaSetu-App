import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Plant, Adopter } from "../contexts/AuthContext";
import { Leaf, Calendar, Users, CheckCircle } from "lucide-react";
import addTreeForm from "./addTreeform";

const mockPlants: Plant[] = [
  {
    id: "1",
    name: "Neem Tree",
    imageUrl:
      "https://thumbs.dreamstime.com/b/neem-plant-growing-soil-37613902.jpg",
    dateAdded: "2023-05-15",
    adopters: [
      {
        id: "101",
        name: "Sharwari Mondhe",
        email: "sharwari@gmail.com",
        adoptionDate: "2025-03-05",
      },
    ],
  },
  {
    id: "2",
    name: "Banyan Tree",
    imageUrl:
      "https://www.shutterstock.com/image-photo/sapling-banyan-tree-260nw-2052723239.jpg",
    dateAdded: "2023-07-10",
    adopters: [],
  },
  {
    id: "3",
    name: "Mango Tree",
    imageUrl:
      "https://www.garden.eco/wp-content/uploads/2018/07/mango-seedling.jpg",
    dateAdded: "2023-09-20",
    adopters: [],
  },
];

const Profile: React.FC = () => {
  const { currentUser } = useAuth();
  const [plants, setPlants] = useState<Plant[]>([]);
  const [acceptedPlants, setAcceptedPlants] = useState<string | null>(null);

  useEffect(() => {
    setPlants(mockPlants);
  }, []);

  const handleAccept = (plantId: string) => {
    setAcceptedPlants(plantId);
    setTimeout(() => {
      setAcceptedPlants(null);
    }, 200000);
  };

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-green-800 mb-4">Your Profile</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold text-green-700 mb-2">
              Personal Information
            </h2>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Name:</span>{" "}
                {currentUser.fullName}
              </p>
              <p>
                <span className="font-medium">Email:</span> {currentUser.email}
              </p>
              <p>
                <span className="font-medium">Experience:</span>{" "}
                {currentUser.experience}
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-green-700 mb-2">
              Organization Details
            </h2>
            {currentUser.organization?.isAffiliated ? (
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Organization Type:</span>{" "}
                  {currentUser.organization.type}
                </p>
                <p>
                  <span className="font-medium">Organization Name:</span>{" "}
                  {currentUser.organization.name}
                </p>
              </div>
            ) : (
              <p>Not affiliated with any organization</p>
            )}
          </div>
        </div>
        <br />
        <div className="flex justify-between items-center mb-6">
          <a
            href="/Event"
            className="mt-10 w-50 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors block text-center"
          >
            Add Event
          </a>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-green-800">Your Locations</h2>
          <a
            href="/AddTree"
            className="mt-auto w-20 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors block text-center"
          >
            Add Trees
          </a>
        </div>

        {plants.length === 0 ? (
          <div className="text-center py-8">
            <Leaf className="h-12 w-12 text-green-300 mx-auto mb-4" />
            <p className="text-gray-500">
              You haven't added any Locations yet.
            </p>
            <p className="text-gray-500">
              Start by adding your first Location!
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map((plant) => (
              <div
                key={plant.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={plant.imageUrl}
                    alt={plant.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    {plant.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">
                      Added on {new Date(plant.dateAdded).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center text-gray-600 mb-1">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">
                        {plant.adopters.length}{" "}
                        {plant.adopters.length === 1 ? "Adopter" : "Adopters"}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleAccept(plant.id)}
                    className={`w-full py-2 mt-2 rounded-md font-medium transition-colors block text-center ${
                      acceptedPlants === plant.id
                        ? "bg-green-500 text-white"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {acceptedPlants === plant.id ? "Accepted" : "Accept"}
                  </button>
                  {acceptedPlants === plant.id && (
                    <div className="mt-3 flex justify-center items-center text-green-600">
                      <CheckCircle className="h-6 w-6 mr-2" />
                      <span>Plant is accepted</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
