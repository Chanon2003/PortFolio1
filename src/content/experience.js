import { faGithub } from '@fortawesome/free-brands-svg-icons'
import picep1 from '../assets/ep1.png'
import ep1 from '../assets/video/ep1.mp4'



export const data=[
  {
    date:"1",
    title:"FullStack-Ecommerce-Penguin87",
    link:ep1,
    materials:[
      {type:faGithub,link:'https://github.com/Chanon2003/Penguin87-fullstack-Ecom'}
    ],
    description:[
      "Ecommerce Project ReactJs+NodeJs database:postgresql prismaORM ",
      "มีระบบ จ่ายตัง adminDashboard สั่งorder register_login,role:admin:user"
    ],
    skills:[
      ["React","Tailwind","Redux"],
      ["NodeJs","postman"]
    ],
    picture:picep1,
    tool:[
      ['หน้าบ้านใช้ : react-router-dom ในการเพิ่มหน้า'],
      ['หลังบ้านใช้ : jwt,bcrypt hashpassword,helmet,express json,cors,multer,xss defend,otplimit']
    ],

    
  },

]