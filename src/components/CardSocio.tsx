function CardSocio({ data }) {
  return (
    <>
      <div>
        <label>Nome Fantasia:</label>
        <input type="text" defaultValue={data.nome_fantasia || ""} />
      </div>
      <div>
        <label> Razão Social: </label>
        <input type="text" defaultValue={data.razao_social || ""} readOnly />
      </div>
      <div>
        <label>Data de Abertura: </label>
        <input type="text" defaultValue={data.data_abertura || ""} readOnly />
      </div>
      <div className="result-item">
        <label>Atividade Principal:</label>
        <input
          type="text"
          defaultValue={data.atividade_principal[0].text || ""}
          readOnly
        />
      </div>
      <div className="result-item">
        <label>Endereço Completo:</label>
        <input
          type="text"
          defaultValue={
            `${data.logradouro}, ${data.numero} ${data.complemento}, ${data.bairro}, ${data.municipio} - ${data.uf}, ${data.cep}` ||
            ""
          }
          readOnly
        />
      </div>
      <div className="result-item">
        <label>Telefone:</label>
        <input type="text" defaultValue={data.telefone || ""} readOnly />
      </div>
      <div className="result-item">
        <label>Email:</label>
        <input type="text" defaultValue={data.email || ""} readOnly />
      </div>
      {data.qsa &&
        data.qsa.map((empresa, index) => (
          <CardEmpresa key={index} empresa={empresa} />
        ))}
    </>
  );
}
export default CardSocio;
