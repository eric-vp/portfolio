import './_button.scss'

export default function Button({link, icon, text}) {
    return (
        <a href={link} target="_blank" className="button">
            <i class={icon}></i>
            <p>{text}</p>
        </a>
    )
}