import './_title.scss'

export default function Title({firstTitle, secondTitle}) {
    return (
        <div className='title'>
            <h2 className='title-first'>{firstTitle}</h2>
            <h2 className='title-second'>{secondTitle}</h2>
        </div>
    )
}