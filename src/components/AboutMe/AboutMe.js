import Button from '../Button/Button';
import Title from '../Title/Title'
import './_aboutMe.scss'
import curriculo from './curriculo/curriculo.pdf'

export default function AboutMe() {
    return (
        <section className="aboutMe">
            <Title 
                firstTitle={"Sobre"}
                secondTitle={"Mim"}
            />
            <p className='aboutMe__text'>Estudante de programação, entusiasta de design e apaixonado por arte. Trabalho com Java, JavaScript, React, Node.js e SQL para criar aplicações web modernas e escaláveis.</p>
            <Button
                link={curriculo}
                icon={"fa-regular fa-file"}
                text={"Baixar currículo"}
                download={"Currículo Eric Vieira Palavro"}
            />
        </section>
    )
}