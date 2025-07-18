# 🍽️ LunchApp - Team Lunch Made Easy!

A fun and intuitive webapp for coordinating lunch orders within teams, built specifically for Trinidad & Tobago restaurants with a focus on Grand Bazaar locations.

## ✨ Features

### 🚶‍♂️ **Lunchman Mode**
- Start lunch runs by selecting restaurants
- Set order deadlines and maximum order limits
- Collect orders from team members
- Manage pickup and delivery process

### 🍽️ **Lunchee Mode**
- Browse restaurants with filtering and search
- Place orders with special instructions
- Track order status
- Join active lunch runs

### 🔐 **Authentication**
- Google SSO integration
- Facebook SSO integration
- Traditional email/password signup
- User role switching (Lunchman ↔ Lunchee)

### 🏪 **Restaurant Selection**
- **Grand Bazaar favorites**: KFC, Pizza Hut, Subway, Burger King, Chinese Express, Rituals Coffee
- **Trinidad classics**: Patraj, The Doubles Man, Maracas Shark & Bake
- **Local gems**: Mario's Pizzeria, Joe's Oyster Bar, Trotters Restaurant
- Real-time availability status
- Ratings, delivery times, and location info

### 🎨 **Fun UI/UX**
- Vibrant, informal design with emojis
- Smooth animations and micro-interactions
- Mobile-responsive design
- Caribbean-inspired color scheme

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase account
- Vercel account (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd LunchApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy the values from `firebase-config-values.md` to create `.env.local`:
   ```bash
   # Create .env.local with the provided Firebase and Mailgun values
   cp firebase-config-values.md .env.local
   # Edit .env.local with your actual values
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication with Google and Facebook providers
3. Create a Firestore database
4. Update the Firebase config in your `.env.local` file

### Mailgun Setup (Optional)
For email notifications:
1. Sign up at [mailgun.com](https://mailgun.com)
2. Add your domain and API key to `.env.local`

## 📁 Project Structure

```
LunchApp/
├── app/                    # Next.js 13+ app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── AuthPage.tsx       # Login/signup page
│   ├── Dashboard.tsx      # Main dashboard
│   ├── Navbar.tsx         # Navigation bar
│   ├── RoleSelector.tsx   # Role switching modal
│   ├── LuncheeDashboard.tsx    # Lunchee interface
│   ├── LunchmanDashboard.tsx   # Lunchman interface
│   ├── RestaurantCard.tsx      # Restaurant display
│   ├── OrderModal.tsx          # Order placement
│   ├── CreateLunchRunModal.tsx # Lunch run creation
│   └── LoadingSpinner.tsx      # Loading animation
├── contexts/              # React contexts
│   └── AuthContext.tsx    # Authentication state
├── data/                  # Static data
│   └── restaurants.ts     # Restaurant and menu data
├── lib/                   # Utilities
│   └── firebase.ts        # Firebase configuration
├── types/                 # TypeScript types
│   └── index.ts           # Type definitions
└── public/                # Static assets
```

## 🚀 Deployment to Vercel

### One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/lunchapp)

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Set environment variables in Vercel dashboard**
   - Go to your project settings on vercel.com
   - Add all the environment variables from your `.env.local`

### Environment Variables for Production

Set these in your Vercel dashboard:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
MAILGUN_DOMAIN=your_mailgun_domain
MAILGUN_API_KEY=your_mailgun_api_key
MAILGUN_FROM_EMAIL=your_from_email
NEXTAUTH_SECRET=your_nextauth_secret_for_production
NEXTAUTH_URL=https://your-deployed-app.vercel.app
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **Deployment**: Vercel
- **Email**: Mailgun
- **UI Components**: Custom components with Tailwind
- **Icons**: Emojis + Lucide React

## 🎯 Usage

### For Lunchees (Ordering Food)
1. Log in to the app
2. Browse available restaurants
3. Use search and filters to find food
4. Click "Order Now" on a restaurant
5. Select menu items and quantities
6. Add special instructions if needed
7. Place your order

### For Lunchmen (Organizing Lunch Runs)
1. Switch to "Lunchman" role using the toggle
2. Click "Start New Lunch Run"
3. Select a restaurant
4. Set order deadline and max orders
5. Share the lunch run with your team
6. Collect orders until deadline
7. Go pick up and deliver food

## 🌟 Features in Development

- [ ] Real-time order tracking
- [ ] Payment integration
- [ ] Order history
- [ ] Push notifications
- [ ] Lunch run scheduling
- [ ] Team management
- [ ] Analytics dashboard
- [ ] Mobile app (React Native)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Trinidad & Tobago restaurant community
- Firebase for authentication and database
- Vercel for hosting
- All the hungry team members who inspired this app! 🍽️

---

Made with ❤️ for the Trinidad & Tobago tech community 