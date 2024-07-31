import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A2133] text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={Logo} alt="Logo" className="w-24 h-auto mr-3" />
          <p className="text-lg font-semibold">CNPJ Consulte</p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/about" className="hover:underline">
            Sobre
          </a>
          <a href="/contact" className="hover:underline">
            Contato
          </a>
          <a href="/privacy" className="hover:underline">
            Política de Privacidade
          </a>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/HiagoSant223/TesteDesenvolvedorFrontEnd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hiago-santos-oliveira/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="text-center text-sm mt-4">
        <p>
          &copy; {new Date().getFullYear()} CNPJ Consulte. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
