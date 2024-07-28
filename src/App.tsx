import { useState } from 'react';
import './App.css'
import CardSocio from './components/CardSocio';

interface CompanyData {
  nome_fantasia: string;
  razao_social: string;
  data_abertura: string;
  situacao: string;
  atividade_principal: { text: string }[];
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  municipio: string;
  uf: string;
  cep: string;
  telefone: string;
  email: string;
  qsa: { nome: string; qualificacao: string }[];
}

function App() {

  const [cnpj, setCnpj] = useState<string>('');
  const [infoData, setInfoData] = useState<CompanyData | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCnpj(e.target.value);
  };

  const handleInputSubmit = () => {
    if (cnpj){
      fetch('https://brasilapi.com.br/api/cnpj/v1/{{CNPJ}}')
      .then(response => response.json())
      .then(data => setInfoData(data))
      .catch(error => console.error('Erro:', error));
    }
  }
  
  return (
    <>
    <div className='cotainer'>
      <h1 className='text-6xl'>Consulte de CNPJ</h1>
      <div>
        <input
        type='number'
        value={cnpj}
        onChange={handleInputChange}
        placeholder='Degite o CNPJ'></input>
        <button onClick={handleInputSubmit}>Consultar</button>
      </div>
      {infoData && <CardSocio data={infoData} />}
    </div>
    </>
  )
}

export default App
