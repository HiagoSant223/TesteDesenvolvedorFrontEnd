import React from 'react';
import CompanyData from '../Interface/CompanyData';

interface Props {
  data: CompanyData;
}

const EmpresaData: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-indigo-700 p-6 space-y-4 rounded-xl">
      <div className='text-white'>
        <h1 className="text-xl font-bold mb-4 text-center">Confira os dados da empresa pesquisada</h1>
      </div>
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
        <label className="font-semibold">Nome Fantasia: </label>
        <input className="bg-transparent border border-gray-300 rounded px-2 py-1 w-full mt-1" type="text" defaultValue={data.nome_fantasia} />
      </div>
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
        <label className="font-semibold">Razão Social: </label>
        <input className="bg-transparent border border-gray-300 rounded px-2 py-1 w-full mt-1" type="text" defaultValue={data.razao_social} readOnly />
      </div>
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
        <label className="font-semibold">Data de Abertura: </label>
        <input className="bg-transparent border border-gray-300 rounded px-2 py-1 w-full mt-1" type="text" defaultValue={data.data_inicio_atividade} readOnly />
      </div>
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
        <label className="font-semibold">Situação Cadastral: </label>
        <input className="bg-transparent border border-gray-300 rounded px-2 py-1 w-full mt-1" type="text" defaultValue={data.descricao_situacao_cadastral} readOnly />
      </div>
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
        <label className="font-semibold">Atividade Principal: </label>
        <input className="bg-transparent border border-gray-300 rounded px-2 py-1 w-full mt-1" type="text" defaultValue={data.cnae_fiscal_descricao} readOnly />
      </div>
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
        <label className="font-semibold">Endereço Completo: </label>
        <input className="bg-transparent border border-gray-300 rounded px-2 py-1 w-full mt-1" type="text" defaultValue={`${data.logradouro}, ${data.numero} ${data.complemento}, ${data.bairro}, ${data.municipio} - ${data.uf}, ${data.cep}`} readOnly />
      </div>
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
        <label className="font-semibold">Telefone: </label>
        <input className="bg-transparent border border-gray-300 rounded px-2 py-1 w-full mt-1" type="text" defaultValue={data.ddd_telefone_1} readOnly />
      </div>
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
        <label className="font-semibold">CNPJ: </label>
        <input className="bg-transparent border border-gray-300 rounded px-2 py-1 w-full mt-1" type="text" defaultValue={data.cnpj} readOnly />
      </div>
    </div>
  );
}

export default EmpresaData;
