import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlay, FaBook, FaUser, FaClock, FaStar, FaEye } from "react-icons/fa";

export default function CourseCard({ data }) {
  const navigate = useNavigate();

  return (
    <div 
      className="card group cursor-pointer overflow-hidden hover-lift"
      onClick={() => navigate("/courses/description/", {state: {...data}})}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          className="h-48 w-full object-cover group-hover:scale-110 transition-all duration-500 ease-out"
          src={data?.thumbnail?.secure_url}
          alt="course thumbnail"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Play Button */}
        <div className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-soft group-hover:scale-110 transition-all duration-300">
          <FaPlay className="text-primary-600 text-lg" />
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gradient-to-r from-accent-500 to-warning-500 text-white text-xs font-semibold rounded-full shadow-soft">
            {data?.category}
          </span>
        </div>
        
        {/* Rating Badge */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full">
          <FaStar className="text-warning-500 text-sm" />
          <span className="text-sm font-semibold text-neutral-800">4.8</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
          {data?.title}
        </h2>
        
        {/* Description */}
        <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-2 leading-relaxed">
          {data?.description}
        </p>
        
        {/* Course Stats */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-lg flex items-center justify-center">
              <FaBook className="text-primary-600 dark:text-primary-400 text-sm" />
            </div>
            <div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Lectures</p>
              <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                {data?.numberoflectures}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-secondary-100 to-secondary-200 dark:from-secondary-900 dark:to-secondary-800 rounded-lg flex items-center justify-center">
              <FaClock className="text-secondary-600 dark:text-secondary-400 text-sm" />
            </div>
            <div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Duration</p>
              <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                {data?.numberoflectures * 15} min
              </p>
            </div>
          </div>
        </div>
        
        {/* Instructor */}
        <div className="flex items-center space-x-3 pt-2 border-t border-neutral-200 dark:border-neutral-700">
          <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-warning-500 rounded-full flex items-center justify-center">
            <FaUser className="text-white text-sm" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Instructor</p>
            <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
              {data?.createdBy}
            </p>
          </div>
          <div className="flex items-center space-x-1 text-neutral-500 dark:text-neutral-400">
            <FaEye className="text-sm" />
            <span className="text-xs">1.2k</span>
          </div>
        </div>
        
        {/* Action Button */}
        <div className="pt-2">
          <button className="w-full btn-primary py-3 text-sm font-semibold group-hover:shadow-glow transition-all duration-300">
            View Course
          </button>
        </div>
      </div>
      
      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/20 rounded-2xl transition-all duration-300 pointer-events-none"></div>
    </div>
  );
}
