import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import heroPng from "../assets/images/hero.png";
import { FaPlay, FaUsers, FaGraduationCap, FaStar, FaRocket, FaLightbulb } from "react-icons/fa";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 opacity-10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-accent-400 to-warning-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <FaRocket className="text-accent-500" />
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Transform Your Future</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-neutral-800 dark:text-neutral-100">Find the Best</span>
                  <br />
                  <span className="gradient-text">Online Courses</span>
                </h1>
                
                <p className="text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
                  Discover a world of knowledge with our extensive library of courses taught by industry experts. 
                  Start your learning journey today and unlock your potential.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">500+</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">50K+</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">95%</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">Success Rate</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses">
                  <button className="btn-primary flex items-center space-x-2 px-8 py-4 text-lg">
                    <FaPlay className="text-sm" />
                    <span>Explore Courses</span>
                  </button>
                </Link>
                
                <Link to="/contact">
                  <button className="btn-outline flex items-center space-x-2 px-8 py-4 text-lg">
                    <span>Contact Us</span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-strong">
                  <img 
                    alt="Learning Platform" 
                    src={heroPng} 
                    className="w-full h-auto rounded-2xl shadow-soft"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-success-500 to-success-600 text-white p-4 rounded-2xl shadow-glow-success animate-bounce-gentle">
                <FaGraduationCap className="text-2xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-warning-500 to-warning-600 text-white p-4 rounded-2xl shadow-glow-warning animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                <FaStar className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Why Choose Coursify?
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Experience the future of online learning with our cutting-edge platform designed for success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card p-8 text-center space-y-4 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto shadow-glow">
                <FaUsers className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                Expert Instructors
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Learn from industry professionals with years of real-world experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card p-8 text-center space-y-4 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto shadow-glow">
                <FaGraduationCap className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                Flexible Learning
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Study at your own pace with 24/7 access to course materials.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card p-8 text-center space-y-4 hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto shadow-glow">
                <FaLightbulb className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                Practical Projects
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Apply your knowledge with hands-on projects and real-world applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already transformed their careers with our courses.
          </p>
          <Link to="/courses">
            <button className="bg-white text-primary-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-neutral-100 transition-all duration-300 shadow-strong hover:scale-105">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
