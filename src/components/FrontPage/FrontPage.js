import Button from '../Button/Button';
import Title from '../Title/Title';
import './_frontPage.scss';

export default function FrontPage() {
    return (
        <section className='frontPage'>
            <Title 
                firstTitle={"Eric"}
                secondTitle={"Palavro"}
            />
            <div class="buttons">
                <Button
                    link={"https://www.linkedin.com/in/eric-vieira-palavro/"}
                    icon={"fa-brands fa-linkedin"}
                    text={"LINKEDIN"}
                />
                <Button
                    link={"https://github.com/eric-vp"}
                    icon={"fa-brands fa-github"}
                    text={"GITHUB"}
                />
            </div>
        </section>
    )
}