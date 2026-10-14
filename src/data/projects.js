import project from "../assets/project.jpg";
import chatty from "../assets/chat-app.jpg";
export const projects = [
  {
    title: "AI Interview Prep & Resume Builder",
    description:
      "Generates a personalized interview prep report from your resume and a target job description: a match score out of 100, technical and behavioral questions, and a day-wise preparation plan. It also builds ATS-friendly resumes and keeps a history of the ones you generated.",
    tech: ["React", "Node.js", "Express", "MongoDB", "SCSS", "JWT", "Gemini API"],
    live: "https://gen-ai-resume-project-in-mern.vercel.app",
    github: "https://github.com/himanshupandey777/gen-ai-resume-project-in-mern",
     image: project,  
  },
    {
    title: "Chatty: Real-time Chat App",
    description:
      "A real-time chat app with public rooms and passcode-protected private rooms. Messages appear live with typing indicators and online users, expire after 24 hours, and can be deleted by senders, room owners, or an admin. Built with Socket.io, JWT authentication, and a phone-friendly layout.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    live: "https://chat-in-chatty-app.vercel.app/",
    github: "https://github.com/himanshupandey777/Chat-app",
    image: chatty,
  },
];