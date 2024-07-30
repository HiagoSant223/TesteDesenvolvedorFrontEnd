import { useState } from "react";
import EmpresaData from "./EmpresaData";
import CardSocio from "./CardSocio";
import CompanyData from "../Interface/CompanyData";
import { FaSearch } from "react-icons/fa";
import Logo from "../assets/logo.jpeg";
import BackgroundImage from "../assets/fundo-input.jpg";

function Input() {
  const [cnpj, setCnpj] = useState<string>("");
  const [infoData, setInfoData] = useState<CompanyData | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCnpj(e.target.value);
  };

  const handleInputSubmit = () => {
    if (cnpj) {
      fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
        .then((response) => response.json())
        .then((data) => setInfoData(data))
        .catch((error) => console.error("Erro:", error));
    }
  };

  return (
    <div className="w-full h-full bg-white flex flex-col">
      <div
        className="w-full p-4 flex flex-col items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="w-full bg-opacity-50 p-4 flex flex-col items-center text-white font-extralight">
          <h1 className="text-4xl md:text-6xl text-center  mb-4">
            CNPJ CONSULTA
          </h1>
          <h2 className="font-bold">
            Consulte o cartão CNPJ, o comprovante de inscrição e a situação
            cadastral de uma empresa, de forma rápida e gratuita, com o
            consultor de CNPJ.
          </h2>
          <div className="flex flex-col lg:flex-row w-full max-w-4xl space-y-8 lg:space-y-0 lg:space-x-12 items-center justify-between">
            <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-md">
              <div className="relative w-full mb-4">
                <div className="absolute text-black left-3 top-1/2 transform -translate-y-1/2">
                  <FaSearch />
                </div>
                <input
                  type="text"
                  value={cnpj}
                  onChange={handleInputChange}
                  placeholder="Digite o CNPJ sem pontuação"
                  className="text-black bg-transparent border pl-10 p-2 rounded-lg w-full"
                />
              </div>
              <button
                onClick={handleInputSubmit}
                className="p-2 bg-black text-white rounded w-full"
              >
                Consultar
              </button>
            </div>

            <div className="flex-shrink-0 w-full max-w-xs">
              <img
                src={Logo}
                alt="Descrição da Imagem"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 pt-8 flex flex-col items-center overflow-auto w-full">
        {infoData ? (
          <div className="flex flex-col w-full max-w-6xl space-y-12">
            <div className="w-full">
              <EmpresaData data={infoData} />
            </div>
            <div className="w-full">
              <CardSocio partners={infoData.qsa} />
            </div>
          </div>
        ) : (
          <p className="text-black">Digite um CNPJ e clique em Consultar.</p>
        )}
      </div>
    </div>
  );
}

export default Input;
