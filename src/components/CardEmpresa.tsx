
function CardEmpresa({ empresa }){
    return (
        <div>
            <h3>{empresa.nome}</h3>
            <p>Qualificação: {empresa.qualificacao}</p>
        </div>
    );
}

export default CardEmpresa;