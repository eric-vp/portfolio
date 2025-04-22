export default function CardProject({className, titulo, tecnologias, linkProjeto, linkRepositorio}) {
    return (
        <div className={className}>
            <div className="hover">
                <span className="hover__title">{titulo}</span>
                <ul>
                    {tecnologias.map((tecnologia, index) => (
                        <li key={index}>{tecnologia}</li>
                    ))}
                </ul>
                <div className="links">
                    <a href={linkProjeto} target="_blank" rel="noopener noreferrer">
                        <span>Link do projeto</span>
                    </a>
                    <a href={linkRepositorio} target="_blank" rel="noopener noreferrer">
                        <span>Link do repositório</span>
                    </a>
                </div>
            </div>
        </div>
    )
}