import { Restaurant, MenuItem } from '@/types';

export const restaurants: Restaurant[] = [
  // Grand Bazaar Restaurants
  {
    id: 'kfc-grand-bazaar',
    name: 'KFC Grand Bazaar',
    description: 'Finger lickin\' good! Famous fried chicken and sides.',
    location: 'Grand Bazaar, Valsayn',
    category: 'Fast Food',
    image: '🍗',
    isActive: true,
    deliveryTime: 20,
    rating: 4.2,
    tags: ['chicken', 'fast-food', 'grand-bazaar']
  },
  {
    id: 'pizza-hut-grand-bazaar',
    name: 'Pizza Hut Grand Bazaar',
    description: 'Hot, fresh pizza delivered fast!',
    location: 'Grand Bazaar, Valsayn',
    category: 'Pizza',
    image: '🍕',
    isActive: true,
    deliveryTime: 25,
    rating: 4.0,
    tags: ['pizza', 'italian', 'grand-bazaar']
  },
  {
    id: 'subway-grand-bazaar',
    name: 'Subway Grand Bazaar',
    description: 'Eat fresh! Custom sandwiches made your way.',
    location: 'Grand Bazaar, Valsayn',
    category: 'Sandwiches',
    image: '🥪',
    isActive: true,
    deliveryTime: 15,
    rating: 4.1,
    tags: ['sandwiches', 'healthy', 'grand-bazaar']
  },
  {
    id: 'burger-king-grand-bazaar',
    name: 'Burger King Grand Bazaar',
    description: 'Have it your way! Flame-grilled burgers.',
    location: 'Grand Bazaar, Valsayn',
    category: 'Fast Food',
    image: '🍔',
    isActive: true,
    deliveryTime: 18,
    rating: 3.9,
    tags: ['burgers', 'fast-food', 'grand-bazaar']
  },
  {
    id: 'chinese-express-grand-bazaar',
    name: 'Chinese Express',
    description: 'Authentic Chinese cuisine with a Trini twist!',
    location: 'Grand Bazaar, Valsayn',
    category: 'Chinese',
    image: '🥡',
    isActive: true,
    deliveryTime: 22,
    rating: 4.3,
    tags: ['chinese', 'asian', 'grand-bazaar']
  },
  {
    id: 'rituals-grand-bazaar',
    name: 'Rituals Coffee',
    description: 'Premium coffee and light bites.',
    location: 'Grand Bazaar, Valsayn',
    category: 'Coffee & Cafe',
    image: '☕',
    isActive: true,
    deliveryTime: 12,
    rating: 4.4,
    tags: ['coffee', 'cafe', 'snacks', 'grand-bazaar']
  },
  
  // Other Popular Trinidad Spots
  {
    id: 'patraj-trincity',
    name: 'Patraj',
    description: 'Authentic Indian cuisine - roti, curry, and more!',
    location: 'Trincity Mall',
    category: 'Indian',
    image: '🍛',
    isActive: true,
    deliveryTime: 30,
    rating: 4.6,
    tags: ['indian', 'roti', 'curry', 'authentic']
  },
  {
    id: 'doubles-man',
    name: 'The Doubles Man',
    description: 'Best doubles in town! True Trini breakfast.',
    location: 'Various Locations',
    category: 'Local',
    image: '🌮',
    isActive: true,
    deliveryTime: 15,
    rating: 4.8,
    tags: ['doubles', 'trini', 'breakfast', 'local']
  },
  {
    id: 'shark-bake-maracas',
    name: 'Maracas Shark & Bake',
    description: 'Fresh shark & bake straight from Maracas Bay!',
    location: 'Maracas Bay',
    category: 'Local',
    image: '🐟',
    isActive: true,
    deliveryTime: 45,
    rating: 4.7,
    tags: ['shark-bake', 'seafood', 'beach', 'trini']
  },
  {
    id: 'mario-pizzeria',
    name: 'Mario\'s Pizzeria',
    description: 'Authentic wood-fired pizza, Trini style!',
    location: 'St. Augustine',
    category: 'Pizza',
    image: '🍕',
    isActive: true,
    deliveryTime: 35,
    rating: 4.5,
    tags: ['pizza', 'wood-fired', 'italian', 'local']
  },
  {
    id: 'joes-oyster-bar',
    name: 'Joe\'s Oyster Bar',
    description: 'Fresh seafood and cocktails by the sea.',
    location: 'Maraval',
    category: 'Seafood',
    image: '🦪',
    isActive: true,
    deliveryTime: 40,
    rating: 4.4,
    tags: ['seafood', 'oysters', 'cocktails', 'upscale']
  },
  {
    id: 'trotters-restaurant',
    name: 'Trotters Restaurant',
    description: 'Fine dining with international and Caribbean cuisine.',
    location: 'Maraval',
    category: 'Fine Dining',
    image: '🍽️',
    isActive: true,
    deliveryTime: 50,
    rating: 4.6,
    tags: ['fine-dining', 'caribbean', 'international', 'upscale']
  }
];

