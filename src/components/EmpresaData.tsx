import React from 'react';

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
}

interface Props {
  data: CompanyData;
}

const EmpresaData: React.FC<Props> = ({ data }) => {
  return (
    <div id="result-container">
      <div className="result-item">
        <label>CNPJ:</label>
        <input type="text" defaultValue={data.cnpj} readOnly />
      </div>
      <div className="result-item">
        <label>Razão Social:</label>
        <input type="text" defaultValue={data.razao_social} readOnly />
      </div>
      <div className="result-item">
        <label>Nome Fantasia:</label>
        <input type="text" defaultValue={data.nome_fantasia} />
      </div>
      <div className="result-item">
        <label>Situação Cadastral:</label>
        <input type="text" defaultValue={data.descricao_situacao_cadastral} readOnly />
      </div>
      <div className="result-item">
        <label>Data de Situação Cadastral:</label>
        <input type="text" defaultValue={data.data_situacao_cadastral} readOnly />
      </div>
      <div className="result-item">
        <label>Data de Início de Atividade:</label>
        <input type="text" defaultValue={data.data_inicio_atividade} readOnly />
      </div>
      <div className="result-item">
        <label>Atividade Principal:</label>
        <input type="text" defaultValue={data.cnae_fiscal_descricao} readOnly />
      </div>
      <div className="result-item">
        <label>Endereço Completo:</label>
        <input type="text" defaultValue={`${data.logradouro}, ${data.numero} ${data.complemento}, ${data.bairro}, ${data.municipio} - ${data.uf}, ${data.cep}`} readOnly />
      </div>
      <div className="result-item">
        <label>Telefone:</label>
        <input type="text" defaultValue={data.ddd_telefone_1} readOnly />
      </div>
    </div>
  );
}

export default EmpresaData;
