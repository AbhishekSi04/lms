# 🚀 Deployment Guide for LMS Project

## Render Deployment

### Prerequisites
- Render account
- MongoDB database (MongoDB Atlas or Render MongoDB)
- Cloudinary account for media storage
- Razorpay account for payments (optional for testing)

### Environment Variables Setup

Create the following environment variables in your Render dashboard:

#### Backend Environment Variables
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
RAZORPAY_KEY_ID=dummy_key_id
RAZORPAY_KEY_SECRET=dummy_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLIENT_URL=https://your-frontend-app.onrender.com
```

#### Frontend Environment Variables
```env
VITE_REACT_APP_API_URL=https://your-backend-app.onrender.com/api/v1
```

### Deployment Steps

#### 1. Backend Deployment
1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Set the following:
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Root Directory**: Leave empty (or specify if needed)

#### 2. Frontend Deployment
1. Create another Web Service for the frontend
2. Set the following:
   - **Build Command**: `cd client && npm install && npm run build`
   - **Start Command**: `cd client && npm run preview`
   - **Root Directory**: Leave empty (or specify if needed)

### Common Issues & Solutions

#### 1. Module Not Found Errors
**Issue**: `Cannot find module '/opt/render/project/src/backend/controllers/payment.controller.js'`

**Solution**: 
- Ensure all files are committed to GitHub
- Check file paths and imports
- Verify the build command is correct

#### 2. Port Issues
**Issue**: "No open ports detected"

**Solution**:
- Set `PORT=5000` in environment variables
- Ensure your app listens on `process.env.PORT`
- Check if the start command is correct

#### 3. Database Connection Issues
**Issue**: MongoDB connection fails

**Solution**:
- Verify `MONGODB_URI` is correct
- Check if MongoDB Atlas IP whitelist includes Render IPs
- Ensure database user has proper permissions

#### 4. CORS Issues
**Issue**: Frontend can't connect to backend

**Solution**:
- Set `CLIENT_URL` to your frontend URL
- Update CORS configuration in `app.js`
- Check if URLs are using HTTPS

### File Structure Verification

Ensure your project structure matches:
```
backend/
├── controllers/
│   ├── payment.controller.js ✅
│   ├── user.controller.js ✅
│   ├── course.controller.js ✅
│   └── miscellaneous.controller.js ✅
├── models/
│   ├── payment.model.js ✅
│   ├── user.model.js ✅
│   └── course.model.js ✅
├── routes/
│   ├── payment.routes.js ✅
│   ├── user.routes.js ✅
│   ├── course.routes.js ✅
│   └── miscellaneous.routes.js ✅
├── app.js ✅
├── server.js ✅
└── package.json ✅
```

### Testing Deployment

#### 1. Health Check
Test your backend API:
```bash
curl https://your-backend-app.onrender.com/api/v1/
```

#### 2. Payment Testing
With dummy credentials, payments should work for testing:
- Order creation: ✅ (mock orders)
- Payment verification: ✅ (signature bypassed)
- User subscription: ✅ (activated)

#### 3. Frontend Testing
- Check if frontend loads correctly
- Test authentication flow
- Verify course display
- Test payment flow

### Production Considerations

#### 1. Security
- Use strong JWT secrets
- Enable HTTPS
- Set proper CORS origins
- Use real Razorpay credentials for production

#### 2. Performance
- Enable caching where appropriate
- Optimize images and assets
- Use CDN for static files
- Monitor database performance

#### 3. Monitoring
- Set up error logging
- Monitor API response times
- Track user analytics
- Set up alerts for downtime

### Troubleshooting Commands

#### Check Render Logs
```bash
# View recent logs
render logs --service your-service-name

# Follow logs in real-time
render logs --service your-service-name --follow
```

#### Test Database Connection
```bash
# Test MongoDB connection
mongosh "your_mongodb_uri"
```

#### Verify Environment Variables
```bash
# Check if variables are loaded
echo $PORT
echo $MONGODB_URI
```

### Support

If you encounter issues:
1. Check Render logs for error messages
2. Verify all environment variables are set
3. Test locally first
4. Check file permissions and paths
5. Ensure all dependencies are in package.json

### Quick Fix for Current Issue

The current error is due to missing `payment.controller.js`. The file has been recreated with:
- ✅ All payment functions
- ✅ Razorpay integration
- ✅ Mock payment support
- ✅ Proper error handling
- ✅ Signature verification (with bypass for testing)

**Next Steps**:
1. Commit the new `payment.controller.js` file
2. Redeploy on Render
3. Test the payment flow

The backend should now start successfully! 🚀