export const menuItems: { [restaurantId: string]: MenuItem[] } = {
  'kfc-grand-bazaar': [
    {
      id: 'kfc-original-recipe',
      restaurantId: 'kfc-grand-bazaar',
      name: 'Original Recipe Chicken',
      description: '2-piece chicken with coleslaw and biscuit',
      price: 35,
      category: 'Chicken',
      isAvailable: true,
      spiceLevel: 1
    },
    {
      id: 'kfc-zinger-burger',
      restaurantId: 'kfc-grand-bazaar',
      name: 'Zinger Burger',
      description: 'Spicy chicken fillet with lettuce and mayo',
      price: 28,
      category: 'Burgers',
      isAvailable: true,
      spiceLevel: 3
    },
    {
      id: 'kfc-family-feast',
      restaurantId: 'kfc-grand-bazaar',
      name: 'Family Feast',
      description: '8-piece chicken, large sides, 4 biscuits',
      price: 120,
      category: 'Family Meals',
      isAvailable: true,
      spiceLevel: 1
    }
  ],
  
  'doubles-man': [
    {
      id: 'doubles-classic',
      restaurantId: 'doubles-man',
      name: 'Classic Doubles',
      description: 'Traditional doubles with channa and pepper sauce',
      price: 6,
      category: 'Doubles',
      isAvailable: true,
      spiceLevel: 2
    },
    {
      id: 'doubles-slight-pepper',
      restaurantId: 'doubles-man',
      name: 'Doubles - Slight Pepper',
      description: 'For those who like it mild',
      price: 6,
      category: 'Doubles',
      isAvailable: true,
      spiceLevel: 1
    },
    {
      id: 'doubles-plenty-pepper',
      restaurantId: 'doubles-man',
      name: 'Doubles - Plenty Pepper',
      description: 'For the brave souls who love heat!',
      price: 6,
      category: 'Doubles',
      isAvailable: true,
      spiceLevel: 5
    }
  ],
  
  'patraj-trincity': [
    {
      id: 'dhalpuri-roti',
      restaurantId: 'patraj-trincity',
      name: 'Dhalpuri Roti',
      description: 'With curry chicken, potato, and channa',
      price: 25,
      category: 'Roti',
      isAvailable: true,
      spiceLevel: 2
    },
    {
      id: 'buss-up-shut',
      restaurantId: 'patraj-trincity',
      name: 'Buss Up Shut',
      description: 'Shredded roti with curry duck and vegetables',
      price: 30,
      category: 'Roti',
      isAvailable: true,
      spiceLevel: 3
    }
  ]
};

export function getRestaurantById(id: string): Restaurant | undefined {
  return restaurants.find(restaurant => restaurant.id === id);
}

export function getMenuItemsByRestaurant(restaurantId: string): MenuItem[] {
  return menuItems[restaurantId] || [];
}

export function getRestaurantsByCategory(category: string): Restaurant[] {
  return restaurants.filter(restaurant => 
    restaurant.category.toLowerCase() === category.toLowerCase()
  );
}

export function searchRestaurants(query: string): Restaurant[] {
  const lowercaseQuery = query.toLowerCase();
  return restaurants.filter(restaurant => 
    restaurant.name.toLowerCase().includes(lowercaseQuery) ||
    restaurant.description.toLowerCase().includes(lowercaseQuery) ||
    restaurant.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
} 