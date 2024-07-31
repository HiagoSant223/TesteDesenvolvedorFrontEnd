import React, { useState } from "react";
import CompanyData from "../Interface/CompanyData";

interface Props {
  data: CompanyData;
}

const EmpresaData: React.FC<Props> = ({ data }) => {
  const [nomeFantasia, setNomeFantasia] = useState(data.nome_fantasia);
  const [razaoSocial, setRazaoSocial] = useState(data.razao_social);
  const [dataAbertura, setDataAbertura] = useState(data.data_inicio_atividade);
  const [situacaoCadastral, setSituacaoCadastral] = useState(
    data.descricao_situacao_cadastral
  );
  const [atividadePrincipal, setAtividadePrincipal] = useState(
    data.cnae_fiscal_descricao
  );
  const [enderecoCompleto, setEnderecoCompleto] = useState(
    `${data.logradouro}, ${data.numero} ${data.complemento}, ${data.bairro}, ${data.municipio} - ${data.uf}, ${data.cep}`
  );
  const [telefone, setTelefone] = useState(data.ddd_telefone_1);
  const [cnpj, setCnpj] = useState(data.cnpj);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      nomeFantasia,
      razaoSocial,
      dataAbertura,
      situacaoCadastral,
      atividadePrincipal,
      enderecoCompleto,
      telefone,
      cnpj,
    });

    alert("Dados salvos com sucesso!");

    //window.location.reload(); Opção para recarregamento de página após submeter o formulário.
  };

  return (
    <div className="bg-[#0A2133] p-6 space-y-4 rounded-xl font-bold">
      <div className="text-white">
        <h1 className="text-xl font-bold mb-4 text-center">
          Confira os dados da empresa pesquisada
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
          <label className="font-semibold">Nome Fantasia: </label>
          <input
            className="bg-transparent border border-gray-300 rounded px-2 py-1 w-full mt-1"
            type="text"
            value={nomeFantasia}
            onChange={(e) => setNomeFantasia(e.target.value)}
          />
        </div>
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
          <label className="font-semibold">Razão Social: </label>
          <input
            className="bg-transparent border border-gray-300 rounded px-2 py-1 w-full mt-1"
            type="text"
            value={razaoSocial}
            onChange={(e) => setRazaoSocial(e.target.value)}
          />
        </div>
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
          <label className="font-semibold">Data de Abertura: </label>
          <input
            className="bg-transparent border border-gray-300 rounded px-2 py-1 w-full mt-1"
            type="text"
            value={dataAbertura}
            onChange={(e) => setDataAbertura(e.target.value)}
          />
        </div>
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
          <label className="font-semibold">Situação Cadastral: </label>
          <input
            className="bg-transparent border border-gray-300 rounded px-2 py-1 w-full mt-1"
            type="text"
            value={situacaoCadastral}
            onChange={(e) => setSituacaoCadastral(e.target.value)}
          />
        </div>
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
          <label className="font-semibold">Atividade Principal: </label>
          <input
            className="bg-transparent border border-gray-300 rounded px-2 py-1 w-full mt-1"
            type="text"
            value={atividadePrincipal}
            onChange={(e) => setAtividadePrincipal(e.target.value)}
          />
        </div>
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
          <label className="font-semibold">Endereço Completo: </label>
          <input
            className="bg-transparent border border-gray-300 rounded px-2 py-1 w-full mt-1"
            type="text"
            value={enderecoCompleto}
            onChange={(e) => setEnderecoCompleto(e.target.value)}
          />
        </div>
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
          <label className="font-semibold">Telefone: </label>
          <input
            className="bg-transparent border border-gray-300 rounded px-2 py-1 w-full mt-1"
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
          <label className="font-semibold">CNPJ: </label>
          <input
            className="bg-transparent border border-gray-300 rounded px-2 py-1 w-full mt-1"
            type="text"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-white text-black px-4 py-2 rounded mt-4 hover:bg-yellow-300"
          >
            Salvar dados
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmpresaData;
