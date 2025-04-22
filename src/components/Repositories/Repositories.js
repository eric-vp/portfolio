import './_repositories.scss';
import CardProject from './CardProject/CardProject';

export default function Repositories() {
    const projetos = [
        {
            "className": "first",
            "titulo": "FAVORITE MOVIES",
            "tecnologias": ["HTML, CSS e JavaScript", "LocalStorage", "Responsivo"],
            "linkProjeto": "https://favorite-movies-ten.vercel.app/",
            "linkRepositorio": "https://github.com/eric-vp/favorite-movies"
        },
        {
            "className": "second",
            "titulo": "OPTIMUS TECH",
            "tecnologias": ["React", "Styled Components", "Responsivo"],
            "linkProjeto": "https://optimus-tech-eric-vp.vercel.app/",
            "linkRepositorio": "https://github.com/eric-vp/optimus-tech"
        },
        {
            "className": "third",
            "titulo": "TO DO",
            "tecnologias": ["React", "Styled Components", "LocalStorage"],
            "linkProjeto": "https://to-do-list-snowy-theta.vercel.app/",
            "linkRepositorio": "https://github.com/eric-vp/to-do-list"
        },
        {
            "className": "fourth",
            "titulo": "CINE TAG",
            "tecnologias": ["React", "React Router", "CSS Modules"],
            "linkProjeto": "https://cinetag-lac.vercel.app/",
            "linkRepositorio": "https://github.com/eric-vp/cinetag"
        }
    ] 

    return (
        <section className='repositories'>
            {projetos.map((p, index) => (
                <CardProject
                    key={index}
                    className={p.className}
                    titulo={p.titulo}
                    tecnologias={p.tecnologias}
                    linkProjeto={p.linkProjeto}
                    linkRepositorio={p.linkRepositorio}
                />
            ))}
        </section>
    )
}