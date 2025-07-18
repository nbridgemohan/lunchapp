export type UserRole = 'lunchman' | 'lunchee';

export interface User {
  id: string;
  email: string;
  name: string;
  photoURL?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  location: string;
  category: string;
  image?: string;
  isActive: boolean;
  deliveryTime: number; // in minutes
  rating: number;
  tags: string[];
}

export interface MenuItem {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  isAvailable: boolean;
  allergens?: string[];
  spiceLevel?: number;
}

export interface OrderItem {
  menuItemId: string;
  menuItemName: string;
  quantity: number;
  price: number;
  specialInstructions?: string;
}

export interface Order {
  id: string;
  luncheeId: string;
  lunchmanId?: string;
  restaurantId: string;
  restaurantName: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  specialInstructions?: string;
  createdAt: Date;
  updatedAt: Date;
  requestedDeliveryTime?: Date;
  actualDeliveryTime?: Date;
}

export type OrderStatus = 
  | 'pending'      // Order placed, waiting for lunchman
  | 'accepted'     // Lunchman accepted the order
  | 'preparing'    // Restaurant is preparing
  | 'ready'        // Ready for pickup
  | 'picked_up'    // Lunchman picked up
  | 'delivered'    // Delivered to lunchee
  | 'cancelled';   // Order cancelled

export interface LunchRun {
  id: string;
  lunchmanId: string;
  lunchmanName: string;
  restaurantId: string;
  restaurantName: string;
  status: LunchRunStatus;
  orders: Order[];
  maxOrders: number;
  deadline: Date;
  estimatedReturn: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type LunchRunStatus = 
  | 'open'         // Accepting orders
  | 'closed'       // No more orders accepted
  | 'in_progress'  // Lunchman is out getting food
  | 'completed';   // All orders delivered

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  isRead: boolean;
  createdAt: Date;
} 