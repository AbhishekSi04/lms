import { Router } from "express";
import { allPayments, buySubscription, cancelSubscription, getRazorPayApiKey, verifySubscription, testPaymentVerification } from "../controllers/payment.controller.js";
import { authorisedRoles, isLoggedIn } from "../middleware/auth.middleware.js";
const router = Router();

router.route('/razorpay-key')
    .get(isLoggedIn, getRazorPayApiKey)

router.route('/subscribe')
    .post(isLoggedIn, buySubscription)

router.route('/verify')
    .post(isLoggedIn, verifySubscription)

router.route('/test-verify')
    .post(isLoggedIn, testPaymentVerification)

router.route('/unsubscribe')
    .post(isLoggedIn, cancelSubscription)

router.route('/')
    .get(isLoggedIn, authorisedRoles("ADMIN"), allPayments)

export default router;