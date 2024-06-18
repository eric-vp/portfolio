import Title from '../Title/Title';
import './_mainTechnologies.scss';

export default function MainTechnologies() {
    const technologies = [
        { icon: 'fa-brands fa-html5',
            text: 'HTML'
        },
        {
            icon: 'fa-brands fa-css3-alt',
            text: 'CSS'
        },
        {
            icon: 'fa-brands fa-js',
            text: 'JavaScript'
        },
        {
            icon: 'fa-brands fa-sass',
            text: 'Sass'
        },
        {
            icon: 'fa-brands fa-react',
            text: 'React'
        },
        {
            icon: 'fa-brands fa-node-js',
            text: 'NodeJs'
        },
        {
            icon: 'fa-brands fa-java',
            text: 'Java'
        },
        {
            icon: 'fa-solid fa-database',
            text: 'SQL'
        }
    ]

    return (
        <section className='mainTechnologies'>
            <Title
                firstTitle={"Principais"}
                secondTitle={"Tecnologias"}
            />
            <ul>                
                {technologies.map((technologie) => {
                    return(
                        <li>
                            <i class={technologie.icon}></i>
                            <p>{technologie.text}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}