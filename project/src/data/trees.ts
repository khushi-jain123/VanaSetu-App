import { Tree, TreeLocation } from '../types';

export const trees: Tree[] = [
  {
    id: '1',
    name: 'Red Maple',
    scientificName: 'Acer rubrum',
    description: 'A deciduous tree with stunning red foliage in autumn. Adaptable to various soil conditions and provides excellent shade.',
    price: 89.99,
    pointsReward: 150,
    image: 'https://images.unsplash.com/photo-1610047803562-7260ebe516cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    height: '40-60 ft',
    growthRate: 'Medium',
    careLevel: 'Easy',
    locations: ['1', '2', '4'],
    benefits: ['Air purification', 'Erosion control', 'Wildlife habitat'],
    stock: 25,
    co2Absorption: '48 lbs per year',
    lifespan: '80-100 years',
    category: 'Shade'
  },
  {
    id: '2',
    name: 'White Oak',
    scientificName: 'Quercus alba',
    description: 'A majestic, long-lived tree with strong limbs and broad canopy. Produces acorns that support wildlife.',
    price: 119.99,
    pointsReward: 200,
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    height: '50-80 ft',
    growthRate: 'Slow',
    careLevel: 'Moderate',
    locations: ['1', '3', '5'],
    benefits: ['Carbon sequestration', 'Shade', 'Wildlife food source'],
    stock: 15,
    co2Absorption: '58 lbs per year',
    lifespan: '200-300 years',
    category: 'Shade'
  },
  {
    id: '3',
    name: 'Eastern Redbud',
    scientificName: 'Cercis canadensis',
    description: 'A small, ornamental tree with vibrant pink-purple flowers in early spring before leaves appear.',
    price: 69.99,
    pointsReward: 100,
    image: 'https://images.unsplash.com/photo-1591990005997-8a8ffa4b4afe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    height: '20-30 ft',
    growthRate: 'Medium',
    careLevel: 'Easy',
    locations: ['2', '3', '4'],
    benefits: ['Pollinator support', 'Aesthetic value', 'Compact size for small spaces'],
    stock: 30,
    co2Absorption: '25 lbs per year',
    lifespan: '50-70 years',
    category: 'Ornamental'
  },
  {
    id: '4',
    name: 'Colorado Blue Spruce',
    scientificName: 'Picea pungens',
    description: 'An evergreen conifer with distinctive blue-silver needles. Perfect for year-round color and privacy.',
    price: 129.99,
    pointsReward: 180,
    image: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    height: '30-60 ft',
    growthRate: 'Slow',
    careLevel: 'Moderate',
    locations: ['1', '5'],
    benefits: ['Year-round greenery', 'Wind break', 'Bird nesting sites'],
    stock: 20,
    co2Absorption: '38 lbs per year',
    lifespan: '80-150 years',
    category: 'Evergreen'
  },
  {
    id: '5',
    name: 'Honey Crisp Apple',
    scientificName: 'Malus domestica',
    description: 'A popular fruit tree that produces sweet, crisp apples. Beautiful spring blossoms and fall fruit.',
    price: 79.99,
    pointsReward: 120,
    image: 'https://images.unsplash.com/photo-1630688231126-dd49846aec33?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    height: '15-25 ft',
    growthRate: 'Medium',
    careLevel: 'Moderate',
    locations: ['2', '3'],
    benefits: ['Food production', 'Pollinator attraction', 'Aesthetic value'],
    stock: 18,
    co2Absorption: '22 lbs per year',
    lifespan: '30-50 years',
    category: 'Fruit'
  },
  {
    id: '6',
    name: 'River Birch',
    scientificName: 'Betula nigra',
    description: 'A fast-growing tree with exfoliating bark that adds winter interest. Tolerant of wet conditions.',
    price: 99.99,
    pointsReward: 160,
    image: 'https://images.unsplash.com/photo-1578509557315-77f0e5d73b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    height: '40-70 ft',
    growthRate: 'Fast',
    careLevel: 'Easy',
    locations: ['1', '4', '5'],
    benefits: ['Flood tolerance', 'Erosion control', 'Distinctive bark texture'],
    stock: 22,
    co2Absorption: '45 lbs per year',
    lifespan: '40-70 years',
    category: 'Native'
  },
  {
    id: '7',
    name: 'Dogwood',
    scientificName: 'Cornus florida',
    description: 'A small, understory tree with showy white or pink bracts in spring and red berries in fall.',
    price: 74.99,
    pointsReward: 110,
    image: 'https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    height: '15-30 ft',
    growthRate: 'Slow',
    careLevel: 'Moderate',
    locations: ['2', '3', '4'],
    benefits: ['Four-season interest', 'Wildlife food source', 'Understory habitat'],
    stock: 28,
    co2Absorption: '20 lbs per year',
    lifespan: '40-80 years',
    category: 'Ornamental'
  },
  {
    id: '8',
    name: 'Bald Cypress',
    scientificName: 'Taxodium distichum',
    description: 'A deciduous conifer with feathery foliage that turns russet-red in fall. Excellent for wet areas.',
    price: 109.99,
    pointsReward: 170,
    image: 'https://images.unsplash.com/photo-1608495452202-69c970e0026a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    height: '50-70 ft',
    growthRate: 'Medium',
    careLevel: 'Easy',
    locations: ['1', '5'],
    benefits: ['Wetland restoration', 'Flood tolerance', 'Unique deciduous conifer'],
    stock: 12,
    co2Absorption: '52 lbs per year',
    lifespan: '300-600 years',
    category: 'Native'
  }
];

