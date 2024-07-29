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
    <div className="w-full h-screen bg-[#20303C] flex flex-col">
      <div className="fixed top-0 left-0 w-full bg-[#20303C] p-4 flex flex-col items-center z-10">
        <h1 className="text-6xl text-center text-white font-extralight">
          CNPJ CONSULTA
        </h1>
        <div className="flex items-center space-x-4 w-full max-w-3xl mt-4">
          <div className="relative w-full flex items-center">
            <div className="absolute text-white left-3">
              <FaSearch />
            </div>
            <input
              type="text"
              value={cnpj}
              onChange={handleInputChange}
              placeholder="Digite o CNPJ sem pontuação"
              className="text-white bg-transparent border pl-10 p-2 rounded-lg w-full"
            />
          </div>
          <button
            onClick={handleInputSubmit}
            className="p-2 bg-white text-black rounded"
          >
            Consultar
          </button>
        </div>
      </div>
      <div className="pt-32 flex-1 overflow-y-auto">
        {infoData && (
          <div className="mt-8">
            <div className="">
              <EmpresaData data={infoData} />
            </div>
            <div className="p-4 ">
              <CardSocio partners={infoData.qsa} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
