import Title from '../Title/Title';
import './_contact.scss';

export default function Contact() {
    const links = [
        {
            link: "https://www.linkedin.com/in/eric-vieira-palavro/",
            icon: "fa-brands fa-linkedin",
            text: "/in/eric-vieira-palavro/"
        },
        {
            link: "https://github.com/eric-vp",
            icon: "fa-brands fa-github",
            text: "/eric-vp"
        },
        {
            link: "mailto:ericvpalavro@gmail.com",
            icon: "fa-solid fa-envelope",
            text: "ericvpalavro@gmail.com"
        },
        {
            link: "tel:+5554992567547",
            icon: "fa-solid fa-phone",
            text: "(54) 99256-7547"
        }
    ]

    return (
        <section className='contact'>
            <Title 
                firstTitle={"Links para"}
                secondTitle={"Contato"}
            />
            <ul className='contact__links'>
                {links.map((link) => {
                        return (
                            <li className='link'>
                                <a href={link.link} target="_blank"><i class={link.icon}></i></a>
                                <span>{link.text}</span>
                            </li>
                        )
                })}
            </ul>
        </section>
    )
}