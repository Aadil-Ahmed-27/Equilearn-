// src/data/coursesData.js

const courses = [
    {
      id: "1",
      title: "Introduction to Artificial Intelligence",
      description: "Learn the basics of AI including neural networks and machine learning.",
      materials: [  
        { id: "1", title: "Lecture Notes Week 1" },
        { id: "2", title: "Assignment 1" },
      ],
      videos: [
        { id: "1", title: "AI Fundamentals" },
        { id: "2", title: "Neural Networks Intro" },
      ]
    },
    {
      id: "2",
      title: "Web Development Bootcamp",
      description: "Full stack development with HTML, CSS, JS, React and Node.js.",
      materials: [
        { id: "1", title: "HTML Basics" },
        { id: "2", title: "React Components" },
      ],
      videos: [
        { id: "1", title: "Building with Flexbox" },
        { id: "2", title: "React State Management" },
      ]
    }
  ];

export default courses;
  