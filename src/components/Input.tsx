import { useState } from "react";
import EmpresaData from "./EmpresaData";
import CardSocio from "./CardSocio";
import CompanyData from "../Interface/CompanyData";
import { FaSearch } from "react-icons/fa";

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
    <div className="w-full h-screen bg-white flex flex-col">
      {/* Remove a posição fixa aqui */}
      <div className="w-full bg-white p-4 flex flex-col items-center">
        <h1 className="text-6xl text-center text-black font-extralight">
          CNPJ CONSULTA
        </h1>
        <div className="flex items-center space-x-4 w-full max-w-3xl mt-4">
          <div className="relative w-full flex items-center">
            <div className="absolute text-black left-3">
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
            className="p-2 bg-black text-white rounded"
          >
            Consultar
          </button>
        </div>
      </div>
      <div className="flex-1 pt-8 flex flex-col items-center overflow-y-auto">
        {infoData ? (
          <div className="flex flex-col items-center space-y-8 w-full max-w-4xl">
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
