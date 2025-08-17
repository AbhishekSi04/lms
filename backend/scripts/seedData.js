import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import courseModel from '../models/course.model.js';
import userModel from '../models/user.model.js';
import { configDotenv } from 'dotenv';

configDotenv();

const connectToDb = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    .then((conn) => {console.log(`db connected: ${conn.connection.host}`);})
    .catch((err) => {console.log(`error in connected db: ${err.message}`);})
}

const sampleCourses = [
    {
        title: "Complete Web Development Bootcamp",
        description: "Learn HTML, CSS, JavaScript, React, Node.js and MongoDB to build full-stack web applications from scratch.",
        category: "Web Development",
        createdBy: "John Doe",
        numberOfLectures: 5,
        lectures: [
            {
                title: "Introduction to HTML",
                description: "Learn the basics of HTML markup language",
                lecture: {
                    public_id: "sample_public_id_1",
                    secure_url: "https://sample-video-url-1.com"
                }
            },
            {
                title: "CSS Fundamentals",
                description: "Master CSS styling and layout techniques",
                lecture: {
                    public_id: "sample_public_id_2",
                    secure_url: "https://sample-video-url-2.com"
                }
            },
            {
                title: "JavaScript Basics",
                description: "Learn JavaScript programming fundamentals",
                lecture: {
                    public_id: "sample_public_id_3",
                    secure_url: "https://sample-video-url-3.com"
                }
            },
            {
                title: "React.js Introduction",
                description: "Build modern user interfaces with React",
                lecture: {
                    public_id: "sample_public_id_4",
                    secure_url: "https://sample-video-url-4.com"
                }
            },
            {
                title: "Node.js Backend Development",
                description: "Create server-side applications with Node.js",
                lecture: {
                    public_id: "sample_public_id_5",
                    secure_url: "https://sample-video-url-5.com"
                }
            }
        ]
    },
    {
        title: "Python Programming Masterclass",
        description: "From beginner to advanced Python programming with real-world projects and applications.",
        category: "Programming",
        createdBy: "Jane Smith",
        numberOfLectures: 3,
        lectures: [
            {
                title: "Python Basics",
                description: "Introduction to Python programming language",
                lecture: {
                    public_id: "sample_public_id_6",
                    secure_url: "https://sample-video-url-6.com"
                }
            },
            {
                title: "Data Structures in Python",
                description: "Learn lists, tuples, dictionaries, and sets",
                lecture: {
                    public_id: "sample_public_id_7",
                    secure_url: "https://sample-video-url-7.com"
                }
            },
            {
                title: "Object-Oriented Programming",
                description: "Master OOP concepts in Python",
                lecture: {
                    public_id: "sample_public_id_8",
                    secure_url: "https://sample-video-url-8.com"
                }
            }
        ]
    },
    {
        title: "Digital Marketing Fundamentals",
        description: "Learn SEO, social media marketing, content marketing, and digital advertising strategies.",
        category: "Marketing",
        createdBy: "Mike Johnson",
        numberOfLectures: 4,
        lectures: [
            {
                title: "SEO Basics",
                description: "Search Engine Optimization fundamentals",
                lecture: {
                    public_id: "sample_public_id_9",
                    secure_url: "https://sample-video-url-9.com"
                }
            },
            {
                title: "Social Media Marketing",
                description: "Marketing strategies for social platforms",
                lecture: {
                    public_id: "sample_public_id_10",
                    secure_url: "https://sample-video-url-10.com"
                }
            },
            {
                title: "Content Marketing",
                description: "Creating engaging content for your audience",
                lecture: {
                    public_id: "sample_public_id_11",
                    secure_url: "https://sample-video-url-11.com"
                }
            },
            {
                title: "Google Ads",
                description: "Setting up and managing Google Ads campaigns",
                lecture: {
                    public_id: "sample_public_id_12",
                    secure_url: "https://sample-video-url-12.com"
                }
            }
        ]
    }
];

const sampleUsers = [
    {
        fullName: "Admin User",
        email: "admin@lms.com",
        password: "admin123",
        role: "ADMIN",
        subscription: {
            id: "sub_admin_001",
            status: "active"
        }
    },
    {
        fullName: "John Student",
        email: "john@example.com",
        password: "student123",
        role: "USER",
        subscription: {
            id: "sub_student_001",
            status: "active"
        }
    },
    {
        fullName: "Sarah Learner",
        email: "sarah@example.com",
        password: "student123",
        role: "USER",
        subscription: {
            id: "sub_student_002",
            status: "inactive"
        }
    },
    {
        fullName: "Mike Developer",
        email: "mike@example.com",
        password: "student123",
        role: "USER",
        subscription: {
            id: "sub_student_003",
            status: "active"
        }
    }
];

const seedData = async () => {
    try {
        await connectToDb();
        
        // Clear existing data
        await courseModel.deleteMany({});
        await userModel.deleteMany({});
        
        console.log('Cleared existing data');
        
        // Insert sample courses
        const createdCourses = await courseModel.insertMany(sampleCourses);
        console.log(`Created ${createdCourses.length} courses`);
        
        // Insert sample users
        const createdUsers = await userModel.insertMany(sampleUsers);
        console.log(`Created ${createdUsers.length} users`);
        
        console.log('Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData(); 