export const locations: TreeLocation[] = [
  {
    id: '1',
    name: 'City Park Restoration',
    city: 'Portland',
    state: 'Oregon',
    description: 'Help restore the urban forest in this central city park. Trees planted here will provide shade, clean air, and habitat for local wildlife.',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    availableSpots: 50,
    treesPlanted: 120,
    coordinates: {
      lat: 45.523064,
      lng: -122.676483
    }
  },
  {
    id: '2',
    name: 'Community Garden',
    city: 'Austin',
    state: 'Texas',
    description: 'A community-managed garden where fruit and ornamental trees create a peaceful green space in an urban neighborhood.',
    image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    availableSpots: 25,
    treesPlanted: 35,
    coordinates: {
      lat: 30.267153,
      lng: -97.743057
    }
  },
  {
    id: '3',
    name: 'School Greening Project',
    city: 'Chicago',
    state: 'Illinois',
    description: 'Plant trees on school grounds to provide shade, educational opportunities, and a better environment for students.',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    availableSpots: 30,
    treesPlanted: 45,
    coordinates: {
      lat: 41.878113,
      lng: -87.629799
    }
  },
  {
    id: '4',
    name: 'Watershed Protection Area',
    city: 'Seattle',
    state: 'Washington',
    description: 'Trees planted in this area help filter water, prevent erosion, and maintain the health of local streams and rivers.',
    image: 'https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    availableSpots: 40,
    treesPlanted: 85,
    coordinates: {
      lat: 47.606209,
      lng: -122.332069
    }
  },
  {
    id: '5',
    name: 'Reforestation Project',
    city: 'Denver',
    state: 'Colorado',
    description: 'Help restore a forest area damaged by wildfire. Your trees will help rebuild the ecosystem and prevent soil erosion.',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    availableSpots: 100,
    treesPlanted: 250,
    coordinates: {
      lat: 39.739235,
      lng: -104.990250
    }
  }
];

export const getTreeById = (id: string): Tree | undefined => {
  return trees.find(tree => tree.id === id);
};

export const getLocationById = (id: string): TreeLocation | undefined => {
  return locations.find(location => location.id === id);
};

export const getLocationsByTreeId = (treeId: string): TreeLocation[] => {
  const tree = getTreeById(treeId);
  if (!tree) return [];
  
  return tree.locations.map(locId => {
    const location = getLocationById(locId);
    return location!;
  }).filter(Boolean);
};