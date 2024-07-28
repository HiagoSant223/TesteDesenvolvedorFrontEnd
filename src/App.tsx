import { useState } from 'react';
import './App.css';
import CardSocio from './components/CardSocio';
import EmpresaData from './components/EmpresaData';

interface CompanyData {
  cnpj: string;
  razao_social: string;
  nome_fantasia: string;
  descricao_situacao_cadastral: string;
  data_situacao_cadastral: string;
  data_inicio_atividade: string;
  cnae_fiscal_descricao: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  municipio: string;
  uf: string;
  cep: string;
  ddd_telefone_1: string;
  qsa: { nome_socio: string; codigo_qualificacao_socio: number }[];
}

function App() {
  const [cnpj, setCnpj] = useState<string>('');
  const [infoData, setInfoData] = useState<CompanyData | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCnpj(e.target.value);
  };

  const handleInputSubmit = () => {
    if (cnpj) {
      fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
        .then(response => response.json())
        .then(data => setInfoData(data))
        .catch(error => console.error('Erro:', error));
    }
  };

  return (
    <div className='container'>
      <h1 className='text-6xl'>Consulta de CNPJ</h1>
      <div>
        <input
          type='text'
          value={cnpj}
          onChange={handleInputChange}
          placeholder='Digite o CNPJ'
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

export default App;
