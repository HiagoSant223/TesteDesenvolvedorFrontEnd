import React from 'react';

interface Partner {
  nome_socio: string;
  codigo_qualificacao_socio: number;
}

interface Props {
  partners: Partner[];
}

const CardSocio: React.FC<Props> = ({ partners }) => {
  return (
    <div className='container-socio'>
      {partners.map((partner, index) => (
        <div key={index} className="card">
          <h3>{partner.nome_socio}</h3>
          <p>Qualificação: {partner.codigo_qualificacao_socio}</p>
        </div>
      ))}
    </div>
  );
}

export default CardSocio;
