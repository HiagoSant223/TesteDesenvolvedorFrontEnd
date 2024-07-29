import React from 'react';
import CompanyData from '../Interface/CompanyData';

interface Props {
  data: CompanyData;
}

const EmpresaData: React.FC<Props> = ({ data }) => {
  return (
    <div className="">
      <div className='text-center '>
        <h1>Confira os dados da empresa pesquisada</h1>
      </div>
      <div className="result-item text-center">
        <label>Nome Fantasia: </label>
        <input className='bg-transparent' type="text" defaultValue={data.nome_fantasia} />
      </div>
      <div className="result-item text-center">
        <label>Razão Social: </label>
        <input className='bg-transparent' type="text" defaultValue={data.razao_social} readOnly />
      </div>
      <div className="result-item text-center">
        <label>Data de Abertura: </label>
        <input className='bg-transparent' type="text" defaultValue={data.data_inicio_atividade} readOnly />
      </div>
      <div className="result-item text-center">
        <label>Situação Cadastral: </label>
        <input className='bg-transparent' type="text" defaultValue={data.descricao_situacao_cadastral} readOnly />
      </div>
      <div className="result-item text-center">
        <label>Atividade Principal: </label>
        <input className='bg-transparent' type="text" defaultValue={data.cnae_fiscal_descricao} readOnly />
      </div>
      <div className="result-item text-center">
        <label>Endereço Completo: </label>
        <input className='bg-transparent' type="text" defaultValue={`${data.logradouro}, ${data.numero} ${data.complemento}, ${data.bairro}, ${data.municipio} - ${data.uf}, ${data.cep}`} readOnly />
      </div>
      <div className="result-item text-center">
        <label>Telefone: </label>
        <input className='bg-transparent' type="text" defaultValue={data.ddd_telefone_1} readOnly />
      </div>
      <div className="result-item text-center">
        <label>CNPJ: </label>
        <input className='bg-transparent' type="text" defaultValue={data.cnpj} readOnly />
      </div>
    </div>
  );
  
}

export default EmpresaData;
