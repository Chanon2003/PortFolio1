import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAppStore } from '@fortawesome/free-brands-svg-icons'
import picep1 from '../assets/ep1.png'
import picep2 from '../assets/penguinapp.png'
import ep1 from '../assets/video/ep1.mp4'



export const data = [
  {
    date: "1",
    title: "FullStack-Ecommerce-Penguin87",
    link: ep1,
    materials: [
      { type: faGithub, link: 'https://github.com/Chanon2003/Penguin87-fullstack-Ecom' },
      { type: faAppStore, link: 'https://penguin87ecom-web01.vercel.app/' },
    ],
    description: [
      "Ecommerce Project ReactJs+NodeJs database:postgresql prismaORM ",
      "มีระบบ จ่ายตัง adminDashboard สั่งorder register_login,role:admin:user"
    ],
    skills: [
      ["React", "Tailwind", "Redux"],
      ["NodeJs", "express"]
    ],
    picture: picep1,
    tool: [
      ['หน้าบ้านใช้ : react-router-dom ในการเพิ่มหน้า'],
      ['หลังบ้านใช้ : jwt,bcrypt hashpassword,helmet,express json,cors,multer,xss defend,otplimit'],
    ],
  },
  {
    date: "2",
    title: "Penguin-AppChat-DEMO1!",
    link: "",
    materials: [
      { type: faGithub, link: 'https://github.com/Chanon2003/PenGuin-AppChat-api-1' },
      { type: faGithub, link: 'https://github.com/Chanon2003/PenGuin-AppChat-web-1' },
      { type: faAppStore, link: 'https://pen-guin-app-chat-web-1.vercel.app/' },
    ],
    description: [
      "DEMO APPCHAT REALTIME โดยใช้ socket.io",
      "มีระบบ login และ การส่งข้อความ การแนบไฟล์ การดาวโหลด การสร้างกลุ่มแชท"
    ],
    skills: [
      ["React", "Tailwind", "Zustand"],
      ["NodeJs", "express"]
    ],
    picture: picep2,
    tool: [
      ['Frontend Framework: Vite + React State Management: Zustand'],
      ['Styling: Tailwind CSS, shadcn / ui Networking & Tools: Axios, .env, Socket.IO'],
      ['🛠️ Backend: • Framework: Node.js + Express.js • Tools: Postman, Multer, CORS, Helmet, Cloudinary, Socket.IO • Auth: JWT, Cookie • Database: MongoDB (via Mongoose)'],
      ],
  }

]