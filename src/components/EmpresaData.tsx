
interface Empresa {
  nome: string;
  qualificacao: string;
}

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
  qsa: Empresa[];
}

interface Props {
  data: CompanyData;
}

const EmpresaData: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div id="result-container">
      <div className="result-item">
        <label>Nome Fantasia:</label>
        <input type="text" defaultValue={data.nome_fantasia || ''} />
      </div>
      <div className="result-item">
        <label>Razão Social:</label>
        <input type="text" defaultValue={data.razao_social || ''} readOnly />
      </div>
      <div className="result-item">
        <label>Data de Abertura:</label>
        <input type="text" defaultValue={data.data_abertura || ''} readOnly />
      </div>
      <div className="result-item">
        <label>Situação:</label>
        <input type="text" defaultValue={data.situacao || ''} readOnly />
      </div>
      <div className="result-item">
        <label>Atividade Principal:</label>
        <input type="text" defaultValue={data.atividade_principal[0].text || ''} readOnly />
      </div>
      <div className="result-item">
        <label>Endereço Completo:</label>
        <input type="text" defaultValue={`${data.logradouro}, ${data.numero} ${data.complemento}, ${data.bairro}, ${data.municipio} - ${data.uf}, ${data.cep}` || ''} readOnly />
      </div>
      <div className="result-item">
        <label>Telefone:</label>
        <input type="text" defaultValue={data.telefone || ''} readOnly />
      </div>
      <div className="result-item">
        <label>Email:</label>
        <input type="text" defaultValue={data.email || ''} readOnly />
      </div>
      {data.qsa && data.qsa.map((partner, index) => (
        <div key={index} className="card">
          <h3>{partner.nome}</h3>
          <p>Qualificação: {partner.qualificacao}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default EmpresaData;