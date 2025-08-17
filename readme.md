# 🎨 Modern LMS Learning Platform

## Description

A **stunning, modern Learning Management System** built with cutting-edge design principles and full-stack development expertise. This project showcases advanced features like authentication, user management, course management, lecture management, admin dashboard, and more - all wrapped in a **beautiful, professional UI** that will make designers say "WOW!"

![Modern LMS](https://res.cloudinary.com/duyybqeho/image/upload/v1755459775/e58e2c5a-6d64-48c6-b0b9-3270793d60f0.png)

## ✨ **What's New - Stunning UI Transformation**

### 🎨 **Modern Design System**
- **Beautiful Gradient Color Palette**: Primary blues, secondary purples, and accent yellows
- **Glass Morphism Effects**: Modern backdrop blur and transparency
- **Smooth Animations**: Fade-ins, slide-ups, floating elements, and hover effects
- **Responsive Design**: Perfect scaling across all devices
- **Dark Mode Support**: Seamless theme switching with proper contrast

### 🌟 **Enhanced User Experience**
- **Premium Course Cards**: Glass morphism design with hover effects
- **Modern Navigation**: Gradient logo, user avatars, and smooth mobile menu
- **Elegant Authentication**: Icon-enhanced forms with loading animations
- **Stunning Hero Section**: Full-screen design with animated backgrounds
- **Professional Checkout**: Premium subscription cards with trust indicators

### 🎯 **Design Features**
- **Typography**: Modern Poppins font for clean, professional appearance
- **Shadows & Effects**: Soft, medium, and strong shadows for depth
- **Micro-Interactions**: Button hover effects, card lift animations
- **Accessibility**: High contrast ratios and readable typography
- **Performance**: Optimized animations and efficient CSS

## Project Structure

The project follows a well-organized structure:

```
LMS-Project/
├── backend/
│   ├── config/
│   │   ├── db.config.js 
│   ├── controllers/
│   │   ├── user.controller.js
│   │   ├── course.controller.js
│   │   ├── payment.controller.js
│   │   ├── miscellaneous.controller.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   ├── multer.middleware.js
│   ├── models/
│   │   ├── user.model.js
│   │   ├── course.model.js
│   │   ├── payment.model.js
│   ├── routes/
│   │   ├── user.routes.js
│   │   ├── course.routes.js
│   │   ├── payment.routes.js
│   │   ├── miscellaneous.routes.js
│   ├── uploads/
│   ├── utils/
│   │   ├── error.utils.js
│   │   ├── sendEmail.js
│   ├── server.js
│   ├── app.js
│   ├── .env
│   ├── .env.example.js
│   ├── package.json
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── helpers/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── Redux/ 
│   │   ├── App.jsx/
│   │   ├── index.css/
│   │   ├── main.jsx/
│   │   ├── ...
│   ├── .env
│   ├── .env.example.js
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── README.md
│   ├── ...
└──
```

## 🚀 Features

### 💡 **User Authentication & Management**
- **Modern Sign Up/Login**: Beautiful forms with validation and loading states
- **Password Management**: Change password, reset password via email
- **User Profile**: Edit profile details with modern interface
- **Secure Authentication**: JWT-based authentication with proper security

### 📚 **Course Management**
- **Premium Course Display**: Stunning course cards with hover effects
- **Admin Course Control**: Create, edit, and delete courses with modern UI
- **Category Management**: Organized course categorization
- **Course Statistics**: Visual course analytics and insights

### 📝 **Lecture Management**
- **Admin Lecture Control**: Add, edit, and delete lectures within courses
- **Video Integration**: Seamless video player integration
- **Lecture Dashboard**: Modern lecture display with descriptions
- **Progress Tracking**: User progress monitoring

### 🔒 **Subscription & Payment**
- **Premium Subscription**: Beautiful checkout experience
- **Razorpay Integration**: Secure payment processing
- **Subscription Management**: Active, pending, and cancelled states
- **Payment Verification**: Robust payment verification system

### 🎥 **Learning Experience**
- **Modern Lecture Player**: Enhanced video viewing experience
- **Course Progress**: Visual progress indicators
- **Responsive Design**: Perfect experience on all devices
- **Dark Mode**: Eye-friendly dark theme option

### 📊 **Admin Dashboard**
- **User Statistics**: Beautiful charts and analytics
- **Course Management**: Intuitive admin interface
- **Revenue Tracking**: Payment and subscription analytics
- **System Overview**: Comprehensive dashboard insights

## 🎨 **Design System**

### Color Palette
- **Primary**: `#0ea5e9` to `#0369a1` (Blue Gradient)
- **Secondary**: `#d946ef` to `#a21caf` (Purple Gradient)
- **Accent**: `#eab308` to `#ca8a04` (Yellow Gradient)
- **Success**: `#22c55e` to `#16a34a` (Green)
- **Warning**: `#f59e0b` to `#d97706` (Orange)
- **Error**: `#ef4444` to `#dc2626` (Red)

### Typography
- **Primary Font**: Poppins (Modern, clean, professional)
- **Secondary Font**: Inter (Excellent readability)
- **Gradient Text**: Beautiful color transitions
- **Responsive Text**: Perfect scaling across devices

### Animations
- **Fade In**: Smooth opacity transitions
- **Slide Up/Down**: Elegant content reveals
- **Scale In**: Subtle zoom effects
- **Float**: Gentle floating animations
- **Hover Effects**: Interactive element responses

## API Endpoints

### User Routes

- `POST /register`: Register a new user.
- `POST /login`: Log in a user.
- `GET /logout`: Log out a user.
- `GET /me`: Getting user profile info.
- `POST /reset`: Sending email on user for reset password.
- `POST /reset/:resetToken`: User resetting the password.
- `POST /change-password`: User can change password using old and new password.
- `POST /update/:id`: User can update their profile.

### Course Routes

- `GET /courses`: Get all courses.
- `POST /courses`: Create a new course (Admin only).
- `GET /courses/:id`: Get lectures for a specific course.
- `PUT /courses/:id`: Update course details (Admin only).
- `DELETE /courses/:id`: Delete a course (Admin only).

### Payment Routes

- `GET /razorpay-key`: Get Razorpay API key.
- `POST /subscribe`: Buy a subscription.
- `POST /verify`: Verify a subscription.
- `POST /unsubscribe`: Cancel a subscription.
- `GET /payments`: Get all payments (Admin only).

### Miscellaneous Routes

- `POST /contact`: Contact us.
- `GET /admin/stats/users`: Get user statistics (Admin only).

## 🛠️ Tech Stack

### Backend

- **Node.js**: Server-side JavaScript runtime
- **Express**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Token authentication
- **bcrypt**: Password hashing
- **Crypto**: Cryptographic functions
- **Cors**: Cross-origin resource sharing
- **Dotenv**: Environment variable management
- **Cookie-Parser**: Cookie parsing middleware
- **Multer**: File upload handling
- **Cloudinary**: Cloud media management
- **Nodemailer**: Email sending
- **Razorpay**: Payment gateway integration

### Frontend

- **React**: Modern UI library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **DaisyUI**: Beautiful component library for Tailwind CSS
- **React Icons**: Comprehensive icon library
- **React Router**: Client-side routing
- **React Slick**: Carousel and slider components
- **React Hot Toast**: Beautiful toast notifications
- **React Redux**: State management with Redux
- **Redux Toolkit**: Modern Redux development
- **Chart.js**: Beautiful charts and data visualization
- **React Chart.js 2**: React wrapper for Chart.js

### Design & Animation

- **Glass Morphism**: Modern backdrop blur effects
- **CSS Animations**: Smooth transitions and keyframes
- **Gradient Effects**: Beautiful color transitions
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Theme switching capability

---

## 🚀 Getting Started

Follow these steps to set up the project on your local machine:

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/gulshan07dev/lms-mern-project.git
cd lms-mern-project
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file based on `.env.example.js`:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Start the backend server:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd client
npm install
```

Create a `.env` file based on `.env.example.js`:
```env
VITE_REACT_APP_API_URL=http://localhost:5000/api/v1
```

Start the development server:
```bash
npm run dev
```

### 4. Access the Application
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

---

## 🎨 **Design Highlights**

### Modern UI Components
- **Glass Morphism Cards**: Beautiful transparent effects
- **Gradient Buttons**: Eye-catching call-to-action elements
- **Animated Hero Section**: Engaging landing page experience
- **Responsive Navigation**: Smooth mobile menu interactions
- **Premium Course Display**: Professional course presentation

### User Experience
- **Intuitive Navigation**: Easy-to-use interface
- **Fast Loading**: Optimized performance
- **Accessibility**: Screen reader and keyboard navigation support
- **Cross-Platform**: Works perfectly on all devices
- **Modern Interactions**: Smooth animations and transitions

### Professional Features
- **Enterprise-Grade Security**: JWT authentication and secure payments
- **Scalable Architecture**: Modular code structure
- **Real-Time Updates**: Live data synchronization
- **Analytics Dashboard**: Comprehensive admin insights
- **Payment Integration**: Secure Razorpay integration

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Design Inspiration**: Modern UI/UX trends and best practices
- **Icons**: React Icons library
- **Charts**: Chart.js for beautiful data visualization
- **Payment**: Razorpay for secure payment processing
- **Cloud Storage**: Cloudinary for media management

---

**Made with ❤️ by [Gulshan Kumar](https://www.linkedin.com/in/gulshan-kumar-8293b9260/)**

*Transformed into a stunning modern learning platform with cutting-edge design principles and professional-grade user experience.* 🎨✨