import { useState } from "react";
import EmpresaData from "./EmpresaData";
import CardSocio from "./CardSocio";

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
    <div className="container">
      <h1 className="text-6xl">Consulta de CNPJ</h1>
      <div>
        <input
          type="text"
          value={cnpj}
          onChange={handleInputChange}
          placeholder="Digite o CNPJ"
        />
        <button onClick={handleInputSubmit}>Consultar</button>
      </div>
      {infoData && (
        <>
          <EmpresaData data={infoData} />
          <CardSocio partners={infoData.qsa} />
        </>
      )}
    </div>
  );
}

export default Input;
