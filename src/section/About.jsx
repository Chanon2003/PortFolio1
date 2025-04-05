const About = () => {
  return (
    <div className="p-6">
      <p className="text-lg mb-4">
        สวัสดีครับ, ผมชื่อ <strong>ชานน เลียน</strong> อายุ 22 ปี
        กำลังมองหางานในสายงาน <strong>Web Application Develop</strong>.  
        แม้ว่าผมจะไม่มีประสบการณ์ทำงานมาก่อน แต่ผมได้เรียนรู้และฝึกฝนการเขียน <strong>code</strong> ด้วยตัวเอง
        โดยมีความชื่นชอบในด้านคอมพิวเตอร์และงานที่มี <strong>learning curve</strong> สูง 
        หรือที่สามารถสร้างรายได้ขึ้นอยู่กับทักษะของตัวเอง
        นอกจากนี้, ผมเป็นคนที่ชอบเรียนรู้สิ่งใหม่ๆ ตลอดเวลาและไม่หยุดที่จะพัฒนาตัวเอง

      </p>
      <p className="text-lg">
        I'm Chanon Lien, 22 years old, currently looking for a job in web application development. 
        Although I don't have prior work experience, I have self-taught coding due to my passion for computers 
        and a preference for jobs that have a high learning curve, where income depends on skill development.
        Additionally, I am someone who loves learning new things constantly and never stops developing myself.
      </p>
      
      <h3 className="text-xl font-semibold mt-6 mb-2">Technologies & Tools I use:</h3>
      <ul className="list-disc pl-6">
        <li>React.js</li>
        <li>Tailwind CSS</li>
        <li>Redux</li>
        <li>Node.js</li>
        <li>Postman</li>
        <li>Prisma ORM</li>
        <li>SQL Basics</li>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        <li>Git & GitHub</li>
      </ul>
    </div>
  );
};

export default About;
