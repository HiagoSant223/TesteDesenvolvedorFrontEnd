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
    <div className='bg-[#0A2133] p-6 space-y-4 rounded-xl'>
      <div className='text-white'>
        <h1 className='text-xl font-bold mb-4 text-center'>Confira os sócios da empresa</h1>
      </div>
      {partners.map((partner, index) => (
        <div key={index} className='bg-gray-100 border border-gray-300 rounded-lg p-4'>
          <div>
            <label className='font-semibold'>Nome do Sócio: </label>
            <input
              className='bg-transparent border border-gray-300 rounded px-2 py-1 w-full mt-1'
              type='text'
              defaultValue={partner.nome_socio}
              readOnly
            />
          </div>
          <div className='mt-2'>
            <label className='font-semibold'>Qualificação: </label>
            <input
              className='bg-transparent border border-gray-300 rounded px-2 py-1 w-full mt-1'
              type='text'
              defaultValue={partner.codigo_qualificacao_socio.toString()}
              readOnly
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardSocio;
