import React, { useEffect, useState } from "react";
import { FaSun, FaMoon, FaHome, FaUser, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const element = document.querySelector("html");
    element.classList.remove("light", "dark");
    if (darkMode) {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 w-full">
      {/* Main Navbar */}
      <div className="glass backdrop-blur-md border-b border-white/20 dark:border-neutral-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg md:text-xl">C</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="gradient-text text-xl md:text-2xl font-bold">Coursify</h1>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">Learn & Grow</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => navigate("/")}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-white/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
              >
                <FaHome className="text-lg" />
                <span className="font-medium">Home</span>
              </button>
              
              {userData && (
                <button
                  onClick={() => navigate("/profile")}
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-white/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                >
                  <FaUser className="text-lg" />
                  <span className="font-medium">Profile</span>
                </button>
              )}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              
              {/* User Info */}
              {userData && (
                <div className="hidden sm:flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                      {userData.fullName}
                    </p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 capitalize">
                      {userData.role}
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-warning-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {userData.fullName?.charAt(0)?.toUpperCase()}
                    </span>
                  </div>
                </div>
              )}

              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-xl bg-white/20 dark:bg-neutral-800/50 hover:bg-white/30 dark:hover:bg-neutral-700/50 transition-all duration-300 hover:scale-110 shadow-soft"
              >
                {darkMode ? (
                  <FaSun className="text-xl text-warning-500" />
                ) : (
                  <FaMoon className="text-xl text-primary-600" />
                )}
              </button>

              {/* Logout Button */}
              {userData && (
                <button
                  onClick={handleLogout}
                  className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-error-500 to-error-600 hover:from-error-600 hover:to-error-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-soft"
                >
                  <FaSignOutAlt className="text-sm" />
                  <span>Logout</span>
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-xl bg-white/20 dark:bg-neutral-800/50 hover:bg-white/30 dark:hover:bg-neutral-700/50 transition-all duration-300"
              >
                {isMenuOpen ? (
                  <FaTimes className="text-xl text-neutral-700 dark:text-neutral-300" />
                ) : (
                  <FaBars className="text-xl text-neutral-700 dark:text-neutral-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass backdrop-blur-md border-b border-white/20 dark:border-neutral-700/50 animate-slide-down">
          <div className="px-4 py-4 space-y-3">
            
            {/* Mobile User Info */}
            {userData && (
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/10 dark:bg-neutral-800/30">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-warning-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">
                    {userData.fullName?.charAt(0)?.toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-800 dark:text-neutral-200">
                    {userData.fullName}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 capitalize">
                    {userData.role}
                  </p>
                </div>
              </div>
            )}

            {/* Mobile Navigation Links */}
            <button
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-white/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
            >
              <FaHome className="text-lg" />
              <span className="font-medium">Home</span>
            </button>
            
            {userData && (
              <>
                <button
                  onClick={() => {
                    navigate("/profile");
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-neutral-700 dark:text-neutral-300 hover:bg-white/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                >
                  <FaUser className="text-lg" />
                  <span className="font-medium">Profile</span>
                </button>
                
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-error-500 to-error-600 hover:from-error-600 hover:to-error-700 text-white rounded-xl font-medium transition-all duration-300"
                >
                  <FaSignOutAlt className="text-lg" />
                  <span>Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
