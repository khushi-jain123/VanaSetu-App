export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture: string;
  points: number;
  treesAdopted: number;
  joinDate: string;
  level: string;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  pointsCost: number;
  image: string;
}

export interface Tree {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  price: number;
  pointsReward: number;
  image: string;
  height: string;
  growthRate: 'Slow' | 'Medium' | 'Fast';
  careLevel: 'Easy' | 'Moderate' | 'Difficult';
  locations: string[];
  benefits: string[];
  stock: number;
  co2Absorption: string;
  lifespan: string;
  category: 'Fruit' | 'Ornamental' | 'Shade' | 'Evergreen' | 'Native';
}

export interface TreeLocation {
  id: string;
  name: string;
  city: string;
  state: string;
  description: string;
  image: string;
  availableSpots: number;
  treesPlanted: number;
  coordinates: {
    lat: number;
    lng: number;
  };
}