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
    <div className="container mx-auto flex flex-col items-center mt-8">
      <div className="titulo mb-4">
        <h1 className="text-6xl text-center text-white">CNPJ CONSULTA</h1>
      </div>
      <div className="flex items-center space-x-4 w-3/5">
        <div className="relative w-full">
          <div className="absolute rounded-full inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className="text-white">
              <FaSearch />
            </div>
          </div>
          <input
            type="text"
            value={cnpj}
            onChange={handleInputChange}
            placeholder="Digite o CNPJ"
            className="text-white pl-10 p-2 border-0 rounded-lg bg-transparent shadow-input-focus ring-offset-input-focus w-full"
          />
        </div>
        <button
          onClick={handleInputSubmit}
          className="p-2 bg-white text-black rounded"
        >
          Consultar
        </button>
      </div>
      {infoData && (
        <div className="mt-8">
          <EmpresaData data={infoData} />
          <CardSocio partners={infoData.qsa} />
        </div>
      )}
    </div>
  );
}

export default Input;
