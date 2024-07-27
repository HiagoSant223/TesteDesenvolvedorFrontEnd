import { useState } from 'react';
import './App.css'
import CardSocio from './components/CardSocio';

function App() {

  const [cnpj, setCnpj] = useState();
  const [infoData, setInfoData] = useState(null);

  const handleInputChange = (e) => {
    setCnpj(e.taget.value);
  }

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
