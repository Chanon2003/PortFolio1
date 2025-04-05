import { FaGithub } from "react-icons/fa";

const Contact1 = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Contact Me</h2>
      
      <div className="space-y-3 text-base text-gray-800">
        <div>
          <span className="font-medium">Gmail: </span>
          <a
            href="mailto:ch.chanonlienwork@gmail.com"
            className="text-blue-600 hover:underline"
          >
            ch.chanonlienwork@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-medium">GitHub: </span>
          <a
            href="https://github.com/Chanon2003/"
            className="text-blue-600 hover:underline flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={18} />
            github.com/Chanon2003
          </a>
        </div>

        <div>
          <span className="font-medium">Mobile: </span>
          <span className="text-gray-700">096-805-4317</span>
        </div>
      </div>
    </div>
  );
};

export default Contact1