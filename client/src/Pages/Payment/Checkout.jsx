import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { BiRupee } from "react-icons/bi";
import { FaCrown, FaCheck, FaShield, FaInfinity, FaRocket, FaStar } from "react-icons/fa";
import {
  getRazorPayId,
  purchaseCourseBundle,
  verifyUserPayment,
} from "../../Redux/Slices/RazorpaySlice";
import toast from "react-hot-toast";
import { getUserData } from "../../Redux/Slices/AuthSlice";

export default function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rzorpayKey = useSelector((state) => state?.razorpay?.key);
  const [subscription_id, setSubscription_id] = useState(
    useSelector((state) => state?.razorpay?.subscription_id)
  );
  const isPaymentVerified = useSelector(
    (state) => state?.razorpay?.isPaymentVerified
  );
  const userData = useSelector((state) => state?.auth?.data);

  async function handleSubscription(e) {
    e.preventDefault();
    
    console.log("Starting payment process with:", {
      rzorpayKey: rzorpayKey ? "Present" : "Missing",
      subscription_id: subscription_id,
      userData: userData ? "Present" : "Missing"
    });
    
    // Check if we're using mock orders (no real Razorpay credentials)
    if (!rzorpayKey || rzorpayKey === "dummy_key_id") {
      toast.error("Payment gateway not configured. Please contact administrator.");
      return;
    }
    
    if (!subscription_id) {
      // Try to create order again
      toast.loading("Creating order...");
      try {
        const result = await dispatch(purchaseCourseBundle());
        console.log("Order creation result:", result);
        if (result?.payload?.order_id) {
          setSubscription_id(result.payload.order_id);
          console.log("Order ID set to:", result.payload.order_id);
          toast.dismiss();
        } else {
          toast.error("Failed to create order. Please try again.");
          return;
        }
      } catch (error) {
        console.error("Order creation error:", error);
        toast.error("Failed to create order. Please try again.");
        return;
      }
    }

    // Check if this is a mock order (starts with "order_" and has timestamp)
    if (subscription_id.startsWith("order_") && subscription_id.includes("1755")) {
      toast.error("Mock orders cannot be processed with real Razorpay. Please configure real Razorpay credentials.");
      return;
    }

    const options = {
      key: rzorpayKey,
      amount: 49900, // Amount in paise (₹499)
      currency: "INR",
      name: "Coursify Pvt Ltd",
      description: "Course Subscription",
      order_id: subscription_id,
      theme: {
        color: "#fff",
      },
      prefill: {
        email: userData?.email,
        name: userData?.fullName,
      },
      modal: {
        ondismiss: function() {
          console.log("Payment modal dismissed");
        }
      },
      handler: async function (response) {
        console.log("Payment response:", response);
        console.log("Payment response keys:", Object.keys(response));
        console.log("Payment response values:", {
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          razorpay_order_id: response.razorpay_order_id,
          // Check alternative field names
          payment_id: response.payment_id,
          signature: response.signature,
          order_id: response.order_id,
          // Check if fields are nested
          razorpay: response.razorpay
        });
        
        // Extract payment fields with fallback options
        const payment_id = response.razorpay_payment_id || response.payment_id;
        const signature = response.razorpay_signature || response.signature;
        const order_id = response.razorpay_order_id || response.order_id || subscription_id;
        
        // For testing: if signature is missing, create a dummy signature
        const final_signature = signature || "dummy_signature_for_testing";
        const final_order_id = order_id || subscription_id;
        
        console.log("Extracted payment fields:", {
          payment_id,
          signature,
          order_id
        });
        
        // Validate payment response
        if (!payment_id) {
          console.error("Missing payment ID:", { payment_id });
          toast.error("Payment response incomplete. Please try again.");
          navigate("/checkout/fail");
          return;
        }
        
        // Create payment details object for this specific payment
        const paymentDetails = {
          razorpay_payment_id: payment_id,
          razorpay_signature: final_signature,
          razorpay_order_id: final_order_id,
        };

        console.log("Payment details being sent:", paymentDetails);

        toast.success("Payment successful");

        try {
          const res = await dispatch(verifyUserPayment(paymentDetails));
          console.log("Verification result:", res);
          if (res?.payload?.success) {
            navigate("/checkout/success");
          } else {
            navigate("/checkout/fail");
          }
        } catch (error) {
          console.error("Payment verification error:", error);
          navigate("/checkout/fail");
        }
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  useEffect(() => {
    // Fetch the RazorPay ID
    (async () => {
      await dispatch(getRazorPayId());
    })();

    // Check the user's subscription status
    switch (userData?.subscription?.status) {
      case "active":
        // Navigate outside of the switch statement
        navigate("/courses");
        break;

      // if already created subscription, then use previous id for this
      case "created":
        setSubscription_id(userData?.subscription?.id);
        break;

      default:
        // If the user doesn't have a subscription, purchase a bundle
        (async () => {
          const result = await dispatch(purchaseCourseBundle());
          console.log("Purchase result:", result);
          if (result?.payload?.order_id) {
            setSubscription_id(result.payload.order_id);
          }
        })();
        break;
    }
  }, [dispatch, navigate, userData]);
  
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 opacity-10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-accent-400 to-warning-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 w-full max-w-2xl">
          {/* Subscription Card */}
          <div className="card overflow-hidden animate-slide-up">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow">
                  <FaCrown className="text-3xl text-white" />
                </div>
                <h1 className="text-3xl font-bold mb-2">Premium Subscription</h1>
                <p className="text-white/90 text-lg">Unlock Your Learning Potential</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Features */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 text-center">
                  What You'll Get
                </h2>
                
                <div className="grid gap-4">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-success-50 to-success-100 dark:from-success-900/20 dark:to-success-800/20 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-success-500 to-success-600 rounded-xl flex items-center justify-center">
                      <FaInfinity className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Unlimited Access</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">All courses for 1 full year</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                      <FaRocket className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">New Courses</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">Access to future courses included</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-warning-50 to-warning-100 dark:from-warning-900/20 dark:to-warning-800/20 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-r from-warning-500 to-warning-600 rounded-xl flex items-center justify-center">
                      <FaShield className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Money Back Guarantee</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">100% refund on cancellation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-accent-100 to-warning-100 dark:from-accent-900/20 dark:to-warning-800/20 rounded-full">
                  <FaStar className="text-accent-500" />
                  <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">Best Value</span>
                </div>
                
                <div className="space-y-2">
                  <p className="text-neutral-600 dark:text-neutral-400">One-time payment of</p>
                  <div className="flex items-center justify-center space-x-1">
                    <BiRupee className="text-4xl text-neutral-800 dark:text-neutral-200" />
                    <span className="text-6xl font-bold gradient-text">499</span>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Valid for 1 year</p>
                </div>
              </div>

              {/* Action Button */}
              <form onSubmit={handleSubscription} className="space-y-4">
                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-xl font-bold shadow-strong hover:shadow-glow transition-all duration-300"
                >
                  Get Premium Access
                </button>
                
                <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
                  * Terms and conditions apply. Secure payment powered by Razorpay.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}