import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaGithub, 
  FaTwitter 
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div>
      <h3 className="text-md md:text-lg font-semibold mb-4 textColor1 mt-4">
        Follow Us
      </h3>

      <ul className="flex items-center   gap-4">
        {/* Facebook */}
        <li>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3  text-gray-400 hover:text-blue-500 transition"
          >
            <FaFacebookF className="text-xl" />
          </a>
        </li>

        {/* Instagram */}
        <li>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-pink-500 transition"
          >
            <FaInstagram className="text-xl" />
          </a>
        </li>

        {/* LinkedIn */}
        <li>
          <a
            href="https://www.linkedin.com/in/kh-rehan207/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
        </li>

        {/* GitHub */}
        <li>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition"
          >
            <FaGithub className="text-xl" />
          </a>
        </li>

        {/* Twitter */}
        <li>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-sky-400 transition"
          >
            <FaTwitter className="text-xl" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
