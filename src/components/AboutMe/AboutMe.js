import Button from '../Button/Button';
import Title from '../Title/Title'
import './_aboutMe.scss'

export default function AboutMe() {
    return (
        <section className="aboutMe">
            <Title 
                firstTitle={"Sobre"}
                secondTitle={"Mim"}
            />
            <p className='aboutMe__text'>Estudante de programação, entusiasta de design e apaixonado por arte.</p>
            {/* <Button
                link={"https://github.com/eric-vp"}
                icon={"fa-solid fa-download"}
                text={"Currículo"}
            /> */}
        </section>
    )
}